define(() => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bisectCenter": () => (/* binding */ bisectCenter),
/* harmony export */   "bisectLeft": () => (/* binding */ bisectLeft),
/* harmony export */   "bisectRight": () => (/* binding */ bisectRight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/d3-array/src/bisector.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-array/src/number.js");




const ascendingBisect = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).center;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
}


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ max)
/* harmony export */ });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mean)
/* harmony export */ });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ min)
/* harmony export */ });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "numbers": () => (/* binding */ numbers)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quantile),
/* harmony export */   "quantileSorted": () => (/* binding */ quantileSorted)
/* harmony export */ });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max.js */ "./node_modules/d3-array/src/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/d3-array/src/quickselect.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-array/src/number.js");





function quantile(values, p, valueof) {
  values = Float64Array.from((0,_number_js__WEBPACK_IMPORTED_MODULE_0__.numbers)(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return (0,_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values);
  if (p >= 1) return (0,_max_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = (0,_max_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_quickselect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, i0).subarray(0, i0 + 1)),
      value1 = (0,_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quickselect)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tickIncrement": () => (/* binding */ tickIncrement),
/* harmony export */   "tickStep": () => (/* binding */ tickStep)
/* harmony export */ });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-axis/src/array.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/array.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slice": () => (/* binding */ slice)
/* harmony export */ });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-axis/src/axis.js":
/*!******************************************!*\
  !*** ./node_modules/d3-axis/src/axis.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axisBottom": () => (/* binding */ axisBottom),
/* harmony export */   "axisLeft": () => (/* binding */ axisLeft),
/* harmony export */   "axisRight": () => (/* binding */ axisRight),
/* harmony export */   "axisTop": () => (/* binding */ axisTop)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-axis/src/array.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = _array_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : _array_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/d3-axis/src/identity.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-axis/src/identity.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultLocale),
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "formatPrefix": () => (/* binding */ formatPrefix)
/* harmony export */ });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formatDecimalParts": () => (/* binding */ formatDecimalParts)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "prefixExponent": () => (/* binding */ prefixExponent)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatSpecifier": () => (/* binding */ FormatSpecifier),
/* harmony export */   "default": () => (/* binding */ formatSpecifier)
/* harmony export */ });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/d3-format/src/formatRounded.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => (0,_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p),
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"] : (0,_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"] : (0,_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_4__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = (0,_formatTrim_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step) {
  return Math.max(0, -(0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
}


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
}


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/node_modules/d3-color/src/color.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-interpolate/node_modules/d3-color/src/color.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-interpolate/node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/node_modules/d3-color/src/cubehelix.js":
/*!****************************************************************************!*\
  !*** ./node_modules/d3-interpolate/node_modules/d3-color/src/cubehelix.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cubehelix": () => (/* binding */ Cubehelix),
/* harmony export */   "default": () => (/* binding */ cubehelix)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-interpolate/node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-interpolate/node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_0__.Rgb)) o = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Cubehelix, cubehelix, (0,_define_js__WEBPACK_IMPORTED_MODULE_2__.extend)(_color_js__WEBPACK_IMPORTED_MODULE_0__.Color, {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_0__.brighter : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_0__.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_0__.darker : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_0__.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_0__.Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-interpolate/node_modules/d3-color/src/define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-interpolate/node_modules/d3-color/src/define.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/node_modules/d3-color/src/math.js":
/*!***********************************************************************!*\
  !*** ./node_modules/d3-interpolate/node_modules/d3-color/src/math.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "radians": () => (/* binding */ radians)
/* harmony export */ });
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "genericArray": () => (/* binding */ genericArray)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return ((0,_numberArray_js__WEBPACK_IMPORTED_MODULE_0__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basis": () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nogamma),
/* harmony export */   "gamma": () => (/* binding */ gamma),
/* harmony export */   "hue": () => (/* binding */ hue)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubehelixLong": () => (/* binding */ cubehelixLong),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-interpolate/node_modules/d3-color/src/cubehelix.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_0__["default"])(start)).h, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_0__["default"])(end)).h),
          s = (0,_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = (0,_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__.hue));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isNumberArray": () => (/* binding */ isNumberArray)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ piecewise)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = _value_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rgbBasis": () => (/* binding */ rgbBasis),
/* harmony export */   "rgbBasisClosed": () => (/* binding */ rgbBasisClosed)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-interpolate/node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolateTransformCss": () => (/* binding */ interpolateTransformCss),
/* harmony export */   "interpolateTransformSvg": () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseSvg, ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCss": () => (/* binding */ parseCss),
/* harmony export */   "parseSvg": () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-interpolate/node_modules/d3-color/src/color.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : t === "string" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_4__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__["default"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__.genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js":
/*!****************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/cubehelix.js":
/*!********************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/node_modules/d3-color/src/cubehelix.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cubehelix": () => (/* binding */ Cubehelix),
/* harmony export */   "default": () => (/* binding */ cubehelix)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_0__.Rgb)) o = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Cubehelix, cubehelix, (0,_define_js__WEBPACK_IMPORTED_MODULE_2__.extend)(_color_js__WEBPACK_IMPORTED_MODULE_0__.Color, {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_0__.brighter : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_0__.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_0__.darker : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_0__.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_0__.Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/math.js":
/*!***************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/node_modules/d3-color/src/math.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "radians": () => (/* binding */ radians)
/* harmony export */ });
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Accent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Accent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Dark2.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Dark2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Paired.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Paired.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel1.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Pastel1.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel2.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Pastel2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set1.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Set1.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set2.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Set2.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set3.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Set3.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Tableau10.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/Tableau10.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/categorical/category10.js":
/*!***********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/categorical/category10.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/colors.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/colors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/BrBG.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PRGn.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/PRGn.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PiYG.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/PiYG.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PuOr.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/PuOr.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdBu.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/RdBu.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdGy.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/RdGy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/diverging/Spectral.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/diverging/Spectral.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/ramp.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/ramp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scheme => (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.rgbBasis)(scheme[scheme.length - 1]));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb("
      + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67)))))))
      + ")";
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cool": () => (/* binding */ cool),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "warm": () => (/* binding */ warm)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/cubehelix.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/cubehelix.js");



var warm = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.cubehelixLong)((0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(-100, 0.75, 0.35), (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(80, 1.50, 0.8));

var cool = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.cubehelixLong)((0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(260, 0.75, 0.35), (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(80, 1.50, 0.8));

var c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])();

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js");


var c = (0,d3_color__WEBPACK_IMPORTED_MODULE_0__.rgb)(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb("
      + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66)))))))
      + ")";
}


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "inferno": () => (/* binding */ inferno),
/* harmony export */   "magma": () => (/* binding */ magma),
/* harmony export */   "plasma": () => (/* binding */ plasma)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ramp((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp((0,_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greens.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Greens.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greys.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Greys.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js":
/*!**************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Purples.js":
/*!**************************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Purples.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Reds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/d3-scale-chromatic/src/sequential-single/Reds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "scheme": () => (/* binding */ scheme)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors.js */ "./node_modules/d3-scale-chromatic/src/colors.js");
/* harmony import */ var _ramp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ramp.js */ "./node_modules/d3-scale-chromatic/src/ramp.js");



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(_colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scheme));


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ constants)
/* harmony export */ });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "default": () => (/* binding */ continuous),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transformer": () => (/* binding */ transformer)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__["default"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ diverging),
/* harmony export */   "divergingLog": () => (/* binding */ divergingLog),
/* harmony export */   "divergingPow": () => (/* binding */ divergingPow),
/* harmony export */   "divergingSqrt": () => (/* binding */ divergingSqrt),
/* harmony export */   "divergingSymlog": () => (/* binding */ divergingSymlog)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = (0,_linear_js__WEBPACK_IMPORTED_MODULE_4__.linearish)(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity));

  scale.copy = function() {
    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, diverging());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);
}

function divergingLog() {
  var scale = (0,_log_js__WEBPACK_IMPORTED_MODULE_7__.loggish)(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = (0,_symlog_js__WEBPACK_IMPORTED_MODULE_8__.symlogish)(transformer());

  scale.copy = function() {
    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);
}

function divergingPow() {
  var scale = (0,_pow_js__WEBPACK_IMPORTED_MODULE_9__.powish)(transformer());

  scale.copy = function() {
    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initInterpolator": () => (/* binding */ initInterpolator),
/* harmony export */   "initRange": () => (/* binding */ initRange)
/* harmony export */ });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ linear),
/* harmony export */   "linearish": () => (/* binding */ linearish)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return (0,_tickFormat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.tickIncrement)(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__.copy)(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_3__.initRange.apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ log),
/* harmony export */   "loggish": () => (/* binding */ loggish)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(u, v, n);
    } else {
      z = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.format)(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain((0,_nice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_3__.transformer)()).domain([1, 10]);

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_3__.copy)(scale, log()).base(scale.base());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_4__.initRange.apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nice)
/* harmony export */ });
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ number)
/* harmony export */ });
function number(x) {
  return +x;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ordinal),
/* harmony export */   "implicit": () => (/* binding */ implicit)
/* harmony export */ });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_0__.initRange.apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pow),
/* harmony export */   "powish": () => (/* binding */ powish),
/* harmony export */   "sqrt": () => (/* binding */ sqrt)
/* harmony export */ });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity, _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity, _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_1__.linearish)(scale);
}

function pow() {
  var scale = powish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.transformer)());

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.copy)(scale, pow()).exponent(scale.exponent());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "default": () => (/* binding */ sequential),
/* harmony export */   "sequentialLog": () => (/* binding */ sequentialLog),
/* harmony export */   "sequentialPow": () => (/* binding */ sequentialPow),
/* harmony export */   "sequentialSqrt": () => (/* binding */ sequentialSqrt),
/* harmony export */   "sequentialSymlog": () => (/* binding */ sequentialSymlog)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity,
      clamp = false,
      unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = (0,_linear_js__WEBPACK_IMPORTED_MODULE_3__.linearish)(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);
}

function sequentialLog() {
  var scale = (0,_log_js__WEBPACK_IMPORTED_MODULE_5__.loggish)(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = (0,_symlog_js__WEBPACK_IMPORTED_MODULE_6__.symlogish)(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);
}

function sequentialPow() {
  var scale = (0,_pow_js__WEBPACK_IMPORTED_MODULE_7__.powish)(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ symlog),
/* harmony export */   "symlogish": () => (/* binding */ symlogish)
/* harmony export */ });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_0__.linearish)(scale);
}

function symlog() {
  var scale = symlogish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_1__.transformer)());

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_1__.copy)(scale, symlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tickFormat)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/precisionFixed.js");



function tickFormat(start, stop, count, specifier) {
  var step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.tickStep)(start, stop, count),
      precision;
  specifier = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__["default"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_2__["default"])(step, value))) specifier.precision = precision;
      return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__.formatPrefix)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_4__["default"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_5__["default"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__.format)(specifier);
}


/***/ }),

/***/ "./node_modules/robust-orientation/orientation.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-orientation/orientation.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var twoProduct = __webpack_require__(/*! two-product */ "./node_modules/two-product/two-product.js")
var robustSum = __webpack_require__(/*! robust-sum */ "./node_modules/robust-sum/robust-sum.js")
var robustScale = __webpack_require__(/*! robust-scale */ "./node_modules/robust-scale/robust-scale.js")
var robustSubtract = __webpack_require__(/*! robust-subtract */ "./node_modules/robust-subtract/robust-diff.js")

var NUM_EXPAND = 5

var EPSILON     = 1.1102230246251565e-16
var ERRBOUND3   = (3.0 + 16.0 * EPSILON) * EPSILON
var ERRBOUND4   = (7.0 + 56.0 * EPSILON) * EPSILON

function orientation_3(sum, prod, scale, sub) {
  return function orientation3Exact(m0, m1, m2) {
    var p = sum(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])))
    var n = sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0]))
    var d = sub(p, n)
    return d[d.length - 1]
  }
}

function orientation_4(sum, prod, scale, sub) {
  return function orientation4Exact(m0, m1, m2, m3) {
    var p = sum(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))))
    var n = sum(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))))
    var d = sub(p, n)
    return d[d.length - 1]
  }
}

function orientation_5(sum, prod, scale, sub) {
  return function orientation5Exact(m0, m1, m2, m3, m4) {
    var p = sum(sum(sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m2[2]), sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), -m3[2]), scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m4[2]))), m1[3]), sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m3[2]), scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m4[2]))), -m2[3]), scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m4[2]))), m3[3]))), sum(scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), -m4[3]), sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m3[2]), scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m3[2]), scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), m4[2]))), -m1[3])))), sum(sum(scale(sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m4[2]))), m3[3]), sum(scale(sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))), -m4[3]), scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), m0[3]))), sum(scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), -m1[3]), sum(scale(sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))), m2[3]), scale(sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))), -m3[3])))))
    var n = sum(sum(sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m2[2]), sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), -m3[2]), scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m3[2]), scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), m4[2]))), -m2[3])), sum(scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m4[2]))), m3[3]), scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), -m4[3]))), sum(sum(scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m4[2]))), -m1[3])), sum(scale(sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m4[2]))), m2[3]), scale(sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))), -m4[3]))))
    var d = sub(p, n)
    return d[d.length - 1]
  }
}

function orientation(n) {
  var fn =
    n === 3 ? orientation_3 :
    n === 4 ? orientation_4 : orientation_5

  return fn(robustSum, twoProduct, robustScale, robustSubtract)
}

var orientation3Exact = orientation(3)
var orientation4Exact = orientation(4)

var CACHED = [
  function orientation0() { return 0 },
  function orientation1() { return 0 },
  function orientation2(a, b) {
    return b[0] - a[0]
  },
  function orientation3(a, b, c) {
    var l = (a[1] - c[1]) * (b[0] - c[0])
    var r = (a[0] - c[0]) * (b[1] - c[1])
    var det = l - r
    var s
    if(l > 0) {
      if(r <= 0) {
        return det
      } else {
        s = l + r
      }
    } else if(l < 0) {
      if(r >= 0) {
        return det
      } else {
        s = -(l + r)
      }
    } else {
      return det
    }
    var tol = ERRBOUND3 * s
    if(det >= tol || det <= -tol) {
      return det
    }
    return orientation3Exact(a, b, c)
  },
  function orientation4(a,b,c,d) {
    var adx = a[0] - d[0]
    var bdx = b[0] - d[0]
    var cdx = c[0] - d[0]
    var ady = a[1] - d[1]
    var bdy = b[1] - d[1]
    var cdy = c[1] - d[1]
    var adz = a[2] - d[2]
    var bdz = b[2] - d[2]
    var cdz = c[2] - d[2]
    var bdxcdy = bdx * cdy
    var cdxbdy = cdx * bdy
    var cdxady = cdx * ady
    var adxcdy = adx * cdy
    var adxbdy = adx * bdy
    var bdxady = bdx * ady
    var det = adz * (bdxcdy - cdxbdy)
            + bdz * (cdxady - adxcdy)
            + cdz * (adxbdy - bdxady)
    var permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz)
                  + (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz)
                  + (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz)
    var tol = ERRBOUND4 * permanent
    if ((det > tol) || (-det > tol)) {
      return det
    }
    return orientation4Exact(a,b,c,d)
  }
]

function slowOrient(args) {
  var proc = CACHED[args.length]
  if(!proc) {
    proc = CACHED[args.length] = orientation(args.length)
  }
  return proc.apply(undefined, args)
}

function proc (slow, o0, o1, o2, o3, o4, o5) {
  return function getOrientation(a0, a1, a2, a3, a4) {
    switch (arguments.length) {
      case 0:
      case 1:
        return 0;
      case 2:
        return o2(a0, a1)
      case 3:
        return o3(a0, a1, a2)
      case 4:
        return o4(a0, a1, a2, a3)
      case 5:
        return o5(a0, a1, a2, a3, a4)
    }

    var s = new Array(arguments.length)
    for (var i = 0; i < arguments.length; ++i) {
      s[i] = arguments[i]
    }
    return slow(s)
  }
}

function generateOrientationProc() {
  while(CACHED.length <= NUM_EXPAND) {
    CACHED.push(orientation(CACHED.length))
  }
  module.exports = proc.apply(undefined, [slowOrient].concat(CACHED))
  for(var i=0; i<=NUM_EXPAND; ++i) {
    module.exports[i] = CACHED[i]
  }
}

generateOrientationProc()

/***/ }),

/***/ "./node_modules/robust-point-in-polygon/robust-pnp.js":
/*!************************************************************!*\
  !*** ./node_modules/robust-point-in-polygon/robust-pnp.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = robustPointInPolygon

var orient = __webpack_require__(/*! robust-orientation */ "./node_modules/robust-orientation/orientation.js")

function robustPointInPolygon(vs, point) {
  var x = point[0]
  var y = point[1]
  var n = vs.length
  var inside = 1
  var lim = n
  for(var i = 0, j = n-1; i<lim; j=i++) {
    var a = vs[i]
    var b = vs[j]
    var yi = a[1]
    var yj = b[1]
    if(yj < yi) {
      if(yj < y && y < yi) {
        var s = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          inside ^= (0 < s)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yi < yk) {
          var s = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            inside ^= (0 < s)|0
          }
        }
      }
    } else if(yi < yj) {
      if(yi < y && y < yj) {
        var s = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          inside ^= (s < 0)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yk < yi) {
          var s = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            inside ^= (s < 0)|0
          }
        }
      }
    } else if(y === yi) {
      var x0 = Math.min(a[0], b[0])
      var x1 = Math.max(a[0], b[0])
      if(i === 0) {
        while(j>0) {
          var k = (j+n-1)%n
          var p = vs[k]
          if(p[1] !== y) {
            break
          }
          var px = p[0]
          x0 = Math.min(x0, px)
          x1 = Math.max(x1, px)
          j = k
        }
        if(j === 0) {
          if(x0 <= x && x <= x1) {
            return 0
          }
          return 1 
        }
        lim = j+1
      }
      var y0 = vs[(j+n-1)%n][1]
      while(i+1<lim) {
        var p = vs[i+1]
        if(p[1] !== y) {
          break
        }
        var px = p[0]
        x0 = Math.min(x0, px)
        x1 = Math.max(x1, px)
        i += 1
      }
      if(x0 <= x && x <= x1) {
        return 0
      }
      var y1 = vs[(i+1)%n][1]
      if(x < x0 && (y0 < y !== y1 < y)) {
        inside ^= 1
      }
    }
  }
  return 2 * inside - 1
}

/***/ }),

/***/ "./node_modules/robust-scale/robust-scale.js":
/*!***************************************************!*\
  !*** ./node_modules/robust-scale/robust-scale.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var twoProduct = __webpack_require__(/*! two-product */ "./node_modules/two-product/two-product.js")
var twoSum = __webpack_require__(/*! two-sum */ "./node_modules/two-sum/two-sum.js")

module.exports = scaleLinearExpansion

function scaleLinearExpansion(e, scale) {
  var n = e.length
  if(n === 1) {
    var ts = twoProduct(e[0], scale)
    if(ts[0]) {
      return ts
    }
    return [ ts[1] ]
  }
  var g = new Array(2 * n)
  var q = [0.1, 0.1]
  var t = [0.1, 0.1]
  var count = 0
  twoProduct(e[0], scale, q)
  if(q[0]) {
    g[count++] = q[0]
  }
  for(var i=1; i<n; ++i) {
    twoProduct(e[i], scale, t)
    var pq = q[1]
    twoSum(pq, t[0], q)
    if(q[0]) {
      g[count++] = q[0]
    }
    var a = t[1]
    var b = q[1]
    var x = a + b
    var bv = x - a
    var y = b - bv
    q[1] = x
    if(y) {
      g[count++] = y
    }
  }
  if(q[1]) {
    g[count++] = q[1]
  }
  if(count === 0) {
    g[count++] = 0.0
  }
  g.length = count
  return g
}

/***/ }),

/***/ "./node_modules/robust-subtract/robust-diff.js":
/*!*****************************************************!*\
  !*** ./node_modules/robust-subtract/robust-diff.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = robustSubtract

//Easy case: Add two scalars
function scalarScalar(a, b) {
  var x = a + b
  var bv = x - a
  var av = x - bv
  var br = b - bv
  var ar = a - av
  var y = ar + br
  if(y) {
    return [y, x]
  }
  return [x]
}

function robustSubtract(e, f) {
  var ne = e.length|0
  var nf = f.length|0
  if(ne === 1 && nf === 1) {
    return scalarScalar(e[0], -f[0])
  }
  var n = ne + nf
  var g = new Array(n)
  var count = 0
  var eptr = 0
  var fptr = 0
  var abs = Math.abs
  var ei = e[eptr]
  var ea = abs(ei)
  var fi = -f[fptr]
  var fa = abs(fi)
  var a, b
  if(ea < fa) {
    b = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    b = fi
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
      fa = abs(fi)
    }
  }
  if((eptr < ne && ea < fa) || (fptr >= nf)) {
    a = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    a = fi
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
      fa = abs(fi)
    }
  }
  var x = a + b
  var bv = x - a
  var y = b - bv
  var q0 = y
  var q1 = x
  var _x, _bv, _av, _br, _ar
  while(eptr < ne && fptr < nf) {
    if(ea < fa) {
      a = ei
      eptr += 1
      if(eptr < ne) {
        ei = e[eptr]
        ea = abs(ei)
      }
    } else {
      a = fi
      fptr += 1
      if(fptr < nf) {
        fi = -f[fptr]
        fa = abs(fi)
      }
    }
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
  }
  while(eptr < ne) {
    a = ei
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
    }
  }
  while(fptr < nf) {
    a = fi
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    } 
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
    }
  }
  if(q0) {
    g[count++] = q0
  }
  if(q1) {
    g[count++] = q1
  }
  if(!count) {
    g[count++] = 0.0  
  }
  g.length = count
  return g
}

/***/ }),

/***/ "./node_modules/robust-sum/robust-sum.js":
/*!***********************************************!*\
  !*** ./node_modules/robust-sum/robust-sum.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = linearExpansionSum

//Easy case: Add two scalars
function scalarScalar(a, b) {
  var x = a + b
  var bv = x - a
  var av = x - bv
  var br = b - bv
  var ar = a - av
  var y = ar + br
  if(y) {
    return [y, x]
  }
  return [x]
}

function linearExpansionSum(e, f) {
  var ne = e.length|0
  var nf = f.length|0
  if(ne === 1 && nf === 1) {
    return scalarScalar(e[0], f[0])
  }
  var n = ne + nf
  var g = new Array(n)
  var count = 0
  var eptr = 0
  var fptr = 0
  var abs = Math.abs
  var ei = e[eptr]
  var ea = abs(ei)
  var fi = f[fptr]
  var fa = abs(fi)
  var a, b
  if(ea < fa) {
    b = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    b = fi
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
      fa = abs(fi)
    }
  }
  if((eptr < ne && ea < fa) || (fptr >= nf)) {
    a = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    a = fi
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
      fa = abs(fi)
    }
  }
  var x = a + b
  var bv = x - a
  var y = b - bv
  var q0 = y
  var q1 = x
  var _x, _bv, _av, _br, _ar
  while(eptr < ne && fptr < nf) {
    if(ea < fa) {
      a = ei
      eptr += 1
      if(eptr < ne) {
        ei = e[eptr]
        ea = abs(ei)
      }
    } else {
      a = fi
      fptr += 1
      if(fptr < nf) {
        fi = f[fptr]
        fa = abs(fi)
      }
    }
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
  }
  while(eptr < ne) {
    a = ei
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
    }
  }
  while(fptr < nf) {
    a = fi
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    } 
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
    }
  }
  if(q0) {
    g[count++] = q0
  }
  if(q1) {
    g[count++] = q1
  }
  if(!count) {
    g[count++] = 0.0  
  }
  g.length = count
  return g
}

/***/ }),

/***/ "./src/Legends.svelte":
/*!****************************!*\
  !*** ./src/Legends.svelte ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _legends_Swatches_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legends/Swatches.svelte */ "./src/legends/Swatches.svelte");
/* harmony import */ var _legends_ColorLegend_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legends/ColorLegend.svelte */ "./src/legends/ColorLegend.svelte");
/* harmony import */ var _legends_SizeLegends_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legends/SizeLegends.svelte */ "./src/legends/SizeLegends.svelte");
/* src\Legends.svelte generated by Svelte v3.46.5 */






function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-13y0iox", ".legends.svelte-13y0iox{position:absolute;bottom:10px;left:10px;display:flex;flex-direction:column;width:320px;color:rgb(50, 50, 50)}");
}

// (12:2) {#if nodeColorMapping && nodeColorMapping.title}
function create_if_block_1(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*nodeColorMapping*/ ctx[0].type === "cat") return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

// (15:4) {:else}
function create_else_block(ctx) {
	let colorlegend;
	let current;

	colorlegend = new _legends_ColorLegend_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				scale: /*nodeColorMapping*/ ctx[0].scale,
				title: /*nodeColorMapping*/ ctx[0].title
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(colorlegend.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(colorlegend, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const colorlegend_changes = {};
			if (dirty & /*nodeColorMapping*/ 1) colorlegend_changes.scale = /*nodeColorMapping*/ ctx[0].scale;
			if (dirty & /*nodeColorMapping*/ 1) colorlegend_changes.title = /*nodeColorMapping*/ ctx[0].title;
			colorlegend.$set(colorlegend_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(colorlegend.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(colorlegend.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(colorlegend, detaching);
		}
	};
}

// (13:4) {#if nodeColorMapping.type === "cat"}
function create_if_block_2(ctx) {
	let swatches;
	let current;

	swatches = new _legends_Swatches_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				scale: /*nodeColorMapping*/ ctx[0].scale,
				title: /*nodeColorMapping*/ ctx[0].title
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(swatches.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(swatches, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const swatches_changes = {};
			if (dirty & /*nodeColorMapping*/ 1) swatches_changes.scale = /*nodeColorMapping*/ ctx[0].scale;
			if (dirty & /*nodeColorMapping*/ 1) swatches_changes.title = /*nodeColorMapping*/ ctx[0].title;
			swatches.$set(swatches_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(swatches.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(swatches.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(swatches, detaching);
		}
	};
}

// (22:2) {#if nodeSizeMapping && nodeSizeMapping.title}
function create_if_block(ctx) {
	let sizelegend;
	let current;

	sizelegend = new _legends_SizeLegends_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				scale: /*nodeSizeMapping*/ ctx[1].scale,
				title: /*nodeSizeMapping*/ ctx[1].title,
				viewScale: /*viewScale*/ ctx[2]
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(sizelegend.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(sizelegend, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const sizelegend_changes = {};
			if (dirty & /*nodeSizeMapping*/ 2) sizelegend_changes.scale = /*nodeSizeMapping*/ ctx[1].scale;
			if (dirty & /*nodeSizeMapping*/ 2) sizelegend_changes.title = /*nodeSizeMapping*/ ctx[1].title;
			if (dirty & /*viewScale*/ 4) sizelegend_changes.viewScale = /*viewScale*/ ctx[2];
			sizelegend.$set(sizelegend_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(sizelegend.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(sizelegend.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(sizelegend, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	let if_block0 = /*nodeColorMapping*/ ctx[0] && /*nodeColorMapping*/ ctx[0].title && create_if_block_1(ctx);
	let if_block1 = /*nodeSizeMapping*/ ctx[1] && /*nodeSizeMapping*/ ctx[1].title && create_if_block(ctx);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (if_block0) if_block0.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "legends svelte-13y0iox");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			if (if_block1) if_block1.m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*nodeColorMapping*/ ctx[0] && /*nodeColorMapping*/ ctx[0].title) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*nodeColorMapping*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0, 1);
					if_block0.m(div, t);
				}
			} else if (if_block0) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (/*nodeSizeMapping*/ ctx[1] && /*nodeSizeMapping*/ ctx[1].title) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*nodeSizeMapping*/ 2) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { nodeColorMapping = null } = $$props;
	let { nodeSizeMapping = null } = $$props;
	let { viewScale = 1 } = $$props;

	$$self.$$set = $$props => {
		if ('nodeColorMapping' in $$props) $$invalidate(0, nodeColorMapping = $$props.nodeColorMapping);
		if ('nodeSizeMapping' in $$props) $$invalidate(1, nodeSizeMapping = $$props.nodeSizeMapping);
		if ('viewScale' in $$props) $$invalidate(2, viewScale = $$props.viewScale);
	};

	return [nodeColorMapping, nodeSizeMapping, viewScale];
}

class Legends extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				nodeColorMapping: 0,
				nodeSizeMapping: 1,
				viewScale: 2
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Legends);

/***/ }),

/***/ "./src/Menu.svelte":
/*!*************************!*\
  !*** ./src/Menu.svelte ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var _assets_node_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/node.png */ "./src/assets/node.png");
/* harmony import */ var _assets_edge_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/edge.png */ "./src/assets/edge.png");
/* harmony import */ var _assets_layout_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/layout.png */ "./src/assets/layout.png");
/* harmony import */ var _menu_NodeMenu_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/NodeMenu.svelte */ "./src/menu/NodeMenu.svelte");
/* harmony import */ var _menu_EdgeMenu_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/EdgeMenu.svelte */ "./src/menu/EdgeMenu.svelte");
/* harmony import */ var _menu_LayoutMenu_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/LayoutMenu.svelte */ "./src/menu/LayoutMenu.svelte");
/* src\Menu.svelte generated by Svelte v3.46.5 */










function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1x3w9p5", "#menu-container.svelte-1x3w9p5.svelte-1x3w9p5{display:flex;flex-direction:column;width:30px;height:100px;position:absolute;top:10px;left:10px}.menu-button.svelte-1x3w9p5.svelte-1x3w9p5{width:30px;height:30px;margin:1px;padding:1px;border-width:2px;border-color:#888}.menu-button.svelte-1x3w9p5 img.svelte-1x3w9p5{width:100%;height:100%}");
}

// (39:0) {#if visible === ""}
function create_if_block(ctx) {
	let div;
	let button0;
	let img0;
	let img0_src_value;
	let button0_intro;
	let button0_outro;
	let t0;
	let button1;
	let img1;
	let img1_src_value;
	let button1_intro;
	let button1_outro;
	let t1;
	let button2;
	let img2;
	let img2_src_value;
	let button2_intro;
	let button2_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			img0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			img1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			img2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img0.src, img0_src_value = _assets_node_png__WEBPACK_IMPORTED_MODULE_2__["default"])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "src", img0_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "alt", "A node icon.");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "class", "svelte-1x3w9p5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "menu-button svelte-1x3w9p5");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img1.src, img1_src_value = _assets_edge_png__WEBPACK_IMPORTED_MODULE_3__["default"])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "src", img1_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "alt", "An edge icon.");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "class", "svelte-1x3w9p5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "menu-button svelte-1x3w9p5");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img2.src, img2_src_value = _assets_layout_png__WEBPACK_IMPORTED_MODULE_4__["default"])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "src", img2_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "alt", "A layout icon.");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "class", "svelte-1x3w9p5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "menu-button svelte-1x3w9p5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "id", "menu-container");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "svelte-1x3w9p5");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, button0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button0, img0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, button1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button1, img1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, button2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button2, img2);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click", /*click_handler*/ ctx[14]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click", /*click_handler_1*/ ctx[15]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button2, "click", /*click_handler_2*/ ctx[16])
				];

				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i(local) {
			if (current) return;

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (button0_outro) button0_outro.end(1);
				button0_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(button0, /*receive*/ ctx[7], { key: "node" });
				button0_intro.start();
			});

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (button1_outro) button1_outro.end(1);
				button1_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(button1, /*receive*/ ctx[7], { key: "edge" });
				button1_intro.start();
			});

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (button2_outro) button2_outro.end(1);
				button2_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(button2, /*receive*/ ctx[7], { key: "layout" });
				button2_intro.start();
			});

			current = true;
		},
		o(local) {
			if (button0_intro) button0_intro.invalidate();
			button0_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(button0, /*send*/ ctx[6], { key: "node" });
			if (button1_intro) button1_intro.invalidate();
			button1_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(button1, /*send*/ ctx[6], { key: "edge" });
			if (button2_intro) button2_intro.invalidate();
			button2_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(button2, /*send*/ ctx[6], { key: "layout" });
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (detaching && button0_outro) button0_outro.end();
			if (detaching && button1_outro) button1_outro.end();
			if (detaching && button2_outro) button2_outro.end();
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let nodemenu;
	let updating_colorMapping;
	let updating_sizeMapping;
	let updating_visible;
	let t0;
	let edgemenu;
	let updating_mapping;
	let updating_visible_1;
	let t1;
	let layoutmenu;
	let updating_visible_2;
	let t2;
	let if_block_anchor;
	let current;

	function nodemenu_colorMapping_binding(value) {
		/*nodemenu_colorMapping_binding*/ ctx[8](value);
	}

	function nodemenu_sizeMapping_binding(value) {
		/*nodemenu_sizeMapping_binding*/ ctx[9](value);
	}

	function nodemenu_visible_binding(value) {
		/*nodemenu_visible_binding*/ ctx[10](value);
	}

	let nodemenu_props = {
		nodes: /*nodes*/ ctx[3],
		send: /*send*/ ctx[6],
		receive: /*receive*/ ctx[7]
	};

	if (/*nodeColorMapping*/ ctx[0] !== void 0) {
		nodemenu_props.colorMapping = /*nodeColorMapping*/ ctx[0];
	}

	if (/*nodeSizeMapping*/ ctx[1] !== void 0) {
		nodemenu_props.sizeMapping = /*nodeSizeMapping*/ ctx[1];
	}

	if (/*visible*/ ctx[5] !== void 0) {
		nodemenu_props.visible = /*visible*/ ctx[5];
	}

	nodemenu = new _menu_NodeMenu_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: nodemenu_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(nodemenu, 'colorMapping', nodemenu_colorMapping_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(nodemenu, 'sizeMapping', nodemenu_sizeMapping_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(nodemenu, 'visible', nodemenu_visible_binding));

	function edgemenu_mapping_binding(value) {
		/*edgemenu_mapping_binding*/ ctx[11](value);
	}

	function edgemenu_visible_binding(value) {
		/*edgemenu_visible_binding*/ ctx[12](value);
	}

	let edgemenu_props = {
		send: /*send*/ ctx[6],
		receive: /*receive*/ ctx[7]
	};

	if (/*edgeMapping*/ ctx[2] !== void 0) {
		edgemenu_props.mapping = /*edgeMapping*/ ctx[2];
	}

	if (/*visible*/ ctx[5] !== void 0) {
		edgemenu_props.visible = /*visible*/ ctx[5];
	}

	edgemenu = new _menu_EdgeMenu_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({ props: edgemenu_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(edgemenu, 'mapping', edgemenu_mapping_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(edgemenu, 'visible', edgemenu_visible_binding));

	function layoutmenu_visible_binding(value) {
		/*layoutmenu_visible_binding*/ ctx[13](value);
	}

	let layoutmenu_props = {
		nodes: /*nodes*/ ctx[3],
		edges: /*edges*/ ctx[4],
		nodeSizeMapping: /*nodeSizeMapping*/ ctx[1],
		send: /*send*/ ctx[6],
		receive: /*receive*/ ctx[7]
	};

	if (/*visible*/ ctx[5] !== void 0) {
		layoutmenu_props.visible = /*visible*/ ctx[5];
	}

	layoutmenu = new _menu_LayoutMenu_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({ props: layoutmenu_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(layoutmenu, 'visible', layoutmenu_visible_binding));
	let if_block = /*visible*/ ctx[5] === "" && create_if_block(ctx);

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(nodemenu.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(edgemenu.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(layoutmenu.$$.fragment);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(nodemenu, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(edgemenu, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(layoutmenu, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const nodemenu_changes = {};
			if (dirty & /*nodes*/ 8) nodemenu_changes.nodes = /*nodes*/ ctx[3];

			if (!updating_colorMapping && dirty & /*nodeColorMapping*/ 1) {
				updating_colorMapping = true;
				nodemenu_changes.colorMapping = /*nodeColorMapping*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_colorMapping = false);
			}

			if (!updating_sizeMapping && dirty & /*nodeSizeMapping*/ 2) {
				updating_sizeMapping = true;
				nodemenu_changes.sizeMapping = /*nodeSizeMapping*/ ctx[1];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_sizeMapping = false);
			}

			if (!updating_visible && dirty & /*visible*/ 32) {
				updating_visible = true;
				nodemenu_changes.visible = /*visible*/ ctx[5];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_visible = false);
			}

			nodemenu.$set(nodemenu_changes);
			const edgemenu_changes = {};

			if (!updating_mapping && dirty & /*edgeMapping*/ 4) {
				updating_mapping = true;
				edgemenu_changes.mapping = /*edgeMapping*/ ctx[2];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_mapping = false);
			}

			if (!updating_visible_1 && dirty & /*visible*/ 32) {
				updating_visible_1 = true;
				edgemenu_changes.visible = /*visible*/ ctx[5];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_visible_1 = false);
			}

			edgemenu.$set(edgemenu_changes);
			const layoutmenu_changes = {};
			if (dirty & /*nodes*/ 8) layoutmenu_changes.nodes = /*nodes*/ ctx[3];
			if (dirty & /*edges*/ 16) layoutmenu_changes.edges = /*edges*/ ctx[4];
			if (dirty & /*nodeSizeMapping*/ 2) layoutmenu_changes.nodeSizeMapping = /*nodeSizeMapping*/ ctx[1];

			if (!updating_visible_2 && dirty & /*visible*/ 32) {
				updating_visible_2 = true;
				layoutmenu_changes.visible = /*visible*/ ctx[5];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_visible_2 = false);
			}

			layoutmenu.$set(layoutmenu_changes);

			if (/*visible*/ ctx[5] === "") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*visible*/ 32) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(nodemenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(edgemenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(layoutmenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(nodemenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(edgemenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(layoutmenu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(nodemenu, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(edgemenu, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(layoutmenu, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { nodes = [] } = $$props;
	let { edges = [] } = $$props;
	let { nodeColorMapping = null } = $$props;
	let { nodeSizeMapping = null } = $$props;
	let { edgeMapping = null } = $$props;

	// --- Menu state
	let visible = ""; // can be set to: '', 'node', 'edge', 'layout'.

	const [send, receive] = (0,svelte_transition__WEBPACK_IMPORTED_MODULE_1__.crossfade)({ duration: 200, fallback: svelte_transition__WEBPACK_IMPORTED_MODULE_1__.scale });

	function nodemenu_colorMapping_binding(value) {
		nodeColorMapping = value;
		$$invalidate(0, nodeColorMapping);
	}

	function nodemenu_sizeMapping_binding(value) {
		nodeSizeMapping = value;
		$$invalidate(1, nodeSizeMapping);
	}

	function nodemenu_visible_binding(value) {
		visible = value;
		$$invalidate(5, visible);
	}

	function edgemenu_mapping_binding(value) {
		edgeMapping = value;
		$$invalidate(2, edgeMapping);
	}

	function edgemenu_visible_binding(value) {
		visible = value;
		$$invalidate(5, visible);
	}

	function layoutmenu_visible_binding(value) {
		visible = value;
		$$invalidate(5, visible);
	}

	const click_handler = () => $$invalidate(5, visible = "node");
	const click_handler_1 = () => $$invalidate(5, visible = "edge");
	const click_handler_2 = () => $$invalidate(5, visible = "layout");

	$$self.$$set = $$props => {
		if ('nodes' in $$props) $$invalidate(3, nodes = $$props.nodes);
		if ('edges' in $$props) $$invalidate(4, edges = $$props.edges);
		if ('nodeColorMapping' in $$props) $$invalidate(0, nodeColorMapping = $$props.nodeColorMapping);
		if ('nodeSizeMapping' in $$props) $$invalidate(1, nodeSizeMapping = $$props.nodeSizeMapping);
		if ('edgeMapping' in $$props) $$invalidate(2, edgeMapping = $$props.edgeMapping);
	};

	return [
		nodeColorMapping,
		nodeSizeMapping,
		edgeMapping,
		nodes,
		edges,
		visible,
		send,
		receive,
		nodemenu_colorMapping_binding,
		nodemenu_sizeMapping_binding,
		nodemenu_visible_binding,
		edgemenu_mapping_binding,
		edgemenu_visible_binding,
		layoutmenu_visible_binding,
		click_handler,
		click_handler_1,
		click_handler_2
	];
}

class Menu extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				nodes: 3,
				edges: 4,
				nodeColorMapping: 0,
				nodeSizeMapping: 1,
				edgeMapping: 2
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/Network.svelte":
/*!****************************!*\
  !*** ./src/Network.svelte ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! robust-point-in-polygon */ "./node_modules/robust-point-in-polygon/robust-pnp.js");
/* harmony import */ var robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var d3_delaunay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-delaunay */ "./node_modules/d3-delaunay/src/delaunay.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _simulation_simulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation/simulation */ "./src/simulation/simulation.js");
/* harmony import */ var _network_drawing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network/drawing */ "./src/network/drawing.js");
/* harmony import */ var _network_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network/neighbors */ "./src/network/neighbors.js");
/* harmony import */ var _network_drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network/drag */ "./src/network/drag/index.js");
/* harmony import */ var _network_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network/zoom */ "./src/network/zoom/index.js");
/* src\Network.svelte generated by Svelte v3.46.5 */












function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1kw1bi2", "div.svelte-1kw1bi2{background-color:#ddd}");
}

function create_fragment(ctx) {
	let div;
	let interact_action;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div, "width", /*canvas*/ ctx[0].width + "px");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "svelte-1kw1bi2");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(interact_action = /*interact*/ ctx[1].call(null, div));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*canvas*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div, "width", /*canvas*/ ctx[0].width + "px");
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			mounted = false;
			dispose();
		}
	};
}

const alpha = 0.3;

// --- Lasso Selection
const closingDistance = 100;

function instance($$self, $$props, $$invalidate) {
	let delaunay;
	let hoverNodeIds;
	let { nodes = [] } = $$props;
	let { edges = [] } = $$props;
	let { nodeColorMapping = null } = $$props;
	let { edgeMapping = null } = $$props;
	let { viewScale = 1 } = $$props;

	// --- Construct canvas
	const canvas = document.createElement("canvas");

	const ctx = canvas.getContext("2d");
	canvas.width = 700;
	canvas.height = 700;

	// --- Progress bar
	let progress = 1;

	const x_scale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_7__["default"])().domain([1, 0]).range([0, canvas.width]);

	// --- Node encoding
	let nodePositions = nodes.map(_ => {
		return { x: 0, y: 0, r: 0 };
	});

	_simulation_simulation__WEBPACK_IMPORTED_MODULE_2__.simulation.onTick(message => {
		$$invalidate(7, progress = message.progress);
		$$invalidate(8, nodePositions = message.nodes);
	});

	// --- Zoom interaction
	let dragging = false;

	let transform = {
		x: 0,
		y: 0,
		k: 1,
		invert: ([x, y]) => [x, y]
	};

	const _zoom = (0,_network_zoom__WEBPACK_IMPORTED_MODULE_6__.zoom)().extent([[0, 0], [canvas.width, canvas.height]]).on("start", _ => $$invalidate(9, dragging = true)).on("zoom", event => $$invalidate(10, transform = event.transform)).on("end", _ => $$invalidate(9, dragging = false));

	// --- Hover interaction
	let mousePos = [0, 0];

	let mouseNode = -1;
	let neighborMap = null;

	function invertTransform(mouse_x, mouse_y, transform) {
		const worldPos = transform.invert([mouse_x, mouse_y]);
		return [worldPos[0] - canvas.width / 2, worldPos[1] - canvas.height / 2];
	}

	function nodeAtMouse(mouse, transform, encoding, delaunay) {
		const { x: offset_x, y: offset_y } = canvas.getBoundingClientRect();
		const [view_x, view_y] = invertTransform(mouse[0] - offset_x, mouse[1] - offset_y, transform);
		const idx = delaunay.find(view_x, view_y, Math.max(mouseNode, 0));
		const node = encoding[idx];
		const dist = Math.sqrt((node.x - view_x) ** 2 + (node.y - view_y) ** 2);

		if (dist < transform.k * node.r) {
			return idx;
		}

		return -1;
	}

	const _drag = (0,_network_drag__WEBPACK_IMPORTED_MODULE_5__.drag)().container(canvas).on("start", _ => $$invalidate(9, dragging = true)).on("drag", event => {
		const [view_x, view_y] = invertTransform(event.x, event.y, transform);
		_simulation_simulation__WEBPACK_IMPORTED_MODULE_2__.simulation.dragNode(mouseNode, { x: view_x, y: view_y }, alpha);
	}).on("end", _ => {
		_simulation_simulation__WEBPACK_IMPORTED_MODULE_2__.simulation.dragNode(mouseNode, { x: null, y: null }, alpha);
		$$invalidate(9, dragging = false);
	});

	let selectionPath = [];
	let selectionOrigin = [0, 0];
	let selectedNodeIds = new Set([]);

	const _lasso = (0,_network_drag__WEBPACK_IMPORTED_MODULE_5__.drag)().container(canvas).on("start", event => {
		$$invalidate(9, dragging = true);
		$$invalidate(14, selectionPath = []);
		selectionOrigin = [event.x, event.y];
		$$invalidate(15, selectedNodeIds = new Set([]));
	}).on("drag", event => {
		const [view_x, view_y] = invertTransform(event.x, event.y, transform);
		$$invalidate(14, selectionPath = [...selectionPath, [view_x, view_y]]);
	}).on("end", event => {
		const distance = Math.sqrt((selectionOrigin[0] - event.x) ** 2 + (selectionOrigin[1] - event.y) ** 2);

		if (selectionPath.length > 2 && distance <= closingDistance) {
			$$invalidate(15, selectedNodeIds = new Set(nodePositions.reduce(
					(agg, node, idx) => {
						if (robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_1___default()(selectionPath, [node.x, node.y]) < 0) {
							agg.push(idx);
						}

						return agg;
					},
					[]
				)));
		}

		$$invalidate(14, selectionPath = []);
		$$invalidate(9, dragging = false);
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

			(0,_network_drag__WEBPACK_IMPORTED_MODULE_5__.dragDisable)(event.view);
			event.stopImmediatePropagation();
		}

		function mousemoved(event) {
			if (!_filter(event)) {
				return;
			}

			$$invalidate(11, mousePos = [event.x, event.y]);
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

			(0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(this).transition().duration(250).call(_zoom.transform, _network_zoom__WEBPACK_IMPORTED_MODULE_6__.zoomIdentity);
			event.preventDefault();
			event.stopImmediatePropagation();
		}

		element.appendChild(canvas);
		(0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(canvas).call(_drag).call(_zoom).on("wheel", wheeled, { passive: false }).on("mousedown", mousedowned).on("mousemove", mousemoved).on("dblclick", dblclicked);
	}

	$$self.$$set = $$props => {
		if ('nodes' in $$props) $$invalidate(3, nodes = $$props.nodes);
		if ('edges' in $$props) $$invalidate(4, edges = $$props.edges);
		if ('nodeColorMapping' in $$props) $$invalidate(5, nodeColorMapping = $$props.nodeColorMapping);
		if ('edgeMapping' in $$props) $$invalidate(6, edgeMapping = $$props.edgeMapping);
		if ('viewScale' in $$props) $$invalidate(2, viewScale = $$props.viewScale);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*transform*/ 1024) {
			$: $$invalidate(2, viewScale = transform.k);
		}

		if ($$self.$$.dirty & /*edges*/ 16) {
			$: _network_neighbors__WEBPACK_IMPORTED_MODULE_4__.neighbors.edges(edges).then(map => $$invalidate(13, neighborMap = map));
		}

		if ($$self.$$.dirty & /*nodePositions*/ 256) {
			$: $$invalidate(17, delaunay = d3_delaunay__WEBPACK_IMPORTED_MODULE_9__["default"].from(nodePositions, d => d.x, d => d.y));
		}

		if ($$self.$$.dirty & /*dragging, mousePos, transform, nodePositions, delaunay*/ 134912) {
			$: if (!dragging) {
				$$invalidate(12, mouseNode = nodeAtMouse(mousePos, transform, nodePositions, delaunay));
			}
		}

		if ($$self.$$.dirty & /*neighborMap, mouseNode*/ 12288) {
			$: $$invalidate(16, hoverNodeIds = new Set(neighborMap && mouseNode >= 0
				? [mouseNode, ...neighborMap[mouseNode]]
				: []));
		}

		if ($$self.$$.dirty & /*edgeMapping, progress, canvas, nodes, nodePositions, nodeColorMapping, hoverNodeIds, selectedNodeIds, selectionPath, edges, transform*/ 116217) {
			// --- Animation
			$: if (edgeMapping) {
				const draw = progress === 0 ? _network_drawing__WEBPACK_IMPORTED_MODULE_3__.drawFinal : _network_drawing__WEBPACK_IMPORTED_MODULE_3__.drawFrame;

				window.requestAnimationFrame(() => draw({
					canvas,
					ctx,
					nodes,
					nodePositions,
					nodeColorMapping,
					hoverNodeIds,
					selectedNodeIds,
					selectionPath,
					edges,
					edgeMapping,
					transform,
					progress: x_scale(progress)
				}));
			}
		}
	};

	return [
		canvas,
		interact,
		viewScale,
		nodes,
		edges,
		nodeColorMapping,
		edgeMapping,
		progress,
		nodePositions,
		dragging,
		transform,
		mousePos,
		mouseNode,
		neighborMap,
		selectionPath,
		selectedNodeIds,
		hoverNodeIds,
		delaunay
	];
}

class Network extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				nodes: 3,
				edges: 4,
				nodeColorMapping: 5,
				edgeMapping: 6,
				viewScale: 2
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Network);

/***/ }),

/***/ "./src/legends/ColorLegend.svelte":
/*!****************************************!*\
  !*** ./src/legends/ColorLegend.svelte ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/axis.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/linear.js");
/* src\legends\ColorLegend.svelte generated by Svelte v3.46.5 */






function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-jynh2d", ".color-legend.svelte-jynh2d{overflow:visible;display:block}");
}

function create_fragment(ctx) {
	let svg;
	let image;
	let image_height_value;
	let image_href_value;
	let image_width_value;
	let g0;
	let text_1;
	let t;
	let g0_transform_value;
	let g1;
	let g1_transform_value;
	let axis_function_action;
	let svg_viewBox_value;
	let mounted;
	let dispose;

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			image = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("image");
			g0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			text_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("text");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*title*/ ctx[8]);
			g1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "height", image_height_value = /*height*/ ctx[3] - /*marginTop*/ ctx[4] - /*marginBottom*/ ctx[6]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "href", image_href_value = ramp(/*scale*/ ctx[0].copy().domain(/*n_domain*/ ctx[9])));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "preserveAspectRatio", "none");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "width", image_width_value = /*width*/ ctx[2] - /*marginLeft*/ ctx[7] - /*marginRight*/ ctx[5]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "x", /*marginLeft*/ ctx[7]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "y", /*marginTop*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-size", "10");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-family", "sans-serif");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value = `translate(0, ${/*titleSize*/ ctx[1]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "transform", g1_transform_value = `translate(0,${/*height*/ ctx[3] - /*marginBottom*/ ctx[6]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "color-legend svelte-jynh2d");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[3]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value = [0, 0, /*width*/ ctx[2], /*height*/ ctx[3]]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[2]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, image);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, text_1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(text_1, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g1);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(axis_function_action = /*axis_function*/ ctx[11].call(null, g1, /*x_axis*/ ctx[10]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*height, marginTop, marginBottom*/ 88 && image_height_value !== (image_height_value = /*height*/ ctx[3] - /*marginTop*/ ctx[4] - /*marginBottom*/ ctx[6])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "height", image_height_value);
			}

			if (dirty & /*scale, n_domain*/ 513 && image_href_value !== (image_href_value = ramp(/*scale*/ ctx[0].copy().domain(/*n_domain*/ ctx[9])))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "href", image_href_value);
			}

			if (dirty & /*width, marginLeft, marginRight*/ 164 && image_width_value !== (image_width_value = /*width*/ ctx[2] - /*marginLeft*/ ctx[7] - /*marginRight*/ ctx[5])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "width", image_width_value);
			}

			if (dirty & /*marginLeft*/ 128) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "x", /*marginLeft*/ ctx[7]);
			}

			if (dirty & /*marginTop*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(image, "y", /*marginTop*/ ctx[4]);
			}

			if (dirty & /*title*/ 256) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*title*/ ctx[8]);

			if (dirty & /*titleSize*/ 2 && g0_transform_value !== (g0_transform_value = `translate(0, ${/*titleSize*/ ctx[1]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value);
			}

			if (dirty & /*height, marginBottom*/ 72 && g1_transform_value !== (g1_transform_value = `translate(0,${/*height*/ ctx[3] - /*marginBottom*/ ctx[6]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "transform", g1_transform_value);
			}

			if (axis_function_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(axis_function_action.update) && dirty & /*x_axis*/ 1024) axis_function_action.update.call(null, /*x_axis*/ ctx[10]);

			if (dirty & /*height*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[3]);
			}

			if (dirty & /*width, height*/ 12 && svg_viewBox_value !== (svg_viewBox_value = [0, 0, /*width*/ ctx[2], /*height*/ ctx[3]])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value);
			}

			if (dirty & /*width*/ 4) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[2]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
			mounted = false;
			dispose();
		}
	};
}

function ramp(color, n = 256) {
	const canvas = document.createElement("canvas");
	canvas.width = n;
	canvas.height = 1;
	const context = canvas.getContext("2d");

	for (let i = 0; i < n; ++i) {
		context.fillStyle = color(i / (n - 1));
		context.fillRect(i, 0, 1, 1);
	}

	return canvas.toDataURL();
}

function instance($$self, $$props, $$invalidate) {
	let x_scale;
	let x_axis;
	let { scale = null } = $$props;
	let { tickSize = 6 } = $$props;
	let { titleSize = 10 } = $$props;
	let { width = 320 } = $$props;
	let { height = 34 + titleSize + tickSize } = $$props;
	let { marginTop = 3 + titleSize } = $$props;
	let { marginRight = 0 } = $$props;
	let { marginBottom = 16 + tickSize } = $$props;
	let { marginLeft = 0 } = $$props;
	let { ticks = width / 64 } = $$props;
	let { tickFormat = null } = $$props;
	let { tickValues = null } = $$props;
	let { title = null } = $$props;

	//--- Create x-scale and axis
	let domain = [0, 1];

	let minmax = [0, 1];
	let n_domain = [0, 1];

	const axis_function = (g, ax) => {
		const selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(g);

		function drawAxis(ax) {
			selection.selectAll(".tick").remove();
			selection.call(ax);
			selection.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
			selection.select(".domain").remove();
		}

		drawAxis(ax);

		return {
			update(newAx) {
				drawAxis(newAx);
			}
		};
	};

	$$self.$$set = $$props => {
		if ('scale' in $$props) $$invalidate(0, scale = $$props.scale);
		if ('tickSize' in $$props) $$invalidate(12, tickSize = $$props.tickSize);
		if ('titleSize' in $$props) $$invalidate(1, titleSize = $$props.titleSize);
		if ('width' in $$props) $$invalidate(2, width = $$props.width);
		if ('height' in $$props) $$invalidate(3, height = $$props.height);
		if ('marginTop' in $$props) $$invalidate(4, marginTop = $$props.marginTop);
		if ('marginRight' in $$props) $$invalidate(5, marginRight = $$props.marginRight);
		if ('marginBottom' in $$props) $$invalidate(6, marginBottom = $$props.marginBottom);
		if ('marginLeft' in $$props) $$invalidate(7, marginLeft = $$props.marginLeft);
		if ('ticks' in $$props) $$invalidate(13, ticks = $$props.ticks);
		if ('tickFormat' in $$props) $$invalidate(14, tickFormat = $$props.tickFormat);
		if ('tickValues' in $$props) $$invalidate(15, tickValues = $$props.tickValues);
		if ('title' in $$props) $$invalidate(8, title = $$props.title);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*scale*/ 1) {
			$: $$invalidate(16, domain = scale.domain());
		}

		if ($$self.$$.dirty & /*domain*/ 65536) {
			$: $$invalidate(17, minmax = [domain[0], domain[domain.length - 1]]);
		}

		if ($$self.$$.dirty & /*domain, minmax*/ 196608) {
			$: $$invalidate(9, n_domain = domain.map(i => (i - minmax[0]) / (minmax[1] - minmax[0])));
		}

		if ($$self.$$.dirty & /*minmax, marginLeft, width, marginRight*/ 131236) {
			$: $$invalidate(18, x_scale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])().domain(minmax).range([marginLeft, width - marginRight]));
		}

		if ($$self.$$.dirty & /*x_scale, ticks, tickFormat, tickSize, tickValues*/ 323584) {
			$: $$invalidate(10, x_axis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_3__.axisBottom)(x_scale).ticks(ticks, typeof tickFormat === "string" ? tickFormat : null).tickFormat(typeof tickFormat === "function" ? tickFormat : null).tickSize(tickSize).tickValues(tickValues));
		}
	};

	return [
		scale,
		titleSize,
		width,
		height,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		title,
		n_domain,
		x_axis,
		axis_function,
		tickSize,
		ticks,
		tickFormat,
		tickValues,
		domain,
		minmax,
		x_scale
	];
}

class ColorLegend extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				scale: 0,
				tickSize: 12,
				titleSize: 1,
				width: 2,
				height: 3,
				marginTop: 4,
				marginRight: 5,
				marginBottom: 6,
				marginLeft: 7,
				ticks: 13,
				tickFormat: 14,
				tickValues: 15,
				title: 8
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorLegend);

/***/ }),

/***/ "./src/legends/SizeLegends.svelte":
/*!****************************************!*\
  !*** ./src/legends/SizeLegends.svelte ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/axis.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/quantile.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* src\legends\SizeLegends.svelte generated by Svelte v3.46.5 */








function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-6xwald", ".size-legend.svelte-6xwald{overflow:visible;display:block}");
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i].x;
	child_ctx[22] = list[i].r;
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i].x;
	child_ctx[22] = list[i].r;
	return child_ctx;
}

// (89:4) {:else}
function create_else_block(ctx) {
	let each_1_anchor;
	let each_value_1 = /*data*/ ctx[8];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*data, marginTop, marginBottom, height, tickSize, line_length*/ 1394) {
				each_value_1 = /*data*/ ctx[8];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
		}
	};
}

// (78:4) {#if shape === "circle"}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*data*/ ctx[8];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*data, marginTop, marginBottom, height, tickSize*/ 370) {
				each_value = /*data*/ ctx[8];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
		}
	};
}

// (90:6) {#each data as { x, r }}
function create_each_block_1(ctx) {
	let line;
	let line_stroke_width_value;
	let line_y__value;
	let line_y__value_1;
	let line_x__value;
	let line_x__value_1;

	return {
		c() {
			line = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("line");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "stroke", "#fff");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "stroke-width", line_stroke_width_value = /*r*/ ctx[22]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "y1", line_y__value = (/*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1]) / 2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "y2", line_y__value_1 = (/*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1]) / 2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "x1", line_x__value = /*x*/ ctx[21] - /*line_length*/ ctx[10] / 3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "x2", line_x__value_1 = /*x*/ ctx[21] + /*line_length*/ ctx[10] / 3);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, line, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*data*/ 256 && line_stroke_width_value !== (line_stroke_width_value = /*r*/ ctx[22])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "stroke-width", line_stroke_width_value);
			}

			if (dirty & /*marginTop, marginBottom, height, tickSize*/ 114 && line_y__value !== (line_y__value = (/*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1]) / 2)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "y1", line_y__value);
			}

			if (dirty & /*marginTop, marginBottom, height, tickSize*/ 114 && line_y__value_1 !== (line_y__value_1 = (/*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1]) / 2)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "y2", line_y__value_1);
			}

			if (dirty & /*data*/ 256 && line_x__value !== (line_x__value = /*x*/ ctx[21] - /*line_length*/ ctx[10] / 3)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "x1", line_x__value);
			}

			if (dirty & /*data*/ 256 && line_x__value_1 !== (line_x__value_1 = /*x*/ ctx[21] + /*line_length*/ ctx[10] / 3)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(line, "x2", line_x__value_1);
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(line);
		}
	};
}

// (79:6) {#each data as { x, r }}
function create_each_block(ctx) {
	let circle;
	let circle_cx_value;
	let circle_cy_value;
	let circle_r_value;

	return {
		c() {
			circle = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("circle");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "cx", circle_cx_value = /*x*/ ctx[21]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "cy", circle_cy_value = /*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "r", circle_r_value = /*r*/ ctx[22]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "fill", "#fff");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "stroke", "#ccc");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "stroke-width", "1");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, circle, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*data*/ 256 && circle_cx_value !== (circle_cx_value = /*x*/ ctx[21])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "cx", circle_cx_value);
			}

			if (dirty & /*marginTop, marginBottom, height, tickSize*/ 114 && circle_cy_value !== (circle_cy_value = /*marginTop*/ ctx[5] + /*marginBottom*/ ctx[6] - /*height*/ ctx[4] + /*tickSize*/ ctx[1])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "cy", circle_cy_value);
			}

			if (dirty & /*data*/ 256 && circle_r_value !== (circle_r_value = /*r*/ ctx[22])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(circle, "r", circle_r_value);
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(circle);
		}
	};
}

function create_fragment(ctx) {
	let svg;
	let g0;
	let text_1;
	let t;
	let g0_transform_value;
	let g1;
	let g1_transform_value;
	let axis_function_action;
	let g2;
	let g2_transform_value;
	let svg_viewBox_value;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*shape*/ ctx[0] === "circle") return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			g0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			text_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("text");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*title*/ ctx[7]);
			g1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			g2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			if_block.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-size", "10");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-family", "sans-serif");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value = `translate(0, ${/*titleSize*/ ctx[2]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "transform", g1_transform_value = `translate(0,${/*height*/ ctx[4] - /*marginBottom*/ ctx[6]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g2, "transform", g2_transform_value = `translate(0,${/*height*/ ctx[4] - /*marginBottom*/ ctx[6]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "size-legend svelte-6xwald");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value = [0, 0, /*width*/ ctx[3], /*height*/ ctx[4]]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[3]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, text_1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(text_1, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g2);
			if_block.m(g2, null);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(axis_function_action = /*axis_function*/ ctx[11].call(null, g1, /*x_axis*/ ctx[9]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 128) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*title*/ ctx[7]);

			if (dirty & /*titleSize*/ 4 && g0_transform_value !== (g0_transform_value = `translate(0, ${/*titleSize*/ ctx[2]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value);
			}

			if (dirty & /*height, marginBottom*/ 80 && g1_transform_value !== (g1_transform_value = `translate(0,${/*height*/ ctx[4] - /*marginBottom*/ ctx[6]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g1, "transform", g1_transform_value);
			}

			if (axis_function_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(axis_function_action.update) && dirty & /*x_axis*/ 512) axis_function_action.update.call(null, /*x_axis*/ ctx[9]);

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(g2, null);
				}
			}

			if (dirty & /*height, marginBottom*/ 80 && g2_transform_value !== (g2_transform_value = `translate(0,${/*height*/ ctx[4] - /*marginBottom*/ ctx[6]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g2, "transform", g2_transform_value);
			}

			if (dirty & /*height*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[4]);
			}

			if (dirty & /*width, height*/ 24 && svg_viewBox_value !== (svg_viewBox_value = [0, 0, /*width*/ ctx[3], /*height*/ ctx[4]])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value);
			}

			if (dirty & /*width*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[3]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
			if_block.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let domain;
	let tickValues;
	let x_scale;
	let x_axis;
	let data;
	let { scale = null } = $$props;
	let { viewScale = 1 } = $$props;
	let { shape = "circle" } = $$props;
	let { tickSize = 10 } = $$props;
	let { titleSize = 10 } = $$props;
	let { width = 320 } = $$props;
	let { height = 34 + titleSize + tickSize } = $$props;
	let { marginTop = 3 + titleSize } = $$props;
	let { marginRight = 10 } = $$props;
	let { marginBottom = 16 + tickSize } = $$props;
	let { marginLeft = 5 } = $$props;
	let { ticks = width / 32 } = $$props;
	let { tickFormat = null } = $$props;
	let { title = null } = $$props;

	// export let tickValues = null;
	// --- The tick svg group
	const line_length = (width - marginLeft - marginRight) / ticks;

	const axis_function = (g, ax) => {
		const selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(g);

		function drawAxis(ax) {
			selection.selectAll(".tick").remove();
			selection.call(ax);
			selection.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
			selection.select(".domain").remove();
		}

		drawAxis(ax);

		return {
			update(newAx) {
				drawAxis(newAx);
			}
		};
	};

	$$self.$$set = $$props => {
		if ('scale' in $$props) $$invalidate(12, scale = $$props.scale);
		if ('viewScale' in $$props) $$invalidate(13, viewScale = $$props.viewScale);
		if ('shape' in $$props) $$invalidate(0, shape = $$props.shape);
		if ('tickSize' in $$props) $$invalidate(1, tickSize = $$props.tickSize);
		if ('titleSize' in $$props) $$invalidate(2, titleSize = $$props.titleSize);
		if ('width' in $$props) $$invalidate(3, width = $$props.width);
		if ('height' in $$props) $$invalidate(4, height = $$props.height);
		if ('marginTop' in $$props) $$invalidate(5, marginTop = $$props.marginTop);
		if ('marginRight' in $$props) $$invalidate(14, marginRight = $$props.marginRight);
		if ('marginBottom' in $$props) $$invalidate(6, marginBottom = $$props.marginBottom);
		if ('marginLeft' in $$props) $$invalidate(15, marginLeft = $$props.marginLeft);
		if ('ticks' in $$props) $$invalidate(16, ticks = $$props.ticks);
		if ('tickFormat' in $$props) $$invalidate(17, tickFormat = $$props.tickFormat);
		if ('title' in $$props) $$invalidate(7, title = $$props.title);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*scale*/ 4096) {
			// --- Compute tick-values
			$: $$invalidate(20, domain = scale.domain());
		}

		if ($$self.$$.dirty & /*ticks, domain*/ 1114112) {
			$: $$invalidate(18, tickValues = (0,d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(ticks + 1).map(i => (0,d3_array__WEBPACK_IMPORTED_MODULE_3__["default"])(domain, i / ticks)));
		}

		if ($$self.$$.dirty & /*domain, marginLeft, width, marginRight*/ 1097736) {
			$: $$invalidate(19, x_scale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_4__["default"])().domain(domain).rangeRound((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__["default"])((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_6__["default"])(marginLeft, width - marginRight), 2)));
		}

		if ($$self.$$.dirty & /*x_scale, ticks, tickFormat, tickSize, tickValues*/ 983042) {
			$: $$invalidate(9, x_axis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_7__.axisBottom)(x_scale).ticks(ticks, typeof tickFormat === "string" ? tickFormat : null).tickFormat(typeof tickFormat === "function" ? tickFormat : null).tickSize(tickSize).tickValues(tickValues));
		}

		if ($$self.$$.dirty & /*tickValues, x_scale, viewScale, scale*/ 798720) {
			$: $$invalidate(8, data = (0,d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(tickValues.length).map(i => {
				return {
					x: x_scale(tickValues[i]) + 0.5,
					r: viewScale * scale(tickValues[i])
				};
			}));
		}
	};

	return [
		shape,
		tickSize,
		titleSize,
		width,
		height,
		marginTop,
		marginBottom,
		title,
		data,
		x_axis,
		line_length,
		axis_function,
		scale,
		viewScale,
		marginRight,
		marginLeft,
		ticks,
		tickFormat,
		tickValues,
		x_scale,
		domain
	];
}

class SizeLegends extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				scale: 12,
				viewScale: 13,
				shape: 0,
				tickSize: 1,
				titleSize: 2,
				width: 3,
				height: 4,
				marginTop: 5,
				marginRight: 14,
				marginBottom: 6,
				marginLeft: 15,
				ticks: 16,
				tickFormat: 17,
				title: 7
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeLegends);

/***/ }),

/***/ "./src/legends/Swatches.svelte":
/*!*************************************!*\
  !*** ./src/legends/Swatches.svelte ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src\legends\Swatches.svelte generated by Svelte v3.46.5 */


function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-14xbfpw", ".color-swatches.svelte-14xbfpw{overflow:visible;display:block}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	child_ctx[16] = i;
	return child_ctx;
}

// (32:4) {#each domain as cat, i}
function create_each_block(ctx) {
	let rect;
	let rect_x_value;
	let rect_y_value;
	let rect_style_value;
	let text_1;
	let t_value = /*tickFormat*/ ctx[2](/*cat*/ ctx[14]) + "";
	let t;
	let text_1_x_value;
	let text_1_y_value;

	return {
		c() {
			rect = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("rect");
			text_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("text");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "x", rect_x_value = /*marginLeft*/ ctx[7] + /*i*/ ctx[16] * (/*swatchwidth*/ ctx[3] + /*swatchPadding*/ ctx[5]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "y", rect_y_value = /*marginTop*/ ctx[6] + /*titleSize*/ ctx[9]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "width", /*swatchwidth*/ ctx[3]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "height", /*swatchHeight*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "style", rect_style_value = `fill: ${/*fill*/ ctx[11](/*cat*/ ctx[14])};`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "x", text_1_x_value = /*marginLeft*/ ctx[7] + /*i*/ ctx[16] * (/*swatchwidth*/ ctx[3] + /*swatchPadding*/ ctx[5]) + /*swatchwidth*/ ctx[3] / 2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "y", text_1_y_value = /*marginTop*/ ctx[6] + /*titleSize*/ ctx[9] + /*swatchHeight*/ ctx[4] + /*swatchPadding*/ ctx[5]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "font-size", "10");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "font-family", "sans-serif");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "text-anchor", "middle");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "dominant-baseline", "hanging");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, rect, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, text_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(text_1, t);
		},
		p(ctx, dirty) {
			if (dirty & /*marginLeft, swatchwidth, swatchPadding*/ 168 && rect_x_value !== (rect_x_value = /*marginLeft*/ ctx[7] + /*i*/ ctx[16] * (/*swatchwidth*/ ctx[3] + /*swatchPadding*/ ctx[5]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "x", rect_x_value);
			}

			if (dirty & /*marginTop, titleSize*/ 576 && rect_y_value !== (rect_y_value = /*marginTop*/ ctx[6] + /*titleSize*/ ctx[9])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "y", rect_y_value);
			}

			if (dirty & /*swatchwidth*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "width", /*swatchwidth*/ ctx[3]);
			}

			if (dirty & /*swatchHeight*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "height", /*swatchHeight*/ ctx[4]);
			}

			if (dirty & /*domain*/ 1024 && rect_style_value !== (rect_style_value = `fill: ${/*fill*/ ctx[11](/*cat*/ ctx[14])};`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(rect, "style", rect_style_value);
			}

			if (dirty & /*tickFormat, domain*/ 1028 && t_value !== (t_value = /*tickFormat*/ ctx[2](/*cat*/ ctx[14]) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*marginLeft, swatchwidth, swatchPadding*/ 168 && text_1_x_value !== (text_1_x_value = /*marginLeft*/ ctx[7] + /*i*/ ctx[16] * (/*swatchwidth*/ ctx[3] + /*swatchPadding*/ ctx[5]) + /*swatchwidth*/ ctx[3] / 2)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "x", text_1_x_value);
			}

			if (dirty & /*marginTop, titleSize, swatchHeight, swatchPadding*/ 624 && text_1_y_value !== (text_1_y_value = /*marginTop*/ ctx[6] + /*titleSize*/ ctx[9] + /*swatchHeight*/ ctx[4] + /*swatchPadding*/ ctx[5])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(text_1, "y", text_1_y_value);
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(rect);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(text_1);
		}
	};
}

function create_fragment(ctx) {
	let svg;
	let g0;
	let text_1;
	let t;
	let g0_transform_value;
	let g1;
	let svg_viewBox_value;
	let each_value = /*domain*/ ctx[10];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
			g0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");
			text_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("text");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*title*/ ctx[8]);
			g1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("g");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-size", "10");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(text_1, "font-family", "sans-serif");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value = `translate(0, ${/*titleSize*/ ctx[9]})`);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "color-swatches svelte-14xbfpw");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value = [0, 0, /*width*/ ctx[0], /*height*/ ctx[1]]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[0]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(g0, text_1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(text_1, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, g1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(g1, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 256) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, /*title*/ ctx[8]);

			if (dirty & /*titleSize*/ 512 && g0_transform_value !== (g0_transform_value = `translate(0, ${/*titleSize*/ ctx[9]})`)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(g0, "transform", g0_transform_value);
			}

			if (dirty & /*marginLeft, swatchwidth, swatchPadding, marginTop, titleSize, swatchHeight, tickFormat, domain, fill*/ 3836) {
				each_value = /*domain*/ ctx[10];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(g1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*height*/ 2) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height", /*height*/ ctx[1]);
			}

			if (dirty & /*width, height*/ 3 && svg_viewBox_value !== (svg_viewBox_value = [0, 0, /*width*/ ctx[0], /*height*/ ctx[1]])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox", svg_viewBox_value);
			}

			if (dirty & /*width*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width", /*width*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let domain;
	let { scale = null } = $$props;
	let { width = 320 } = $$props;
	let { height = 45 } = $$props;
	let { tickFormat = x => x } = $$props;
	let { swatchSize = 15 } = $$props;
	let { swatchwidth = swatchSize } = $$props;
	let { swatchHeight = swatchSize } = $$props;
	let { swatchPadding = 5 } = $$props;
	let { marginTop = 5 } = $$props;
	let { marginLeft = 0 } = $$props;
	let { title = null } = $$props;
	let { titleSize = 10 } = $$props;

	function fill(c) {
		return scale(c);
	}

	$$self.$$set = $$props => {
		if ('scale' in $$props) $$invalidate(12, scale = $$props.scale);
		if ('width' in $$props) $$invalidate(0, width = $$props.width);
		if ('height' in $$props) $$invalidate(1, height = $$props.height);
		if ('tickFormat' in $$props) $$invalidate(2, tickFormat = $$props.tickFormat);
		if ('swatchSize' in $$props) $$invalidate(13, swatchSize = $$props.swatchSize);
		if ('swatchwidth' in $$props) $$invalidate(3, swatchwidth = $$props.swatchwidth);
		if ('swatchHeight' in $$props) $$invalidate(4, swatchHeight = $$props.swatchHeight);
		if ('swatchPadding' in $$props) $$invalidate(5, swatchPadding = $$props.swatchPadding);
		if ('marginTop' in $$props) $$invalidate(6, marginTop = $$props.marginTop);
		if ('marginLeft' in $$props) $$invalidate(7, marginLeft = $$props.marginLeft);
		if ('title' in $$props) $$invalidate(8, title = $$props.title);
		if ('titleSize' in $$props) $$invalidate(9, titleSize = $$props.titleSize);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*scale*/ 4096) {
			// --- Reactive part
			$: $$invalidate(10, domain = scale.domain());
		}
	};

	return [
		width,
		height,
		tickFormat,
		swatchwidth,
		swatchHeight,
		swatchPadding,
		marginTop,
		marginLeft,
		title,
		titleSize,
		domain,
		fill,
		scale,
		swatchSize
	];
}

class Swatches extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				scale: 12,
				width: 0,
				height: 1,
				tickFormat: 2,
				swatchSize: 13,
				swatchwidth: 3,
				swatchHeight: 4,
				swatchPadding: 5,
				marginTop: 6,
				marginLeft: 7,
				title: 8,
				titleSize: 9
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swatches);

/***/ }),

/***/ "./src/menu/EdgeMenu.svelte":
/*!**********************************!*\
  !*** ./src/menu/EdgeMenu.svelte ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./src/menu/color.js");
/* src\menu\EdgeMenu.svelte generated by Svelte v3.46.5 */




function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1nag3xx", ".mapping-container.svelte-1nag3xx.svelte-1nag3xx{position:absolute;top:10px;left:10px;width:170px;margin:5px;padding:5px;border:2px solid #eee;border-radius:5px;display:flex;flex-direction:column}.close-button.svelte-1nag3xx.svelte-1nag3xx{background-color:#eee;position:absolute;cursor:pointer;border:none;border-radius:50%;right:1%;top:1%;width:15px;height:15px;line-height:15px;text-align:center}.close-button.svelte-1nag3xx span.svelte-1nag3xx{top:-1px;display:inline;position:relative}input[type=\"number\"].svelte-1nag3xx.svelte-1nag3xx{border-radius:4px;background-color:#fff;border:1px solid #ccc;color:#333;height:25px;padding-left:2px}input.svelte-1nag3xx.svelte-1nag3xx{font-family:Arial;font-size:13px;line-height:normal;margin:1px;padding:1px}");
}

// (16:0) {#if visible == "edge"}
function create_if_block(ctx) {
	let div;
	let buttton;
	let t1;
	let span1;
	let t3;
	let input0;
	let t4;
	let span2;
	let t6;
	let input1;
	let div_intro;
	let div_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			buttton = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("buttton");
			buttton.innerHTML = `<span class="svelte-1nag3xx">×</span>`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span1.textContent = "Width:";
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span2.textContent = "Opacity:";
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(buttton, "class", "close-button svelte-1nag3xx");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "step", "0.1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "svelte-1nag3xx");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "max", "1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "step", "0.01");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "svelte-1nag3xx");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mapping-container svelte-1nag3xx");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, buttton);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, input0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0, /*width*/ ctx[3]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, span2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*opacity*/ ctx[4]);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(buttton, "click", /*click_handler*/ ctx[6]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input", /*input0_input_handler*/ ctx[7]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "change", /*input1_change_input_handler*/ ctx[8]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input", /*input1_change_input_handler*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*width*/ 8 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input0.value) !== /*width*/ ctx[3]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0, /*width*/ ctx[3]);
			}

			if (dirty & /*opacity*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*opacity*/ ctx[4]);
			}
		},
		i(local) {
			if (current) return;

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (div_outro) div_outro.end(1);
				div_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(div, /*receive*/ ctx[2], { key: "edge" });
				div_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(div, /*send*/ ctx[1], { key: "edge" });
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (detaching && div_outro) div_outro.end();
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*visible*/ ctx[0] == "edge" && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*visible*/ ctx[0] == "edge") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*visible*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let width = 0.3;
	let opacity = 0.2;
	let { visible } = $$props;
	let { send } = $$props;
	let { receive } = $$props;
	let { mapping = {} } = $$props;
	const click_handler = () => $$invalidate(0, visible = "");

	function input0_input_handler() {
		width = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(3, width);
	}

	function input1_change_input_handler() {
		opacity = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(4, opacity);
	}

	$$self.$$set = $$props => {
		if ('visible' in $$props) $$invalidate(0, visible = $$props.visible);
		if ('send' in $$props) $$invalidate(1, send = $$props.send);
		if ('receive' in $$props) $$invalidate(2, receive = $$props.receive);
		if ('mapping' in $$props) $$invalidate(5, mapping = $$props.mapping);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*width, opacity*/ 24) {
			$: $$invalidate(5, mapping = {
				width,
				color: (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.applyOpacity)("black", opacity)
			});
		}
	};

	return [
		visible,
		send,
		receive,
		width,
		opacity,
		mapping,
		click_handler,
		input0_input_handler,
		input1_change_input_handler
	];
}

class EdgeMenu extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				visible: 0,
				send: 1,
				receive: 2,
				mapping: 5
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EdgeMenu);

/***/ }),

/***/ "./src/menu/LayoutMenu.svelte":
/*!************************************!*\
  !*** ./src/menu/LayoutMenu.svelte ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simulation/simulation.js */ "./src/simulation/simulation.js");
/* src\menu\LayoutMenu.svelte generated by Svelte v3.46.5 */





function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1cvh307", ".mapping-container.svelte-1cvh307.svelte-1cvh307{position:absolute;top:10px;left:10px;width:170px;margin:5px;padding:5px;border:2px solid #eee;border-radius:5px;display:flex;flex-direction:column}.close-button.svelte-1cvh307.svelte-1cvh307{background-color:#eee;position:absolute;cursor:pointer;border:none;border-radius:50%;right:1%;top:1%;width:15px;height:15px;line-height:15px;text-align:center}.close-button.svelte-1cvh307 span.svelte-1cvh307{top:-1px;display:inline;position:relative}input[type=\"range\"].svelte-1cvh307.svelte-1cvh307{width:calc(100% - 16px)}");
}

// (46:0) {#if visible === "layout"}
function create_if_block(ctx) {
	let div;
	let buttton;
	let t1;
	let label0;
	let input0;
	let t2;
	let t3;
	let label1;
	let t4;
	let input1;
	let t5;
	let label2;
	let t6;
	let input2;
	let t7;
	let label3;
	let t8;
	let input3;
	let t9;
	let label4;
	let t10;
	let input4;
	let t11;
	let label5;
	let t12;
	let input5;
	let t13;
	let label6;
	let t14;
	let input6;
	let t15;
	let label7;
	let t16;
	let input7;
	let div_intro;
	let div_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			buttton = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("buttton");
			buttton.innerHTML = `<span class="svelte-1cvh307">×</span>`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\r\n      Run simulation");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Initial temperature\r\n      ");
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Link strength\r\n      ");
			input2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Link scale\r\n      ");
			input3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Repulsion strength\r\n      ");
			input4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Repulsion normalization\r\n      ");
			input5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Repulsion limit\r\n      ");
			input6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Center strength\r\n      ");
			input7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(buttton, "class", "close-button svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "checkbox");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "half");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "max", "5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "step", "0.1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "max", "2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "step", "0.01");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "min", "1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "max", "100");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "step", "5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "max", "30");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "step", "0.1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "max", "1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "step", "0.05");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "max", "1000");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "step", "5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "max", "5");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "step", "0.1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "class", "svelte-1cvh307");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "mapping-container svelte-1cvh307");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, buttton);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label0, input0);
			input0.checked = /*enabled*/ ctx[3];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label0, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label1, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label1, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*initialAlpha*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label2, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label2, input2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2, /*linkStrength*/ ctx[6]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label3, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label3, input3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3, /*linkDistanceScale*/ ctx[7]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t9);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label4, t10);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label4, input4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input4, /*repulsionStrength*/ ctx[8]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t11);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label5, t12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label5, input5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input5, /*repulsionNormalization*/ ctx[9]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t13);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label6, t14);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label6, input6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input6, /*repulsionLimit*/ ctx[10]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t15);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label7, t16);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label7, input7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input7, /*centerStrength*/ ctx[5]);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(buttton, "click", /*click_handler*/ ctx[14]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "change", /*input0_change_handler*/ ctx[15]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "change", /*input1_change_input_handler*/ ctx[16]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input", /*input1_change_input_handler*/ ctx[16]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "change", /*input2_change_input_handler*/ ctx[17]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "input", /*input2_change_input_handler*/ ctx[17]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "change", /*input3_change_input_handler*/ ctx[18]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "input", /*input3_change_input_handler*/ ctx[18]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input4, "change", /*input4_change_input_handler*/ ctx[19]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input4, "input", /*input4_change_input_handler*/ ctx[19]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input5, "change", /*input5_change_input_handler*/ ctx[20]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input5, "input", /*input5_change_input_handler*/ ctx[20]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input6, "change", /*input6_change_input_handler*/ ctx[21]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input6, "input", /*input6_change_input_handler*/ ctx[21]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input7, "change", /*input7_change_input_handler*/ ctx[22]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input7, "input", /*input7_change_input_handler*/ ctx[22])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*enabled*/ 8) {
				input0.checked = /*enabled*/ ctx[3];
			}

			if (dirty & /*initialAlpha*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*initialAlpha*/ ctx[4]);
			}

			if (dirty & /*linkStrength*/ 64) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2, /*linkStrength*/ ctx[6]);
			}

			if (dirty & /*linkDistanceScale*/ 128) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3, /*linkDistanceScale*/ ctx[7]);
			}

			if (dirty & /*repulsionStrength*/ 256) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input4, /*repulsionStrength*/ ctx[8]);
			}

			if (dirty & /*repulsionNormalization*/ 512) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input5, /*repulsionNormalization*/ ctx[9]);
			}

			if (dirty & /*repulsionLimit*/ 1024) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input6, /*repulsionLimit*/ ctx[10]);
			}

			if (dirty & /*centerStrength*/ 32) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input7, /*centerStrength*/ ctx[5]);
			}
		},
		i(local) {
			if (current) return;

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (div_outro) div_outro.end(1);
				div_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(div, /*receive*/ ctx[2], { key: "layout" });
				div_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(div, /*send*/ ctx[1], { key: "layout" });
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			if (detaching && div_outro) div_outro.end();
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*visible*/ ctx[0] === "layout" && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*visible*/ ctx[0] === "layout") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*visible*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { nodes } = $$props;
	let { edges } = $$props;
	let { nodeSizeMapping } = $$props;
	let { visible } = $$props;
	let { send } = $$props;
	let { receive } = $$props;

	// --- Internal state
	let enabled = true;

	let initialAlpha = 2;
	let centerStrength = 1;
	let linkStrength = 0.2;
	let linkDistanceScale = 30;
	let repulsionStrength = 5;
	let repulsionNormalization = 0.1;
	let repulsionLimit = 200;

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(() => {
		_simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__.simulation.destroy();
	});

	const click_handler = () => $$invalidate(0, visible = "");

	function input0_change_handler() {
		enabled = this.checked;
		$$invalidate(3, enabled);
	}

	function input1_change_input_handler() {
		initialAlpha = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(4, initialAlpha);
	}

	function input2_change_input_handler() {
		linkStrength = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(6, linkStrength);
	}

	function input3_change_input_handler() {
		linkDistanceScale = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(7, linkDistanceScale);
	}

	function input4_change_input_handler() {
		repulsionStrength = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(8, repulsionStrength);
	}

	function input5_change_input_handler() {
		repulsionNormalization = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(9, repulsionNormalization);
	}

	function input6_change_input_handler() {
		repulsionLimit = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(10, repulsionLimit);
	}

	function input7_change_input_handler() {
		centerStrength = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(5, centerStrength);
	}

	$$self.$$set = $$props => {
		if ('nodes' in $$props) $$invalidate(11, nodes = $$props.nodes);
		if ('edges' in $$props) $$invalidate(12, edges = $$props.edges);
		if ('nodeSizeMapping' in $$props) $$invalidate(13, nodeSizeMapping = $$props.nodeSizeMapping);
		if ('visible' in $$props) $$invalidate(0, visible = $$props.visible);
		if ('send' in $$props) $$invalidate(1, send = $$props.send);
		if ('receive' in $$props) $$invalidate(2, receive = $$props.receive);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*nodeSizeMapping, nodes, initialAlpha*/ 10256) {
			// --- Reactive updates
			$: if (nodeSizeMapping) {
				_simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__.simulation.nodes(nodes.map(nodeSizeMapping.size), initialAlpha);
			}
		}

		if ($$self.$$.dirty & /*edges, initialAlpha*/ 4112) {
			$: _simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__.simulation.edges(edges, initialAlpha);
		}

		if ($$self.$$.dirty & /*enabled, initialAlpha*/ 24) {
			$: _simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__.simulation.enabled(enabled, initialAlpha);
		}

		if ($$self.$$.dirty & /*centerStrength, linkStrength, linkDistanceScale, repulsionStrength, repulsionNormalization, repulsionLimit, initialAlpha*/ 2032) {
			$: _simulation_simulation_js__WEBPACK_IMPORTED_MODULE_2__.simulation.settings(
				{
					centerStrength,
					linkStrength,
					linkDistanceScale,
					repulsionStrength,
					repulsionNormalization,
					repulsionLimit
				},
				initialAlpha
			);
		}
	};

	return [
		visible,
		send,
		receive,
		enabled,
		initialAlpha,
		centerStrength,
		linkStrength,
		linkDistanceScale,
		repulsionStrength,
		repulsionNormalization,
		repulsionLimit,
		nodes,
		edges,
		nodeSizeMapping,
		click_handler,
		input0_change_handler,
		input1_change_input_handler,
		input2_change_input_handler,
		input3_change_input_handler,
		input4_change_input_handler,
		input5_change_input_handler,
		input6_change_input_handler,
		input7_change_input_handler
	];
}

class LayoutMenu extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				nodes: 11,
				edges: 12,
				nodeSizeMapping: 13,
				visible: 0,
				send: 1,
				receive: 2
			},
			add_css
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutMenu);

/***/ }),

/***/ "./src/menu/NodeMenu.svelte":
/*!**********************************!*\
  !*** ./src/menu/NodeMenu.svelte ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/mean.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/pow.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./src/menu/color.js");
/* src\menu\NodeMenu.svelte generated by Svelte v3.46.5 */






function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1o96hf8", ".mapping-container.svelte-1o96hf8.svelte-1o96hf8{position:absolute;top:10px;left:10px;width:170px;margin:5px;padding:5px;border:2px solid #eee;border-radius:5px;display:flex;flex-direction:column}.close-button.svelte-1o96hf8.svelte-1o96hf8{background-color:#eee;position:absolute;cursor:pointer;border:none;border-radius:50%;right:1%;top:1%;width:15px;height:15px;line-height:15px;text-align:center}.close-button.svelte-1o96hf8 span.svelte-1o96hf8{top:-1px;display:inline;position:relative}select.svelte-1o96hf8.svelte-1o96hf8{border-radius:4px;background-color:#fff;border:1px solid #ccc;color:#333;height:25px;width:55%}input[type=\"number\"].svelte-1o96hf8.svelte-1o96hf8{border-radius:4px;background-color:#fff;border:1px solid #ccc;color:#333;height:25px;padding-left:2px}select.svelte-1o96hf8.svelte-1o96hf8,input.svelte-1o96hf8.svelte-1o96hf8{font-family:Arial;font-size:13px;line-height:normal;margin:1px;padding:1px}.row.svelte-1o96hf8.svelte-1o96hf8{display:flex;flex-direction:row}.half.svelte-1o96hf8.svelte-1o96hf8{width:50%}.third.svelte-1o96hf8.svelte-1o96hf8{width:33%}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[47] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[50] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[47] = list[i];
	return child_ctx;
}

// (100:0) {#if visible === "node"}
function create_if_block(ctx) {
	let div7;
	let buttton;
	let t1;
	let div0;
	let b0;
	let t3;
	let label0;
	let input0;
	let t4;
	let t5;
	let label1;
	let t6;
	let select0;
	let t7;
	let label2;
	let t8;
	let select1;
	let option0;
	let option1;
	let option2;
	let t12;
	let label3;
	let t13;
	let select2;
	let t14;
	let div1;
	let span1;
	let t15;
	let span1_class_value;
	let t16;
	let t17;
	let span2;
	let t18;
	let span2_class_value;
	let t19;
	let div2;
	let input1;
	let input1_class_value;
	let input1_disabled_value;
	let t20;
	let t21;
	let input2;
	let input2_class_value;
	let input2_disabled_value;
	let t22;
	let span3;
	let t24;
	let input3;
	let t25;
	let div3;
	let b1;
	let t27;
	let label4;
	let input4;
	let t28;
	let t29;
	let label5;
	let t30;
	let select3;
	let t31;
	let div4;
	let t35;
	let div5;
	let input5;
	let t36;
	let input6;
	let t37;
	let div6;
	let input7;
	let t38;
	let input8;
	let div7_intro;
	let div7_outro;
	let current;
	let mounted;
	let dispose;
	let each_value_2 = /*columns*/ ctx[19];
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*colorMapOptions*/ ctx[18];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block0 = /*colorType*/ ctx[6] === "div" && create_if_block_2(ctx);
	let if_block1 = /*isDivergingColorType*/ ctx[17] && create_if_block_1(ctx);
	let each_value = /*columns*/ ctx[19];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			buttton = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("buttton");
			buttton.innerHTML = `<span class="svelte-1o96hf8">×</span>`;
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			b0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("b");
			b0.textContent = "Color";
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\r\n        enable");
			t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Column:\r\n      ");
			select0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Type:\r\n      ");
			select1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
			option0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			option0.textContent = "Sequential";
			option1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			option1.textContent = "Diverging";
			option2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			option2.textContent = "Categorical";
			t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Map:\r\n      ");
			select2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Min:");
			t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block0) if_block0.c();
			t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			t18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Max:");
			t19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			t21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			span3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span3.textContent = "Opacity:";
			t24 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t25 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			b1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("b");
			b1.textContent = "Size";
			t27 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			input4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t28 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\r\n        enable");
			t29 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			label5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
			t30 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Column:\r\n      ");
			select3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t31 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			div4.innerHTML = `<span class="half svelte-1o96hf8">Min:</span> 
      <span class="half svelte-1o96hf8">Max:</span>`;

			t35 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t36 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t37 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			input7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			t38 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			input8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(buttton, "class", "close-button svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(b0, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "checkbox");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "class", "svelte-1o96hf8");
			if (/*colorColumn*/ ctx[5] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => /*select0_change_handler*/ ctx[31].call(select0));
			option0.__value = "seq";
			option0.value = option0.__value;
			option1.__value = "div";
			option1.value = option1.__value;
			option2.__value = "cat";
			option2.value = option2.__value;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "class", "svelte-1o96hf8");
			if (/*colorType*/ ctx[6] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => /*select1_change_handler*/ ctx[32].call(select1));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select2, "class", "svelte-1o96hf8");
			if (/*colorMapName*/ ctx[7] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => /*select2_change_handler*/ ctx[33].call(select2));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", span1_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span2, "class", span2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", input1_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"));
			input1.disabled = input1_disabled_value = /*colorType*/ ctx[6] === "cat";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", input2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"));
			input2.disabled = input2_disabled_value = /*colorType*/ ctx[6] === "cat";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "type", "range");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "min", "0");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "max", "1");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "step", "0.01");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "class", "svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(b1, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "type", "checkbox");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input4, "class", "svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label4, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select3, "class", "svelte-1o96hf8");
			if (/*sizeColumn*/ ctx[12] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => /*select3_change_handler*/ ctx[39].call(select3));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input5, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input6, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input7, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input8, "class", "half svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input8, "type", "number");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "row svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "mapping-container svelte-1o96hf8");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div7, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, buttton);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, b0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label0, input0);
			input0.checked = /*enableColor*/ ctx[4];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label0, t4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, label1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label1, t6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label1, select0);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(select0, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0, /*colorColumn*/ ctx[5]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, label2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label2, t8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label2, select1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select1, option0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select1, option1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select1, option2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1, /*colorType*/ ctx[6]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t12);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, label3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label3, t13);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label3, select2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(select2, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select2, /*colorMapName*/ ctx[7]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t14);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t15);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t16);
			if (if_block0) if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t17);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span2, t18);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t19);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, input1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*colorDomainMin*/ ctx[8]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t20);
			if (if_block1) if_block1.m(div2, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t21);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, input2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2, /*colorDomainMax*/ ctx[9]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t22);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, span3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t24);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, input3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3, /*opacity*/ ctx[3]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t25);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, b1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t27);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, label4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label4, input4);
			input4.checked = /*enableSize*/ ctx[11];
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label4, t28);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t29);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, label5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label5, t30);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label5, select3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select3, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select3, /*sizeColumn*/ ctx[12]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t31);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div4);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t35);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, input5);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input5, /*sizeDomainMin*/ ctx[13]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t36);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, input6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input6, /*sizeDomainMax*/ ctx[14]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t37);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, input7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input7, /*sizeRangeMin*/ ctx[15]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t38);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, input8);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input8, /*sizeRangeMax*/ ctx[16]);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(buttton, "click", /*click_handler*/ ctx[29]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "change", /*input0_change_handler*/ ctx[30]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select0, "change", /*select0_change_handler*/ ctx[31]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select1, "change", /*select1_change_handler*/ ctx[32]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select2, "change", /*select2_change_handler*/ ctx[33]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input", /*input1_input_handler*/ ctx[34]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "input", /*input2_input_handler*/ ctx[36]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "change", /*input3_change_input_handler*/ ctx[37]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "input", /*input3_change_input_handler*/ ctx[37]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input4, "change", /*input4_change_handler*/ ctx[38]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select3, "change", /*select3_change_handler*/ ctx[39]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input5, "input", /*input5_input_handler*/ ctx[40]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input6, "input", /*input6_input_handler*/ ctx[41]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input7, "input", /*input7_input_handler*/ ctx[42]),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input8, "input", /*input8_input_handler*/ ctx[43])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*enableColor*/ 16) {
				input0.checked = /*enableColor*/ ctx[4];
			}

			if (dirty[0] & /*columns*/ 524288) {
				each_value_2 = /*columns*/ ctx[19];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_2(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(select0, null);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_2.length;
			}

			if (dirty[0] & /*colorColumn, columns*/ 524320) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0, /*colorColumn*/ ctx[5]);
			}

			if (dirty[0] & /*colorType*/ 64) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1, /*colorType*/ ctx[6]);
			}

			if (dirty[0] & /*colorMapOptions*/ 262144) {
				each_value_1 = /*colorMapOptions*/ ctx[18];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(select2, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty[0] & /*colorMapName, colorMapOptions*/ 262272) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select2, /*colorMapName*/ ctx[7]);
			}

			if (!current || dirty[0] & /*isDivergingColorType*/ 131072 && span1_class_value !== (span1_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", span1_class_value);
			}

			if (/*colorType*/ ctx[6] === "div") {
				if (if_block0) {
					
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, t17);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!current || dirty[0] & /*isDivergingColorType*/ 131072 && span2_class_value !== (span2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span2, "class", span2_class_value);
			}

			if (!current || dirty[0] & /*isDivergingColorType*/ 131072 && input1_class_value !== (input1_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", input1_class_value);
			}

			if (!current || dirty[0] & /*colorType*/ 64 && input1_disabled_value !== (input1_disabled_value = /*colorType*/ ctx[6] === "cat")) {
				input1.disabled = input1_disabled_value;
			}

			if (dirty[0] & /*colorDomainMin*/ 256 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input1.value) !== /*colorDomainMin*/ ctx[8]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1, /*colorDomainMin*/ ctx[8]);
			}

			if (/*isDivergingColorType*/ ctx[17]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div2, t21);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!current || dirty[0] & /*isDivergingColorType*/ 131072 && input2_class_value !== (input2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(/*isDivergingColorType*/ ctx[17] ? "third" : "half") + " svelte-1o96hf8"))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", input2_class_value);
			}

			if (!current || dirty[0] & /*colorType*/ 64 && input2_disabled_value !== (input2_disabled_value = /*colorType*/ ctx[6] === "cat")) {
				input2.disabled = input2_disabled_value;
			}

			if (dirty[0] & /*colorDomainMax*/ 512 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input2.value) !== /*colorDomainMax*/ ctx[9]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2, /*colorDomainMax*/ ctx[9]);
			}

			if (dirty[0] & /*opacity*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3, /*opacity*/ ctx[3]);
			}

			if (dirty[0] & /*enableSize*/ 2048) {
				input4.checked = /*enableSize*/ ctx[11];
			}

			if (dirty[0] & /*columns*/ 524288) {
				each_value = /*columns*/ ctx[19];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select3, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty[0] & /*sizeColumn, columns*/ 528384) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select3, /*sizeColumn*/ ctx[12]);
			}

			if (dirty[0] & /*sizeDomainMin*/ 8192 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input5.value) !== /*sizeDomainMin*/ ctx[13]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input5, /*sizeDomainMin*/ ctx[13]);
			}

			if (dirty[0] & /*sizeDomainMax*/ 16384 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input6.value) !== /*sizeDomainMax*/ ctx[14]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input6, /*sizeDomainMax*/ ctx[14]);
			}

			if (dirty[0] & /*sizeRangeMin*/ 32768 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input7.value) !== /*sizeRangeMin*/ ctx[15]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input7, /*sizeRangeMin*/ ctx[15]);
			}

			if (dirty[0] & /*sizeRangeMax*/ 65536 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input8.value) !== /*sizeRangeMax*/ ctx[16]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input8, /*sizeRangeMax*/ ctx[16]);
			}
		},
		i(local) {
			if (current) return;

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
				if (div7_outro) div7_outro.end(1);
				div7_intro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_in_transition)(div7, /*receive*/ ctx[2], { key: "node" });
				div7_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div7_intro) div7_intro.invalidate();
			div7_outro = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_out_transition)(div7, /*send*/ ctx[1], { key: "node" });
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div7);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_2, detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
			if (detaching && div7_outro) div7_outro.end();
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
		}
	};
}

// (121:8) {#each columns as col}
function create_each_block_2(ctx) {
	let option;
	let t_value = /*col*/ ctx[47] + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			option.__value = option_value_value = /*col*/ ctx[47];
			option.value = option.__value;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
		}
	};
}

// (139:8) {#each colorMapOptions as map}
function create_each_block_1(ctx) {
	let option;
	let t_value = /*map*/ ctx[50] + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			option.__value = option_value_value = /*map*/ ctx[50];
			option.value = option.__value;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*colorMapOptions*/ 262144 && t_value !== (t_value = /*map*/ ctx[50] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty[0] & /*colorMapOptions*/ 262144 && option_value_value !== (option_value_value = /*map*/ ctx[50])) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
		}
	};
}

// (147:6) {#if colorType === "div"}
function create_if_block_2(ctx) {
	let span;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			span.textContent = "Mid:";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "class", "third svelte-1o96hf8");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
		}
	};
}

// (159:6) {#if isDivergingColorType}
function create_if_block_1(ctx) {
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "third svelte-1o96hf8");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "number");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, input, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*colorDomainMid*/ ctx[10]);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input", /*input_input_handler*/ ctx[35]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*colorDomainMid*/ 1024 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(input.value) !== /*colorDomainMid*/ ctx[10]) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input, /*colorDomainMid*/ ctx[10]);
			}
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(input);
			mounted = false;
			dispose();
		}
	};
}

// (184:8) {#each columns as col}
function create_each_block(ctx) {
	let option;
	let t_value = /*col*/ ctx[47] + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			option.__value = option_value_value = /*col*/ ctx[47];
			option.value = option.__value;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*visible*/ ctx[0] === "node" && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*visible*/ ctx[0] === "node") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*visible*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let isDivergingColorType;
	let isCategoricalColorType;
	let colorMapOptions;
	let colorScale;
	let colorFunction;
	let defaultSize;
	let sizeFunction;
	let { nodes = [] } = $$props;
	let { visible } = $$props;
	let { send } = $$props;
	let { receive } = $$props;
	let { colorMapping = null } = $$props;
	let { sizeMapping = null } = $$props;
	const columns = Object.keys(nodes[0]);

	// --- Opacity state
	let opacity = 1;

	// --- Internal color state
	let enableColor = false;

	let colorColumn = Object.keys(nodes[0])[0];
	let colorType = "seq";
	let colorMapName = "Viridis";
	let colorDomainMin = 0;
	let colorDomainMax = 1;
	let colorDomainMid = 0.5;

	// Separate functions needed so that Svelte detects which variables it needs
	// to monitor...
	function _color_domain(isCategoricalColorType, column) {
		return !isCategoricalColorType
		? (0,d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes, d => d[column])
		: [0, 1];
	}

	function _color_domain_mid(isDivergingColorType, column) {
		return isDivergingColorType ? (0,d3_array__WEBPACK_IMPORTED_MODULE_3__["default"])(nodes, d => d[column]) : 0.5;
	}

	// --- Internal size state
	let enableSize = false;

	let sizeColumn = Object.keys(nodes[0])[0];
	let sizeScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_4__.sqrt)();
	let sizeDomainMin = 0;
	let sizeDomainMax = 1;
	let sizeRangeMin = 1;
	let sizeRangeMax = 3;

	// Separate functions needed so that Svelte detects which variables it needs
	// to monitor...
	function _size_domain(column) {
		return (0,d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes, d => d[column]);
	}

	const click_handler = () => $$invalidate(0, visible = "");

	function input0_change_handler() {
		enableColor = this.checked;
		$$invalidate(4, enableColor);
	}

	function select0_change_handler() {
		colorColumn = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
		$$invalidate(5, colorColumn);
		$$invalidate(19, columns);
	}

	function select1_change_handler() {
		colorType = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
		$$invalidate(6, colorType);
	}

	function select2_change_handler() {
		colorMapName = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
		(($$invalidate(7, colorMapName), $$invalidate(6, colorType)), $$invalidate(18, colorMapOptions));
		($$invalidate(18, colorMapOptions), $$invalidate(6, colorType));
	}

	function input1_input_handler() {
		colorDomainMin = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		((($$invalidate(8, colorDomainMin), $$invalidate(28, isCategoricalColorType)), $$invalidate(5, colorColumn)), $$invalidate(6, colorType));
	}

	function input_input_handler() {
		colorDomainMid = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		((($$invalidate(10, colorDomainMid), $$invalidate(17, isDivergingColorType)), $$invalidate(5, colorColumn)), $$invalidate(6, colorType));
	}

	function input2_input_handler() {
		colorDomainMax = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		((($$invalidate(9, colorDomainMax), $$invalidate(28, isCategoricalColorType)), $$invalidate(5, colorColumn)), $$invalidate(6, colorType));
	}

	function input3_change_input_handler() {
		opacity = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(3, opacity);
	}

	function input4_change_handler() {
		enableSize = this.checked;
		$$invalidate(11, enableSize);
	}

	function select3_change_handler() {
		sizeColumn = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
		$$invalidate(12, sizeColumn);
		$$invalidate(19, columns);
	}

	function input5_input_handler() {
		sizeDomainMin = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		($$invalidate(13, sizeDomainMin), $$invalidate(12, sizeColumn));
	}

	function input6_input_handler() {
		sizeDomainMax = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		($$invalidate(14, sizeDomainMax), $$invalidate(12, sizeColumn));
	}

	function input7_input_handler() {
		sizeRangeMin = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(15, sizeRangeMin);
	}

	function input8_input_handler() {
		sizeRangeMax = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
		$$invalidate(16, sizeRangeMax);
	}

	$$self.$$set = $$props => {
		if ('nodes' in $$props) $$invalidate(22, nodes = $$props.nodes);
		if ('visible' in $$props) $$invalidate(0, visible = $$props.visible);
		if ('send' in $$props) $$invalidate(1, send = $$props.send);
		if ('receive' in $$props) $$invalidate(2, receive = $$props.receive);
		if ('colorMapping' in $$props) $$invalidate(20, colorMapping = $$props.colorMapping);
		if ('sizeMapping' in $$props) $$invalidate(21, sizeMapping = $$props.sizeMapping);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*colorType*/ 64) {
			$: $$invalidate(17, isDivergingColorType = colorType === "div");
		}

		if ($$self.$$.dirty[0] & /*colorType*/ 64) {
			$: $$invalidate(28, isCategoricalColorType = colorType === "cat");
		}

		if ($$self.$$.dirty[0] & /*colorType*/ 64) {
			$: $$invalidate(18, colorMapOptions = Object.keys(_color_js__WEBPACK_IMPORTED_MODULE_1__.colormapFactories[colorType]));
		}

		if ($$self.$$.dirty[0] & /*colorType, colorMapOptions*/ 262208) {
			$: $$invalidate(7, colorMapName = colorType === "seq"
			? "Viridis"
			: Object.keys(colorMapOptions)[0]);
		}

		if ($$self.$$.dirty[0] & /*colorType, colorMapName*/ 192) {
			$: $$invalidate(26, colorScale = _color_js__WEBPACK_IMPORTED_MODULE_1__.colormapFactories[colorType][colorMapName]());
		}

		if ($$self.$$.dirty[0] & /*isCategoricalColorType, colorColumn*/ 268435488) {
			$: $$invalidate(8, [colorDomainMin, colorDomainMax] = _color_domain(isCategoricalColorType, colorColumn), colorDomainMin, ((($$invalidate(9, colorDomainMax), $$invalidate(28, isCategoricalColorType)), $$invalidate(5, colorColumn)), $$invalidate(6, colorType)));
		}

		if ($$self.$$.dirty[0] & /*isDivergingColorType, colorColumn*/ 131104) {
			$: $$invalidate(10, colorDomainMid = _color_domain_mid(isDivergingColorType, colorColumn));
		}

		if ($$self.$$.dirty[0] & /*colorType, colorScale, colorDomainMin, colorDomainMax, colorDomainMid, nodes, colorColumn*/ 71305056) {
			$: switch (colorType) {
				case "seq":
					$$invalidate(26, colorScale = colorScale.domain([colorDomainMin, colorDomainMax]));
					break;
				case "div":
					$$invalidate(26, colorScale = colorScale.domain([colorDomainMin, colorDomainMid, colorDomainMax]));
					break;
				case "cat":
					$$invalidate(26, colorScale = colorScale.domain([...new Set(nodes.map(d => d[colorColumn]))]));
					break;
			}
		}

		if ($$self.$$.dirty[0] & /*colorScale, colorColumn, opacity*/ 67108904) {
			$: $$invalidate(27, colorFunction = d => (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.applyOpacity)(colorScale(d[colorColumn]), opacity));
		}

		if ($$self.$$.dirty[0] & /*enableColor, colorColumn, colorFunction, opacity, colorScale, colorType*/ 201326712) {
			// --- Exported mapping object
			$: $$invalidate(20, colorMapping = {
				title: enableColor ? colorColumn : null,
				color: enableColor
				? colorFunction
				: () => (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.applyOpacity)("skyblue", opacity),
				scale: colorScale,
				type: colorType
			});
		}

		if ($$self.$$.dirty[0] & /*sizeColumn*/ 4096) {
			$: $$invalidate(13, [sizeDomainMin, sizeDomainMax] = _size_domain(sizeColumn), sizeDomainMin, ($$invalidate(14, sizeDomainMax), $$invalidate(12, sizeColumn)));
		}

		if ($$self.$$.dirty[0] & /*sizeScale, sizeDomainMin, sizeDomainMax*/ 8413184) {
			$: $$invalidate(23, sizeScale = sizeScale.domain([sizeDomainMin, sizeDomainMax]));
		}

		if ($$self.$$.dirty[0] & /*sizeRangeMax, sizeRangeMin*/ 98304) {
			$: $$invalidate(24, defaultSize = (sizeRangeMax + sizeRangeMin) / 2);
		}

		if ($$self.$$.dirty[0] & /*sizeScale, sizeRangeMin, sizeRangeMax*/ 8486912) {
			$: $$invalidate(23, sizeScale = sizeScale.range([sizeRangeMin, sizeRangeMax]));
		}

		if ($$self.$$.dirty[0] & /*sizeScale, sizeColumn*/ 8392704) {
			$: $$invalidate(25, sizeFunction = d => sizeScale(d[sizeColumn]));
		}

		if ($$self.$$.dirty[0] & /*enableSize, sizeColumn, sizeFunction, defaultSize, sizeScale*/ 58726400) {
			// --- Exported mapping object
			$: $$invalidate(21, sizeMapping = {
				title: enableSize ? sizeColumn : null,
				size: enableSize ? sizeFunction : _ => defaultSize,
				scale: sizeScale
			});
		}
	};

	return [
		visible,
		send,
		receive,
		opacity,
		enableColor,
		colorColumn,
		colorType,
		colorMapName,
		colorDomainMin,
		colorDomainMax,
		colorDomainMid,
		enableSize,
		sizeColumn,
		sizeDomainMin,
		sizeDomainMax,
		sizeRangeMin,
		sizeRangeMax,
		isDivergingColorType,
		colorMapOptions,
		columns,
		colorMapping,
		sizeMapping,
		nodes,
		sizeScale,
		defaultSize,
		sizeFunction,
		colorScale,
		colorFunction,
		isCategoricalColorType,
		click_handler,
		input0_change_handler,
		select0_change_handler,
		select1_change_handler,
		select2_change_handler,
		input1_input_handler,
		input_input_handler,
		input2_input_handler,
		input3_change_input_handler,
		input4_change_handler,
		select3_change_handler,
		input5_input_handler,
		input6_input_handler,
		input7_input_handler,
		input8_input_handler
	];
}

class NodeMenu extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				nodes: 22,
				visible: 0,
				send: 1,
				receive: 2,
				colorMapping: 20,
				sizeMapping: 21
			},
			add_css,
			[-1, -1]
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeMenu);

/***/ }),

/***/ "./node_modules/two-product/two-product.js":
/*!*************************************************!*\
  !*** ./node_modules/two-product/two-product.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = twoProduct

var SPLITTER = +(Math.pow(2, 27) + 1.0)

function twoProduct(a, b, result) {
  var x = a * b

  var c = SPLITTER * a
  var abig = c - a
  var ahi = c - abig
  var alo = a - ahi

  var d = SPLITTER * b
  var bbig = d - b
  var bhi = d - bbig
  var blo = b - bhi

  var err1 = x - (ahi * bhi)
  var err2 = err1 - (alo * bhi)
  var err3 = err2 - (ahi * blo)

  var y = alo * blo - err3

  if(result) {
    result[0] = y
    result[1] = x
    return result
  }

  return [ y, x ]
}

/***/ }),

/***/ "./node_modules/two-sum/two-sum.js":
/*!*****************************************!*\
  !*** ./node_modules/two-sum/two-sum.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


module.exports = fastTwoSum

function fastTwoSum(a, b, result) {
	var x = a + b
	var bv = x - a
	var av = x - bv
	var br = b - bv
	var ar = a - av
	if(result) {
		result[0] = ar + br
		result[1] = x
		return result
	}
	return [ar+br, x]
}

/***/ }),

/***/ "./src/assets/edge.png":
/*!*****************************!*\
  !*** ./src/assets/edge.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHIUExURQAAANDQ0L29vbS0tK6urqWlpZ2dnbGxsbu7u8LCwo2NjWlpaUdHR0VFRUJCQkNDQ0REREtLS4+Pj8HBwaKiomVlZUFBQV9fX5+fn7Kysm1tbUlJST8/P0ZGRkBAQD4+Pmpqare3t05OTldXV7q6us/Pz1FRUUhISGJiYmZmZnNzc5CQkGhoaLa2trm5uZmZmZiYmIGBgXx8fJycnFlZWXFxcYeHh5SUlIODg46Ojl5eXpaWlmBgYIuLi3Z2dm9vb25ubs3NzVJSUlVVVaqqqqioqL+/v8DAwE1NTaurq6enp3BwcIaGhoqKinJycqOjozw8PGNjY5OTk2tra56entHR0c7OzlhYWLW1ta+vr6SkpKGhoVpaWry8vMzMzJeXl5qammdnZ0pKSoyMjJubm6CgoGxsbImJiampqbCwsE9PT8PDw1NTU4iIiHp6elxcXHt7e4WFhXR0dKampq2trVBQUH9/f2RkZLi4uMbGxn5+fsTExISEhMXFxV1dXcjIyJWVlcvLy4CAgHd3d1ZWVsrKyltbW1RUVH19fXV1ddLS0j09PXl5eZKSkpGRkb6+vkxMTHh4eMnJyYKCgtPT02FhYcfHxwAAALCZIPwAAACYdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AxWnMuQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAHHpJREFUeF7tnYufHEW1x29AA8GuRwBLQrpqSSQZwRAwDx7yBiEqz2gggMQLAeSCwYCIiFwQFBGJPHzd+XfvOTVnu3t3ZnZ7dke2Zs/vG9jHVHfDJ/XtqlPv/xoC1UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA5UAA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");

/***/ }),

/***/ "./src/assets/layout.png":
/*!*******************************!*\
  !*** ./src/assets/layout.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLUExURQAAAJ+fn2FhYVtbW1JSUkpKSkREREVFRUdHR1NTU1xcXGpqar+/v5mZmVlZWUNDQ0FBQUBAQE5OTmRkZJycnFpaWktLS0JCQm9vb6KiolRUVD8/P0lJSWZmZqWlpVdXV0hISJKSkkZGRj09PYSEhKOjoz4+PmJiYl5eXpqaml9fX4ODg46OjmBgYHp6er6+vmtra09PT3d3d5eXl3t7e8DAwE1NTXJycqampm5ubo+Pj1BQUJGRkUxMTHl5edHR0ZCQkIiIiHFxcZSUlIGBgWlpaY2NjWxsbMzMzKSkpFVVVVhYWHNzc4WFhbS0tF1dXWhoaICAgGdnZ56enouLi7GxsZ2dnaioqLy8vM7OzomJiW1tbWVlZWNjY4eHh6GhoXZ2dlZWVpaWlnx8fLi4uH19fXR0dIqKiq6urrOzs6+vr1FRUZubm3V1dZOTk4yMjH9/f4aGhru7u6mpqTw8PLCwsK2trba2ts/Pz3h4eJWVlaenp7e3t6urq7q6unBwcIKCgqqqqn5+frm5uaCgoMbGxsLCwsvLy8XFxcrKytDQ0L29vcTExMPDw7W1tbKyssjIyMHBwc3NzcnJycfHx5iYmKysrDo6OgAAABFF0goAAACZdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////APNecBsAAAAJcEhZcwAADsMAAA7DAcdvqGQAAGg0SURBVHhe7b2LgxxFuT78kexUVYKkqzZmCrcnpq3lTCL3FV2PLEsAATEBgxE5KBcJCqgBFQ8eET1ejyJ4R/Q3f+73PDXvdvfuzq1ne66ZR0w21Zft7nrqvdVbb/1/nRVuaKwIcINjRYAbHCsC3OBYEeAGx4oANzhWBLjBsSLADY4VAW5wrAhwg2NFgBscKwLc4FgR4AbHigA3OFYEuMGxIsANjhUBbnCsCHCDY0WAGxwr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");

/***/ }),

/***/ "./src/assets/node.png":
/*!*****************************!*\
  !*** ./src/assets/node.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9UExURQAAAM7OzsfHx7m5ubOzs6KiosXFxZ6enoGBgWpqakpKSkZGRkJCQkNDQ8jIyJmZmWVlZT09PUVFRUhISD8/P0RERMPDw3l5eUFBQUlJSXt7e8/Pz42NjU5OTkdHR0BAQFFRUY+Pj9DQ0MDAwGdnZz4+PktLS2hoaMLCwre3t2FhYV9fX76+vldXV1paWnR0dJqamkxMTJiYmFxcXFZWVq6urn9/f4WFhV1dXcTExL+/v1NTU3Nzc4iIiIqKipGRkaCgoJ+fn5OTk4yMjIaGhm9vb1JSUrGxsW5ubrS0tHBwcHp6eru7u21tbczMzHJycltbW2BgYICAgLW1tVVVVba2tlRUVK+vr5WVlVBQUJubm01NTX19fby8vH5+fr29vV5eXsvLy09PT3x8fDw8PJ2dnWlpaaGhodHR0c3NzXFxccbGxomJibKyspCQkLi4uIuLi6SkpGNjY5SUlFhYWHh4eJKSkpeXl6enp4ODg3Z2dqysrKioqFlZWQAAAGTMJjUAAAB/dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD/4TwJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAARCklEQVR4Xu2d+58cRbmHNSSQpKpyqenCIoFpIG4IlwiIHIFw0xiEAGJMIqKCelRuHs85Xs/x1n+779vz7nRvNiE7u83nM/N+v0/Ispm3p/qHevqtS1dXf6Uj0FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAgyjAVw/dc/jIkcP3HPqqfYAMlAD33nf02PEQY0pR0J/h+LGj991rYUhgBDhx8lQ4nWdNKFLz28QSmlk+HU6dPGGHwYEhwP1fy7nkUmPJSes/plLsl1xilVB+4Mz9djAWAAKcffChWuea86Wy2/76X+T//re2l0IagxoffuRR+woQ7gU49/WYU3N8q5Ra5bIv/WVv1a9/5aM+0p7fqqk+dsG+BoNzAR5/IoUmxdzONenL9V77ui8lRm0ExICqOUHNaHLONccnH7evguBagKcuhjZWaeBjaftLvki6VwNUBpVA/pH1d/mollhSlp/5G0/Z1yHwLMDTco1L3ctV3nf6+mtfL39N/Vr5/a/9R30O0H+XGLZCedoKQMCvAM88u7Wo9pUpzflvWiH+cSvAc6EJoZ/uWQ3pJOTclG9ZMe5xKsDzz0pjH2vMK6cAaQW0o5jS81aUc3wK8B+L+d5+0LcqUTKAeBDKt60w37gU4AXt+vW9vqq9/pXQzmAsuUrr8YQV5xqPApSYal+POWs6X40qA8PaDx1CvGgFesafAGd1OJ/73t/KPUCh1FazQFYN6vEXrVC/uBPgpdDqFE+WNLB6D1BZTBMkbURC88BhK9Yt3gS4YNW4JDQlhtTmmHVWSPoE8dLLr7z62uvf+e7l7115o2/z+95ilh+N/LiV71vBXvEmwO4alC5dk2ZRMvo8pWNH7LglR97MEm1SKwOHueQO+9aSufPbQ84E2J31ZUAgnzVy9c+u3CGfv3V1VkOoUvdV8sQttOftKKf4EmCet6zelsQqNSv1+/Y7dsxteeeMpAhpHsquUUMpz9oxPnElgFzBkuZvQRJAzu/+wA65M+/NSyt5wr61RFqQF+wIl3gS4NuS7nf3ASSx/3BPq70uXAu36QO0ubY/siM84kiA67EtOgG0kxhv3LQD7srNH+8WIIc033rfDnCIIwHmMpi7TQZ4xMJ74if2pRFR2pVoYYf4EeAFXfwxZAAd/ccU0ooX7/U0r7XkoS8YYmlLqRb2hxsBnslS46MFIDHr0O+Du3f+buHRGyWUdugM2oqhn1rYHW4E+NnpfgZ4WXH9Er993c+7ptODS5Oi9AxTLcGC7vAiwNttkPof9QCk/uvPLbgiZ9o0zAfEWmpI+XSxoDecCPDhlt7Cz/0S0AXSB/jIgivzUR4yQK66VFj6gb+woDOcCHAx6NLfPu8b5SDrOa6NBJA/klqkY2gxZ/gQ4PF+QX/vwDbxksX2xaVlE9A/UJAlvSSfT4z4EOCXMvzTG/ijmcD8K4vti18FK0YGFppWapbSLeYLFwKci0PqD1Gabfn/ASfv3pci9O7QUgTpXpyzmCtcCPBYGARoJAfUlC9baN9clhZFGpLGik26WMRCrvAgwNnYDrfxg97SrzcsdABuSP3r5JIRYk0enx73IIBcrEMG0Mngkq9b6ABc18Ulw3yAPjz6oIU84UGAD3Z0/hqptecsciCeE5eaZWqRzmD9T4t4woEAF9LpPFrJU3PNk6zmflHngKxQEUCamfqShRzhQIC366wdaqqGmq9Y5IBcyVKYFSsZoJnVX1vEEQ4EmEulD6k6lRgn6qw9OhpdSh9AmpnjFnHE5gtwIktyHioqztMZixyYM2k+zC2WJCfyt5vc5gvwjFz8o0s1t/FDixyYD0fjS0ksUvgzFvHD5gtwSup/dP8+1Qnz9PFRJ1AUSOmUBfyw+QLoPj+jlUB1dtUCE3B1NjJAc4C/+wEbL8CLv5Haj/JnmzLh03zfH/Ut5E8pv3H3uPDGC/BbqaPxRFCadMbeihTkFHqm31rADRsvwFHN0uPFoMcsMAnHRplFzlFnRy3gho0X4ONYdUOgpQH5EwtMwifDKEC6GqHGjy3gho0XYHv/f6unaVuA7tNluYuzBHdTQRsvwI79/xX7fCKsUCP6Wx6+8QL0/f9RE3CgpYC7ecOK1SZAfvpbFLLpAnzWX/+jFuBlC0zE51bs9jniZxbwwqYL8DutFPvb818WmIhXrNjlSX5nAS9sugDvSLXoDM1SgFctMBGXrVhp/nUckNIXbjSygWy6AL/XuhlPBf+3BSbiNStW5wH6RuD3FvDCpgtwRPt/UjHLDDDpNEDXvW7FLs4hp9q1zdiGs+kCfCK1olfmUoDXLTAROwSIFGDtOKx1wyZg/2y6AP+j9T++F/C/FpiIZSdQz8FO4Pqhw0Bl2QR8mcNAhcPA9eLLngi6asVun4MTQetGXy9D/ac37POJeNiKFfoTudsvbOMF+JJvBg2dC4U3g9YPvR0stbS0YOJVe1ZqfwIZBvB28NrxsdSKjgOsnlL6gwUm4Q9WqNS+pH85EReErBu7loS9a4FJeHdoX/QcXBK2fvSLQvs1+wvKpG3AYNbi2QMuCl07bFn4QJxgb4Btru8oWOTisvD1QxvnURNQ84QzAS+Pnw/ngyHriT4apq2AUaZ8x8v5dii3Pw0fDVs/bnk4NLTtZHt6/qJth+3idMaJD4euISdyMzQA0gTMm31vEXsrHzXzoQkQBxo+Hr6O6AYRo23CpK22wIEZ9y1yE2KeWcARDgTot4hZdtfjPJbPLXJAPi9SmBWbYq6zONnWE+uDAwF2bhJVmphme3pJ1N24f5bi0LrUEk4nhy+RdCDAzm3iYg6p+aNFDsQfmxRGmSWnwm3i1pMdG0W2uZYSJnjn8+FQSs2tFatzjXni1UZrgQcBdmwVW0pp2yne/H8xtq0UZsXK+LLGsxbyhAcBuo/DMlNLrtZX/YU/WWjf/EkKkcxihWoGCO7uBCouBDi3WK61IOb+3UF7flvk7bkpBY3fQaUTQdwufm25Jp0AvSMwekQsHGi3yE9HM4B6E0B6A/GXFvOFDwGu69uidBOfoTOY/myxfXFxOayMKdbF2yP5ypg15qL02PtdnJbE9KTF9sE13Sp+QZX+ZSlNnh9IqPXFiQAf6qtipNKG27cl5YO8Nm6JFKujzFKfsqAznAjQXWl02L6jL7jvF0f+uo36upgFOscY03zrLxb0hhcBunnVi3U0ISD/LtcsuBLXdGJxaE20aYlTLjJYL9wI8FedARy/OTS3KaQPVn6Q59NLOaRhHYig24SX/7OwO9wI0N1IoYmjFzy0+vr4vOrr427mHKsUMzJAB4ETzCyuKX4E6GqW0fpSgCWPWHhP/MS+NBD7tOLxfWELHAnwvlb+qP9uxBt7nhS8+eNbnzPTJWaSEf7fDnCIIwG6v7WhLO/ebSO5vH5jT/fxL1yTgYR9a6DJcf53O8IjngTo9A3yVm8DUqk5v/sDO+TOvDcv7Xjy35jHKW4tri+uBOguje8KLYi1yqg+hLe/cGuPd87odL80+Lv6EO10SwzXEl8CdA/tEkC6cEXXieU4u3KHZSJvXZ2JITqLJCnAvrYkVDvKKc4EOHSbTmAsTZnJtR3nKR3btcnXkTdzmsUmtSHKAbs7gdXlTeABZwJ0163elgTpxYXYFLm2JQtomr/08iuvvvb6d757+XtX3ug7iTqFKJlC1/3vqv+pN5xYO7wJ0B2W+m5rXjwwepte/V3pv6ndhhLnNf7DinWLOwG6e+c5zbeKtAUl1fGM3t4otdWskOetWnCvFeoXfwJ03QOLtbyxigW7ZwbvQk1ZVwClWprwgBXoGY8CdD/UWWGpQ8nlq2eAvtuY67yd37DiXONSgO4juYB1FUdcOQFo85/75qN4nv8b8ClA9/xc8nisOgewIgtrZEjwTyvKOU4F6Lo/50Y7giunAOk+ZPnqtz61crzjVoDu5LP6ZOfKGUAozflvWiH+8StA1z0t/YB+jZD0Bvu2IEb9TxqH/lft7NlHmvn7vJ9TkMTxnhWAgGcBuqcu6t38rEs6Wq3mUrR/pxWvuaEXQfJ9X/dymOiQa4nhXy/Z1yFwLUDXPf6EXNKSB9q5XuPSv9MO3iIfyF81oEpPUX/PTci5zfVJn89/3BHnAnTdua/HnJrjW6XUWiQZyEWv9Fe/Ih9ppLTnt2qqjzncAuKLcS9A15198KFa5/rEaC6x7Steq3+hgHwgUkgw1PjwI36X/t0RAAGE+78mjX+fAxYN/6Lu9a8+8yOfpjw7M8m+MhsHhgDCiZOn8uk8a3a8XyCW0Mzk41Mn/e3/tkdgBFBevO/ose33C4gGkg3C8WNH73O3/+8qQAlgfHbonsNHjhy+55C39//sB0QByAgKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAcCgAOBQAHAoADgUAhwKAQwHAoQDgUABwKAA4FAAcCgAOBQCHAoBDAcChAOBQAHAoADgUABwKAA4FAIcCgEMBwKEA4FAAaLru324sZzuODQfXAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/network/neighbors.worker.js":
/*!*****************************************!*\
  !*** ./src/network/neighbors.worker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../node_modules/worker-loader/dist/runtime/inline.js */ "./node_modules/worker-loader/dist/runtime/inline.js");
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__);



function Worker_fn() {
  return _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default()("/******/ (() => { // webpackBootstrap\nvar __webpack_exports__ = {};\n/*!*****************************************!*\\\n  !*** ./src/network/neighbors.worker.js ***!\n  \\*****************************************/\nself.onmessage = (message) => {\r\n  const edges = message.data.edges;\r\n\r\n  self.postMessage({\r\n    neighbours: edges.reduce((agg, l) => {\r\n      agg[l.target] = [l.source, ...(agg[l.target] || [])];\r\n      agg[l.source] = [l.target, ...(agg[l.source] || [])];\r\n      return agg;\r\n    }, {}),\r\n  });\r\n};\r\n\n/******/ })()\n;\n//# sourceMappingURL=neighbors.worker.worker.js.map", "Worker", undefined, __webpack_require__.p + "neighbors.worker.worker.js");
}


/***/ }),

/***/ "./src/simulation/layout.worker.js":
/*!*****************************************!*\
  !*** ./src/simulation/layout.worker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../node_modules/worker-loader/dist/runtime/inline.js */ "./node_modules/worker-loader/dist/runtime/inline.js");
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__);



function Worker_fn() {
  return _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default()("/******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./node_modules/d3-dispatch/src/dispatch.js\":\n/*!**************************************************!*\\\n  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!\n  \\**************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar noop = {value: () => {}};\n\nfunction dispatch() {\n  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {\n    if (!(t = arguments[i] + \"\") || (t in _) || /[\\s.]/.test(t)) throw new Error(\"illegal type: \" + t);\n    _[t] = [];\n  }\n  return new Dispatch(_);\n}\n\nfunction Dispatch(_) {\n  this._ = _;\n}\n\nfunction parseTypenames(typenames, types) {\n  return typenames.trim().split(/^|\\s+/).map(function(t) {\n    var name = \"\", i = t.indexOf(\".\");\n    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);\n    if (t && !types.hasOwnProperty(t)) throw new Error(\"unknown type: \" + t);\n    return {type: t, name: name};\n  });\n}\n\nDispatch.prototype = dispatch.prototype = {\n  constructor: Dispatch,\n  on: function(typename, callback) {\n    var _ = this._,\n        T = parseTypenames(typename + \"\", _),\n        t,\n        i = -1,\n        n = T.length;\n\n    // If no callback was specified, return the callback of the given type and name.\n    if (arguments.length < 2) {\n      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;\n      return;\n    }\n\n    // If a type was specified, set the callback for the given type and name.\n    // Otherwise, if a null callback was specified, remove callbacks of the given name.\n    if (callback != null && typeof callback !== \"function\") throw new Error(\"invalid callback: \" + callback);\n    while (++i < n) {\n      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);\n      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);\n    }\n\n    return this;\n  },\n  copy: function() {\n    var copy = {}, _ = this._;\n    for (var t in _) copy[t] = _[t].slice();\n    return new Dispatch(copy);\n  },\n  call: function(type, that) {\n    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];\n    if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);\n  },\n  apply: function(type, that, args) {\n    if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);\n  }\n};\n\nfunction get(type, name) {\n  for (var i = 0, n = type.length, c; i < n; ++i) {\n    if ((c = type[i]).name === name) {\n      return c.value;\n    }\n  }\n}\n\nfunction set(type, name, callback) {\n  for (var i = 0, n = type.length; i < n; ++i) {\n    if (type[i].name === name) {\n      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));\n      break;\n    }\n  }\n  if (callback != null) type.push({name: name, value: callback});\n  return type;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/center.js\":\n/*!*********************************************!*\\\n  !*** ./node_modules/d3-force/src/center.js ***!\n  \\*********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {\n  var nodes, strength = 1;\n\n  if (x == null) x = 0;\n  if (y == null) y = 0;\n\n  function force() {\n    var i,\n        n = nodes.length,\n        node,\n        sx = 0,\n        sy = 0;\n\n    for (i = 0; i < n; ++i) {\n      node = nodes[i], sx += node.x, sy += node.y;\n    }\n\n    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i) {\n      node = nodes[i], node.x -= sx, node.y -= sy;\n    }\n  }\n\n  force.initialize = function(_) {\n    nodes = _;\n  };\n\n  force.x = function(_) {\n    return arguments.length ? (x = +_, force) : x;\n  };\n\n  force.y = function(_) {\n    return arguments.length ? (y = +_, force) : y;\n  };\n\n  force.strength = function(_) {\n    return arguments.length ? (strength = +_, force) : strength;\n  };\n\n  return force;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/collide.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-force/src/collide.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ \"./node_modules/d3-quadtree/src/quadtree.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-force/src/constant.js\");\n/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ \"./node_modules/d3-force/src/jiggle.js\");\n\n\n\n\nfunction x(d) {\n  return d.x + d.vx;\n}\n\nfunction y(d) {\n  return d.y + d.vy;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(radius) {\n  var nodes,\n      radii,\n      random,\n      strength = 1,\n      iterations = 1;\n\n  if (typeof radius !== \"function\") radius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(radius == null ? 1 : +radius);\n\n  function force() {\n    var i, n = nodes.length,\n        tree,\n        node,\n        xi,\n        yi,\n        ri,\n        ri2;\n\n    for (var k = 0; k < iterations; ++k) {\n      tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nodes, x, y).visitAfter(prepare);\n      for (i = 0; i < n; ++i) {\n        node = nodes[i];\n        ri = radii[node.index], ri2 = ri * ri;\n        xi = node.x + node.vx;\n        yi = node.y + node.vy;\n        tree.visit(apply);\n      }\n    }\n\n    function apply(quad, x0, y0, x1, y1) {\n      var data = quad.data, rj = quad.r, r = ri + rj;\n      if (data) {\n        if (data.index > node.index) {\n          var x = xi - data.x - data.vx,\n              y = yi - data.y - data.vy,\n              l = x * x + y * y;\n          if (l < r * r) {\n            if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(random), l += x * x;\n            if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(random), l += y * y;\n            l = (r - (l = Math.sqrt(l))) / l * strength;\n            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));\n            node.vy += (y *= l) * r;\n            data.vx -= x * (r = 1 - r);\n            data.vy -= y * r;\n          }\n        }\n        return;\n      }\n      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;\n    }\n  }\n\n  function prepare(quad) {\n    if (quad.data) return quad.r = radii[quad.data.index];\n    for (var i = quad.r = 0; i < 4; ++i) {\n      if (quad[i] && quad[i].r > quad.r) {\n        quad.r = quad[i].r;\n      }\n    }\n  }\n\n  function initialize() {\n    if (!nodes) return;\n    var i, n = nodes.length, node;\n    radii = new Array(n);\n    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);\n  }\n\n  force.initialize = function(_nodes, _random) {\n    nodes = _nodes;\n    random = _random;\n    initialize();\n  };\n\n  force.iterations = function(_) {\n    return arguments.length ? (iterations = +_, force) : iterations;\n  };\n\n  force.strength = function(_) {\n    return arguments.length ? (strength = +_, force) : strength;\n  };\n\n  force.radius = function(_) {\n    return arguments.length ? (radius = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+_), initialize(), force) : radius;\n  };\n\n  return force;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/constant.js\":\n/*!***********************************************!*\\\n  !*** ./node_modules/d3-force/src/constant.js ***!\n  \\***********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return function() {\n    return x;\n  };\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/jiggle.js\":\n/*!*********************************************!*\\\n  !*** ./node_modules/d3-force/src/jiggle.js ***!\n  \\*********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(random) {\n  return (random() - 0.5) * 1e-6;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/lcg.js\":\n/*!******************************************!*\\\n  !*** ./node_modules/d3-force/src/lcg.js ***!\n  \\******************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use\nconst a = 1664525;\nconst c = 1013904223;\nconst m = 4294967296; // 2^32\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  let s = 1;\n  return () => (s = (a * s + c) % m) / m;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/link.js\":\n/*!*******************************************!*\\\n  !*** ./node_modules/d3-force/src/link.js ***!\n  \\*******************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-force/src/constant.js\");\n/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ \"./node_modules/d3-force/src/jiggle.js\");\n\n\n\nfunction index(d) {\n  return d.index;\n}\n\nfunction find(nodeById, nodeId) {\n  var node = nodeById.get(nodeId);\n  if (!node) throw new Error(\"node not found: \" + nodeId);\n  return node;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(links) {\n  var id = index,\n      strength = defaultStrength,\n      strengths,\n      distance = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(30),\n      distances,\n      nodes,\n      count,\n      bias,\n      random,\n      iterations = 1;\n\n  if (links == null) links = [];\n\n  function defaultStrength(link) {\n    return 1 / Math.min(count[link.source.index], count[link.target.index]);\n  }\n\n  function force(alpha) {\n    for (var k = 0, n = links.length; k < iterations; ++k) {\n      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {\n        link = links[i], source = link.source, target = link.target;\n        x = target.x + target.vx - source.x - source.vx || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(random);\n        y = target.y + target.vy - source.y - source.vy || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(random);\n        l = Math.sqrt(x * x + y * y);\n        l = (l - distances[i]) / l * alpha * strengths[i];\n        x *= l, y *= l;\n        target.vx -= x * (b = bias[i]);\n        target.vy -= y * b;\n        source.vx += x * (b = 1 - b);\n        source.vy += y * b;\n      }\n    }\n  }\n\n  function initialize() {\n    if (!nodes) return;\n\n    var i,\n        n = nodes.length,\n        m = links.length,\n        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),\n        link;\n\n    for (i = 0, count = new Array(n); i < m; ++i) {\n      link = links[i], link.index = i;\n      if (typeof link.source !== \"object\") link.source = find(nodeById, link.source);\n      if (typeof link.target !== \"object\") link.target = find(nodeById, link.target);\n      count[link.source.index] = (count[link.source.index] || 0) + 1;\n      count[link.target.index] = (count[link.target.index] || 0) + 1;\n    }\n\n    for (i = 0, bias = new Array(m); i < m; ++i) {\n      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);\n    }\n\n    strengths = new Array(m), initializeStrength();\n    distances = new Array(m), initializeDistance();\n  }\n\n  function initializeStrength() {\n    if (!nodes) return;\n\n    for (var i = 0, n = links.length; i < n; ++i) {\n      strengths[i] = +strength(links[i], i, links);\n    }\n  }\n\n  function initializeDistance() {\n    if (!nodes) return;\n\n    for (var i = 0, n = links.length; i < n; ++i) {\n      distances[i] = +distance(links[i], i, links);\n    }\n  }\n\n  force.initialize = function(_nodes, _random) {\n    nodes = _nodes;\n    random = _random;\n    initialize();\n  };\n\n  force.links = function(_) {\n    return arguments.length ? (links = _, initialize(), force) : links;\n  };\n\n  force.id = function(_) {\n    return arguments.length ? (id = _, force) : id;\n  };\n\n  force.iterations = function(_) {\n    return arguments.length ? (iterations = +_, force) : iterations;\n  };\n\n  force.strength = function(_) {\n    return arguments.length ? (strength = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+_), initializeStrength(), force) : strength;\n  };\n\n  force.distance = function(_) {\n    return arguments.length ? (distance = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+_), initializeDistance(), force) : distance;\n  };\n\n  return force;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/manyBody.js\":\n/*!***********************************************!*\\\n  !*** ./node_modules/d3-force/src/manyBody.js ***!\n  \\***********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ \"./node_modules/d3-quadtree/src/quadtree.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-force/src/constant.js\");\n/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jiggle.js */ \"./node_modules/d3-force/src/jiggle.js\");\n/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation.js */ \"./node_modules/d3-force/src/simulation.js\");\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var nodes,\n      node,\n      random,\n      alpha,\n      strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-30),\n      strengths,\n      distanceMin2 = 1,\n      distanceMax2 = Infinity,\n      theta2 = 0.81;\n\n  function force(_) {\n    var i, n = nodes.length, tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.x, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.y).visitAfter(accumulate);\n    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);\n  }\n\n  function initialize() {\n    if (!nodes) return;\n    var i, n = nodes.length, node;\n    strengths = new Array(n);\n    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);\n  }\n\n  function accumulate(quad) {\n    var strength = 0, q, c, weight = 0, x, y, i;\n\n    // For internal nodes, accumulate forces from child quadrants.\n    if (quad.length) {\n      for (x = y = i = 0; i < 4; ++i) {\n        if ((q = quad[i]) && (c = Math.abs(q.value))) {\n          strength += q.value, weight += c, x += c * q.x, y += c * q.y;\n        }\n      }\n      quad.x = x / weight;\n      quad.y = y / weight;\n    }\n\n    // For leaf nodes, accumulate forces from coincident quadrants.\n    else {\n      q = quad;\n      q.x = q.data.x;\n      q.y = q.data.y;\n      do strength += strengths[q.data.index];\n      while (q = q.next);\n    }\n\n    quad.value = strength;\n  }\n\n  function apply(quad, x1, _, x2) {\n    if (!quad.value) return true;\n\n    var x = quad.x - node.x,\n        y = quad.y - node.y,\n        w = x2 - x1,\n        l = x * x + y * y;\n\n    // Apply the Barnes-Hut approximation if possible.\n    // Limit forces for very close nodes; randomize direction if coincident.\n    if (w * w / theta2 < l) {\n      if (l < distanceMax2) {\n        if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(random), l += x * x;\n        if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(random), l += y * y;\n        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);\n        node.vx += x * quad.value * alpha / l;\n        node.vy += y * quad.value * alpha / l;\n      }\n      return true;\n    }\n\n    // Otherwise, process points directly.\n    else if (quad.length || l >= distanceMax2) return;\n\n    // Limit forces for very close nodes; randomize direction if coincident.\n    if (quad.data !== node || quad.next) {\n      if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(random), l += x * x;\n      if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(random), l += y * y;\n      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);\n    }\n\n    do if (quad.data !== node) {\n      w = strengths[quad.data.index] * alpha / l;\n      node.vx += x * w;\n      node.vy += y * w;\n    } while (quad = quad.next);\n  }\n\n  force.initialize = function(_nodes, _random) {\n    nodes = _nodes;\n    random = _random;\n    initialize();\n  };\n\n  force.strength = function(_) {\n    return arguments.length ? (strength = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+_), initialize(), force) : strength;\n  };\n\n  force.distanceMin = function(_) {\n    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);\n  };\n\n  force.distanceMax = function(_) {\n    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);\n  };\n\n  force.theta = function(_) {\n    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);\n  };\n\n  return force;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-force/src/simulation.js\":\n/*!*************************************************!*\\\n  !*** ./node_modules/d3-force/src/simulation.js ***!\n  \\*************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"x\": () => (/* binding */ x),\n/* harmony export */   \"y\": () => (/* binding */ y)\n/* harmony export */ });\n/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dispatch */ \"./node_modules/d3-dispatch/src/dispatch.js\");\n/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ \"./node_modules/d3-timer/src/timer.js\");\n/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ \"./node_modules/d3-force/src/lcg.js\");\n\n\n\n\nfunction x(d) {\n  return d.x;\n}\n\nfunction y(d) {\n  return d.y;\n}\n\nvar initialRadius = 10,\n    initialAngle = Math.PI * (3 - Math.sqrt(5));\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(nodes) {\n  var simulation,\n      alpha = 1,\n      alphaMin = 0.001,\n      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),\n      alphaTarget = 0,\n      velocityDecay = 0.6,\n      forces = new Map(),\n      stepper = (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(step),\n      event = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"tick\", \"end\"),\n      random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  if (nodes == null) nodes = [];\n\n  function step() {\n    tick();\n    event.call(\"tick\", simulation);\n    if (alpha < alphaMin) {\n      stepper.stop();\n      event.call(\"end\", simulation);\n    }\n  }\n\n  function tick(iterations) {\n    var i, n = nodes.length, node;\n\n    if (iterations === undefined) iterations = 1;\n\n    for (var k = 0; k < iterations; ++k) {\n      alpha += (alphaTarget - alpha) * alphaDecay;\n\n      forces.forEach(function(force) {\n        force(alpha);\n      });\n\n      for (i = 0; i < n; ++i) {\n        node = nodes[i];\n        if (node.fx == null) node.x += node.vx *= velocityDecay;\n        else node.x = node.fx, node.vx = 0;\n        if (node.fy == null) node.y += node.vy *= velocityDecay;\n        else node.y = node.fy, node.vy = 0;\n      }\n    }\n\n    return simulation;\n  }\n\n  function initializeNodes() {\n    for (var i = 0, n = nodes.length, node; i < n; ++i) {\n      node = nodes[i], node.index = i;\n      if (node.fx != null) node.x = node.fx;\n      if (node.fy != null) node.y = node.fy;\n      if (isNaN(node.x) || isNaN(node.y)) {\n        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;\n        node.x = radius * Math.cos(angle);\n        node.y = radius * Math.sin(angle);\n      }\n      if (isNaN(node.vx) || isNaN(node.vy)) {\n        node.vx = node.vy = 0;\n      }\n    }\n  }\n\n  function initializeForce(force) {\n    if (force.initialize) force.initialize(nodes, random);\n    return force;\n  }\n\n  initializeNodes();\n\n  return simulation = {\n    tick: tick,\n\n    restart: function() {\n      return stepper.restart(step), simulation;\n    },\n\n    stop: function() {\n      return stepper.stop(), simulation;\n    },\n\n    nodes: function(_) {\n      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;\n    },\n\n    alpha: function(_) {\n      return arguments.length ? (alpha = +_, simulation) : alpha;\n    },\n\n    alphaMin: function(_) {\n      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;\n    },\n\n    alphaDecay: function(_) {\n      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;\n    },\n\n    alphaTarget: function(_) {\n      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;\n    },\n\n    velocityDecay: function(_) {\n      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;\n    },\n\n    randomSource: function(_) {\n      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;\n    },\n\n    force: function(name, _) {\n      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);\n    },\n\n    find: function(x, y, radius) {\n      var i = 0,\n          n = nodes.length,\n          dx,\n          dy,\n          d2,\n          node,\n          closest;\n\n      if (radius == null) radius = Infinity;\n      else radius *= radius;\n\n      for (i = 0; i < n; ++i) {\n        node = nodes[i];\n        dx = x - node.x;\n        dy = y - node.y;\n        d2 = dx * dx + dy * dy;\n        if (d2 < radius) closest = node, radius = d2;\n      }\n\n      return closest;\n    },\n\n    on: function(name, _) {\n      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);\n    }\n  };\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/add.js\":\n/*!*********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/add.js ***!\n  \\*********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAll\": () => (/* binding */ addAll),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {\n  const x = +this._x.call(null, d),\n      y = +this._y.call(null, d);\n  return add(this.cover(x, y), x, y, d);\n}\n\nfunction add(tree, x, y, d) {\n  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points\n\n  var parent,\n      node = tree._root,\n      leaf = {data: d},\n      x0 = tree._x0,\n      y0 = tree._y0,\n      x1 = tree._x1,\n      y1 = tree._y1,\n      xm,\n      ym,\n      xp,\n      yp,\n      right,\n      bottom,\n      i,\n      j;\n\n  // If the tree is empty, initialize the root as a leaf.\n  if (!node) return tree._root = leaf, tree;\n\n  // Find the existing leaf for the new point, or add it.\n  while (node.length) {\n    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;\n    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;\n    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;\n  }\n\n  // Is the new point is exactly coincident with the existing point?\n  xp = +tree._x.call(null, node.data);\n  yp = +tree._y.call(null, node.data);\n  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;\n\n  // Otherwise, split the leaf node until the old and new point are separated.\n  do {\n    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);\n    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;\n    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;\n  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));\n  return parent[j] = node, parent[i] = leaf, tree;\n}\n\nfunction addAll(data) {\n  var d, i, n = data.length,\n      x,\n      y,\n      xz = new Array(n),\n      yz = new Array(n),\n      x0 = Infinity,\n      y0 = Infinity,\n      x1 = -Infinity,\n      y1 = -Infinity;\n\n  // Compute the points and their extent.\n  for (i = 0; i < n; ++i) {\n    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;\n    xz[i] = x;\n    yz[i] = y;\n    if (x < x0) x0 = x;\n    if (x > x1) x1 = x;\n    if (y < y0) y0 = y;\n    if (y > y1) y1 = y;\n  }\n\n  // If there were no (valid) points, abort.\n  if (x0 > x1 || y0 > y1) return this;\n\n  // Expand the tree to cover the new points.\n  this.cover(x0, y0).cover(x1, y1);\n\n  // Add the new points.\n  for (i = 0; i < n; ++i) {\n    add(this, xz[i], yz[i], data[i]);\n  }\n\n  return this;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/cover.js\":\n/*!***********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/cover.js ***!\n  \\***********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {\n  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points\n\n  var x0 = this._x0,\n      y0 = this._y0,\n      x1 = this._x1,\n      y1 = this._y1;\n\n  // If the quadtree has no extent, initialize them.\n  // Integer extent are necessary so that if we later double the extent,\n  // the existing quadrant boundaries don’t change due to floating point error!\n  if (isNaN(x0)) {\n    x1 = (x0 = Math.floor(x)) + 1;\n    y1 = (y0 = Math.floor(y)) + 1;\n  }\n\n  // Otherwise, double repeatedly to cover.\n  else {\n    var z = x1 - x0 || 1,\n        node = this._root,\n        parent,\n        i;\n\n    while (x0 > x || x >= x1 || y0 > y || y >= y1) {\n      i = (y < y0) << 1 | (x < x0);\n      parent = new Array(4), parent[i] = node, node = parent, z *= 2;\n      switch (i) {\n        case 0: x1 = x0 + z, y1 = y0 + z; break;\n        case 1: x0 = x1 - z, y1 = y0 + z; break;\n        case 2: x1 = x0 + z, y0 = y1 - z; break;\n        case 3: x0 = x1 - z, y0 = y1 - z; break;\n      }\n    }\n\n    if (this._root && this._root.length) this._root = node;\n  }\n\n  this._x0 = x0;\n  this._y0 = y0;\n  this._x1 = x1;\n  this._y1 = y1;\n  return this;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/data.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/data.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var data = [];\n  this.visit(function(node) {\n    if (!node.length) do data.push(node.data); while (node = node.next)\n  });\n  return data;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/extent.js\":\n/*!************************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/extent.js ***!\n  \\************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {\n  return arguments.length\n      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])\n      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/find.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/find.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ \"./node_modules/d3-quadtree/src/quad.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y, radius) {\n  var data,\n      x0 = this._x0,\n      y0 = this._y0,\n      x1,\n      y1,\n      x2,\n      y2,\n      x3 = this._x1,\n      y3 = this._y1,\n      quads = [],\n      node = this._root,\n      q,\n      i;\n\n  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node, x0, y0, x3, y3));\n  if (radius == null) radius = Infinity;\n  else {\n    x0 = x - radius, y0 = y - radius;\n    x3 = x + radius, y3 = y + radius;\n    radius *= radius;\n  }\n\n  while (q = quads.pop()) {\n\n    // Stop searching if this quadrant can’t contain a closer node.\n    if (!(node = q.node)\n        || (x1 = q.x0) > x3\n        || (y1 = q.y0) > y3\n        || (x2 = q.x1) < x0\n        || (y2 = q.y1) < y0) continue;\n\n    // Bisect the current quadrant.\n    if (node.length) {\n      var xm = (x1 + x2) / 2,\n          ym = (y1 + y2) / 2;\n\n      quads.push(\n        new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node[3], xm, ym, x2, y2),\n        new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node[2], x1, ym, xm, y2),\n        new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node[1], xm, y1, x2, ym),\n        new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node[0], x1, y1, xm, ym)\n      );\n\n      // Visit the closest quadrant first.\n      if (i = (y >= ym) << 1 | (x >= xm)) {\n        q = quads[quads.length - 1];\n        quads[quads.length - 1] = quads[quads.length - 1 - i];\n        quads[quads.length - 1 - i] = q;\n      }\n    }\n\n    // Visit this point. (Visiting coincident points isn’t necessary!)\n    else {\n      var dx = x - +this._x.call(null, node.data),\n          dy = y - +this._y.call(null, node.data),\n          d2 = dx * dx + dy * dy;\n      if (d2 < radius) {\n        var d = Math.sqrt(radius = d2);\n        x0 = x - d, y0 = y - d;\n        x3 = x + d, y3 = y + d;\n        data = node.data;\n      }\n    }\n  }\n\n  return data;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/quad.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/quad.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, x0, y0, x1, y1) {\n  this.node = node;\n  this.x0 = x0;\n  this.y0 = y0;\n  this.x1 = x1;\n  this.y1 = y1;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/quadtree.js\":\n/*!**************************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!\n  \\**************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quadtree)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ \"./node_modules/d3-quadtree/src/add.js\");\n/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover.js */ \"./node_modules/d3-quadtree/src/cover.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ \"./node_modules/d3-quadtree/src/data.js\");\n/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extent.js */ \"./node_modules/d3-quadtree/src/extent.js\");\n/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find.js */ \"./node_modules/d3-quadtree/src/find.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove.js */ \"./node_modules/d3-quadtree/src/remove.js\");\n/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.js */ \"./node_modules/d3-quadtree/src/root.js\");\n/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size.js */ \"./node_modules/d3-quadtree/src/size.js\");\n/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visit.js */ \"./node_modules/d3-quadtree/src/visit.js\");\n/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visitAfter.js */ \"./node_modules/d3-quadtree/src/visitAfter.js\");\n/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.js */ \"./node_modules/d3-quadtree/src/x.js\");\n/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y.js */ \"./node_modules/d3-quadtree/src/y.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction quadtree(nodes, x, y) {\n  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_0__.defaultX : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_1__.defaultY : y, NaN, NaN, NaN, NaN);\n  return nodes == null ? tree : tree.addAll(nodes);\n}\n\nfunction Quadtree(x, y, x0, y0, x1, y1) {\n  this._x = x;\n  this._y = y;\n  this._x0 = x0;\n  this._y0 = y0;\n  this._x1 = x1;\n  this._y1 = y1;\n  this._root = undefined;\n}\n\nfunction leaf_copy(leaf) {\n  var copy = {data: leaf.data}, next = copy;\n  while (leaf = leaf.next) next = next.next = {data: leaf.data};\n  return copy;\n}\n\nvar treeProto = quadtree.prototype = Quadtree.prototype;\n\ntreeProto.copy = function() {\n  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),\n      node = this._root,\n      nodes,\n      child;\n\n  if (!node) return copy;\n\n  if (!node.length) return copy._root = leaf_copy(node), copy;\n\n  nodes = [{source: node, target: copy._root = new Array(4)}];\n  while (node = nodes.pop()) {\n    for (var i = 0; i < 4; ++i) {\n      if (child = node.source[i]) {\n        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});\n        else node.target[i] = leaf_copy(child);\n      }\n    }\n  }\n\n  return copy;\n};\n\ntreeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\ntreeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_2__.addAll;\ntreeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\ntreeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\ntreeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\ntreeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\ntreeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\ntreeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_7__.removeAll;\ntreeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\ntreeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\ntreeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\ntreeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\ntreeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ntreeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/remove.js\":\n/*!************************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/remove.js ***!\n  \\************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {\n  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points\n\n  var parent,\n      node = this._root,\n      retainer,\n      previous,\n      next,\n      x0 = this._x0,\n      y0 = this._y0,\n      x1 = this._x1,\n      y1 = this._y1,\n      x,\n      y,\n      xm,\n      ym,\n      right,\n      bottom,\n      i,\n      j;\n\n  // If the tree is empty, initialize the root as a leaf.\n  if (!node) return this;\n\n  // Find the leaf node for the point.\n  // While descending, also retain the deepest parent with a non-removed sibling.\n  if (node.length) while (true) {\n    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;\n    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;\n    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;\n    if (!node.length) break;\n    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;\n  }\n\n  // Find the point to remove.\n  while (node.data !== d) if (!(previous = node, node = node.next)) return this;\n  if (next = node.next) delete node.next;\n\n  // If there are multiple coincident points, remove just the point.\n  if (previous) return (next ? previous.next = next : delete previous.next), this;\n\n  // If this is the root point, remove it.\n  if (!parent) return this._root = next, this;\n\n  // Remove this leaf.\n  next ? parent[i] = next : delete parent[i];\n\n  // If the parent now contains exactly one leaf, collapse superfluous parents.\n  if ((node = parent[0] || parent[1] || parent[2] || parent[3])\n      && node === (parent[3] || parent[2] || parent[1] || parent[0])\n      && !node.length) {\n    if (retainer) retainer[j] = node;\n    else this._root = node;\n  }\n\n  return this;\n}\n\nfunction removeAll(data) {\n  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);\n  return this;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/root.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/root.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return this._root;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/size.js\":\n/*!**********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/size.js ***!\n  \\**********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var size = 0;\n  this.visit(function(node) {\n    if (!node.length) do ++size; while (node = node.next)\n  });\n  return size;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/visit.js\":\n/*!***********************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/visit.js ***!\n  \\***********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ \"./node_modules/d3-quadtree/src/quad.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {\n  var quads = [], q, node = this._root, child, x0, y0, x1, y1;\n  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node, this._x0, this._y0, this._x1, this._y1));\n  while (q = quads.pop()) {\n    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {\n      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;\n      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, xm, ym, x1, y1));\n      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, x0, ym, xm, y1));\n      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, xm, y0, x1, ym));\n      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, x0, y0, xm, ym));\n    }\n  }\n  return this;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/visitAfter.js\":\n/*!****************************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!\n  \\****************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ \"./node_modules/d3-quadtree/src/quad.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {\n  var quads = [], next = [], q;\n  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._root, this._x0, this._y0, this._x1, this._y1));\n  while (q = quads.pop()) {\n    var node = q.node;\n    if (node.length) {\n      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;\n      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, x0, y0, xm, ym));\n      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, xm, y0, x1, ym));\n      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, x0, ym, xm, y1));\n      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](child, xm, ym, x1, y1));\n    }\n    next.push(q);\n  }\n  while (q = next.pop()) {\n    callback(q.node, q.x0, q.y0, q.x1, q.y1);\n  }\n  return this;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/x.js\":\n/*!*******************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/x.js ***!\n  \\*******************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"defaultX\": () => (/* binding */ defaultX)\n/* harmony export */ });\nfunction defaultX(d) {\n  return d[0];\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {\n  return arguments.length ? (this._x = _, this) : this._x;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-quadtree/src/y.js\":\n/*!*******************************************!*\\\n  !*** ./node_modules/d3-quadtree/src/y.js ***!\n  \\*******************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"defaultY\": () => (/* binding */ defaultY)\n/* harmony export */ });\nfunction defaultY(d) {\n  return d[1];\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {\n  return arguments.length ? (this._y = _, this) : this._y;\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/d3-timer/src/timer.js\":\n/*!********************************************!*\\\n  !*** ./node_modules/d3-timer/src/timer.js ***!\n  \\********************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": () => (/* binding */ Timer),\n/* harmony export */   \"now\": () => (/* binding */ now),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"timerFlush\": () => (/* binding */ timerFlush)\n/* harmony export */ });\nvar frame = 0, // is an animation frame pending?\n    timeout = 0, // is a timeout pending?\n    interval = 0, // are any timers active?\n    pokeDelay = 1000, // how frequently we check for clock skew\n    taskHead,\n    taskTail,\n    clockLast = 0,\n    clockNow = 0,\n    clockSkew = 0,\n    clock = typeof performance === \"object\" && performance.now ? performance : Date,\n    setFrame = typeof window === \"object\" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };\n\nfunction now() {\n  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);\n}\n\nfunction clearNow() {\n  clockNow = 0;\n}\n\nfunction Timer() {\n  this._call =\n  this._time =\n  this._next = null;\n}\n\nTimer.prototype = timer.prototype = {\n  constructor: Timer,\n  restart: function(callback, delay, time) {\n    if (typeof callback !== \"function\") throw new TypeError(\"callback is not a function\");\n    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);\n    if (!this._next && taskTail !== this) {\n      if (taskTail) taskTail._next = this;\n      else taskHead = this;\n      taskTail = this;\n    }\n    this._call = callback;\n    this._time = time;\n    sleep();\n  },\n  stop: function() {\n    if (this._call) {\n      this._call = null;\n      this._time = Infinity;\n      sleep();\n    }\n  }\n};\n\nfunction timer(callback, delay, time) {\n  var t = new Timer;\n  t.restart(callback, delay, time);\n  return t;\n}\n\nfunction timerFlush() {\n  now(); // Get the current time, if not already set.\n  ++frame; // Pretend we’ve set an alarm, if we haven’t already.\n  var t = taskHead, e;\n  while (t) {\n    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);\n    t = t._next;\n  }\n  --frame;\n}\n\nfunction wake() {\n  clockNow = (clockLast = clock.now()) + clockSkew;\n  frame = timeout = 0;\n  try {\n    timerFlush();\n  } finally {\n    frame = 0;\n    nap();\n    clockNow = 0;\n  }\n}\n\nfunction poke() {\n  var now = clock.now(), delay = now - clockLast;\n  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;\n}\n\nfunction nap() {\n  var t0, t1 = taskHead, t2, time = Infinity;\n  while (t1) {\n    if (t1._call) {\n      if (time > t1._time) time = t1._time;\n      t0 = t1, t1 = t1._next;\n    } else {\n      t2 = t1._next, t1._next = null;\n      t1 = t0 ? t0._next = t2 : taskHead = t2;\n    }\n  }\n  taskTail = t0;\n  sleep(time);\n}\n\nfunction sleep(time) {\n  if (frame) return; // Soonest alarm already set, or will be.\n  if (timeout) timeout = clearTimeout(timeout);\n  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.\n  if (delay > 24) {\n    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);\n    if (interval) interval = clearInterval(interval);\n  } else {\n    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);\n    frame = 1, setFrame(wake);\n  }\n}\n\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__webpack_require__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__webpack_require__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\nvar __webpack_exports__ = {};\n// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.\n(() => {\n/*!*****************************************!*\\\n  !*** ./src/simulation/layout.worker.js ***!\n  \\*****************************************/\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-force */ \"./node_modules/d3-force/src/manyBody.js\");\n/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-force */ \"./node_modules/d3-force/src/link.js\");\n/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-force */ \"./node_modules/d3-force/src/center.js\");\n/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ \"./node_modules/d3-force/src/collide.js\");\n/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-force */ \"./node_modules/d3-force/src/simulation.js\");\n\n\n// --- Network state\nlet nodes = null;\nlet edges = null;\nlet edgesWaiting = false;\n\n// --- Force state\nlet baseRepulsion = 0;\nlet repulsionPower = 0;\nlet repulsionNormalisation = 1;\n\n// --- Simulation state\nlet totalIterations = 0;\nlet iteration = 0;\n\n// --- Simulation\nconst repulsionForce = (0,d3_force__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst linkForce = (0,d3_force__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst centerForce = (0,d3_force__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst collideForce = (0,d3_force__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n// The simulation stops automatically when minAlpha is reached.\nconst layoutSim = (0,d3_force__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n  .force(\"charge\", repulsionForce)\n  .force(\"link\", linkForce)\n  .force(\"center\", centerForce)\n  .force(\"collide\", collideForce)\n  .stop()\n  .on(\"tick\", tick_function);\n\nfunction tick_function() {\n  self.postMessage({\n    progress: iteration <= 1 ? 0 : iteration / totalIterations,\n    nodes: nodes,\n  });\n  --iteration;\n}\n\nfunction updateNodes(newNodes) {\n  // Completely new network\n  if (!nodes || nodes.length !== newNodes.length) {\n    // Assign nodes\n    nodes = newNodes.map((r, idx) => {\n      return { id: idx, r: r };\n    });\n    // Update simulation\n    layoutSim.nodes(nodes);\n    if (edgesWaiting) {\n      linkForce.links(edges);\n      edgesWaiting = false;\n    }\n    // Recompute repulsion normalization\n    repulsionNormalisation = Math.pow(nodes.length, repulsionPower);\n    repulsionForce.strength(-baseRepulsion / repulsionNormalisation);\n  } else {\n    // Update radius\n    newNodes.forEach((r, idx) => {\n      nodes[idx].r = r;\n    });\n  }\n  // Update collide force radius (only updated when called explicitly)\n  collideForce.radius((d) => d.r);\n}\n\nfunction updateEdges(newEdges) {\n  if (!edges || edges.length !== newEdges.length) {\n    edges = newEdges;\n    if (nodes) {\n      linkForce.links(edges);\n    } else {\n      edgesWaiting = true;\n    }\n  }\n}\n\nfunction updateSettings(props) {\n  baseRepulsion = +props.repulsionStrength;\n  repulsionPower = +props.repulsionNormalization;\n  repulsionNormalisation = nodes ? Math.pow(nodes.length, repulsionPower) : 1;\n  repulsionForce.strength(-baseRepulsion / repulsionNormalisation);\n  linkForce.distance((l) => props.linkDistanceScale * l.distance);\n  linkForce.strength(props.linkStrength);\n  centerForce.strength(props.centerStrength);\n  repulsionForce.distanceMax(props.repulsionLimit);\n}\n\nfunction dragNode(idx, { x, y }) {\n  nodes[idx].fx = x;\n  nodes[idx].fy = y;\n}\n\nfunction runSimulation(alpha) {\n  if (!nodes || !edges) {\n    return;\n  }\n  // Reset the alpha value\n  layoutSim.alpha(alpha);\n\n  // Compute the number of iterations\n  const minAlpha = layoutSim.alphaMin();\n  const decay = layoutSim.alphaDecay();\n  const newIterations = Math.round(\n    Math.log(minAlpha / alpha) / Math.log(1 - decay)\n  );\n  totalIterations = Math.max(iteration, newIterations);\n  iteration = totalIterations;\n\n  // Restart the simulation\n  layoutSim.restart();\n  if (alpha === 0) {\n    iteration = 0;\n    setTimeout(tick_function, 0);\n  }\n}\n\nself.onmessage = (event) => {\n  const message = event.data;\n  switch (message.command) {\n    case \"nodes\":\n      updateNodes(message.nodes);\n      runSimulation(message.alpha);\n      break;\n    case \"edges\":\n      updateEdges(message.edges);\n      runSimulation(message.alpha);\n      break;\n    case \"settings\":\n      updateSettings(message.settings);\n      runSimulation(message.alpha);\n      break;\n    case \"drag\":\n      dragNode(message.nodeIdx, message.pos);\n      runSimulation(message.alpha);\n      break;\n    case \"enabled\":\n      runSimulation(message.alpha);\n      break;\n  }\n};\n\n})();\n\n/******/ })()\n;\n//# sourceMappingURL=layout.worker.worker.js.map", "Worker", undefined, __webpack_require__.p + "layout.worker.worker.js");
}


/***/ }),

/***/ "./node_modules/worker-loader/dist/runtime/inline.js":
/*!***********************************************************!*\
  !*** ./node_modules/worker-loader/dist/runtime/inline.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


/* eslint-env browser */

/* eslint-disable no-undef, no-use-before-define, new-cap */
module.exports = function (content, workerConstructor, workerOptions, url) {
  var globalScope = self || window;

  try {
    try {
      var blob;

      try {
        // New API
        blob = new globalScope.Blob([content]);
      } catch (e) {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = globalScope.BlobBuilder || globalScope.WebKitBlobBuilder || globalScope.MozBlobBuilder || globalScope.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);
        blob = blob.getBlob();
      }

      var URL = globalScope.URL || globalScope.webkitURL;
      var objectURL = URL.createObjectURL(blob);
      var worker = new globalScope[workerConstructor](objectURL, workerOptions);
      URL.revokeObjectURL(objectURL);
      return worker;
    } catch (e) {
      return new globalScope[workerConstructor]("data:application/javascript,".concat(encodeURIComponent(content)), workerOptions);
    }
  } catch (e) {
    if (!url) {
      throw Error("Inline worker is not supported");
    }

    return new globalScope[workerConstructor](url, workerOptions);
  }
};

/***/ }),

/***/ "./src/menu/color.js":
/*!***************************!*\
  !*** ./src/menu/color.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyOpacity": () => (/* binding */ applyOpacity),
/* harmony export */   "colormapFactories": () => (/* binding */ colormapFactories)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/sequential.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/diverging.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Greens.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Greys.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Purples.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-single/Reds.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/BrBG.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/PRGn.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/PiYG.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/PuOr.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/RdBu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/RdGy.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/diverging/Spectral.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/category10.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Accent.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Dark2.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Paired.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Pastel1.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Pastel2.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Set1.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Set2.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Set3.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/categorical/Tableau10.js");




function applyOpacity(hex, opacity) {
  return (0,d3_color__WEBPACK_IMPORTED_MODULE_0__["default"])(hex).copy({ opacity });
}

const colormapFactories = {
  seq: {
    Blues: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__["default"]),
    Greens: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Greys: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_4__["default"]),
    Oranges: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_5__["default"]),
    Purples: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__["default"]),
    Reds: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__["default"]),
    Turbo: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__["default"]),
    Viridis: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__["default"]),
    Inferno: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__.inferno),
    Magma: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__.magma),
    Plasma: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__.plasma),
    Cividis: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__["default"]),
    Warm: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__.warm),
    Cool: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__.cool),
    BuGn: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_12__["default"]),
    BuPu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_13__["default"]),
    GnBu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_14__["default"]),
    OrRd: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_15__["default"]),
    PuBuGn: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_16__["default"]),
    PuBu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_17__["default"]),
    PuRd: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_18__["default"]),
    RdPu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_19__["default"]),
    YlGnBu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_20__["default"]),
    YlGn: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_21__["default"]),
    YlOrBr: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_22__["default"]),
    YlOrRd: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_23__["default"]),
    Rainbow: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__["default"]),
    Sinebow: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_24__["default"]),
  },
  div: {
    BrBG: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_26__["default"]),
    PRGn: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_27__["default"]),
    PiYG: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_28__["default"]),
    PuOr: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_29__["default"]),
    RdBu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_30__["default"]),
    RdGy: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_31__["default"]),
    RdYlBu: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_32__["default"]),
    RdYlGn: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_33__["default"]),
    Spectral: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_25__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_34__["default"]),
  },
  cat: {
    Category10: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_36__["default"]),
    Accent: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_37__["default"]),
    Dark2: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_38__["default"]),
    Paired: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_39__["default"]),
    Pastel1: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_40__["default"]),
    Pastel2: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_41__["default"]),
    Set1: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_42__["default"]),
    Set2: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_43__["default"]),
    Set3: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_44__["default"]),
    Tableau10: () => (0,d3_scale__WEBPACK_IMPORTED_MODULE_35__["default"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_45__["default"]),
  },
};


/***/ }),

/***/ "./src/network/drag/constant.js":
/*!**************************************!*\
  !*** ./src/network/drag/constant.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./src/network/drag/drag.js":
/*!**********************************!*\
  !*** ./src/network/drag/drag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodrag.js */ "./src/network/drag/nodrag.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./src/network/drag/noevent.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./src/network/drag/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.js */ "./src/network/drag/event.js");







// Ignore right-click, since that should open the context menu.
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}

function defaultContainer() {
  return this.parentNode;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var subject = defaultSubject,
    container = defaultContainer,
    gestures = {},
    listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_4__["default"])("start", "drag", "end"),
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
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(event.view)
      .on("mousemove.drag", mousemoved, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture)
      .on("mouseup.drag", mouseupped, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  };

  function mousemoved(event) {
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx,
        dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__["default"])(event.view).on("mousemove.drag mouseup.drag", null);
    (0,_nodrag_js__WEBPACK_IMPORTED_MODULE_0__.yesdrag)(event.view, mousemoving);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
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
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
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
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
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
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
        gesture("end", event, touches[i]);
      }
    }
  };

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
      p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__["default"])(touch || event, container),
      dx,
      dy,
      s;

    if (
      (s = subject.call(
        that,
        new _event_js__WEBPACK_IMPORTED_MODULE_3__["default"]("beforestart", {
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
          (p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__["default"])(touch || event, container)), (n = active);
          break;
      }
      dispatch.call(
        type,
        that,
        new _event_js__WEBPACK_IMPORTED_MODULE_3__["default"](type, {
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
      ? ((subject = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_)), drag)
      : subject;
  };

  drag.container = function (_) {
    return arguments.length
      ? ((container = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_)), drag)
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


/***/ }),

/***/ "./src/network/drag/event.js":
/*!***********************************!*\
  !*** ./src/network/drag/event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragEvent)
/* harmony export */ });
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),

/***/ "./src/network/drag/index.js":
/*!***********************************!*\
  !*** ./src/network/drag/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* reexport safe */ _drag_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "dragDisable": () => (/* reexport safe */ _nodrag_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "dragEnable": () => (/* reexport safe */ _nodrag_js__WEBPACK_IMPORTED_MODULE_1__.yesdrag)
/* harmony export */ });
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ "./src/network/drag/drag.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodrag.js */ "./src/network/drag/nodrag.js");




/***/ }),

/***/ "./src/network/drag/nodrag.js":
/*!************************************!*\
  !*** ./src/network/drag/nodrag.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yesdrag": () => (/* binding */ yesdrag)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noevent.js */ "./src/network/drag/noevent.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_0__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_0__.nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_0__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_0__.nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_0__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_0__.nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./src/network/drag/noevent.js":
/*!*************************************!*\
  !*** ./src/network/drag/noevent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nonpassive": () => (/* binding */ nonpassive),
/* harmony export */   "nonpassivecapture": () => (/* binding */ nonpassivecapture),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./src/network/drawing.js":
/*!********************************!*\
  !*** ./src/network/drawing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawFinal": () => (/* binding */ drawFinal),
/* harmony export */   "drawFrame": () => (/* binding */ drawFrame)
/* harmony export */ });
/* harmony import */ var _menu_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/color.js */ "./src/menu/color.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");



// --- Drawing functions
function drawFrame({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  hoverNodeIds,
  selectedNodeIds,
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
    hoverNodeIds,
    selectedNodeIds
  );
  drawSelectionPath(ctx, selectionPath);
  drawProgress(ctx, progress);
}

function drawFinal({
  canvas,
  ctx,
  nodes,
  nodePositions,
  nodeColorMapping,
  hoverNodeIds,
  selectedNodeIds,
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
    hoverNodeIds,
    selectedNodeIds
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
  hoverNodeIds,
  selectedNodeIds
) {
  ctx.strokeStyle = "black";
  nodePositions.forEach((node, idx) => {
    const baseColor =
      selectedNodeIds.size == 0 || selectedNodeIds.has(idx)
        ? nodeColorMapping.color(nodes[idx])
        : (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(195, 195, 195);
    const opacityColor =
      hoverNodeIds.size == 0 || hoverNodeIds.has(idx)
        ? (0,_menu_color_js__WEBPACK_IMPORTED_MODULE_0__.applyOpacity)(baseColor, 1)
        : (0,_menu_color_js__WEBPACK_IMPORTED_MODULE_0__.applyOpacity)(baseColor, 0.3);
    ctx.fillStyle = opacityColor;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
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
  ctx.fillStyle = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(27, 131, 233);
  ctx.beginPath();
  ctx.fillRect(0, 0, progress, 2);
}

function drawSelectionPath(ctx, selectionPath) {
  if (selectionPath.length > 2) {
    ctx.lineWidth = 0;
    ctx.fillStyle = (0,_menu_color_js__WEBPACK_IMPORTED_MODULE_0__.applyOpacity)((0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(27, 131, 233), 0.15);
    ctx.beginPath();
    ctx.moveTo(selectionPath[0][0], selectionPath[1][1]);
    selectionPath.slice(1).forEach((point) => {
      ctx.lineTo(point[0], point[1]);
    });
    ctx.fill();
  }
}


/***/ }),

/***/ "./src/network/neighbors.js":
/*!**********************************!*\
  !*** ./src/network/neighbors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neighbors": () => (/* binding */ neighbors)
/* harmony export */ });
/* harmony import */ var _util_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/worker.js */ "./src/util/worker.js");
/* harmony import */ var _neighbors_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neighbors.worker.js */ "./src/network/neighbors.worker.js");



let _num_waiting = 0;
let _reject = () => {};
let _resolve = () => {};
const _worker = (0,_util_worker_js__WEBPACK_IMPORTED_MODULE_0__.worker)(new _neighbors_worker_js__WEBPACK_IMPORTED_MODULE_1__["default"](), (message) => {
  if (_num_waiting-- == 1) {
    _resolve(message.neighbours);
  }
});

const neighbors = {
  edges(edges) {
    _reject("");
    _num_waiting += 1;

    _worker({
      edges,
    });

    return new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
  },
  destroy() {
    _worker.terminate();
  },
};


/***/ }),

/***/ "./src/network/zoom/constant.js":
/*!**************************************!*\
  !*** ./src/network/zoom/constant.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./src/network/zoom/event.js":
/*!***********************************!*\
  !*** ./src/network/zoom/event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ "./src/network/zoom/index.js":
/*!***********************************!*\
  !*** ./src/network/zoom/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.Transform),
/* harmony export */   "zoom": () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "zoomIdentity": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "zoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./src/network/zoom/zoom.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ "./src/network/zoom/transform.js");




/***/ }),

/***/ "./src/network/zoom/noevent.js":
/*!*************************************!*\
  !*** ./src/network/zoom/noevent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./src/network/zoom/transform.js":
/*!***************************************!*\
  !*** ./src/network/zoom/transform.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform),
/* harmony export */   "default": () => (/* binding */ transform),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ "./src/network/zoom/zoom.js":
/*!**********************************!*\
  !*** ./src/network/zoom/zoom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drag */ "./src/network/drag/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./src/network/zoom/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.js */ "./src/network/zoom/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transform.js */ "./src/network/zoom/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noevent.js */ "./src/network/zoom/noevent.js");










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [
        [e.x, e.y],
        [e.x + e.width, e.y + e.height],
      ];
    }
    return [
      [0, 0],
      [e.width.baseVal.value, e.height.baseVal.value],
    ];
  }
  return [
    [0, 0],
    [e.clientWidth, e.clientHeight],
  ];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_4__.identity;
}

function defaultWheelDelta(event) {
  return (
    -event.deltaY *
    (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) *
    (event.ctrlKey ? 10 : 1)
  );
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
    dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
    dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
    dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var extent = defaultExtent,
    constrain = defaultConstrain,
    wheelDelta = defaultWheelDelta,
    scaleExtent = [0, Infinity],
    translateExtent = [
      [-Infinity, -Infinity],
      [Infinity, Infinity],
    ],
    duration = 250,
    interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_6__["default"],
    listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_7__["default"])("start", "zoom", "end"),
    touchstarting,
    touchfirst,
    touchending,
    touchDelay = 500,
    wheelDelay = 150,
    clickDistance2 = 0,
    tapDistance = 10;

  function zoom(selection) {
    selection.property("__zoom", defaultTransform);
  }

  zoom.transform = function (collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function () {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(
            null,
            typeof transform === "function"
              ? transform.apply(this, arguments)
              : transform
          )
          .end();
      });
    }
  };

  zoom.scaleBy = function (selection, k, p, event) {
    zoom.scaleTo(
      selection,
      function () {
        var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      },
      p,
      event
    );
  };

  zoom.scaleTo = function (selection, k, p, event) {
    zoom.transform(
      selection,
      function () {
        var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 =
            p == null
              ? centroid(e)
              : typeof p === "function"
              ? p.apply(this, arguments)
              : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      },
      p,
      event
    );
  };

  zoom.translateBy = function (selection, x, y, event) {
    zoom.transform(
      selection,
      function () {
        return constrain(
          this.__zoom.translate(
            typeof x === "function" ? x.apply(this, arguments) : x,
            typeof y === "function" ? y.apply(this, arguments) : y
          ),
          extent.apply(this, arguments),
          translateExtent
        );
      },
      null,
      event
    );
  };

  zoom.translateTo = function (selection, x, y, p, event) {
    zoom.transform(
      selection,
      function () {
        var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 =
            p == null
              ? centroid(e)
              : typeof p === "function"
              ? p.apply(this, arguments)
              : p;
        return constrain(
          _transform_js__WEBPACK_IMPORTED_MODULE_4__.identity.translate(p0[0], p0[1])
            .scale(t.k)
            .translate(
              typeof x === "function" ? -x.apply(this, arguments) : -x,
              typeof y === "function" ? -y.apply(this, arguments) : -y
            ),
          e,
          translateExtent
        );
      },
      p,
      event
    );
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k
      ? transform
      : new _transform_js__WEBPACK_IMPORTED_MODULE_4__.Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k,
      y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y
      ? transform
      : new _transform_js__WEBPACK_IMPORTED_MODULE_4__.Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [
      (+extent[0][0] + +extent[1][0]) / 2,
      (+extent[0][1] + +extent[1][1]) / 2,
    ];
  }

  function schedule(transition, transform, point, event) {
    transition
      .on("start.zoom", function () {
        gesture(this, arguments).event(event).start();
      })
      .on("interrupt.zoom end.zoom", function () {
        gesture(this, arguments).event(event).end();
      })
      .tween("zoom", function () {
        var that = this,
          args = arguments,
          g = gesture(that, args).event(event),
          e = extent.apply(that, args),
          p =
            point == null
              ? centroid(e)
              : typeof point === "function"
              ? point.apply(that, args)
              : point,
          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
          a = that.__zoom,
          b =
            typeof transform === "function"
              ? transform.apply(that, args)
              : transform,
          i = interpolate(
            a.invert(p).concat(w / a.k),
            b.invert(p).concat(w / b.k)
          );
        return function (t) {
          if (t === 1) t = b;
          // Avoid rounding error on end.
          else {
            var l = i(t),
              k = w / l[2];
            t = new _transform_js__WEBPACK_IMPORTED_MODULE_4__.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
          g.zoom(null, t);
        };
      });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function (event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function () {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function (key, transform) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function () {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function (type) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_3__["default"](type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners,
        }),
        d
      );
    },
  };

  zoom.wheeled = function (event, ...args) {
    var g = gesture(this, args).event(event),
      t = this.__zoom,
      k = Math.max(
        scaleExtent[0],
        Math.min(
          scaleExtent[1],
          t.k * Math.pow(2, wheelDelta.apply(this, arguments))
        )
      ),
      p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert((g.mouse[0] = p));
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;
    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_1__.interrupt)(this);
      g.start();
    }

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom(
      "mouse",
      constrain(
        translate(scale(t, k), g.mouse[0], g.mouse[1]),
        g.extent,
        translateExtent
      )
    );

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  };

  zoom.mousedowned = function (event, ...args) {
    if (touchending) return;
    var currentTarget = event.currentTarget,
      g = gesture(this, args, true).event(event),
      v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event.view)
        .on("mousemove.zoom", mousemoved, true)
        .on("mouseup.zoom", mouseupped, true),
      p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(event, currentTarget),
      x0 = event.clientX,
      y0 = event.clientY;

    g.mouse = [p, this.__zoom.invert(p)];
    (0,d3_transition__WEBPACK_IMPORTED_MODULE_1__.interrupt)(this);
    g.start();

    function mousemoved(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
      if (!g.moved) {
        var dx = event.clientX - x0,
          dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event).zoom(
        "mouse",
        constrain(
          translate(
            g.that.__zoom,
            (g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(event, currentTarget)),
            g.mouse[1]
          ),
          g.extent,
          translateExtent
        )
      );
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0,_drag__WEBPACK_IMPORTED_MODULE_0__.dragEnable)(event.view, g.moved);
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
      g.event(event).end();
    }
  };

  zoom.touchstarted = function (event, ...args) {
    var touches = event.touches,
      n = touches.length,
      g = gesture(this, args, event.changedTouches.length === n).event(event),
      started,
      i,
      t,
      p;

    for (i = 0; i < n; ++i) {
      (t = touches[i]), (p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(t, this));
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        (g.touch0 = p), (started = true), (g.taps = 1 + !!touchstarting);
      else if (!g.touch1 && g.touch0[2] !== p[2]) (g.touch1 = p), (g.taps = 0);
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2)
        (touchfirst = p[0]),
          (touchstarting = setTimeout(function () {
            touchstarting = null;
          }, touchDelay));
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_1__.interrupt)(this);
      g.start();
    }
  };

  zoom.touchmoved = function (event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
      touches = event.changedTouches,
      n = touches.length,
      i,
      t,
      p,
      l;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
    for (i = 0; i < n; ++i) {
      (t = touches[i]), (p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(t, this));
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0],
        l0 = g.touch0[1],
        p1 = g.touch1[0],
        l1 = g.touch1[1],
        dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
        dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) (p = g.touch0[0]), (l = g.touch0[1]);
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  };

  zoom.touchended = function (event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
      touches = event.changedTouches,
      n = touches.length,
      i,
      t;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_5__.nopropagation)(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) (g.touch0 = g.touch1), delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_9__["default"])(t, this);
        if (
          Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance
        ) {
          var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  };

  zoom.wheelDelta = function (_) {
    return arguments.length
      ? ((wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_)), zoom)
      : wheelDelta;
  };

  zoom.extent = function (_) {
    return arguments.length
      ? ((extent =
          typeof _ === "function"
            ? _
            : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([
                [+_[0][0], +_[0][1]],
                [+_[1][0], +_[1][1]],
              ])),
        zoom)
      : extent;
  };

  zoom.scaleExtent = function (_) {
    return arguments.length
      ? ((scaleExtent[0] = +_[0]), (scaleExtent[1] = +_[1]), zoom)
      : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function (_) {
    return arguments.length
      ? ((translateExtent[0][0] = +_[0][0]),
        (translateExtent[1][0] = +_[1][0]),
        (translateExtent[0][1] = +_[0][1]),
        (translateExtent[1][1] = +_[1][1]),
        zoom)
      : [
          [translateExtent[0][0], translateExtent[0][1]],
          [translateExtent[1][0], translateExtent[1][1]],
        ];
  };

  zoom.constrain = function (_) {
    return arguments.length ? ((constrain = _), zoom) : constrain;
  };

  zoom.duration = function (_) {
    return arguments.length ? ((duration = +_), zoom) : duration;
  };

  zoom.interpolate = function (_) {
    return arguments.length ? ((interpolate = _), zoom) : interpolate;
  };

  zoom.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function (_) {
    return arguments.length
      ? ((clickDistance2 = (_ = +_) * _), zoom)
      : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function (_) {
    return arguments.length ? ((tapDistance = +_), zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ "./src/simulation/simulation.js":
/*!**************************************!*\
  !*** ./src/simulation/simulation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "simulation": () => (/* binding */ simulation)
/* harmony export */ });
/* harmony import */ var _util_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/worker.js */ "./src/util/worker.js");
/* harmony import */ var _layout_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.worker.js */ "./src/simulation/layout.worker.js");



// --- Internal State
let _enabled = true;
let _callback = () => {};
const _worker = (0,_util_worker_js__WEBPACK_IMPORTED_MODULE_0__.worker)(new _layout_worker_js__WEBPACK_IMPORTED_MODULE_1__["default"](), (message) => _callback(message));

const simulation = {
  nodes(nodes, alpha) {
    _worker({
      command: "nodes",
      nodes,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  edges(edges, alpha) {
    _worker({
      command: "edges",
      edges,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  onTick(callback) {
    _callback = callback;
    return this;
  },
  settings(settings, alpha) {
    _worker({
      command: "settings",
      settings,
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  enabled(enabled, alpha) {
    _enabled = enabled;
    _worker({
      command: "enabled",
      alpha: _enabled ? alpha : 0,
    });
  },
  dragNode(idx, { x, y }, alpha) {
    _worker({
      command: "drag",
      nodeIdx: idx,
      pos: { x, y },
      alpha: _enabled ? alpha : 0,
    });
    return this;
  },
  destroy() {
    _worker.terminate();
  },
};


/***/ }),

/***/ "./src/util/worker.js":
/*!****************************!*\
  !*** ./src/util/worker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "worker": () => (/* binding */ worker)
/* harmony export */ });
// Adapted from
// - https://observablehq.com/@fil/worker

function worker(worker, callback) {
  worker.onmessage = (r) => callback(r.data);

  function updater(args, transferList) {
    worker.postMessage(args, transferList);
  }

  updater.destroy = function () {
    worker.terminate();
  };

  return updater;
}


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/delaunay.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-delaunay/src/delaunay.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Delaunay)
/* harmony export */ });
/* harmony import */ var delaunator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delaunator */ "./node_modules/delaunator/index.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");
/* harmony import */ var _voronoi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voronoi.js */ "./node_modules/d3-delaunay/src/voronoi.js");





const tau = 2 * Math.PI, pow = Math.pow;

function pointX(p) {
  return p[0];
}

function pointY(p) {
  return p[1];
}

// A triangulation is collinear if all its triangles have a non-null area
function collinear(d) {
  const {triangles, coords} = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = 2 * triangles[i],
          b = 2 * triangles[i + 1],
          c = 2 * triangles[i + 2],
          cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1])
                - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}

function jitter(x, y, r) {
  return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
}

class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points
        ? flatArray(points, fx, fy, that)
        : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new delaunator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;

    // check for collinear
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({length: points.length/2}, (_,i) => i)
        .sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
      const e = this.collinear[0], f = this.collinear[this.collinear.length - 1],
        bounds = [ points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1] ],
        r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const p = jitter(points[2 * i], points[2 * i + 1], r);
        points[2 * i] = p[0];
        points[2 * i + 1] = p[1];
      }
      this._delaunator = new delaunator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
    } else {
      delete this.collinear;
    }

    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);

    // Compute an index from each point to an (arbitrary) incoming halfedge
    // Used to give the first neighbor of each point; for this reason,
    // on the hull we give priority to exterior halfedges
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
      if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
    }
    for (let i = 0, n = hull.length; i < n; ++i) {
      hullIndex[hull[i]] = i;
    }

    // degenerate case: 1 or 2 (distinct) points
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      inedges[hull[0]] = 1;
      if (hull.length === 2) {
        inedges[hull[1]] = 0;
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
      }
    }
  }
  voronoi(bounds) {
    return new _voronoi_js__WEBPACK_IMPORTED_MODULE_1__["default"](this, bounds);
  }
  *neighbors(i) {
    const {inedges, hull, _hullIndex, halfedges, triangles, collinear} = this;

    // degenerate case with several collinear points
    if (collinear) {
      const l = collinear.indexOf(i);
      if (l > 0) yield collinear[l - 1];
      if (l < collinear.length - 1) yield collinear[l + 1];
      return;
    }

    const e0 = inedges[i];
    if (e0 === -1) return; // coincident point
    let e = e0, p0 = -1;
    do {
      yield p0 = triangles[e];
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        const p = hull[(_hullIndex[i] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e !== e0);
  }
  find(x, y, i = 0) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
    const i0 = i;
    let c;
    while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
    return c;
  }
  _step(i, x, y) {
    const {inedges, hull, _hullIndex, halfedges, triangles, points} = this;
    if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
    let c = i;
    let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
    const e0 = inedges[i];
    let e = e0;
    do {
      let t = triangles[e];
      const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t;
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        e = hull[(_hullIndex[i] + 1) % hull.length];
        if (e !== t) {
          if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
        }
        break;
      }
    } while (e !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_2__["default"] : undefined;
    const {points, halfedges, triangles} = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r) {
    if (r === undefined && (!context || typeof context.moveTo !== "function")) r = context, context = null;
    r = r == undefined ? 2 : +r;
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_2__["default"] : undefined;
    const {points} = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i], y = points[i + 1];
      context.moveTo(x + r, y);
      context.arc(x, y, r, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_2__["default"] : undefined;
    const {hull, points} = this;
    const h = hull[0] * 2, n = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i = 1; i < n; ++i) {
      const h = 2 * hull[i];
      context.lineTo(points[h], points[h + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_2__["default"] : undefined;
    const {points, triangles} = this;
    const t0 = triangles[i *= 3] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const {triangles} = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}

function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array[i * 2] = fx.call(that, p, i, points);
    array[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array;
}

function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/path.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-delaunay/src/path.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Path)
/* harmony export */ });
const epsilon = 1e-6;

class Path {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${this._x1 = +x},${this._y1 = +y}`;
  }
  arc(x, y, r) {
    x = +x, y = +y, r = +r;
    const x0 = x + r;
    const y0 = y;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x, y, w, h) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/polygon.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/polygon.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Polygon)
/* harmony export */ });
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/voronoi.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/voronoi.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Voronoi)
/* harmony export */ });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");



class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const {delaunay: {points, hull, triangles}, vectors} = this;

    // Compute circumcenters.
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x1 = points[t1];
      const y1 = points[t1 + 1];
      const x2 = points[t2];
      const y2 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];

      const dx = x2 - x1;
      const dy = y2 - y1;
      const ex = x3 - x1;
      const ey = y3 - y1;
      const ab = (dx * ey - dy * ex) * 2;

      if (Math.abs(ab) < 1e-9) {
        // degenerate case (collinear diagram)
        // almost equal points (degenerate triangle)
        // the circumcenter is at the infinity, in a
        // direction that is:
        // 1. orthogonal to the halfedge.
        let a = 1e9;
        // 2. points away from the center; since the list of triangles starts
        // in the center, the first point of the first triangle
        // will be our reference
        const r = triangles[0] * 2;
        a *= Math.sign((points[r] - x1) * ey - (points[r + 1] - y1) * ex);
        x = (x1 + x3) / 2 - a * ey;
        y = (y1 + y3) / 2 + a * ex;
      } else {
        const d = 1 / ab;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        x = x1 + (ey * bl - dy * cl) * d;
        y = y1 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j] = x;
      circumcenters[j + 1] = y;
    }

    // Compute exterior cell rays.
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x0, x1 = points[2 * h];
    let y0, y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i = 0; i < hull.length; ++i) {
      h = hull[i];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const {delaunay: {halfedges, inedges, hull}, circumcenters, vectors} = this;
    if (hull.length <= 1) return null;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i = 0; i < hull.length; ++i) {
      h0 = h1, h1 = hull[i];
      const t = Math.floor(inedges[h1] / 3) * 2;
      const x = circumcenters[t];
      const y = circumcenters[t + 1];
      const v = h0 * 4;
      const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const points = this._clip(i);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n = points.length;
    while (points[0] === points[n-2] && points[1] === points[n-1] && n > 1) n -= 2;
    for (let i = 2; i < n; i += 2) {
      if (points[i] !== points[i-2] || points[i+1] !== points[i-1])
        context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const {delaunay: {points}} = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) cell.index = i, yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x, y) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
    return this.delaunay._step(i, x, y) === i;
  }
  *neighbors(i) {
    const ci = this._clip(i);
    if (ci) for (const j of this.delaunay.neighbors(i)) {
      const cj = this._clip(j);
      // find the common edge
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] == cj[aj]
          && ci[ai + 1] == cj[aj + 1]
          && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj]
          && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]
          ) {
            yield j;
            break loop;
          }
        }
      }
    }
  }
  _cell(i) {
    const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
    const e0 = inedges[i];
    if (e0 === -1) return null; // coincident point
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    // degenerate case (1 valid point: return the box)
    if (i === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i);
    if (points === null) return null;
    const {vectors: V} = this;
    const v = i * 4;
    return V[v] || V[v + 1]
        ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
        : this._clipFinite(i, points);
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
    let c0, c1 = this._regioncode(x1, y1);
    let e0, e1 = 0;
    for (let j = 0; j < n; j += 2) {
      x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P) P.push(x1, y1);
        else P = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);
          else P = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);
        else P = [sx1, sy1];
      }
    }
    if (P) {
      e0 = e1, e1 = this._edgecode(P[0], P[1]);
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x, y, c = c0 || c1;
      if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
      else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
      else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
      else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
      if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
      else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points), p;
    if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
    if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
    if (P = this._clipFinite(i, P)) {
      for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
        c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
        if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
      }
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 0b0101: e0 = 0b0100; continue; // top-left
        case 0b0100: e0 = 0b0110, x = this.xmax, y = this.ymin; break; // top
        case 0b0110: e0 = 0b0010; continue; // top-right
        case 0b0010: e0 = 0b1010, x = this.xmax, y = this.ymax; break; // right
        case 0b1010: e0 = 0b1000; continue; // bottom-right
        case 0b1000: e0 = 0b1001, x = this.xmin, y = this.ymax; break; // bottom
        case 0b1001: e0 = 0b0001; continue; // bottom-left
        case 0b0001: e0 = 0b0101, x = this.xmin, y = this.ymin; break; // left
      }
      // Note: this implicitly checks for out of bounds: if P[j] or P[j+1] are
      // undefined, the conditional statement will be executed.
      if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
        P.splice(j, 0, x, y), j += 2;
      }
    }
    if (P.length > 4) {
      for (let i = 0; i < P.length; i+= 2) {
        const j = (i + 2) % P.length, k = (i + 4) % P.length;
        if (P[i] === P[j] && P[j] === P[k]
        || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1])
          P.splice(j, 2), i -= 2;
      }
    }
    return j;
  }
  _project(x0, y0, vx, vy) {
    let t = Infinity, c, x, y;
    if (vy < 0) { // top
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
    } else if (vy > 0) { // bottom
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
    }
    if (vx > 0) { // right
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
    } else if (vx < 0) { // left
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (x === this.xmin ? 0b0001
        : x === this.xmax ? 0b0010 : 0b0000)
        | (y === this.ymin ? 0b0100
        : y === this.ymax ? 0b1000 : 0b0000);
  }
  _regioncode(x, y) {
    return (x < this.xmin ? 0b0001
        : x > this.xmax ? 0b0010 : 0b0000)
        | (y < this.ymin ? 0b0100
        : y > this.ymax ? 0b1000 : 0b0000);
  }
}


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicIn": () => (/* binding */ cubicIn),
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut),
/* harmony export */   "cubicOut": () => (/* binding */ cubicOut)
/* harmony export */ });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "childMatcher": () => (/* binding */ childMatcher),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xhtml": () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterNode": () => (/* binding */ EnterNode),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selection": () => (/* binding */ Selection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styleValue": () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.SCHEDULED && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* reexport safe */ _active_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "interrupt": () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "transition": () => (/* reexport safe */ _transition_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");






/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.STARTING && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDING;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/cubic.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__.cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__.newId)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(groups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.interpolateTransformSvg : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__.tweenValue)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).delay;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).duration;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).ease;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/easeVarying.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/easeVarying.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/matcher.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "default": () => (/* binding */ transition),
/* harmony export */   "newId": () => (/* binding */ newId)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./easeVarying.js */ "./node_modules/d3-transition/src/transition/easeVarying.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/string.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__["default"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__.init : _schedule_js__WEBPACK_IMPORTED_MODULE_0__.set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATED": () => (/* binding */ CREATED),
/* harmony export */   "ENDED": () => (/* binding */ ENDED),
/* harmony export */   "ENDING": () => (/* binding */ ENDING),
/* harmony export */   "RUNNING": () => (/* binding */ RUNNING),
/* harmony export */   "SCHEDULED": () => (/* binding */ SCHEDULED),
/* harmony export */   "STARTED": () => (/* binding */ STARTED),
/* harmony export */   "STARTING": () => (/* binding */ STARTING),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selector.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.interpolateTransformCss : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__.tweenValue)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__.tweenValue)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(groups, this._parents, name, id1);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tweenValue": () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/delaunator/index.js":
/*!******************************************!*\
  !*** ./node_modules/delaunator/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Delaunator)
/* harmony export */ });
/* harmony import */ var robust_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! robust-predicates */ "./node_modules/robust-predicates/index.js");

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);



class Delaunator {

    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);

        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);

        this.update();
    }

    update() {
        const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
        const n = coords.length >> 1;

        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let minDist = Infinity;
        let i0, i1, i2;

        // pick a seed point close to the center
        for (let i = 0; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        minDist = Infinity;

        // find the point closest to the seed
        for (let i = 0; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for (let i = 0; i < n; i++) {
                this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for (let i = 0, d0 = -Infinity; i < n; i++) {
                const id = this._ids[i];
                if (this._dists[id] > d0) {
                    hull[j++] = id;
                    d0 = this._dists[id];
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }

        // swap the order of the seed points for counter-clockwise orientation
        if ((0,robust_predicates__WEBPACK_IMPORTED_MODULE_0__.orient2d)(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        for (let i = 0; i < n; i++) {
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }

        // sort the points by distance from the seed triangle circumcenter
        quicksort(this._ids, this._dists, 0, n - 1);

        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;

        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;

        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;

        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;

        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < this._ids.length; k++) {
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }

            start = hullPrev[start];
            let e = start, q;
            while (q = hullNext[e], (0,robust_predicates__WEBPACK_IMPORTED_MODULE_0__.orient2d)(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it

            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;

            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while (q = hullNext[n], (0,robust_predicates__WEBPACK_IMPORTED_MODULE_0__.orient2d)(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }

            // walk backward from the other side, adding more triangles and flipping
            if (e === start) {
                while (q = hullPrev[e], (0,robust_predicates__WEBPACK_IMPORTED_MODULE_0__.orient2d)(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e; // mark as removed
                    hullSize--;
                    e = q;
                }
            }

            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;

            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }

        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
            this.hull[i] = e;
            e = hullNext[e];
        }

        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const {_triangles: triangles, _halfedges: halfedges, coords} = this;

        let i = 0;
        let ar = 0;

        // recursion eliminated with a fixed-size stack
        while (true) {
            const b = halfedges[a];

            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;

            if (b === -1) { // convex hull edge
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }

            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;

            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];

            const illegal = inCircle(
                coords[2 * p0], coords[2 * p0 + 1],
                coords[2 * pr], coords[2 * pr + 1],
                coords[2 * pl], coords[2 * pl + 1],
                coords[2 * p1], coords[2 * p1 + 1]);

            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;

                const hbl = halfedges[bl];

                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);

                const br = b0 + (b + 1) % 3;

                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }

        return ar;
    }

    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;

    return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;

    return {x, y};
}

function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}


/***/ }),

/***/ "./node_modules/robust-predicates/esm/incircle.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-predicates/esm/incircle.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "incircle": () => (/* binding */ incircle),
/* harmony export */   "incirclefast": () => (/* binding */ incirclefast)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/robust-predicates/esm/util.js");


const iccerrboundA = (10 + 96 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const iccerrboundB = (4 + 48 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const iccerrboundC = (44 + 576 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;

const bc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ca = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const aa = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bb = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const cc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const u = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const v = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const axtbc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const aytbc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const bxtca = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const bytca = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const cxtab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const cytab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const abt = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const bct = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const cat = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const abtt = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bctt = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const catt = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);

const _8 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _16 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(16);
const _16b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(16);
const _16c = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(16);
const _32 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(32);
const _32b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(32);
const _48 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(48);
const _64 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(64);

let fin = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
let fin2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);

function finadd(finlen, a, alen) {
    finlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(finlen, fin, a, alen, fin2);
    const tmp = fin; fin = fin2; fin2 = tmp;
    return finlen;
}

function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
    let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
    let abtlen, bctlen, catlen;
    let abttlen, bcttlen, cattlen;
    let n1, n0;

    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    s1 = bdx * cdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;

    finlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, adx, _8), _8, adx, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, ady, _8), _8, ady, _16b), _16b, _32), _32,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdx, _8), _8, bdx, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdy, _8), _8, bdy, _16b), _16b, _32b), _32b, _64), _64,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdx, _8), _8, cdx, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdy, _8), _8, cdy, _16b), _16b, _32), _32, fin);

    let det = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.estimate)(finlen, fin);
    let errbound = iccerrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) {
        return det;
    }

    errbound = iccerrboundC * permanent + _util_js__WEBPACK_IMPORTED_MODULE_0__.resulterrbound * Math.abs(det);
    det += ((adx * adx + ady * ady) * ((bdx * cdytail + cdy * bdxtail) - (bdy * cdxtail + cdx * bdytail)) +
        2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx)) +
        ((bdx * bdx + bdy * bdy) * ((cdx * adytail + ady * cdxtail) - (cdy * adxtail + adx * cdytail)) +
        2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) +
        ((cdx * cdx + cdy * cdy) * ((adx * bdytail + bdy * adxtail) - (ady * bdxtail + bdx * adytail)) +
        2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));

    if (det >= errbound || -det >= errbound) {
        return det;
    }

    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
        s1 = adx * adx;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
        ahi = c - (c - adx);
        alo = adx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = ady * ady;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
        ahi = c - (c - ady);
        alo = ady - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
        aa[3] = u3;
    }
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
        s1 = bdx * bdx;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
        ahi = c - (c - bdx);
        alo = bdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = bdy * bdy;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
        ahi = c - (c - bdy);
        alo = bdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
        bb[3] = u3;
    }
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
        s1 = cdx * cdx;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
        ahi = c - (c - cdx);
        alo = cdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = cdy * cdy;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
        ahi = c - (c - cdy);
        alo = cdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
        cc[3] = u3;
    }

    if (adxtail !== 0) {
        axtbclen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, adxtail, axtbc);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(axtbclen, axtbc, 2 * adx, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, adxtail, _8), _8, bdy, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, adxtail, _8), _8, -cdy, _16c), _16c, _32, _48), _48);
    }
    if (adytail !== 0) {
        aytbclen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, adytail, aytbc);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(aytbclen, aytbc, 2 * ady, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, adytail, _8), _8, cdx, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, adytail, _8), _8, -bdx, _16c), _16c, _32, _48), _48);
    }
    if (bdxtail !== 0) {
        bxtcalen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdxtail, bxtca);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bxtcalen, bxtca, 2 * bdx, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, bdxtail, _8), _8, cdy, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, bdxtail, _8), _8, -ady, _16c), _16c, _32, _48), _48);
    }
    if (bdytail !== 0) {
        bytcalen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdytail, bytca);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bytcalen, bytca, 2 * bdy, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, bdytail, _8), _8, adx, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, bdytail, _8), _8, -cdx, _16c), _16c, _32, _48), _48);
    }
    if (cdxtail !== 0) {
        cxtablen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdxtail, cxtab);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cxtablen, cxtab, 2 * cdx, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, cdxtail, _8), _8, ady, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, cdxtail, _8), _8, -bdy, _16c), _16c, _32, _48), _48);
    }
    if (cdytail !== 0) {
        cytablen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdytail, cytab);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cytablen, cytab, 2 * cdy, _16), _16,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, cdytail, _8), _8, bdx, _16b), _16b,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, cdytail, _8), _8, -adx, _16c), _16c, _32, _48), _48);
    }

    if (adxtail !== 0 || adytail !== 0) {
        if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
            s1 = bdxtail * cdy;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
            bhi = c - (c - cdy);
            blo = cdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * cdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            s1 = cdxtail * -bdy;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * -bdy;
            bhi = c - (c - -bdy);
            blo = -bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * -bdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * -bdytail;
            bhi = c - (c - -bdytail);
            blo = -bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            bctlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(4, u, 4, v, bct);
            s1 = bdxtail * cdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdxtail * bdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            bctt[3] = u3;
            bcttlen = 4;
        } else {
            bct[0] = 0;
            bctlen = 1;
            bctt[0] = 0;
            bcttlen = 1;
        }
        if (adxtail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bctlen, bct, adxtail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(axtbclen, axtbc, adxtail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * adx, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bcttlen, bctt, adxtail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * adx, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, adxtail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, adxtail, _32), _32, _32b, _64), _64);

            if (bdytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, adxtail, _8), _8, bdytail, _16), _16);
            }
            if (cdytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, -adxtail, _8), _8, cdytail, _16), _16);
            }
        }
        if (adytail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bctlen, bct, adytail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(aytbclen, aytbc, adytail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * ady, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bcttlen, bctt, adytail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * ady, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, adytail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, adytail, _32), _32, _32b, _64), _64);
        }
    }
    if (bdxtail !== 0 || bdytail !== 0) {
        if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
            s1 = cdxtail * ady;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
            bhi = c - (c - ady);
            blo = ady - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * adytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -cdy;
            n0 = -cdytail;
            s1 = adxtail * n1;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * n0;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            catlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(4, u, 4, v, cat);
            s1 = cdxtail * adytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adxtail * cdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            catt[3] = u3;
            cattlen = 4;
        } else {
            cat[0] = 0;
            catlen = 1;
            catt[0] = 0;
            cattlen = 1;
        }
        if (bdxtail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(catlen, cat, bdxtail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bxtcalen, bxtca, bdxtail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * bdx, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cattlen, catt, bdxtail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * bdx, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, bdxtail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, bdxtail, _32), _32, _32b, _64), _64);

            if (cdytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, bdxtail, _8), _8, cdytail, _16), _16);
            }
            if (adytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, cc, -bdxtail, _8), _8, adytail, _16), _16);
            }
        }
        if (bdytail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(catlen, cat, bdytail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bytcalen, bytca, bdytail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * bdy, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cattlen, catt, bdytail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * bdy, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, bdytail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, bdytail, _32), _32,  _32b, _64), _64);
        }
    }
    if (cdxtail !== 0 || cdytail !== 0) {
        if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
            s1 = adxtail * bdy;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
            bhi = c - (c - bdy);
            blo = bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * bdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -ady;
            n0 = -adytail;
            s1 = bdxtail * n1;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * n0;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            abtlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(4, u, 4, v, abt);
            s1 = adxtail * bdytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdxtail * adytail;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            abtt[3] = u3;
            abttlen = 4;
        } else {
            abt[0] = 0;
            abtlen = 1;
            abtt[0] = 0;
            abttlen = 1;
        }
        if (cdxtail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abtlen, abt, cdxtail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cxtablen, cxtab, cdxtail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * cdx, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abttlen, abtt, cdxtail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * cdx, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, cdxtail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, cdxtail, _32), _32, _32b, _64), _64);

            if (adytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bb, cdxtail, _8), _8, adytail, _16), _16);
            }
            if (bdytail !== 0) {
                finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, aa, -cdxtail, _8), _8, bdytail, _16), _16);
            }
        }
        if (cdytail !== 0) {
            const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abtlen, abt, cdytail, _16c);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(cytablen, cytab, cdytail, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, 2 * cdy, _32), _32, _48), _48);

            const len2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abttlen, abtt, cdytail, _8);
            finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, 2 * cdy, _16), _16,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len2, _8, cdytail, _16b), _16b,
                (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _16c, cdytail, _32), _32, _32b, _64), _64);
        }
    }

    return fin[finlen - 1];
}

function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const alift = adx * adx + ady * ady;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const blift = bdx * bdx + bdy * bdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const clift = cdx * cdx + cdy * cdy;

    const det =
        alift * (bdxcdy - cdxbdy) +
        blift * (cdxady - adxcdy) +
        clift * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * blift +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;

    const errbound = iccerrboundA * permanent;

    if (det > errbound || -det > errbound) {
        return det;
    }
    return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}

function incirclefast(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const ady = ay - dy;
    const bdx = bx - dx;
    const bdy = by - dy;
    const cdx = cx - dx;
    const cdy = cy - dy;

    const abdet = adx * bdy - bdx * ady;
    const bcdet = bdx * cdy - cdx * bdy;
    const cadet = cdx * ady - adx * cdy;
    const alift = adx * adx + ady * ady;
    const blift = bdx * bdx + bdy * bdy;
    const clift = cdx * cdx + cdy * cdy;

    return alift * bcdet + blift * cadet + clift * abdet;
}


/***/ }),

/***/ "./node_modules/robust-predicates/esm/insphere.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-predicates/esm/insphere.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insphere": () => (/* binding */ insphere),
/* harmony export */   "inspherefast": () => (/* binding */ inspherefast)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/robust-predicates/esm/util.js");


const isperrboundA = (16 + 224 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const isperrboundB = (5 + 72 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const isperrboundC = (71 + 1408 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;

const ab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const cd = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const de = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ea = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ac = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bd = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ce = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const da = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const eb = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);

const abc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const bcd = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const cde = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const dea = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const eab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const abd = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const bce = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const cda = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const deb = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const eac = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);

const adet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
const bdet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
const cdet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
const ddet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
const edet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);
const abdet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(2304);
const cddet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(2304);
const cdedet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(3456);
const deter = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(5760);

const _8 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _8b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _8c = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _16 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(16);
const _24 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(24);
const _48 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(48);
const _48b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(48);
const _96 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(96);
const _192 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(192);
const _384x = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(384);
const _384y = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(384);
const _384z = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(384);
const _768 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(768);

function sum_three_scale(a, b, c, az, bz, cz, out) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, a, az, _8), _8,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, b, bz, _8b), _8b,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, c, cz, _8c), _8c, _16, out);
}

function liftexact(alen, a, blen, b, clen, c, dlen, d, x, y, z, out) {
    const len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(alen, a, blen, b, _48), _48,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.negate)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(clen, c, dlen, d, _48b), _48b), _48b, _96);

    return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _96, x, _192), _192, x, _384x), _384x,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _96, y, _192), _192, y, _384y), _384y,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _96, z, _192), _192, z, _384z), _384z, _768, out);
}

function insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    s1 = ax * by;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ay;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;
    s1 = bx * cy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * by;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cx * dy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * cy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    cd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    cd[3] = u3;
    s1 = dx * ey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * dy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    de[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    de[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    de[2] = _j - (u3 - bvirt) + (_i - bvirt);
    de[3] = u3;
    s1 = ex * ay;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * ey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ea[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ea[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ea[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ea[3] = u3;
    s1 = ax * cy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * ay;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ac[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ac[3] = u3;
    s1 = bx * dy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * by;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bd[3] = u3;
    s1 = cx * ey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * cy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ce[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ce[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ce[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ce[3] = u3;
    s1 = dx * ay;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * dy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    da[2] = _j - (u3 - bvirt) + (_i - bvirt);
    da[3] = u3;
    s1 = ex * by;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    eb[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    eb[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    eb[2] = _j - (u3 - bvirt) + (_i - bvirt);
    eb[3] = u3;

    const abclen = sum_three_scale(ab, bc, ac, cz, az, -bz, abc);
    const bcdlen = sum_three_scale(bc, cd, bd, dz, bz, -cz, bcd);
    const cdelen = sum_three_scale(cd, de, ce, ez, cz, -dz, cde);
    const dealen = sum_three_scale(de, ea, da, az, dz, -ez, dea);
    const eablen = sum_three_scale(ea, ab, eb, bz, ez, -az, eab);
    const abdlen = sum_three_scale(ab, bd, da, dz, az, bz, abd);
    const bcelen = sum_three_scale(bc, ce, eb, ez, bz, cz, bce);
    const cdalen = sum_three_scale(cd, da, ac, az, cz, dz, cda);
    const deblen = sum_three_scale(de, eb, bd, bz, dz, ez, deb);
    const eaclen = sum_three_scale(ea, ac, ce, cz, ez, az, eac);

    const deterlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
        liftexact(cdelen, cde, bcelen, bce, deblen, deb, bcdlen, bcd, ax, ay, az, adet), adet,
        liftexact(dealen, dea, cdalen, cda, eaclen, eac, cdelen, cde, bx, by, bz, bdet), bdet,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
            liftexact(eablen, eab, deblen, deb, abdlen, abd, dealen, dea, cx, cy, cz, cdet), cdet,
            liftexact(abclen, abc, eaclen, eac, bcelen, bce, eablen, eab, dx, dy, dz, ddet), ddet,
            liftexact(bcdlen, bcd, abdlen, abd, cdalen, cda, abclen, abc, ex, ey, ez, edet), edet, cddet, cdedet), cdedet, abdet, deter);

    return deter[deterlen - 1];
}

const xdet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(96);
const ydet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(96);
const zdet = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(96);
const fin = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(1152);

function liftadapt(a, b, c, az, bz, cz, x, y, z, out) {
    const len = sum_three_scale(a, b, c, az, bz, cz, _24);
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum_three)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _24, x, _48), _48, x, xdet), xdet,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _24, y, _48), _48, y, ydet), ydet,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(len, _24, z, _48), _48, z, zdet), zdet, _192, out);
}

function insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent) {
    let ab3, bc3, cd3, da3, ac3, bd3;

    let aextail, bextail, cextail, dextail;
    let aeytail, beytail, ceytail, deytail;
    let aeztail, beztail, ceztail, deztail;

    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0;

    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;

    s1 = aex * bey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bex * aey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ab3 = _j + _i;
    bvirt = ab3 - _j;
    ab[2] = _j - (ab3 - bvirt) + (_i - bvirt);
    ab[3] = ab3;
    s1 = bex * cey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * bey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bc3 = _j + _i;
    bvirt = bc3 - _j;
    bc[2] = _j - (bc3 - bvirt) + (_i - bvirt);
    bc[3] = bc3;
    s1 = cex * dey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * cey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    cd3 = _j + _i;
    bvirt = cd3 - _j;
    cd[2] = _j - (cd3 - bvirt) + (_i - bvirt);
    cd[3] = cd3;
    s1 = dex * aey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = aex * dey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    da3 = _j + _i;
    bvirt = da3 - _j;
    da[2] = _j - (da3 - bvirt) + (_i - bvirt);
    da[3] = da3;
    s1 = aex * cey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * aey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ac3 = _j + _i;
    bvirt = ac3 - _j;
    ac[2] = _j - (ac3 - bvirt) + (_i - bvirt);
    ac[3] = ac3;
    s1 = bex * dey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * bey;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bd3 = _j + _i;
    bvirt = bd3 - _j;
    bd[2] = _j - (bd3 - bvirt) + (_i - bvirt);
    bd[3] = bd3;

    const finlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.negate)(liftadapt(bc, cd, bd, dez, bez, -cez, aex, aey, aez, adet), adet), adet,
            liftadapt(cd, da, ac, aez, cez, dez, bex, bey, bez, bdet), bdet, abdet), abdet,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.negate)(liftadapt(da, ab, bd, bez, dez, aez, cex, cey, cez, cdet), cdet), cdet,
            liftadapt(ab, bc, ac, cez, aez, -bez, dex, dey, dez, ddet), ddet, cddet), cddet, fin);

    let det = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.estimate)(finlen, fin);
    let errbound = isperrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - aex;
    aextail = ax - (aex + bvirt) + (bvirt - ex);
    bvirt = ay - aey;
    aeytail = ay - (aey + bvirt) + (bvirt - ey);
    bvirt = az - aez;
    aeztail = az - (aez + bvirt) + (bvirt - ez);
    bvirt = bx - bex;
    bextail = bx - (bex + bvirt) + (bvirt - ex);
    bvirt = by - bey;
    beytail = by - (bey + bvirt) + (bvirt - ey);
    bvirt = bz - bez;
    beztail = bz - (bez + bvirt) + (bvirt - ez);
    bvirt = cx - cex;
    cextail = cx - (cex + bvirt) + (bvirt - ex);
    bvirt = cy - cey;
    ceytail = cy - (cey + bvirt) + (bvirt - ey);
    bvirt = cz - cez;
    ceztail = cz - (cez + bvirt) + (bvirt - ez);
    bvirt = dx - dex;
    dextail = dx - (dex + bvirt) + (bvirt - ex);
    bvirt = dy - dey;
    deytail = dy - (dey + bvirt) + (bvirt - ey);
    bvirt = dz - dez;
    deztail = dz - (dez + bvirt) + (bvirt - ez);
    if (aextail === 0 && aeytail === 0 && aeztail === 0 &&
        bextail === 0 && beytail === 0 && beztail === 0 &&
        cextail === 0 && ceytail === 0 && ceztail === 0 &&
        dextail === 0 && deytail === 0 && deztail === 0) {
        return det;
    }

    errbound = isperrboundC * permanent + _util_js__WEBPACK_IMPORTED_MODULE_0__.resulterrbound * Math.abs(det);

    const abeps = (aex * beytail + bey * aextail) - (aey * bextail + bex * aeytail);
    const bceps = (bex * ceytail + cey * bextail) - (bey * cextail + cex * beytail);
    const cdeps = (cex * deytail + dey * cextail) - (cey * dextail + dex * ceytail);
    const daeps = (dex * aeytail + aey * dextail) - (dey * aextail + aex * deytail);
    const aceps = (aex * ceytail + cey * aextail) - (aey * cextail + cex * aeytail);
    const bdeps = (bex * deytail + dey * bextail) - (bey * dextail + dex * beytail);
    det +=
        (((bex * bex + bey * bey + bez * bez) * ((cez * daeps + dez * aceps + aez * cdeps) +
        (ceztail * da3 + deztail * ac3 + aeztail * cd3)) + (dex * dex + dey * dey + dez * dez) *
        ((aez * bceps - bez * aceps + cez * abeps) + (aeztail * bc3 - beztail * ac3 + ceztail * ab3))) -
        ((aex * aex + aey * aey + aez * aez) * ((bez * cdeps - cez * bdeps + dez * bceps) +
        (beztail * cd3 - ceztail * bd3 + deztail * bc3)) + (cex * cex + cey * cey + cez * cez) *
        ((dez * abeps + aez * bdeps + bez * daeps) + (deztail * ab3 + aeztail * bd3 + beztail * da3)))) +
        2 * (((bex * bextail + bey * beytail + bez * beztail) * (cez * da3 + dez * ac3 + aez * cd3) +
        (dex * dextail + dey * deytail + dez * deztail) * (aez * bc3 - bez * ac3 + cez * ab3)) -
        ((aex * aextail + aey * aeytail + aez * aeztail) * (bez * cd3 - cez * bd3 + dez * bc3) +
        (cex * cextail + cey * ceytail + cez * ceztail) * (dez * ab3 + aez * bd3 + bez * da3)));

    if (det >= errbound || -det >= errbound) {
        return det;
    }

    return insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez);
}

function insphere(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;

    const aexbey = aex * bey;
    const bexaey = bex * aey;
    const ab = aexbey - bexaey;
    const bexcey = bex * cey;
    const cexbey = cex * bey;
    const bc = bexcey - cexbey;
    const cexdey = cex * dey;
    const dexcey = dex * cey;
    const cd = cexdey - dexcey;
    const dexaey = dex * aey;
    const aexdey = aex * dey;
    const da = dexaey - aexdey;
    const aexcey = aex * cey;
    const cexaey = cex * aey;
    const ac = aexcey - cexaey;
    const bexdey = bex * dey;
    const dexbey = dex * bey;
    const bd = bexdey - dexbey;

    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;

    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;

    const det = (clift * dab - dlift * abc) + (alift * bcd - blift * cda);

    const aezplus = Math.abs(aez);
    const bezplus = Math.abs(bez);
    const cezplus = Math.abs(cez);
    const dezplus = Math.abs(dez);
    const aexbeyplus = Math.abs(aexbey);
    const bexaeyplus = Math.abs(bexaey);
    const bexceyplus = Math.abs(bexcey);
    const cexbeyplus = Math.abs(cexbey);
    const cexdeyplus = Math.abs(cexdey);
    const dexceyplus = Math.abs(dexcey);
    const dexaeyplus = Math.abs(dexaey);
    const aexdeyplus = Math.abs(aexdey);
    const aexceyplus = Math.abs(aexcey);
    const cexaeyplus = Math.abs(cexaey);
    const bexdeyplus = Math.abs(bexdey);
    const dexbeyplus = Math.abs(dexbey);
    const permanent =
        ((cexdeyplus + dexceyplus) * bezplus + (dexbeyplus + bexdeyplus) * cezplus + (bexceyplus + cexbeyplus) * dezplus) * alift +
        ((dexaeyplus + aexdeyplus) * cezplus + (aexceyplus + cexaeyplus) * dezplus + (cexdeyplus + dexceyplus) * aezplus) * blift +
        ((aexbeyplus + bexaeyplus) * dezplus + (bexdeyplus + dexbeyplus) * aezplus + (dexaeyplus + aexdeyplus) * bezplus) * clift +
        ((bexceyplus + cexbeyplus) * aezplus + (cexaeyplus + aexceyplus) * bezplus + (aexbeyplus + bexaeyplus) * cezplus) * dlift;

    const errbound = isperrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }
    return -insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent);
}

function inspherefast(pax, pay, paz, pbx, pby, pbz, pcx, pcy, pcz, pdx, pdy, pdz, pex, pey, pez) {
    const aex = pax - pex;
    const bex = pbx - pex;
    const cex = pcx - pex;
    const dex = pdx - pex;
    const aey = pay - pey;
    const bey = pby - pey;
    const cey = pcy - pey;
    const dey = pdy - pey;
    const aez = paz - pez;
    const bez = pbz - pez;
    const cez = pcz - pez;
    const dez = pdz - pez;

    const ab = aex * bey - bex * aey;
    const bc = bex * cey - cex * bey;
    const cd = cex * dey - dex * cey;
    const da = dex * aey - aex * dey;
    const ac = aex * cey - cex * aey;
    const bd = bex * dey - dex * bey;

    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;

    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;

    return (clift * dab - dlift * abc) + (alift * bcd - blift * cda);
}


/***/ }),

/***/ "./node_modules/robust-predicates/esm/orient2d.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-predicates/esm/orient2d.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orient2d": () => (/* binding */ orient2d),
/* harmony export */   "orient2dfast": () => (/* binding */ orient2dfast)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/robust-predicates/esm/util.js");


const ccwerrboundA = (3 + 16 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const ccwerrboundB = (2 + 12 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const ccwerrboundC = (9 + 64 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;

const B = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const C1 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const C2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(12);
const D = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(16);
const u = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);

function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;

    s1 = acx * bcy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    B[3] = u3;

    let det = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.estimate)(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);

    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
        return det;
    }

    errbound = ccwerrboundC * detsum + _util_js__WEBPACK_IMPORTED_MODULE_0__.resulterrbound * Math.abs(det);
    det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;

    s1 = acxtail * bcy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C1len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(4, B, 4, u, C1);

    s1 = acx * bcytail;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C2len = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(C1len, C1, 4, u, C2);

    s1 = acxtail * bcytail;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const Dlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(C2len, C2, 4, u, D);

    return D[Dlen - 1];
}

function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;

    if (detleft === 0 || detright === 0 || (detleft > 0) !== (detright > 0)) return det;

    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;

    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

function orient2dfast(ax, ay, bx, by, cx, cy) {
    return (ay - cy) * (bx - cx) - (ax - cx) * (by - cy);
}


/***/ }),

/***/ "./node_modules/robust-predicates/esm/orient3d.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-predicates/esm/orient3d.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orient3d": () => (/* binding */ orient3d),
/* harmony export */   "orient3dfast": () => (/* binding */ orient3dfast)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/robust-predicates/esm/util.js");


const o3derrboundA = (7 + 56 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const o3derrboundB = (3 + 28 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
const o3derrboundC = (26 + 288 * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon * _util_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;

const bc = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ca = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ab = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const at_b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const at_c = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bt_c = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bt_a = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ct_a = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const ct_b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);
const bct = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const cat = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const abt = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const u = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(4);

const _8 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _8b = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _16 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(8);
const _12 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(12);

let fin = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(192);
let fin2 = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.vec)(192);

function finadd(finlen, alen, a) {
    finlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(finlen, fin, alen, a, fin2);
    const tmp = fin; fin = fin2; fin2 = tmp;
    return finlen;
}

function tailinit(xtail, ytail, ax, ay, bx, by, a, b) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3, negate;
    if (xtail === 0) {
        if (ytail === 0) {
            a[0] = 0;
            b[0] = 0;
            return 1;
        } else {
            negate = -ytail;
            s1 = negate * ax;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            s1 = ytail * bx;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        }
    } else {
        if (ytail === 0) {
            s1 = xtail * ay;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            negate = -xtail;
            s1 = negate * by;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
            bhi = c - (c - by);
            blo = by - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        } else {
            s1 = xtail * ay;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = ytail * ax;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            a[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            a[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            a[2] = _j - (u3 - bvirt) + (_i - bvirt);
            a[3] = u3;
            s1 = ytail * bx;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = xtail * by;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * by;
            bhi = c - (c - by);
            blo = by - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            b[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            b[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            b[2] = _j - (u3 - bvirt) + (_i - bvirt);
            b[3] = u3;
            return 4;
        }
    }
}

function tailadd(finlen, a, b, k, z) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, u3;
    s1 = a * b;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * a;
    ahi = c - (c - a);
    alo = a - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * k;
    bhi = c - (c - k);
    blo = k - bhi;
    _i = s0 * k;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * s0;
    ahi = c - (c - s0);
    alo = s0 - ahi;
    u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
    _j = s1 * k;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * s1;
    ahi = c - (c - s1);
    alo = s1 - ahi;
    _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
    _k = _i + _0;
    bvirt = _k - _i;
    u[1] = _i - (_k - bvirt) + (_0 - bvirt);
    u3 = _j + _k;
    u[2] = _k - (u3 - _j);
    u[3] = u3;
    finlen = finadd(finlen, 4, u);
    if (z !== 0) {
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * z;
        bhi = c - (c - z);
        blo = z - bhi;
        _i = s0 * z;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * s0;
        ahi = c - (c - s0);
        alo = s0 - ahi;
        u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
        _j = s1 * z;
        c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * s1;
        ahi = c - (c - s1);
        alo = s1 - ahi;
        _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
        _k = _i + _0;
        bvirt = _k - _i;
        u[1] = _i - (_k - bvirt) + (_0 - bvirt);
        u3 = _j + _k;
        u[2] = _k - (u3 - _j);
        u[3] = u3;
        finlen = finadd(finlen, 4, u);
    }
    return finlen;
}

function orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail;
    let adytail, bdytail, cdytail;
    let adztail, bdztail, cdztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    s1 = bdx * cdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = _util_js__WEBPACK_IMPORTED_MODULE_0__.splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;

    finlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, adz, _8), _8,
            (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdz, _8b), _8b, _16), _16,
        (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdz, _8), _8, fin);

    let det = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.estimate)(finlen, fin);
    let errbound = o3derrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    bvirt = az - adz;
    adztail = az - (adz + bvirt) + (bvirt - dz);
    bvirt = bz - bdz;
    bdztail = bz - (bdz + bvirt) + (bvirt - dz);
    bvirt = cz - cdz;
    cdztail = cz - (cdz + bvirt) + (bvirt - dz);

    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 &&
        adytail === 0 && bdytail === 0 && cdytail === 0 &&
        adztail === 0 && bdztail === 0 && cdztail === 0) {
        return det;
    }

    errbound = o3derrboundC * permanent + _util_js__WEBPACK_IMPORTED_MODULE_0__.resulterrbound * Math.abs(det);
    det +=
        adz * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + adztail * (bdx * cdy - bdy * cdx) +
        bdz * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + bdztail * (cdx * ady - cdy * adx) +
        cdz * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + cdztail * (adx * bdy - ady * bdx);
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    const at_len = tailinit(adxtail, adytail, bdx, bdy, cdx, cdy, at_b, at_c);
    const bt_len = tailinit(bdxtail, bdytail, cdx, cdy, adx, ady, bt_c, bt_a);
    const ct_len = tailinit(cdxtail, cdytail, adx, ady, bdx, bdy, ct_a, ct_b);

    const bctlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(bt_len, bt_c, ct_len, ct_b, bct);
    finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bctlen, bct, adz, _16), _16);

    const catlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(ct_len, ct_a, at_len, at_c, cat);
    finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(catlen, cat, bdz, _16), _16);

    const abtlen = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.sum)(at_len, at_b, bt_len, bt_a, abt);
    finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abtlen, abt, cdz, _16), _16);

    if (adztail !== 0) {
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, bc, adztail, _12), _12);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(bctlen, bct, adztail, _16), _16);
    }
    if (bdztail !== 0) {
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ca, bdztail, _12), _12);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(catlen, cat, bdztail, _16), _16);
    }
    if (cdztail !== 0) {
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(4, ab, cdztail, _12), _12);
        finlen = finadd(finlen, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.scale)(abtlen, abt, cdztail, _16), _16);
    }

    if (adxtail !== 0) {
        if (bdytail !== 0) {
            finlen = tailadd(finlen, adxtail, bdytail, cdz, cdztail);
        }
        if (cdytail !== 0) {
            finlen = tailadd(finlen, -adxtail, cdytail, bdz, bdztail);
        }
    }
    if (bdxtail !== 0) {
        if (cdytail !== 0) {
            finlen = tailadd(finlen, bdxtail, cdytail, adz, adztail);
        }
        if (adytail !== 0) {
            finlen = tailadd(finlen, -bdxtail, adytail, cdz, cdztail);
        }
    }
    if (cdxtail !== 0) {
        if (adytail !== 0) {
            finlen = tailadd(finlen, cdxtail, adytail, bdz, bdztail);
        }
        if (bdytail !== 0) {
            finlen = tailadd(finlen, -cdxtail, bdytail, adz, adztail);
        }
    }

    return fin[finlen - 1];
}

function orient3d(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;

    const det =
        adz * (bdxcdy - cdxbdy) +
        bdz * (cdxady - adxcdy) +
        cdz * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);

    const errbound = o3derrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }

    return orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent);
}

function orient3dfast(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    return adx * (bdy * cdz - bdz * cdy) +
        bdx * (cdy * adz - cdz * ady) +
        cdx * (ady * bdz - adz * bdy);
}


/***/ }),

/***/ "./node_modules/robust-predicates/esm/util.js":
/*!****************************************************!*\
  !*** ./node_modules/robust-predicates/esm/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "estimate": () => (/* binding */ estimate),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "resulterrbound": () => (/* binding */ resulterrbound),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "splitter": () => (/* binding */ splitter),
/* harmony export */   "sum": () => (/* binding */ sum),
/* harmony export */   "sum_three": () => (/* binding */ sum_three),
/* harmony export */   "vec": () => (/* binding */ vec)
/* harmony export */ });
const epsilon = 1.1102230246251565e-16;
const splitter = 134217729;
const resulterrbound = (3 + 8 * epsilon) * epsilon;

// fast_expansion_sum_zeroelim routine from oritinal code
function sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if ((fnow > enow) === (fnow > -enow)) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if ((fnow > enow) === (fnow > -enow)) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        while (eindex < elen && findex < flen) {
            if ((fnow > enow) === (fnow > -enow)) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) {
                h[hindex++] = hh;
            }
        }
    }
    while (eindex < elen) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    while (findex < flen) {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function sum_three(alen, a, blen, b, clen, c, tmp, out) {
    return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}

// scale_expansion_zeroelim routine from oritinal code
function scale(elen, e, b, h) {
    let Q, sum, hh, product1, product0;
    let bvirt, c, ahi, alo, bhi, blo;

    c = splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    let enow = e[0];
    Q = enow * b;
    c = splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex = 0;
    if (hh !== 0) {
        h[hindex++] = hh;
    }
    for (let i = 1; i < elen; i++) {
        enow = e[i];
        product1 = enow * b;
        c = splitter * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum = Q + product0;
        bvirt = sum - Q;
        hh = Q - (sum - bvirt) + (product0 - bvirt);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        Q = product1 + sum;
        hh = sum - (Q - product1);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function negate(elen, e) {
    for (let i = 0; i < elen; i++) e[i] = -e[i];
    return elen;
}

function estimate(elen, e) {
    let Q = e[0];
    for (let i = 1; i < elen; i++) Q += e[i];
    return Q;
}

function vec(n) {
    return new Float64Array(n);
}


/***/ }),

/***/ "./node_modules/robust-predicates/index.js":
/*!*************************************************!*\
  !*** ./node_modules/robust-predicates/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "incircle": () => (/* reexport safe */ _esm_incircle_js__WEBPACK_IMPORTED_MODULE_2__.incircle),
/* harmony export */   "incirclefast": () => (/* reexport safe */ _esm_incircle_js__WEBPACK_IMPORTED_MODULE_2__.incirclefast),
/* harmony export */   "insphere": () => (/* reexport safe */ _esm_insphere_js__WEBPACK_IMPORTED_MODULE_3__.insphere),
/* harmony export */   "inspherefast": () => (/* reexport safe */ _esm_insphere_js__WEBPACK_IMPORTED_MODULE_3__.inspherefast),
/* harmony export */   "orient2d": () => (/* reexport safe */ _esm_orient2d_js__WEBPACK_IMPORTED_MODULE_0__.orient2d),
/* harmony export */   "orient2dfast": () => (/* reexport safe */ _esm_orient2d_js__WEBPACK_IMPORTED_MODULE_0__.orient2dfast),
/* harmony export */   "orient3d": () => (/* reexport safe */ _esm_orient3d_js__WEBPACK_IMPORTED_MODULE_1__.orient3d),
/* harmony export */   "orient3dfast": () => (/* reexport safe */ _esm_orient3d_js__WEBPACK_IMPORTED_MODULE_1__.orient3dfast)
/* harmony export */ });
/* harmony import */ var _esm_orient2d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/orient2d.js */ "./node_modules/robust-predicates/esm/orient2d.js");
/* harmony import */ var _esm_orient3d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/orient3d.js */ "./node_modules/robust-predicates/esm/orient3d.js");
/* harmony import */ var _esm_incircle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/incircle.js */ "./node_modules/robust-predicates/esm/incircle.js");
/* harmony import */ var _esm_insphere_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esm/insphere.js */ "./node_modules/robust-predicates/esm/insphere.js");







/***/ }),

/***/ "./node_modules/svelte/easing/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/svelte/easing/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backInOut": () => (/* binding */ backInOut),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "circIn": () => (/* binding */ circIn),
/* harmony export */   "circInOut": () => (/* binding */ circInOut),
/* harmony export */   "circOut": () => (/* binding */ circOut),
/* harmony export */   "cubicIn": () => (/* binding */ cubicIn),
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut),
/* harmony export */   "cubicOut": () => (/* binding */ cubicOut),
/* harmony export */   "elasticIn": () => (/* binding */ elasticIn),
/* harmony export */   "elasticInOut": () => (/* binding */ elasticInOut),
/* harmony export */   "elasticOut": () => (/* binding */ elasticOut),
/* harmony export */   "expoIn": () => (/* binding */ expoIn),
/* harmony export */   "expoInOut": () => (/* binding */ expoInOut),
/* harmony export */   "expoOut": () => (/* binding */ expoOut),
/* harmony export */   "linear": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   "quadIn": () => (/* binding */ quadIn),
/* harmony export */   "quadInOut": () => (/* binding */ quadInOut),
/* harmony export */   "quadOut": () => (/* binding */ quadOut),
/* harmony export */   "quartIn": () => (/* binding */ quartIn),
/* harmony export */   "quartInOut": () => (/* binding */ quartInOut),
/* harmony export */   "quartOut": () => (/* binding */ quartOut),
/* harmony export */   "quintIn": () => (/* binding */ quintIn),
/* harmony export */   "quintInOut": () => (/* binding */ quintInOut),
/* harmony export */   "quintOut": () => (/* binding */ quintOut),
/* harmony export */   "sineIn": () => (/* binding */ sineIn),
/* harmony export */   "sineInOut": () => (/* binding */ sineInOut),
/* harmony export */   "sineOut": () => (/* binding */ sineOut)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");


/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
    const s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
function backOut(t) {
    const s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
    const a = 4.0 / 11.0;
    const b = 8.0 / 11.0;
    const c = 9.0 / 10.0;
    const ca = 4356.0 / 361.0;
    const cb = 35442.0 / 1805.0;
    const cc = 16061.0 / 1805.0;
    const t2 = t * t;
    return t < a
        ? 7.5625 * t2
        : t < b
            ? 9.075 * t2 - 9.9 * t + 3.4
            : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
        : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}
function bounceIn(t) {
    return 1.0 - bounceOut(1.0 - t);
}
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
function circOut(t) {
    return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 *
            Math.sin(((+13.0 * Math.PI) / 2) * 2.0 * t) *
            Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 *
            Math.sin(((-13.0 * Math.PI) / 2) * (2.0 * t - 1.0 + 1.0)) *
            Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) +
            1.0;
}
function elasticIn(t) {
    return Math.sin((13.0 * t * Math.PI) / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
function elasticOut(t) {
    return (Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0);
}
function expoInOut(t) {
    return t === 0.0 || t === 1.0
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return -t * (t - 2.0);
}
function quartInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
function quartIn(t) {
    return Math.pow(t, 4.0);
}
function quartOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
    return t * t * t * t * t;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
    const v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
function sineOut(t) {
    return Math.sin((t * Math.PI) / 2);
}




/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvelteComponent": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentTyped),
/* harmony export */   "afterUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.afterUpdate),
/* harmony export */   "beforeUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.beforeUpdate),
/* harmony export */   "createEventDispatcher": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher),
/* harmony export */   "getAllContexts": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getAllContexts),
/* harmony export */   "getContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getContext),
/* harmony export */   "hasContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.hasContext),
/* harmony export */   "onDestroy": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy),
/* harmony export */   "onMount": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onMount),
/* harmony export */   "setContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.setContext),
/* harmony export */   "tick": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.tick)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");



/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlTag": () => (/* binding */ HtmlTag),
/* harmony export */   "HtmlTagHydration": () => (/* binding */ HtmlTagHydration),
/* harmony export */   "SvelteComponent": () => (/* binding */ SvelteComponent),
/* harmony export */   "SvelteComponentDev": () => (/* binding */ SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* binding */ SvelteComponentTyped),
/* harmony export */   "SvelteElement": () => (/* binding */ SvelteElement),
/* harmony export */   "action_destroyer": () => (/* binding */ action_destroyer),
/* harmony export */   "add_attribute": () => (/* binding */ add_attribute),
/* harmony export */   "add_classes": () => (/* binding */ add_classes),
/* harmony export */   "add_flush_callback": () => (/* binding */ add_flush_callback),
/* harmony export */   "add_location": () => (/* binding */ add_location),
/* harmony export */   "add_render_callback": () => (/* binding */ add_render_callback),
/* harmony export */   "add_resize_listener": () => (/* binding */ add_resize_listener),
/* harmony export */   "add_styles": () => (/* binding */ add_styles),
/* harmony export */   "add_transform": () => (/* binding */ add_transform),
/* harmony export */   "afterUpdate": () => (/* binding */ afterUpdate),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "append_dev": () => (/* binding */ append_dev),
/* harmony export */   "append_empty_stylesheet": () => (/* binding */ append_empty_stylesheet),
/* harmony export */   "append_hydration": () => (/* binding */ append_hydration),
/* harmony export */   "append_hydration_dev": () => (/* binding */ append_hydration_dev),
/* harmony export */   "append_styles": () => (/* binding */ append_styles),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "attr_dev": () => (/* binding */ attr_dev),
/* harmony export */   "attribute_to_object": () => (/* binding */ attribute_to_object),
/* harmony export */   "beforeUpdate": () => (/* binding */ beforeUpdate),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "binding_callbacks": () => (/* binding */ binding_callbacks),
/* harmony export */   "blank_object": () => (/* binding */ blank_object),
/* harmony export */   "bubble": () => (/* binding */ bubble),
/* harmony export */   "check_outros": () => (/* binding */ check_outros),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "claim_component": () => (/* binding */ claim_component),
/* harmony export */   "claim_element": () => (/* binding */ claim_element),
/* harmony export */   "claim_html_tag": () => (/* binding */ claim_html_tag),
/* harmony export */   "claim_space": () => (/* binding */ claim_space),
/* harmony export */   "claim_svg_element": () => (/* binding */ claim_svg_element),
/* harmony export */   "claim_text": () => (/* binding */ claim_text),
/* harmony export */   "clear_loops": () => (/* binding */ clear_loops),
/* harmony export */   "component_subscribe": () => (/* binding */ component_subscribe),
/* harmony export */   "compute_rest_props": () => (/* binding */ compute_rest_props),
/* harmony export */   "compute_slots": () => (/* binding */ compute_slots),
/* harmony export */   "createEventDispatcher": () => (/* binding */ createEventDispatcher),
/* harmony export */   "create_animation": () => (/* binding */ create_animation),
/* harmony export */   "create_bidirectional_transition": () => (/* binding */ create_bidirectional_transition),
/* harmony export */   "create_component": () => (/* binding */ create_component),
/* harmony export */   "create_in_transition": () => (/* binding */ create_in_transition),
/* harmony export */   "create_out_transition": () => (/* binding */ create_out_transition),
/* harmony export */   "create_slot": () => (/* binding */ create_slot),
/* harmony export */   "create_ssr_component": () => (/* binding */ create_ssr_component),
/* harmony export */   "current_component": () => (/* binding */ current_component),
/* harmony export */   "custom_event": () => (/* binding */ custom_event),
/* harmony export */   "dataset_dev": () => (/* binding */ dataset_dev),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "destroy_block": () => (/* binding */ destroy_block),
/* harmony export */   "destroy_component": () => (/* binding */ destroy_component),
/* harmony export */   "destroy_each": () => (/* binding */ destroy_each),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "detach_after_dev": () => (/* binding */ detach_after_dev),
/* harmony export */   "detach_before_dev": () => (/* binding */ detach_before_dev),
/* harmony export */   "detach_between_dev": () => (/* binding */ detach_between_dev),
/* harmony export */   "detach_dev": () => (/* binding */ detach_dev),
/* harmony export */   "dirty_components": () => (/* binding */ dirty_components),
/* harmony export */   "dispatch_dev": () => (/* binding */ dispatch_dev),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "element_is": () => (/* binding */ element_is),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "end_hydrating": () => (/* binding */ end_hydrating),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "escape_attribute_value": () => (/* binding */ escape_attribute_value),
/* harmony export */   "escape_object": () => (/* binding */ escape_object),
/* harmony export */   "escaped": () => (/* binding */ escaped),
/* harmony export */   "exclude_internal_props": () => (/* binding */ exclude_internal_props),
/* harmony export */   "fix_and_destroy_block": () => (/* binding */ fix_and_destroy_block),
/* harmony export */   "fix_and_outro_and_destroy_block": () => (/* binding */ fix_and_outro_and_destroy_block),
/* harmony export */   "fix_position": () => (/* binding */ fix_position),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "getAllContexts": () => (/* binding */ getAllContexts),
/* harmony export */   "getContext": () => (/* binding */ getContext),
/* harmony export */   "get_all_dirty_from_scope": () => (/* binding */ get_all_dirty_from_scope),
/* harmony export */   "get_binding_group_value": () => (/* binding */ get_binding_group_value),
/* harmony export */   "get_current_component": () => (/* binding */ get_current_component),
/* harmony export */   "get_custom_elements_slots": () => (/* binding */ get_custom_elements_slots),
/* harmony export */   "get_root_for_style": () => (/* binding */ get_root_for_style),
/* harmony export */   "get_slot_changes": () => (/* binding */ get_slot_changes),
/* harmony export */   "get_spread_object": () => (/* binding */ get_spread_object),
/* harmony export */   "get_spread_update": () => (/* binding */ get_spread_update),
/* harmony export */   "get_store_value": () => (/* binding */ get_store_value),
/* harmony export */   "globals": () => (/* binding */ globals),
/* harmony export */   "group_outros": () => (/* binding */ group_outros),
/* harmony export */   "handle_promise": () => (/* binding */ handle_promise),
/* harmony export */   "hasContext": () => (/* binding */ hasContext),
/* harmony export */   "has_prop": () => (/* binding */ has_prop),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "insert_dev": () => (/* binding */ insert_dev),
/* harmony export */   "insert_hydration": () => (/* binding */ insert_hydration),
/* harmony export */   "insert_hydration_dev": () => (/* binding */ insert_hydration_dev),
/* harmony export */   "intros": () => (/* binding */ intros),
/* harmony export */   "invalid_attribute_name_character": () => (/* binding */ invalid_attribute_name_character),
/* harmony export */   "is_client": () => (/* binding */ is_client),
/* harmony export */   "is_crossorigin": () => (/* binding */ is_crossorigin),
/* harmony export */   "is_empty": () => (/* binding */ is_empty),
/* harmony export */   "is_function": () => (/* binding */ is_function),
/* harmony export */   "is_promise": () => (/* binding */ is_promise),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "listen_dev": () => (/* binding */ listen_dev),
/* harmony export */   "loop": () => (/* binding */ loop),
/* harmony export */   "loop_guard": () => (/* binding */ loop_guard),
/* harmony export */   "merge_ssr_styles": () => (/* binding */ merge_ssr_styles),
/* harmony export */   "missing_component": () => (/* binding */ missing_component),
/* harmony export */   "mount_component": () => (/* binding */ mount_component),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not_equal": () => (/* binding */ not_equal),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "null_to_empty": () => (/* binding */ null_to_empty),
/* harmony export */   "object_without_properties": () => (/* binding */ object_without_properties),
/* harmony export */   "onDestroy": () => (/* binding */ onDestroy),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outro_and_destroy_block": () => (/* binding */ outro_and_destroy_block),
/* harmony export */   "prevent_default": () => (/* binding */ prevent_default),
/* harmony export */   "prop_dev": () => (/* binding */ prop_dev),
/* harmony export */   "query_selector_all": () => (/* binding */ query_selector_all),
/* harmony export */   "raf": () => (/* binding */ raf),
/* harmony export */   "run": () => (/* binding */ run),
/* harmony export */   "run_all": () => (/* binding */ run_all),
/* harmony export */   "safe_not_equal": () => (/* binding */ safe_not_equal),
/* harmony export */   "schedule_update": () => (/* binding */ schedule_update),
/* harmony export */   "select_multiple_value": () => (/* binding */ select_multiple_value),
/* harmony export */   "select_option": () => (/* binding */ select_option),
/* harmony export */   "select_options": () => (/* binding */ select_options),
/* harmony export */   "select_value": () => (/* binding */ select_value),
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "setContext": () => (/* binding */ setContext),
/* harmony export */   "set_attributes": () => (/* binding */ set_attributes),
/* harmony export */   "set_current_component": () => (/* binding */ set_current_component),
/* harmony export */   "set_custom_element_data": () => (/* binding */ set_custom_element_data),
/* harmony export */   "set_data": () => (/* binding */ set_data),
/* harmony export */   "set_data_dev": () => (/* binding */ set_data_dev),
/* harmony export */   "set_input_type": () => (/* binding */ set_input_type),
/* harmony export */   "set_input_value": () => (/* binding */ set_input_value),
/* harmony export */   "set_now": () => (/* binding */ set_now),
/* harmony export */   "set_raf": () => (/* binding */ set_raf),
/* harmony export */   "set_store_value": () => (/* binding */ set_store_value),
/* harmony export */   "set_style": () => (/* binding */ set_style),
/* harmony export */   "set_svg_attributes": () => (/* binding */ set_svg_attributes),
/* harmony export */   "space": () => (/* binding */ space),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "src_url_equal": () => (/* binding */ src_url_equal),
/* harmony export */   "start_hydrating": () => (/* binding */ start_hydrating),
/* harmony export */   "stop_propagation": () => (/* binding */ stop_propagation),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "svg_element": () => (/* binding */ svg_element),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "tick": () => (/* binding */ tick),
/* harmony export */   "time_ranges_to_array": () => (/* binding */ time_ranges_to_array),
/* harmony export */   "to_number": () => (/* binding */ to_number),
/* harmony export */   "toggle_class": () => (/* binding */ toggle_class),
/* harmony export */   "transition_in": () => (/* binding */ transition_in),
/* harmony export */   "transition_out": () => (/* binding */ transition_out),
/* harmony export */   "trusted": () => (/* binding */ trusted),
/* harmony export */   "update_await_block_branch": () => (/* binding */ update_await_block_branch),
/* harmony export */   "update_keyed_each": () => (/* binding */ update_keyed_each),
/* harmony export */   "update_slot": () => (/* binding */ update_slot),
/* harmony export */   "update_slot_base": () => (/* binding */ update_slot_base),
/* harmony export */   "validate_component": () => (/* binding */ validate_component),
/* harmony export */   "validate_each_argument": () => (/* binding */ validate_each_argument),
/* harmony export */   "validate_each_keys": () => (/* binding */ validate_each_keys),
/* harmony export */   "validate_slots": () => (/* binding */ validate_slots),
/* harmony export */   "validate_store": () => (/* binding */ validate_store),
/* harmony export */   "xlink_attr": () => (/* binding */ xlink_attr)
/* harmony export */ });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.claim_order !== undefined) {
                myChildren.push(node);
            }
        }
        children = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = ((longest > 0 && children[m[longest]].claim_order <= current) ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentElement !== target))) {
            target.actual_end_child = target.firstChild;
        }
        // Skip nodes of undefined ordering
        while ((target.actual_end_child !== null) && (target.actual_end_child.claim_order === undefined)) {
            target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
            // We only insert if the ordering of this node should be modified or the parent node is not target
            if (node.claim_order !== undefined || node.parentNode !== target) {
                target.insertBefore(node, target.actual_end_child);
            }
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append_hydration(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function trusted(fn) {
    return function (event) {
        // @ts-ignore
        if (event.isTrusted)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.add(group[i].__value);
    }
    if (!checked) {
        value.delete(__value);
    }
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (() => {
        // We first try to find an element after the previous one
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                else if (replacement === undefined) {
                    // Since we spliced before the last_index, we decrease it
                    nodes.claim_info.last_index--;
                }
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) {
                remove.push(attribute.name);
            }
        }
        remove.forEach(v => node.removeAttribute(v));
        return undefined;
    }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
                return node.splitText(dataStr.length);
            }
        }
        else {
            node.data = dataStr;
        }
    }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text, start) {
    for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
            return i;
        }
    }
    return nodes.length;
}
function claim_html_tag(nodes) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) {
        return new HtmlTagHydration();
    }
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, bubbles = false) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor() {
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes) {
        super();
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) {
            this.n = this.l;
        }
        else {
            super.c(html);
        }
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert_hydration(this.t, this.n[i], anchor);
        }
    }
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}
function get_custom_elements_slots(element) {
    const result = {};
    element.childNodes.forEach((node) => {
        result[node.slot || 'default'] = true;
    });
    return result;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { stylesheet } = info;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
function getAllContexts() {
    return get_current_component().$$.context;
}
function hasContext(key) {
    return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            if (info.blocks[i] === block) {
                                info.blocks[i] = null;
                            }
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
        child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error('Cannot have duplicate keys in a keyed each');
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
    const attributes = Object.assign({}, ...args);
    if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
            if (attributes.class == null) {
                attributes.class = classes_to_add;
            }
            else {
                attributes.class += ' ' + classes_to_add;
            }
        }
        if (styles_to_add) {
            if (attributes.style == null) {
                attributes.style = style_object_to_string(styles_to_add);
            }
            else {
                attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
            }
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += ' ' + name;
        }
        else if (value != null) {
            str += ` ${name}="${value}"`;
        }
    });
    return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
    const style_object = {};
    for (const individual_style of style_attribute.split(';')) {
        const colon_index = individual_style.indexOf(':');
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
            continue;
        style_object[name] = value;
    }
    for (const name in style_directive) {
        const value = style_directive[name];
        if (value) {
            style_object[name] = value;
        }
        else {
            delete style_object[name];
        }
    }
    return style_object;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function escape_attribute_value(value) {
    return typeof value === 'string' ? escape(value) : value;
}
function escape_object(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
    }
    return result;
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape_attribute_value(value.toString())}"`;
    return ` ${name}${assignment}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
    return Object.keys(style_object)
        .filter(key => style_object[key])
        .map(key => `${key}: ${style_object[key]};`)
        .join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.46.5' }, detail), true));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function append_hydration_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert_hydration(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */
class SvelteComponentTyped extends SvelteComponentDev {
    constructor(options) {
        super(options);
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error('Infinite loop detected');
        }
    };
}




/***/ }),

/***/ "./node_modules/svelte/transition/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/svelte/transition/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "crossfade": () => (/* binding */ crossfade),
/* harmony export */   "draw": () => (/* binding */ draw),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "fly": () => (/* binding */ fly),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "slide": () => (/* binding */ slide)
/* harmony export */ });
/* harmony import */ var _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easing/index.mjs */ "./node_modules/svelte/easing/index.mjs");
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function blur(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicInOut, amount = 5, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const f = style.filter === 'none' ? '' : style.filter;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `opacity: ${target_opacity - (od * u)}; filter: ${f} blur(${u * amount}px);`
    };
}
function fade(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.linear } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicOut } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => 'overflow: hidden;' +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicOut, start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}
function draw(node, { delay = 0, speed, duration, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicInOut } = {}) {
    let len = node.getTotalLength();
    const style = getComputedStyle(node);
    if (style.strokeLinecap !== 'butt') {
        len += parseInt(style.strokeWidth);
    }
    if (duration === undefined) {
        if (speed === undefined) {
            duration = 800;
        }
        else {
            duration = len / speed;
        }
    }
    else if (typeof duration === 'function') {
        duration = duration(len);
    }
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicOut } = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__.assign)((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__.assign)({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__.is_function)(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Menu_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.svelte */ "./src/Menu.svelte");
/* harmony import */ var _Network_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Network.svelte */ "./src/Network.svelte");
/* harmony import */ var _Legends_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Legends.svelte */ "./src/Legends.svelte");
/* src\App.svelte generated by Svelte v3.46.5 */






function create_fragment(ctx) {
	let div;
	let network;
	let updating_viewScale;
	let t0;
	let menu;
	let updating_nodeColorMapping;
	let updating_nodeSizeMapping;
	let updating_edgeMapping;
	let t1;
	let legends;
	let current;

	function network_viewScale_binding(value) {
		/*network_viewScale_binding*/ ctx[7](value);
	}

	let network_props = {
		nodes: /*nodes*/ ctx[5],
		edges: /*edges*/ ctx[0],
		nodeColorMapping: /*nodeColorMapping*/ ctx[1],
		edgeMapping: /*edgeMapping*/ ctx[3]
	};

	if (/*viewScale*/ ctx[4] !== void 0) {
		network_props.viewScale = /*viewScale*/ ctx[4];
	}

	network = new _Network_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ props: network_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(network, 'viewScale', network_viewScale_binding));

	function menu_nodeColorMapping_binding(value) {
		/*menu_nodeColorMapping_binding*/ ctx[8](value);
	}

	function menu_nodeSizeMapping_binding(value) {
		/*menu_nodeSizeMapping_binding*/ ctx[9](value);
	}

	function menu_edgeMapping_binding(value) {
		/*menu_edgeMapping_binding*/ ctx[10](value);
	}

	let menu_props = {
		nodes: /*nodes*/ ctx[5],
		edges: /*edges*/ ctx[0]
	};

	if (/*nodeColorMapping*/ ctx[1] !== void 0) {
		menu_props.nodeColorMapping = /*nodeColorMapping*/ ctx[1];
	}

	if (/*nodeSizeMapping*/ ctx[2] !== void 0) {
		menu_props.nodeSizeMapping = /*nodeSizeMapping*/ ctx[2];
	}

	if (/*edgeMapping*/ ctx[3] !== void 0) {
		menu_props.edgeMapping = /*edgeMapping*/ ctx[3];
	}

	menu = new _Menu_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ props: menu_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(menu, 'nodeColorMapping', menu_nodeColorMapping_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(menu, 'nodeSizeMapping', menu_nodeSizeMapping_binding));
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(menu, 'edgeMapping', menu_edgeMapping_binding));

	legends = new _Legends_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				nodeColorMapping: /*nodeColorMapping*/ ctx[1],
				nodeSizeMapping: /*nodeSizeMapping*/ ctx[2],
				viewScale: /*viewScale*/ ctx[4]
			}
		});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(network.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(menu.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(legends.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(network, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(menu, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(legends, div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const network_changes = {};
			if (dirty & /*edges*/ 1) network_changes.edges = /*edges*/ ctx[0];
			if (dirty & /*nodeColorMapping*/ 2) network_changes.nodeColorMapping = /*nodeColorMapping*/ ctx[1];
			if (dirty & /*edgeMapping*/ 8) network_changes.edgeMapping = /*edgeMapping*/ ctx[3];

			if (!updating_viewScale && dirty & /*viewScale*/ 16) {
				updating_viewScale = true;
				network_changes.viewScale = /*viewScale*/ ctx[4];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_viewScale = false);
			}

			network.$set(network_changes);
			const menu_changes = {};
			if (dirty & /*edges*/ 1) menu_changes.edges = /*edges*/ ctx[0];

			if (!updating_nodeColorMapping && dirty & /*nodeColorMapping*/ 2) {
				updating_nodeColorMapping = true;
				menu_changes.nodeColorMapping = /*nodeColorMapping*/ ctx[1];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_nodeColorMapping = false);
			}

			if (!updating_nodeSizeMapping && dirty & /*nodeSizeMapping*/ 4) {
				updating_nodeSizeMapping = true;
				menu_changes.nodeSizeMapping = /*nodeSizeMapping*/ ctx[2];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_nodeSizeMapping = false);
			}

			if (!updating_edgeMapping && dirty & /*edgeMapping*/ 8) {
				updating_edgeMapping = true;
				menu_changes.edgeMapping = /*edgeMapping*/ ctx[3];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_edgeMapping = false);
			}

			menu.$set(menu_changes);
			const legends_changes = {};
			if (dirty & /*nodeColorMapping*/ 2) legends_changes.nodeColorMapping = /*nodeColorMapping*/ ctx[1];
			if (dirty & /*nodeSizeMapping*/ 4) legends_changes.nodeSizeMapping = /*nodeSizeMapping*/ ctx[2];
			if (dirty & /*viewScale*/ 16) legends_changes.viewScale = /*viewScale*/ ctx[4];
			legends.$set(legends_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(network.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(menu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(legends.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(network.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(menu.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(legends.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(network);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(menu);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(legends);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { model } = $$props;

	// --- Extract network
	const nodes = model.get("nodes");

	let edges = model.get("edges");

	model.on("change:edges", () => {
		$$invalidate(0, edges = model.get("edges"));
	});

	// --- Mapping
	let nodeColorMapping = null;

	let nodeSizeMapping = null;
	let edgeMapping = null;
	let viewScale = 1;

	function network_viewScale_binding(value) {
		viewScale = value;
		$$invalidate(4, viewScale);
	}

	function menu_nodeColorMapping_binding(value) {
		nodeColorMapping = value;
		$$invalidate(1, nodeColorMapping);
	}

	function menu_nodeSizeMapping_binding(value) {
		nodeSizeMapping = value;
		$$invalidate(2, nodeSizeMapping);
	}

	function menu_edgeMapping_binding(value) {
		edgeMapping = value;
		$$invalidate(3, edgeMapping);
	}

	$$self.$$set = $$props => {
		if ('model' in $$props) $$invalidate(6, model = $$props.model);
	};

	return [
		edges,
		nodeColorMapping,
		nodeSizeMapping,
		edgeMapping,
		viewScale,
		nodes,
		model,
		network_viewScale_binding,
		menu_nodeColorMapping_binding,
		menu_nodeSizeMapping_binding,
		menu_edgeMapping_binding
	];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { model: 6 });
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=app.js.map