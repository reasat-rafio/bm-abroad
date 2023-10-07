<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';

  export let coverPhoto: SanityAssetDocument;
  export let logo: SanityAssetDocument;
  export let name: string;
</script>

<section class="relative max-h-[360px]">
  <SanityImage
    class="h-full w-full object-cover"
    sizes="70vw"
    src={coverPhoto}
    alt={coverPhoto.alt}
    imageUrlBuilder={imageBuilder}
  />

  <figure
    class="absolute bottom-0 left-[40px] translate-y-1/2 rounded-[16px] bg-white p-[21px]"
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
