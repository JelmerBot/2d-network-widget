import {
  forceManyBody,
  forceLink,
  forceSimulation,
  forceCenter,
  forceCollide,
} from "d3-force";

// --- Network state
let nodes = null;
let edges = null;
let edgesWaiting = false;

// --- Force state
let baseRepulsion = 0;
let repulsionPower = 0;
let repulsionNormalisation = 1;

// --- Simulation state
let totalIterations = 0;
let iteration = 0;

// --- Simulation
const repulsionForce = forceManyBody();
const linkForce = forceLink();
const centerForce = forceCenter();
const collideForce = forceCollide();
// The simulation stops automatically when minAlpha is reached.
const layoutSim = forceSimulation()
  .force("charge", repulsionForce)
  .force("link", linkForce)
  .force("center", centerForce)
  .force("collide", collideForce)
  .stop()
  .on("tick", tick_function);

function tick_function() {
  self.postMessage({
    progress: iteration <= 1 ? 0 : iteration / totalIterations,
    nodes: nodes,
  });
  --iteration;
}

function updateNodes(newNodes) {
  // Completely new network
  if (!nodes || nodes.length !== newNodes.length) {
    // Assign nodes
    nodes = newNodes.map((r, idx) => {
      return { id: idx, r: r };
    });
    // Update simulation
    layoutSim.nodes(nodes);
    if (edgesWaiting) {
      linkForce.links(edges);
      edgesWaiting = false;
    }
    // Recompute repulsion normalization
    repulsionNormalisation = Math.pow(nodes.length, repulsionPower);
    repulsionForce.strength(-baseRepulsion / repulsionNormalisation);
  } else {
    // Update radius
    newNodes.forEach((r, idx) => {
      nodes[idx].r = r;
    });
  }
  // Update collide force radius (only updated when called explicitly)
  collideForce.radius((d) => d.r);
}

function updateEdges(newEdges) {
  if (!edges || edges.length !== newEdges.length) {
    edges = newEdges;
    if (nodes) {
      linkForce.links(edges);
    } else {
      edgesWaiting = true;
    }
  }
}

function updateSettings(props) {
  baseRepulsion = +props.repulsionStrength;
  repulsionPower = +props.repulsionNormalization;
  repulsionNormalisation = nodes ? Math.pow(nodes.length, repulsionPower) : 1;
  repulsionForce.strength(-baseRepulsion / repulsionNormalisation);
  linkForce.distance((l) => props.linkDistanceScale * l.distance);
  linkForce.strength(props.linkStrength);
  centerForce.strength(props.centerStrength);
  repulsionForce.distanceMax(props.repulsionLimit);
}

function dragNode(idx, { x, y }) {
  nodes[idx].fx = x;
  nodes[idx].fy = y;
}

function runSimulation(alpha) {
  if (!nodes || !edges) {
    return;
  }
  // Reset the alpha value
  layoutSim.alpha(alpha);

  // Compute the number of iterations
  const minAlpha = layoutSim.alphaMin();
  const decay = layoutSim.alphaDecay();
  const newIterations = Math.round(
    Math.log(minAlpha / alpha) / Math.log(1 - decay)
  );
  totalIterations = Math.max(iteration, newIterations);
  iteration = totalIterations;

  // Restart the simulation
  layoutSim.restart();
  if (alpha === 0) {
    iteration = 0;
    setTimeout(tick_function, 0);
  }
}

self.onmessage = (event) => {
  const message = event.data;
  switch (message.command) {
    case "nodes":
      updateNodes(message.nodes);
      runSimulation(message.alpha);
      break;
    case "edges":
      updateEdges(message.edges);
      runSimulation(message.alpha);
      break;
    case "settings":
      updateSettings(message.settings);
      runSimulation(message.alpha);
      break;
    case "drag":
      dragNode(message.nodeIdx, message.pos);
      runSimulation(message.alpha);
      break;
    case "enabled":
      runSimulation(message.alpha);
      break;
  }
};
