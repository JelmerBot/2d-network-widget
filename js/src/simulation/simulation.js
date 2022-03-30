import { worker } from "./worker.js";
import Worker from "./layout.worker.js";

// --- Internal State
let _enabled = true;
let _promise = null;
let _timeout = null;
let _resolve = () => {};
let _callback = () => {};
const _worker = worker(new Worker(), (message) => {
  switch (message.command) {
    case "tick":
      _callback(message);
      break;
    case "nodeAt":
      if (_timeout) {
        _resolve(message.nodeIdx);
        clearInterval(_timeout);
        _timeout = null;
      }
      break;
  }
});

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
  async nodeAt({ x, y }, scale) {
    if (_promise) {
      await _promise;
    }
    _promise = new Promise((resolve, reject) => {
      _resolve = resolve;
    });
    _worker({
      command: "nodeAt",
      pos: { x, y },
      scale,
    });
    _timeout = setTimeout(() => {
      _resolve(-1);
      _timeout = null;
    }, 1000);
    return _promise;
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
