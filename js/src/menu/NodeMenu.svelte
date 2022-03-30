<script>
  import { mean, extent } from "d3-array";
  import { scaleSqrt } from "d3-scale";
  import { applyOpacity, colormapFactories } from "./color.js";

  // --- Component properties
  export let nodes = [];
  export let visible;
  export let send;
  export let receive;
  export let colorMapping = null;
  export let sizeMapping = null;

  const columns = Object.keys(nodes[0]);

  // --- Opacity state
  let opacity = 1;

  // --- Internal color state
  let enableColor = false;
  let colorColumn = Object.keys(nodes[0])[0];
  let colorType = "seq";
  $: isDivergingColorType = colorType === "div";
  $: isCategoricalColorType = colorType === "cat";
  $: colorMapOptions = Object.keys(colormapFactories[colorType]);
  let colorMapName = "Viridis";
  $: colorMapName =
    colorType === "seq" ? "Viridis" : Object.keys(colorMapOptions)[0];
  $: colorScale = colormapFactories[colorType][colorMapName]();
  let colorDomainMin = 0;
  let colorDomainMax = 1;
  $: [colorDomainMin, colorDomainMax] = _color_domain(
    isCategoricalColorType,
    colorColumn
  );
  let colorDomainMid = 0.5;
  $: colorDomainMid = _color_domain_mid(isDivergingColorType, colorColumn);
  $: switch (colorType) {
    case "seq":
      colorScale = colorScale.domain([colorDomainMin, colorDomainMax]);
      break;
    case "div":
      colorScale = colorScale.domain([
        colorDomainMin,
        colorDomainMid,
        colorDomainMax,
      ]);
      break;
    case "cat":
      colorScale = colorScale.domain([
        ...new Set(nodes.map((d) => d[colorColumn])),
      ]);
      break;
  }
  $: colorFunction = (d) => applyOpacity(colorScale(d[colorColumn]), opacity);
  // Separate functions needed so that Svelte detects which variables it needs
  // to monitor...
  function _color_domain(isCategoricalColorType, column) {
    return !isCategoricalColorType ? extent(nodes, (d) => d[column]) : [0, 1];
  }
  function _color_domain_mid(isDivergingColorType, column) {
    return isDivergingColorType ? mean(nodes, (d) => d[column]) : 0.5;
  }

  // --- Exported mapping object
  $: colorMapping = {
    title: enableColor ? colorColumn : null,
    color: enableColor ? colorFunction : () => applyOpacity("skyblue", opacity),
    scale: colorScale,
    type: colorType,
  };

  // --- Internal size state
  let enableSize = false;
  let sizeColumn = Object.keys(nodes[0])[0];
  let sizeScale = scaleSqrt();
  let sizeDomainMin = 0;
  let sizeDomainMax = 1;
  $: [sizeDomainMin, sizeDomainMax] = _size_domain(sizeColumn);
  $: sizeScale = sizeScale.domain([sizeDomainMin, sizeDomainMax]);
  let sizeRangeMin = 1;
  let sizeRangeMax = 3;
  $: defaultSize = (sizeRangeMax + sizeRangeMin) / 2;
  $: sizeScale = sizeScale.range([sizeRangeMin, sizeRangeMax]);
  $: sizeFunction = (d) => sizeScale(d[sizeColumn]);
  // Separate functions needed so that Svelte detects which variables it needs
  // to monitor...
  function _size_domain(column) {
    return extent(nodes, (d) => d[column]);
  }

  // --- Exported mapping object
  $: sizeMapping = {
    title: enableSize ? sizeColumn : null,
    size: enableSize ? sizeFunction : (_) => defaultSize,
    scale: sizeScale,
  };
</script>

{#if visible === "node"}
  <div
    class="mapping-container"
    in:receive={{ key: "node" }}
    out:send={{ key: "node" }}
  >
    <buttton class="close-button" on:click={() => (visible = "")}>
      <span>&times;</span>
    </buttton>

    <div class="row">
      <b class="half">Color</b>
      <label class="half">
        <input type="checkbox" bind:checked={enableColor} />
        enable
      </label>
    </div>

    <label>
      Column:
      <select bind:value={colorColumn}>
        {#each columns as col}
          <option value={col}>{col}</option>
        {/each}
      </select>
    </label>

    <label>
      Type:
      <select bind:value={colorType}>
        <option value="seq">Sequential</option>
        <option value="div">Diverging</option>
        <option value="cat">Categorical</option>
      </select>
    </label>

    <label>
      Map:
      <select bind:value={colorMapName}>
        {#each colorMapOptions as map}
          <option value={map}>{map}</option>
        {/each}
      </select>
    </label>

    <div class="row">
      <span class={isDivergingColorType ? "third" : "half"}>Min:</span>
      {#if colorType === "div"}
        <span class="third">Mid:</span>
      {/if}
      <span class={isDivergingColorType ? "third" : "half"}>Max:</span>
    </div>
    <div class="row">
      <input
        class={isDivergingColorType ? "third" : "half"}
        disabled={colorType === "cat"}
        type="number"
        bind:value={colorDomainMin}
      />
      {#if isDivergingColorType}
        <input class="third" type="number" bind:value={colorDomainMid} />
      {/if}
      <input
        class={isDivergingColorType ? "third" : "half"}
        disabled={colorType === "cat"}
        type="number"
        bind:value={colorDomainMax}
      />
    </div>

    <span>Opacity:</span>
    <input type="range" min="0" max="1" step="0.01" bind:value={opacity} />

    <div class="row">
      <b class="half">Size</b>
      <label class="half">
        <input type="checkbox" bind:checked={enableSize} />
        enable
      </label>
    </div>

    <label>
      Column:
      <select bind:value={sizeColumn}>
        {#each columns as col}
          <option value={col}>{col}</option>
        {/each}
      </select>
    </label>

    <div class="row">
      <span class="half">Min:</span>
      <span class="half">Max:</span>
    </div>
    <div class="row">
      <input class="half" type="number" bind:value={sizeDomainMin} />
      <input class="half" type="number" bind:value={sizeDomainMax} />
    </div>
    <div class="row">
      <input class="half" type="number" bind:value={sizeRangeMin} />
      <input class="half" type="number" bind:value={sizeRangeMax} />
    </div>
  </div>
{/if}

<style>
  .mapping-container {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 170px;
    margin: 5px;
    padding: 5px;
    border: 2px solid #eee;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .close-button {
    background-color: #eee;
    position: absolute;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    right: 1%;
    top: 1%;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
  }

  .close-button span {
    top: -1px;
    display: inline;
    position: relative;
  }

  select {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    height: 25px;
    width: 55%;
  }

  input[type="number"] {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    height: 25px;
    padding-left: 2px;
  }

  select,
  input {
    font-family: Arial;
    font-size: 13px;
    line-height: normal;
    margin: 1px;
    padding: 1px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .half {
    width: 50%;
  }

  .third {
    width: 33%;
  }
</style>
