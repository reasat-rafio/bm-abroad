<script lang="ts">
  import type { TouristsHubProps } from '@/lib/types/tourists-hubs';
  import Hub from './Hub.svelte';

  export let props: TouristsHubProps;
  $: ({ hubs } = props);
</script>

<section class="">
  <div class="container">
    {#each hubs as hub}
      <Hub {hub} />
    {/each}
  </div>
</section>
