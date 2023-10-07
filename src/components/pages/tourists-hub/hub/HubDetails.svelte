<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';

  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let image: SanityAssetDocument;
</script>

<article class="grid grid-cols-12 lg:gap-[91px]">
  <section
    class="col-span-12 space-y-[48px] rounded-sm bg-white p-[40px] lg:col-span-7"
  >
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

    <figure class="block lg:hidden">
      <SanityImage
        class="h-full w-full object-cover"
        sizes="100vw"
        src={image}
        imageUrlBuilder={imageBuilder}
      />
    </figure>

    <p
      class="body-1 font-light transition-colors duration-500 ease-in-out group-hover:text-white"
    >
      {description}
    </p>
  </section>
  <figure class="hidden p-[20px] lg:col-span-5 lg:block">
    <SanityImage
      class="h-full w-full object-cover"
      sizes="40vw"
      src={image}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</article>
