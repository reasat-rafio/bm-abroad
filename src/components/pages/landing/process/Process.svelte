<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import type { ProcessProps } from '@/lib/types/landing';
  import Step from './Step.svelte';

  export let props: ProcessProps;
  $: ({ title, subtitle, decoration, steps } = props);
</script>

<section>
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div class="mx-auto mb-[176px] mt-[128px] max-w-3xl">
      {#each steps as { title, description }, index}
        <Step {title} {description} {index} />
      {/each}
    </div>
  </div>
</section>
