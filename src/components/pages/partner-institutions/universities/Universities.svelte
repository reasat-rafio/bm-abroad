<script lang="ts">
  import GradientPurpleBlue from '@/components/GradientPurpleBlue.svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { UniversitiesProps } from '@/lib/types/partner-institutions';
  import University from './university/University.svelte';

  export let props: UniversitiesProps;
  $: ({ title, universities } = props);
</script>

<section>
  <div class="mx-auto max-w-[1058px] px-[20px]">
    <h2 class="heading-2xl text-center">
      <PortableText
        value={title}
        components={{
          marks: {
            gradientPurpleBlue: GradientPurpleBlue,
          },
        }}
      />
    </h2>

    <div class="my-[90px] space-y-[90px] lg:my-[146px] lg:space-y-[73px]">
      {#each universities as university}
        <University {university} />
      {/each}
    </div>
  </div>
</section>
