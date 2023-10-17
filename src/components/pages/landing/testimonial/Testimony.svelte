<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Testimonial } from '@/lib/types/landing';

  export let testimony: Testimonial;
  $: ({ name, header, image, role, testimony: t } = testimony);
</script>

<article
  class="mx-[20px] grid min-h-[500px] flex-[0_0_90%] grid-cols-8 overflow-hidden rounded-[16px] bg-white sm:flex-[0_0_100%] md:mx-10"
>
  <div
    class="relative col-span-8 flex h-[250px] justify-end sm:h-[350px] md:col-span-3 md:h-full"
  >
    <div
      class="relative z-10 mt-auto w-full space-y-[12px] px-[30px] py-[33px] text-white"
    >
      <h4
        class="!font-poppins text-[18px] font-semibold leading-none tracking-[0.4px] lg:text-[20px]"
      >
        {name}
      </h4>
      <p class="text-[12px] leading-none text-white/70 lg:text-[14px]">
        {role}
      </p>
    </div>
    <figure class="absolute inset-0 h-full w-full">
      <SanityImage
        id="t-img"
        sizes="(min-width: 768px) 30vw, 80vw"
        src={image}
        alt={name}
        class="h-full w-full object-cover"
        imageUrlBuilder={imageBuilder}
      />
      <div
        class="absolute inset-0 h-full w-full"
        style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.99%, rgba(0, 0, 0, 0.70) 100%);"
      />
    </figure>
  </div>
  <div
    class="col-span-8 my-auto space-y-[24px] px-[20px] py-[16px] md:col-span-5 lg:space-y-[48px] lg:px-[68px] lg:py-[30px]"
  >
    <h5 class="heading-lg-secondary">
      {header}
    </h5>
    <p class="body-2 font-light">{t}</p>
  </div>
</article>
