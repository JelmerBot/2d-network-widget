<script>
  import { onDestroy } from "svelte";
  import { simulation } from "../simulation/simulation.js";

  // --- Properties
  export let nodes;
  export let edges;
  export let nodeSizeMapping;
  export let visible;
  export let send;
  export let receive;

  // --- Internal state
  let enabled = true;
  let initialAlpha = 2;
  let centerStrength = 1;
  let linkStrength = 0.2;
  let linkDistanceScale = 30;
  let repulsionStrength = 5;
  let repulsionNormalization = 0.1;
  let repulsionLimit = 200;

  // --- Reactive updates
  $: if (nodeSizeMapping) {
    simulation.nodes(nodes.map(nodeSizeMapping.size), initialAlpha);
  }
  $: simulation.edges(edges, initialAlpha);
  $: simulation.enabled(enabled, initialAlpha);
  $: simulation.settings(
    {
      centerStrength,
      linkStrength,
      linkDistanceScale,
      repulsionStrength,
      repulsionNormalization,
      repulsionLimit,
    },
    initialAlpha
  );

  onDestroy(() => {
    simulation.destroy();
  });
</script>

{#if visible === "layout"}
  <div
    class="mapping-container"
    in:receive={{ key: "layout" }}
    out:send={{ key: "layout" }}
  >
    <buttton class="close-button" on:click={() => (visible = "")}>
      <span>&times;</span>
    </buttton>
    <label class="half">
      <input type="checkbox" bind:checked={enabled} />
      Run simulation
    </label>
    <label>
      Initial temperature
      <input
        type="range"
        bind:value={initialAlpha}
        min="0"
        max="5"
        step="0.1"
      />
    </label>
    <label>
      Link strength
      <input
        type="range"
        bind:value={linkStrength}
        min="0"
        max="2"
        step="0.01"
      />
    </label>
    <label>
      Link scale
      <input
        type="range"
        bind:value={linkDistanceScale}
        min="1"
        max="100"
        step="5"
      />
    </label>
    <label>
      Repulsion strength
      <input
        type="range"
        bind:value={repulsionStrength}
        min="0"
        max="30"
        step="0.1"
      />
    </label>
    <label>
      Repulsion normalization
      <input
        type="range"
        bind:value={repulsionNormalization}
        min="0"
        max="1"
        step="0.05"
      />
    </label>
    <label>
      Repulsion limit
      <input
        type="range"
        bind:value={repulsionLimit}
        min="0"
        max="1000"
        step="5"
      />
    </label>
    <label>
      Center strength
      <input
        type="range"
        bind:value={centerStrength}
        min="0"
        max="5"
        step="0.1"
      />
    </label>
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

  input[type="range"] {
    width: calc(100% - 16px);
  }
</style>
