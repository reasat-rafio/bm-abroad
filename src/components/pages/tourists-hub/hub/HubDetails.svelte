<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';

  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let image: SanityAssetDocument;
</script>

<article class="grid grid-cols-12 gap-[91px] p-[40px]">
  <section class="col-span-7 space-y-[48px]">
    <header class="space-y-[16px]">
      <h2
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue transition-colors duration-500 ease-in-out group-hover:text-white"
      >
        {title}
      </h2>
      <h3
        class="heading-lg-secondary transition-colors duration-500 ease-in-out group-hover:text-[#F3B30F]"
      >
        {subtitle}
      </h3>
    </header>
    <p
      class="body-1 font-light transition-colors duration-500 ease-in-out group-hover:text-white"
    >
      {description}
    </p>
  </section>
  <figure class="col-span-5">
    <SanityImage
      class="h-full w-full object-cover"
      sizes="40vw"
      src={image}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</article>
