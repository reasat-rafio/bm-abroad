<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Gallery } from '@/lib/types/services';
  import type { SanityAssetDocument } from '@sanity/client';
  import College from './College.svelte';

  export let college: Gallery['college'];
  export let singleImage: SanityAssetDocument;
</script>

{#if !!singleImage}
  <figure>
    <SanityImage
      class="aspect-video h-full w-full rounded-lg"
      sizes="100vw"
      src={singleImage}
      alt={singleImage.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
{/if}

{#if !!college?.images?.length}
  <College {college} />
{/if}
