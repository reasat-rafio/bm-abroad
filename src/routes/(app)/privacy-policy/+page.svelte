<script lang="ts">
  import GradientPurpleBlue from '@/components/GradientPurpleBlue.svelte';
  import Seo from '@/components/Seo.svelte';
  import Block from '@/components/pages/[blog]/blog/body/Block.svelte';
  import Disc from '@/components/pages/[blog]/blog/body/Disc.svelte';
  import Number from '@/components/pages/[blog]/blog/body/Number.svelte';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';

  import gsap from 'gsap';
  import { onMount } from 'svelte';

  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { seo, title, privacyPolicy },
  } = data);

  let headerEl: HTMLElement;

  const components = {
    block: Block,
    listItem: {
      normal: Number,
      number: Number,
      bullet: Disc,
    },
  } as any;

  onMount(() => {
    gsap.to(headerEl, { y: 0 });
  });
</script>

<Seo {seo} siteOgImg={ogImage} />

<section
  class="overflow-hidden max-md:pb-[100px] max-md:pt-[169px] md:py-[180px] xl:py-[208px]"
>
  <div class="container relative">
    <div class="overflow-hidden">
      <h1
        bind:this={headerEl}
        class="heading-2xl translate-y-full py-2 text-center"
      >
        <PortableText
          value={title}
          components={{
            marks: {
              // @ts-ignore
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </h1>
    </div>

    <div
      class="lg:prose-xl prose prose-a:text-space-blue prose-headings:text-space-blue mt-10 max-w-none"
    >
      <PortableText value={privacyPolicy} />
    </div>
  </div>
</section>
