<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type {
    AboutProps,
    Service as ServiceProps,
  } from '@/lib/types/landing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Service from './Service.svelte';

  export let props: AboutProps;
  export let services: ServiceProps[];
  $: ({ title, subtitle, description, image, decoration } = props);

  let sectionEl: HTMLElement;
  let intersecting = false;
</script>

<IntersectionObserver element={sectionEl} bind:intersecting threshold={0.25}>
  <section bind:this={sectionEl} class="relative mb-[48px]">
    <figure
      class="absolute left-0 top-0 w-1/2 translate-x-1/2 transition-transform duration-500 ease-in-out {intersecting
        ? '-translate-y-full'
        : 'translate-y-0'}"
    >
      <SanityImage
        class="h-full w-full object-contain"
        src={decoration}
        alt={decoration.alt}
        sizes="50vw"
        imageUrlBuilder={imageBuilder}
      />
    </figure>

    <article
      style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
      class="container relative z-10 grid grid-cols-2 gap-5 rounded-[32px] bg-white px-[111px] py-[83px]"
    >
      <div class="space-y-[65px]">
        <SectionHeader {title} {subtitle} />
        <p class="text-[18px] font-light leading-[160%]">{description}</p>
      </div>
      <figure class="">
        <SanityImage
          class="h-full w-full object-contain"
          src={image}
          alt={image.alt}
          sizes="50vw"
          imageUrlBuilder={imageBuilder}
        />
      </figure>
    </article>
  </section>
</IntersectionObserver>

<Service {services} />
