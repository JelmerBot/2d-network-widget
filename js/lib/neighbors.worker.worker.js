/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/network/neighbors.worker.js ***!
  \*****************************************/
self.onmessage = (message) => {
  const edges = message.data.edges;

  self.postMessage({
    neighbours: edges.reduce((agg, l) => {
      agg[l.target] = [l.source, ...(agg[l.target] || [])];
      agg[l.source] = [l.target, ...(agg[l.source] || [])];
      return agg;
    }, {}),
  });
};

/******/ })()
;
//# sourceMappingURL=neighbors.worker.worker.js.map