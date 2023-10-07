<script lang="ts">
  import type { TouristsHubProps } from '@/lib/types/tourists-hubs';
  import HubDetails from './HubDetails.svelte';

  export let props: TouristsHubProps;
  $: ({ hubs } = props);
</script>

<section class="">
  <div class="container space-y-[149px]">
    {#each hubs as { title, subtitle, description, image }}
      <div class="space-y-[146px]">
        <HubDetails {title} {subtitle} {description} {image} />
      </div>
    {/each}
  </div>
</section>
