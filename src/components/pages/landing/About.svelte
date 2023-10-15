<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { AboutProps } from '@/lib/types/landing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Service from '@/components/pages/landing/Service.svelte';

  export let props: AboutProps;
  $: ({ title, subtitle, description, image, decoration, services } = props);

  let sectionEl: HTMLElement;
  let intersecting = false;
  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<IntersectionObserver
  bind:intersecting
  element={sectionEl}
  threshold={0.25}
  once
>
  <section bind:this={sectionEl} class="relative mb-[48px]">
    {#key windowWidth}
      <figure
        class="absolute left-0 top-0 w-full transition-transform duration-500 ease-in-out max-sm:px-10 sm:w-1/2 sm:translate-x-1/2 {intersecting
          ? '-translate-y-full'
          : 'translate-y-0'}"
      >
        <SanityImage
          class="h-full w-full object-contain"
          src={decoration}
          alt={decoration.alt}
          sizes="(min-width: 640px) 50vw, 100vw"
          imageUrlBuilder={imageBuilder}
        />
      </figure>
    {/key}

    <div class="container">
      <article
        style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
        class="relative z-10 grid grid-cols-1 gap-5 rounded-[32px] bg-white px-[20px] py-[44px] md:px-[40px] md:py-[70px] lg:grid-cols-2 xl:px-[111px] xl:py-[83px]"
      >
        <div class="space-y-[36px] lg:space-y-[65px]">
          <SectionHeader {title} {subtitle} />
          <p class="body-1">{description}</p>
        </div>
        <figure>
          <SanityImage
            class="h-full w-full object-contain"
            src={image}
            alt={image.alt}
            sizes="(min-width: 1024px) 50vw, 80vw"
            imageUrlBuilder={imageBuilder}
          />
        </figure>
      </article>
    </div>
  </section>
</IntersectionObserver>

<Service {services} />
