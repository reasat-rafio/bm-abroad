<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import type { ServicesProps } from '@/lib/types/services';
  import Detail from './Detail.svelte';
  import Step from './steps/Step.svelte';
  import Gallery from '@/components/Gallery.svelte';

  export let props: ServicesProps;
  $: ({ image, services, subtitle, title, gallery, steps } = props);
</script>

<section>
  <div class="container">
    <SectionHeader class="mb-lg lg:mb-2xl" {title} {subtitle} />
    <Detail {image} {services} />
    {#if !!steps?.length}
      <div class="mb-[30px] lg:mb-[60px]">
        {#each steps as { title, description }, index}
          <Step
            {title}
            {description}
            {index}
            isLast={index === steps.length - 1}
          />
        {/each}
      </div>
    {/if}
    {#if !!gallery}
      <section class="mb-lg lg:mb-2xl">
        <Gallery {...gallery} />
      </section>
    {/if}
  </div>
</section>
