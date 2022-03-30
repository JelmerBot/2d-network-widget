import { worker } from "../util/worker.js";
import Worker from "./neighbors.worker.js";

let _num_waiting = 0;
let _reject = () => {};
let _resolve = () => {};
const _worker = worker(new Worker(), (message) => {
  if (_num_waiting-- == 1) {
    _resolve(message.neighbours);
  }
});

export const neighbors = {
  edges(edges) {
    _reject("");
    _num_waiting += 1;

    _worker({
      edges,
    });

    return new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
  },
  destroy() {
    _worker.terminate();
  },
};
