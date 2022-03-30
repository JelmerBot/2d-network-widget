<script>
  import { scaleLinear } from "d3-scale";
  import { Delaunay } from "d3-delaunay";
  import { select } from "d3-selection";
  import { drawFrame, drawFinal } from "./network/drawing";
  import { simulation } from "./simulation/simulation";
  import { neighbors } from "./network/neighbors";
  import { drag, dragDisable } from "./deps/drag";
  import { zoom, zoomIdentity } from "./deps/zoom";
  import App from "./App.svelte";

  // --- Export props
  export let nodes = [];
  export let edges = [];
  export let nodeColorMapping = null;
  export let edgeMapping = null;
  export let viewScale = 1;

  // --- Construct canvas
  const canvas = document.createElement("canvas");
  canvas.width = 700;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  // --- Progress bar
  let progress = 1;
  const x_scale = scaleLinear().domain([1, 0]).range([0, canvas.width]);

  // --- Node encoding
  const nodePositions = nodes.map((_) => {
    return {
      x: 0,
      y: 0,
      r: 0,
    };
  });
  simulation.onTick((message) => {
    progress = message.progress;
    message.nodes.forEach((n, idx) => {
      nodePositions[idx] = n;
    });
  });

  // --- Neighbours
  let neighborMap = null;
  $: neighbors.edges(edges).then((map) => (neighborMap = map));
  $: activeNodeIds = new Set(
    neighborMap && mouseNode >= 0 ? [mouseNode, ...neighborMap[mouseNode]] : []
  );

  // --- Zoom interaction
  let dragging = false;
  let transform = { x: 0, y: 0, k: 1, invert: ([x, y]) => [x, y] };
  $: viewScale = transform.k;
  const _zoom = zoom()
    .extent([
      [0, 0],
      [canvas.width, canvas.height],
    ])
    .on("start", (_) => (dragging = true))
    .on("zoom", (event) => (transform = event.transform))
    .on("end", (_) => (dragging = false));

  // --- Hover interaction
  let mousePos = [0, 0];
  let mouseNode = -1;
  $: delaunay = Delaunay.from(
    nodePositions,
    (d) => d.x,
    (d) => d.y
  );
  $: mouseNode = nodeAtMouse(
    mousePos,
    transform,
    nodePositions,
    delaunay,
    dragging
  );

  function nodeAtMouse(mouse, transform, encoding, delaunay, dragging) {
    if (dragging) {
      return mouseNode;
    }
    const { x: offset_x, y: offset_y } = canvas.getBoundingClientRect();
    const [mouse_x, mouse_y] = mouse;
    const worldPos = transform.invert([mouse_x - offset_x, mouse_y - offset_y]);
    const [view_x, view_y] = [
      worldPos[0] - canvas.width / 2,
      worldPos[1] - canvas.height / 2,
    ];
    const idx = delaunay.find(view_x, view_y, Math.max(mouseNode, 0));
    const node = encoding[idx];
    const dist = Math.sqrt((node.x - view_x) ** 2 + (node.y - view_y) ** 2);
    if (dist < transform.k * node.r) {
      return idx;
    }
    return -1;
  }

  // --- Drag interaction
  const alpha = 0.3;
  const _drag = drag()
    .container(canvas)
    .on("start", (_) => {
      dragging = true;
    })
    .on("drag", (event) => {
      const { x: mouse_x, y: mouse_y } = event;
      const worldPos = transform.invert([mouse_x, mouse_y]);
      const [view_x, view_y] = [
        worldPos[0] - canvas.width / 2,
        worldPos[1] - canvas.height / 2,
      ];
      simulation.dragNode(mouseNode, { x: view_x, y: view_y }, alpha);
    })
    .on("end", (_) => {
      simulation.dragNode(mouseNode, { x: null, y: null }, alpha);
      dragging = false;
    });

  // --- Event handles
  function interact(element) {
    function _filter(event) {
      return (!event.ctrlKey || event.type === "wheel") && !event.button;
    }

    function mousedowned(event) {
      if (!_filter(event)) {
        return;
      }
      if (mouseNode >= 0) {
        _drag.mousedowned.bind(this)(event);
      } else {
        _zoom.mousedowned.bind(this)(event);
      }
      dragDisable(event.view);
      event.stopImmediatePropagation();
    }

    function mousemoved(event) {
      if (!_filter(event)) {
        return;
      }
      mousePos = [event.x, event.y];
    }

    function wheeled(event) {
      if (!_filter(event)) {
        return;
      }
      _zoom.wheeled.bind(this)(event);
    }

    function dblclicked(event) {
      if (!_filter(event)) {
        return;
      }
      select(this)
        .transition()
        .duration(250)
        .call(_zoom.transform, zoomIdentity);
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    element.appendChild(canvas);
    select(canvas)
      .call(_drag)
      .call(_zoom)
      .on("wheel", wheeled, { passive: false })
      .on("mousedown", mousedowned)
      .on("mousemove", mousemoved)
      .on("dblclick", dblclicked);
  }

  // --- Animation
  // Request renders when stuff changes.
  $: if (edgeMapping) {
    const draw = progress === 0 ? drawFinal : drawFrame;
    window.requestAnimationFrame(() =>
      draw({
        canvas,
        ctx,
        nodes,
        nodePositions,
        nodeColorMapping,
        activeNodeIds,
        edges,
        edgeMapping,
        transform,
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
