<script>
  import Menu from "./Menu.svelte";
  import Network from "./Network.svelte";
  import Legends from "./Legends.svelte";

  // --- Component properties
  export let model;

  // --- Extract network
  const nodes = model.get("nodes");
  let edges = model.get("edges");
  model.on("change:edges", () => {
    edges = model.get("edges");
  });

  // --- Mapping
  let nodeColorMapping = null;
  let nodeSizeMapping = null;
  let edgeMapping = null;
  let viewScale = 1;
</script>

<div>
  <Network
    {nodes}
    {edges}
    {nodeColorMapping}
    {edgeMapping}
    bind:viewScale
  />
  <Menu
    {nodes}
    {edges}
    bind:nodeColorMapping
    bind:nodeSizeMapping
    bind:edgeMapping
  />
  <Legends {nodeColorMapping} {nodeSizeMapping} {viewScale} />
</div>
