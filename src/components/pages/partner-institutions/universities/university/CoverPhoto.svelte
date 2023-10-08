<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';

  export let coverPhoto: SanityAssetDocument;
  export let logo: SanityAssetDocument;
  export let name: string;
</script>

<section class="relative h-[360px]">
  <SanityImage
    class="object-cover w-full h-full"
    sizes="(min-width : 1024px) 70vw, 100vw"
    src={coverPhoto}
    alt={coverPhoto.alt}
    imageUrlBuilder={imageBuilder}
  />

  <figure
    class="absolute bottom-0 left-[40px] max-w-[133px] translate-y-1/2 rounded-[16px] bg-white p-[14px] lg:max-w-[192px] lg:p-[21px]"
  >
    <SanityImage
      class="object-contain w-full h-full"
      sizes="200px"
      src={logo}
      alt={name}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</section>
