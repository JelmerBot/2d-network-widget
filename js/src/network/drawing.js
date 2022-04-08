import { applyOpacity } from "../menu/color.js";
import { rgb } from "d3-color";

// --- Drawing functions
export function drawFrame({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  hoverNodes,
  selectedNodes,
  selectionPath,
  progress,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawNodes(
    ctx,
    nodes,
    nodePositions,
    nodeColorMapping,
    hoverNodes,
    selectedNodes
  );
  drawSelectionPath(ctx, selectionPath);
  drawProgress(ctx, progress);
}

export function drawFinal({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  hoverNodes,
  selectedNodes,
  selectionPath,
  edges,
  edgeMapping,
  transform,
}) {
  clear(canvas, ctx);
  translate(canvas, ctx, transform);
  drawEdges(ctx, nodePositions, edges, edgeMapping);
  drawNodes(
    ctx,
    nodes,
    nodePositions,
    nodeColorMapping,
    hoverNodes,
    selectedNodes
  );
  drawSelectionPath(ctx, selectionPath);
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

function drawNodes(
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  hoverNodes,
  selectedNodes
) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0.1;
  nodePositions.forEach((node, idx) => {
    const baseColor =
      selectedNodes.size == 0 || selectedNodes.has(idx)
        ? nodeColorMapping.color(nodes[idx])
        : "#ccd7d7";
    const opacityColor =
      hoverNodes.size == 0 || hoverNodes.has(idx)
        ? applyOpacity(baseColor, 1)
        : applyOpacity(baseColor, 0.3);
    ctx.fillStyle = opacityColor;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  });
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

function drawSelectionPath(ctx, selectionPath) {
  if (selectionPath.length > 2) {
    ctx.lineWidth = 0;
    ctx.fillStyle = applyOpacity(rgb(27, 131, 233), 0.15);
    ctx.beginPath();
    ctx.moveTo(selectionPath[0][0], selectionPath[1][1]);
    selectionPath.slice(1).forEach((point) => {
      ctx.lineTo(point[0], point[1]);
    });
    ctx.fill();
  }
}
