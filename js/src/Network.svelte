<script>
  import classifyPoint from "robust-point-in-polygon";
  import { scaleLinear } from "d3-scale";
  import { Delaunay } from "d3-delaunay";
  import { select } from "d3-selection";
  import { simulation } from "./simulation/simulation";
  import { drawFrame, drawFinal } from "./network/drawing";
  import { neighbors } from "./network/neighbors";
  import { drag, dragDisable } from "./network/drag";
  import { zoom, zoomIdentity } from "./network/zoom";

  // --- Export props
  export let nodes = [];
  export let edges = [];
  export let nodeColorMapping;
  export let edgeMapping;
  export let viewScale = 1;
  export let selectedNodes;

  // --- Construct canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 700;
  canvas.height = 700;

  // --- Progress bar
  let progress = 1;
  const x_scale = scaleLinear().domain([1, 0]).range([0, canvas.width]);

  // --- Node encoding
  let nodePositions = nodes.map((_) => {
    return { x: 0, y: 0, r: 0 };
  });
  simulation.onTick((message) => {
    progress = message.progress;
    nodePositions = message.nodes;
  });

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
  let neighborMap = null;
  $: neighbors.edges(edges).then((map) => (neighborMap = map));
  $: delaunay = Delaunay.from(
    nodePositions,
    (d) => d.x,
    (d) => d.y
  );
  $: if (!dragging) {
    mouseNode = nodeAtMouse(mousePos, transform, nodePositions, delaunay);
  }
  $: hoverNodes = new Set(
    neighborMap && mouseNode >= 0 ? [mouseNode, ...neighborMap[mouseNode]] : []
  );

  function invertTransform(mouse_x, mouse_y, transform) {
    const worldPos = transform.invert([mouse_x, mouse_y]);
    return [worldPos[0] - canvas.width / 2, worldPos[1] - canvas.height / 2];
  }

  function nodeAtMouse(mouse, transform, encoding, delaunay) {
    const { x: offset_x, y: offset_y } = canvas.getBoundingClientRect();
    const [view_x, view_y] = invertTransform(
      mouse[0] - offset_x,
      mouse[1] - offset_y,
      transform
    );
    const idx = delaunay.find(view_x, view_y, Math.max(mouseNode, 0));
    const node = encoding[idx];
    const dist = Math.sqrt((node.x - view_x) ** 2 + (node.y - view_y) ** 2);
    if (dist < node.r) {
      return idx;
    }
    return -1;
  }

  // --- Drag interaction
  const alpha = 0.3;
  const _drag = drag()
    .container(canvas)
    .on("start", (_) => (dragging = true))
    .on("drag", (event) => {
      const [view_x, view_y] = invertTransform(event.x, event.y, transform);
      simulation.dragNode(mouseNode, { x: view_x, y: view_y }, alpha);
    })
    .on("end", (_) => {
      simulation.dragNode(mouseNode, { x: null, y: null }, alpha);
      dragging = false;
    });

  // --- Lasso Selection
  const closingDistance = 100;
  let selectionPath = [];
  let selectionOrigin = [0, 0];

  const _lasso = drag()
    .container(canvas)
    .on("start", (event) => {
      dragging = true;
      selectionPath = [];
      selectionOrigin = [event.x, event.y];
      selectedNodes = [];
    })
    .on("drag", (event) => {
      const [view_x, view_y] = invertTransform(event.x, event.y, transform);
      selectionPath = [...selectionPath, [view_x, view_y]];
    })
    .on("end", (event) => {
      const distance = Math.sqrt(
        (selectionOrigin[0] - event.x) ** 2 +
          (selectionOrigin[1] - event.y) ** 2
      );
      if (selectionPath.length > 2 && distance <= closingDistance) {
        selectedNodes = nodePositions.reduce((agg, node, idx) => {
          if (classifyPoint(selectionPath, [node.x, node.y]) < 0) {
            agg.push(idx);
          }
          return agg;
        }, []);
      }
      selectionPath = [];
      dragging = false;
    });

  // --- Event handles action
  function interact(element) {
    function _filter(event) {
      return (!event.ctrlKey || event.type === "wheel") && !event.button;
    }

    function mousedowned(event) {
      if (!_filter(event)) {
        return;
      }
      if (event.shiftKey) {
        _lasso.mousedowned.bind(this)(event);
      } else if (mouseNode >= 0) {
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
  $: if (edgeMapping) {
    const draw = progress === 0 ? drawFinal : drawFrame;
    window.requestAnimationFrame(() =>
      draw({
        canvas,
        ctx,
        nodes,
        nodePositions,
        nodeColorMapping,
        hoverNodes,
        selectedNodes: new Set(selectedNodes),
        selectionPath,
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
