<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { College } from '@/lib/types/tourists-hubs';
  import type { SanityAssetDocument } from '@sanity/client';
  import HubCollege from './HubCollege.svelte';

  export let college: College | undefined;
  export let singleImage: SanityAssetDocument | undefined;
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

{#if !!college?.images.length}
  <HubCollege {college} />
{/if}
