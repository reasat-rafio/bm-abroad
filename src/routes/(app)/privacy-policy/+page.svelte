<script lang="ts">
  import GradientPurpleBlue from '@/components/GradientPurpleBlue.svelte';
  import Seo from '@/components/Seo.svelte';
  import { PortableText } from '@portabletext/svelte';
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

  onMount(() => {
    gsap.to(headerEl, { y: 0 });
  });
</script>

<Seo {seo} siteOgImg={ogImage} />

<section
  class="overflow-hidden max-md:pb-[80px] max-md:pt-[169px] md:py-[180px] xl:py-[208px]"
>
  <div class="container relative">
    <div class="overflow-hidden">
      <h1
        bind:this={headerEl}
        class="py-2 text-center translate-y-full heading-2xl"
      >
        <PortableText
          value={title}
          components={{
            marks: {
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </h1>
    </div>

    <div
      class="mt-10 prose max-w-none lg:prose-xl prose-headings:text-space-blue prose-a:text-space-blue"
    >
      <PortableText value={privacyPolicy} components={{}} />
    </div>
  </div>
</section>
