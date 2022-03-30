import { applyOpacity } from "../menu/color.js";
import { rgb } from "d3-color";

// --- Drawing functions
export function drawFrame({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  activeNodeIds,
  progress,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawNodes(ctx, nodes, nodePositions, nodeColorMapping, activeNodeIds);
  drawProgress(ctx, progress);
}

export function drawFinal({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  activeNodeIds,
  edges,
  edgeMapping,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawEdges(ctx, nodePositions, edges, edgeMapping);
  drawNodes(ctx, nodes, nodePositions, nodeColorMapping, activeNodeIds);
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

function _draw_circle(ctx, node) {
  ctx.beginPath();
  ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawNodes(ctx, nodes, nodePositions, nodeColorMapping, activeNodeIds) {
  ctx.strokeStyle = "black";
  if (activeNodeIds.size === 0) {
    nodes.forEach((node, idx) => {
      ctx.fillStyle = nodeColorMapping.color(node);
      _draw_circle(ctx, nodePositions[idx]);
    });
  } else {
    nodes.forEach((node, idx) => {
      ctx.fillStyle = applyOpacity(
        nodeColorMapping.color(node),
        !activeNodeIds.has(idx) ? 0.3 : 1
      );
      _draw_circle(ctx, nodePositions[idx]);
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
