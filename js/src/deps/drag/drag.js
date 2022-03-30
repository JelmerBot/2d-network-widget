import { dispatch } from "d3-dispatch";
import { select, pointer } from "d3-selection";
import { yesdrag } from "./nodrag.js";
import noevent, { nonpassivecapture, nopropagation } from "./noevent.js";
import constant from "./constant.js";
import DragEvent from "./event.js";

// Ignore right-click, since that should open the context menu.
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}

function defaultContainer() {
  return this.parentNode;
}

export default function () {
  var subject = defaultSubject,
    container = defaultContainer,
    gestures = {},
    listeners = dispatch("start", "drag", "end"),
    active = 0,
    mousedownx,
    mousedowny,
    mousemoving,
    touchending,
    clickDistance2 = 0;

  function drag(selection) {}

  drag.mousedowned = function (event, d) {
    if (touchending) return;
    var gesture = beforestart(
      this,
      container.call(this, event, d),
      event,
      d,
      "mouse"
    );
    if (!gesture) return;
    select(event.view)
      .on("mousemove.drag", mousemoved, nonpassivecapture)
      .on("mouseup.drag", mouseupped, nonpassivecapture);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  };

  function mousemoved(event) {
    noevent(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx,
        dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }

  drag.touchstarted = function (event, d) {
    var touches = event.changedTouches,
      c = container.call(this, event, d),
      n = touches.length,
      i,
      gesture;

    for (i = 0; i < n; ++i) {
      if (
        (gesture = beforestart(
          this,
          c,
          event,
          d,
          touches[i].identifier,
          touches[i]
        ))
      ) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  };

  drag.touchmoved = function (event) {
    var touches = event.changedTouches,
      n = touches.length,
      i,
      gesture;

    for (i = 0; i < n; ++i) {
      if ((gesture = gestures[touches[i].identifier])) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  };

  drag.touchended = function (event) {
    var touches = event.changedTouches,
      n = touches.length,
      i,
      gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if ((gesture = gestures[touches[i].identifier])) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  };

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
      p = pointer(touch || event, container),
      dx,
      dy,
      s;

    if (
      (s = subject.call(
        that,
        new DragEvent("beforestart", {
          sourceEvent: event,
          target: drag,
          identifier,
          active,
          x: p[0],
          y: p[1],
          dx: 0,
          dy: 0,
          dispatch,
        }),
        d
      )) == null
    )
      return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p,
        n;
      switch (type) {
        case "start":
          (gestures[identifier] = gesture), (n = active++);
          break;
        case "end":
          delete gestures[identifier], --active; // falls through
        case "drag":
          (p = pointer(touch || event, container)), (n = active);
          break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch,
        }),
        d
      );
    };
  }

  drag.subject = function (_) {
    return arguments.length
      ? ((subject = typeof _ === "function" ? _ : constant(_)), drag)
      : subject;
  };

  drag.container = function (_) {
    return arguments.length
      ? ((container = typeof _ === "function" ? _ : constant(_)), drag)
      : container;
  };

  drag.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function (_) {
    return arguments.length
      ? ((clickDistance2 = (_ = +_) * _), drag)
      : Math.sqrt(clickDistance2);
  };

  return drag;
}
