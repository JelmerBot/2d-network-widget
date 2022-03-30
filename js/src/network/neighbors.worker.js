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
