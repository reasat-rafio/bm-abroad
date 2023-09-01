<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SiteProps } from '@/lib/types/common';

  export let nav: SiteProps['nav'];
  export let logo: SiteProps['logos']['logo'];
</script>

<nav class="fixed left-0 top-0 z-50 w-full">
  <div class="container rounded-lg px-[32px] py-[14px]">
    <div class="flex items-center justify-between">
      <a class="h-[69px]" href="/">
        <SanityImage
          class="h-full w-fit object-cover"
          src={logo}
          sizes="100px"
          imageUrlBuilder={imageBuilder}
        />
      </a>
      <ul class="flex space-x-[46px]">
        {#each nav.menu as { title, highlight, pageUrl }}
          <li class="uppercase">
            <a
              class="text-[16px] font-medium tracking-[0.48px]"
              href={pageUrl.current}
            >
              {title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
