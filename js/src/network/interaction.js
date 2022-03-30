import { readable } from "svelte/store";
import { select } from "d3-selection";
import { simulation } from "../simulation/simulation";
import { drag, dragDisable } from "../deps/drag";
import { zoom, zoomIdentity } from "../deps/zoom";

export function interaction(canvas) {
  // ---  Configure Zoom
  const { width, height } = canvas;
  const _zoom = zoom().extent([
    [0, 0],
    [width, height],
  ]);
  let _transform = { x: 0, y: 0, k: 1, invert: ([x, y]) => [x, y] };
  const _transformStore = readable(_transform, function start(set) {
    _zoom.on("zoom", (event) => {
      _transform = event.transform;
      set(event.transform);
    });
  });

  // --- Configure Drag
  const alpha = 0.3;
  let activeNode = -1;
  let waiting = false;

  // Transform mouse coordinates to canvas coordinates
  function _invertStart(event) {
    const { x, y } = canvas.getBoundingClientRect();
    const world = _transform.invert([event.x - x, event.y - y]);
    return [world[0] - width / 2, world[1] - height / 2];
  }

  function _invertMove(event) {
    const world = _transform.invert([event.x, event.y]);
    return [world[0] - width / 2, world[1] - height / 2];
  }

  const _drag = drag()
    .container(canvas)
    .on("drag", (event) => {
      if (activeNode > -1) {
        const [x, y] = _invertMove(event);
        simulation.dragNode(activeNode, { x, y }, alpha);
      }
    })
    .on("end", (_) => {
      if (activeNode > -1) {
        simulation.dragNode(activeNode, { x: null, y: null }, alpha);
        activeNode = -1;
      }
    });

  // --- Event handlers
  function _touchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function _filter(event) {
    return (
      ((!event.ctrlKey && !event.shiftKey) || event.type === "wheel") &&
      !event.button
    );
  }

  function _switch(event, zoomfun, dragfun) {
    if (activeNode === -1) {
      zoomfun(event);
    } else {
      dragfun(event);
    }
  }

  function reset(event) {
    if (!_filter(event)) {
      return;
    }
    select(this)
      .transition()
      .duration(250)
      .call(_zoom.transform.bind(this), zoomIdentity);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function wheeled(event) {
    if (!_filter(event)) {
      return;
    }
    _zoom.wheeled.bind(this)(event);
  }

  function mousedowned(event) {
    if (!_filter(event)) {
      return;
    }
    const that = this;
    const [x, y] = _invertStart(event);
    simulation.nodeAt({ x, y }, _transform.k).then((nodeIdx) => {
      activeNode = nodeIdx;
      waiting = false;
      _switch(
        event,
        _zoom.mousedowned.bind(that),
        _drag.mousedowned.bind(that)
      );
    });
    waiting = true;
    dragDisable(event.view);
    event.stopImmediatePropagation();
  }

  function touchstarted(event) {
    if (!_filter(event)) {
      return;
    }
    const [x, y] = _invertStart(event);
    const that = this;
    simulation.nodeAt({ x, y }, _transform.k).then((nodeIdx) => {
      activeNode = nodeIdx;
      waiting = false;
      _switch(
        event,
        _zoom.touchstarted.bind(that),
        _drag.touchstarted.bind(that)
      );
    });
    waiting = true;
    event.stopImmediatePropagation();
  }

  function touchmoved(event) {
    if (!_filter(event) || waiting) {
      return;
    }
    _switch(event, _zoom.touchmoved.bind(this), _drag.touchmoved.bind(this));
  }

  function touchended(event) {
    if (!_filter(event)) {
      return;
    }
    _switch(event, _zoom.touchended.bind(this), _drag.touchended.bind(this));
  }

  // --- Action
  function action(el) {
    // Append the canvas
    el.appendChild(canvas);

    // Initialize the interactions
    select(canvas)
      .call(_drag)
      .call(_zoom)
      .on("wheel.interact", wheeled, { passive: false })
      .on("dblclick.interact", reset)
      .on("mousedown.interact", mousedowned)
      .filter(_touchable)
      .on("touchstart.interact", touchstarted)
      .on("touchmove.interact", touchmoved, { passive: false })
      .on("touchend.interact touchcancel.drag", touchended)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  action.transform = _transformStore;
  return action;
}
