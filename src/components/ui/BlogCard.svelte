<script lang="ts">
  import { formatDate } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';
  import type { Slug } from 'sanity';

  export let slug: Slug;
  export let name: string;
  export let image: SanityAssetDocument;
  export let date: string;
  export let twoRowInMobile: boolean = false;
</script>

<a href="/blogs/{slug.current}" class={$$props.class}>
  <article
    class="grid grid-cols-12 {twoRowInMobile
      ? 'space-y-[16px] md:space-y-[24px]'
      : 'max-md:space-x-[10px] md:space-y-[24px]'}"
  >
    <figure
      class="{twoRowInMobile ? 'col-span-12' : 'col-span-4'} md:col-span-12"
    >
      <SanityImage
        class="h-full max-h-[291px] w-full rounded-[8px] object-cover lg:rounded-md"
        src={image}
        alt={name}
        sizes="(min-width:1024px) 40vw, 60vw"
        imageUrlBuilder={imageBuilder}
      />
    </figure>
    <section
      class="{twoRowInMobile ? 'col-span-12' : 'col-span-8'} md:col-span-12"
    >
      <div
        class="flex items-center space-x-[14px] pb-[8px] text-[14px] text-black/20 md:pb-[16px]"
      >
        <img
          loading="lazy"
          src="/icons/calender.svg"
          alt="calender"
          class="h-max w-max object-contain"
        />
        <span>{formatDate(date)}</span>
      </div>

      <h3
        class="font-poppins text-[16px] font-medium md:pb-[32px] lg:text-[24px]"
      >
        {name}
      </h3>
    </section>
  </article>
</a>
