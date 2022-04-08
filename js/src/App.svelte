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
  let selectedNodes = model.get("selectedNodes");
  model.on("change:selectedNodes", () => {
    console.log("update selectedNodes");
    selectedNodes = model.get("selectedNodes");
  });
  $: {
    model.set("selectedNodes", selectedNodes);
    model.save_changes();
  }

  // --- Mapping
  let nodeColorMapping;
  let nodeSizeMapping;
  let edgeMapping;
  let viewScale = 1;
</script>

<div>
  <Network
    {nodes}
    {edges}
    {nodeColorMapping}
    {edgeMapping}
    bind:viewScale
    bind:selectedNodes
  />
  <Menu
    {nodes}
    {edges}
    {selectedNodes}
    bind:nodeColorMapping
    bind:nodeSizeMapping
    bind:edgeMapping
  />
  <Legends {nodeColorMapping} {nodeSizeMapping} {viewScale} />
</div>
