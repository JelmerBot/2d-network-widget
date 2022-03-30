<script>
  import { select } from "d3-selection";
  import { axisBottom } from "d3-axis";
  import { scaleLinear } from "d3-scale";

  // --- Component Props
  export let scale = null;
  export let tickSize = 6;
  export let titleSize = 10;
  export let width = 320;
  export let height = 34 + titleSize + tickSize;
  export let marginTop = 3 + titleSize;
  export let marginRight = 0;
  export let marginBottom = 16 + tickSize;
  export let marginLeft = 0;
  export let ticks = width / 64;
  export let tickFormat = null;
  export let tickValues = null;
  export let title = null;

  //--- Create x-scale and axis
  let domain = [0, 1];
  let minmax = [0, 1];
  let n_domain = [0, 1];

  $: domain = scale.domain();
  $: minmax = [domain[0], domain[domain.length - 1]];
  $: n_domain = domain.map((i) => (i - minmax[0]) / (minmax[1] - minmax[0]));
  $: x_scale = scaleLinear()
    .domain(minmax)
    .range([marginLeft, width - marginRight]);
  $: x_axis = axisBottom(x_scale)
    .ticks(ticks, typeof tickFormat === "string" ? tickFormat : null)
    .tickFormat(typeof tickFormat === "function" ? tickFormat : null)
    .tickSize(tickSize)
    .tickValues(tickValues);

  const axis_function = (g, ax) => {
    const selection = select(g);
    function drawAxis(ax) {
      selection.selectAll(".tick").remove();
      selection.call(ax);
      selection
        .selectAll(".tick line")
        .attr("y1", marginTop + marginBottom - height);
      selection.select(".domain").remove();
    }
    drawAxis(ax);

    return {
      update(newAx) {
        drawAxis(newAx);
      },
    };
  };

  // --- Create color-bar data url

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
</script>

<svg class="color-legend" {height} viewBox={[0, 0, width, height]} {width}>
  <image
    height={height - marginTop - marginBottom}
    href={ramp(scale.copy().domain(n_domain))}
    preserveAspectRatio="none"
    width={width - marginLeft - marginRight}
    x={marginLeft}
    y={marginTop}
  />
  <g transform={`translate(0, ${titleSize})`}>
    <text style="font-size: 10; font-family: sans-serif;">{title}</text>
  </g>
  <g
    use:axis_function={x_axis}
    transform={`translate(0,${height - marginBottom})`}
  />
</svg>

<style>
  .color-legend {
    overflow: visible;
    display: block;
  }
</style>
