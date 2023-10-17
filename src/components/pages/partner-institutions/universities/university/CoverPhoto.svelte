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
    class="h-full w-full object-cover"
    sizes="(min-width : 1024px) 70vw, 100vw"
    src={coverPhoto}
    alt={coverPhoto.alt}
    imageUrlBuilder={imageBuilder}
  />

  <figure
    style="box-shadow: 0px 5px 38px 0px rgba(0, 0, 0, 0.10);"
    class="absolute bottom-0 left-[40px] max-w-[133px] translate-y-1/2 rounded-[16px] bg-white p-[14px] lg:max-w-[192px] lg:p-[21px]"
  >
    <SanityImage
      class="h-full w-full object-contain"
      sizes="200px"
      src={logo}
      alt={name}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</section>
