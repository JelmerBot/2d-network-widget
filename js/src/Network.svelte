<script>
  import { scaleLinear } from "d3-scale";
  import { drawFrame, drawFinal } from "./network/drawing";
  import { interaction } from "./network/interaction";
  import { simulation } from "./simulation/simulation";

  // --- Export props
  export let nodes = [];
  export let edges = [];
  export let nodeColorMapping = null;
  export let nodeSizeMapping = null;
  export let edgeMapping = null;
  export let viewScale = 1;

  // --- Construct canvas
  const canvas = document.createElement("canvas");
  canvas.width = 700;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  // --- Progress bar scale
  const x_scale = scaleLinear().domain([1, 0]).range([0, canvas.width]);

  // --- Simulation
  let nodePositions = nodes.map((_) => {
    return { x: 0, y: 0 };
  });
  let progress = 1;
  simulation.onTick((message) => {
    nodePositions = message.nodes;
    progress = message.progress;
  });

  // --- interactions
  const interact = interaction(canvas);
  const transform = interact.transform;
  $: viewScale = $transform.k;

  // --- Animation
  // Request renders when stuff changes.
  $: if (nodeColorMapping && nodeSizeMapping && edgeMapping) {
    const draw = progress === 0 ? drawFinal : drawFrame;
    window.requestAnimationFrame(() =>
      draw({
        canvas,
        ctx,
        nodes,
        edges,
        nodeColorMapping,
        nodeSizeMapping,
        nodePositions,
        edgeMapping,
        transform: $transform,
        progress: x_scale(progress),
      })
    );
  }
</script>

<div use:interact style="width:{canvas.width}px;" />

<style>
  div {
    background-color: #ddd;
  }
</style>
