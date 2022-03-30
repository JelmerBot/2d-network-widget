import { worker } from "../util/worker.js";
import Worker from "./layout.worker.js";

// --- Internal State
let _enabled = true;
let _callback = () => {};
const _worker = worker(new Worker(), (message) => _callback(message));

export const simulation = {
  nodes(nodes, alpha) {
    _worker({
      command: "nodes",
      nodes,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  edges(edges, alpha) {
    _worker({
      command: "edges",
      edges,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  onTick(callback) {
    _callback = callback;
    return this;
  },
  settings(settings, alpha) {
    _worker({
      command: "settings",
      settings,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  enabled(enabled, alpha) {
    _enabled = enabled;
    _worker({
      command: "enabled",
      alpha: _enabled ? alpha : 0,
    });
  },
  dragNode(idx, { x, y }, alpha) {
    _worker({
      command: "drag",
      nodeIdx: idx,
      pos: { x, y },
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  destroy() {
    _worker.terminate();
  },
};
