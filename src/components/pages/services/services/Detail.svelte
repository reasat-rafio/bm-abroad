<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Service } from '@/lib/types/services';
  import type { SanityAssetDocument } from '@sanity/client';

  export let image: SanityAssetDocument;
  export let services: Service[];
</script>

<section
  class="mx-auto grid max-w-[1330px] grid-cols-1 pb-[148px] max-lg:gap-y-[32px] lg:grid-cols-2"
>
  <figure class="block lg:hidden">
    <SanityImage
      class="h-full w-full rounded-lg object-cover"
      sizes="(min-width: 1024px) 50vw, 100vw"
      alt={image.alt}
      src={image}
      imageUrlBuilder={imageBuilder}
    />
  </figure>

  <ul class="space-y-[32px] lg:pr-lg xl:pr-xl 2xl:pr-[159px]">
    {#each services as { title, description, icon }}
      <li class="space-y-[8px]">
        <div class="flex items-center gap-x-[12px]">
          <figure>
            <SanityImage
              class="h-[30px] w-[30px] object-contain"
              sizes="30px"
              alt={icon.alt}
              src={icon}
              imageUrlBuilder={imageBuilder}
            />
          </figure>
          <h4 class="font-poppins text-[24px] font-semibold text-[#290886]">
            {title}
          </h4>
        </div>
        <p class="body-2">{description}</p>
      </li>
    {/each}
  </ul>

  <figure class="hidden lg:block">
    <SanityImage
      class="h-full w-full rounded-lg object-cover"
      sizes="(min-width: 1024px) 50vw, 100vw"
      alt={image.alt}
      src={image}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</section>
