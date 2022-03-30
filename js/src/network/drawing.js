import { rgb } from "d3-color";

// --- Drawing functions
export function drawFrame({
  canvas,
  ctx,
  nodes,
  nodeColorMapping,
  nodeSizeMapping,
  nodePositions,
  progress,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawNodes(ctx, nodes, nodeColorMapping, nodeSizeMapping, nodePositions);
  drawProgress(ctx, progress);
}

export function drawFinal({
  canvas,
  ctx,
  nodes,
  edges,
  nodeColorMapping,
  nodeSizeMapping,
  nodePositions,
  edgeMapping,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawEdges(ctx, nodePositions, edges, edgeMapping);
  drawNodes(ctx, nodes, nodeColorMapping, nodeSizeMapping, nodePositions);
}

// --- Helpers
function translate(canvas, ctx, transform) {
  ctx.translate(transform.x, transform.y);
  ctx.scale(transform.k, transform.k);
  ctx.translate(canvas.width / 2, canvas.height / 2);
}

function clear(canvas, ctx) {
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function _draw_circle(ctx, node, pos, nodeSizeMapping) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, nodeSizeMapping.size(node), 0, 2 * Math.PI);
  ctx.fill();
}

function drawNodes(
  ctx,
  nodes,
  nodeColorMapping,
  nodeSizeMapping,
  nodePositions
) {
  ctx.strokeStyle = "black";
  if (nodeColorMapping.title) {
    nodes.forEach((node, idx) => {
      ctx.fillStyle = nodeColorMapping.color(node);
      _draw_circle(ctx, nodes[idx], nodePositions[idx], nodeSizeMapping);
    });
  } else {
    ctx.fillStyle = nodeColorMapping.color;
    nodes.forEach((_, idx) => {
      _draw_circle(ctx, nodes[idx], nodePositions[idx], nodeSizeMapping);
    });
  }
}

function drawEdges(ctx, nodes, edges, edgeMapping) {
  ctx.strokeStyle = edgeMapping.color;
  ctx.lineWidth = edgeMapping.width;
  ctx.beginPath();
  edges.forEach((e) => {
    const source = nodes[e.source];
    const target = nodes[e.target];
    ctx.moveTo(source.x, source.y);
    ctx.lineTo(target.x, target.y);
  });
  ctx.stroke();
}

function drawProgress(ctx, progress) {
  ctx.resetTransform();
  ctx.fillStyle = rgb(27, 131, 233);
  ctx.beginPath();
  ctx.fillRect(0, 0, progress, 2);
}
