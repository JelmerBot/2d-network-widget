<script>
  import { select } from "d3-selection";
  import { axisBottom } from "d3-axis";
  import { scaleLinear } from "d3-scale";
  import { quantile, range } from "d3-array";
  import { interpolate, quantize } from "d3-interpolate";

  // --- Component props
  export let scale = null;
  export let viewScale = 1;
  export let shape = "circle"; // or 'line'
  export let tickSize = 10;
  export let titleSize = 10;
  export let width = 320;
  export let height = 34 + titleSize + tickSize;
  export let marginTop = 3 + titleSize;
  export let marginRight = 10;
  export let marginBottom = 16 + tickSize;
  export let marginLeft = 5;
  export let ticks = width / 32;
  export let tickFormat = null;
  export let title = null;
  // export let tickValues = null;

  // --- The tick svg group
  const line_length = (width - marginLeft - marginRight) / ticks;

  // --- Compute tick-values
  $: domain = scale.domain();
  $: tickValues = range(ticks + 1).map((i) => quantile(domain, i / ticks));

  $: x_scale = scaleLinear()
    .domain(domain)
    .rangeRound(quantize(interpolate(marginLeft, width - marginRight), 2));

  $: x_axis = axisBottom(x_scale)
    .ticks(ticks, typeof tickFormat === "string" ? tickFormat : null)
    .tickFormat(typeof tickFormat === "function" ? tickFormat : null)
    .tickSize(tickSize)
    .tickValues(tickValues);

  $: data = range(tickValues.length).map((i) => {
    return {
      x: x_scale(tickValues[i]) + 0.5,
      r: viewScale * scale(tickValues[i]),
    };
  });

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
</script>

<svg class="size-legend" {height} viewbox={[0, 0, width, height]} {width}>
  <g transform={`translate(0, ${titleSize})`}>
    <text style="font-size: 10; font-family: sans-serif;">{title}</text>
  </g>
  <g
    use:axis_function={x_axis}
    transform={`translate(0,${height - marginBottom})`}
  />
  <g transform={`translate(0,${height - marginBottom})`}>
    {#if shape === "circle"}
      {#each data as { x, r }}
        <circle
          cx={x}
          cy={marginTop + marginBottom - height + tickSize}
          {r}
          fill="#fff"
          stroke="#ccc"
          stroke-width="1"
        />
      {/each}
    {:else}
      {#each data as { x, r }}
        <line
          stroke="#fff"
          stroke-width={r}
          y1={(marginTop + marginBottom - height + tickSize) / 2}
          y2={(marginTop + marginBottom - height + tickSize) / 2}
          x1={x - line_length / 3}
          x2={x + line_length / 3}
        />
      {/each}
    {/if}
  </g>
</svg>

<style>
  .size-legend {
    overflow: visible;
    display: block;
  }
</style>
