<script>
  import Swatches from "./legends/Swatches.svelte";
  import ColorLegend from "./legends/ColorLegend.svelte";
  import SizeLegend from "./legends/SizeLegends.svelte";

  export let nodeColorMapping = null;
  export let nodeSizeMapping = null;
  export let viewScale = 1;
</script>

<div class="legends">
  {#if nodeColorMapping && nodeColorMapping.title}
    {#if nodeColorMapping.type === "cat"}
      <Swatches scale={nodeColorMapping.scale} title={nodeColorMapping.title} />
    {:else}
      <ColorLegend
        scale={nodeColorMapping.scale}
        title={nodeColorMapping.title}
      />
    {/if}
  {/if}
  {#if nodeSizeMapping && nodeSizeMapping.title}
    <SizeLegend scale={nodeSizeMapping.scale} title={nodeSizeMapping.title} viewScale={viewScale} />
  {/if}
</div>

<style>
  .legends {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    width: 320px;
    color: rgb(50, 50, 50);
  }
</style>
