<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SiteProps } from '@/lib/types/common';
  import uiStore from '@/stores/ui';
  import Cta from '../ui/Cta.svelte';

  export let nav: SiteProps['nav'];
  export let logo: SiteProps['logos']['logo'];

  let windowWidth = 0;
  let scrollY = 0;
  $: yPosition = scrollY > 25 ? 'translate-y-0' : 'translate-y-[25px]';

  const navAction = (node: HTMLElement, _: number) => {
    const navbarHeight = node.getBoundingClientRect().height;
    uiStore.setNavbarHeight(navbarHeight);
    return {
      update(_: number) {
        const navbarHeight = node.getBoundingClientRect().height;
        uiStore.setNavbarHeight(navbarHeight);
      },
    };
  };
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />
<nav use:navAction={windowWidth} class="fixed left-0 top-0 z-50 w-full">
  <div
    style="box-shadow: 0px 8px 20px -5px rgba(0, 0, 0, 0.10);"
    class="container rounded-lg bg-white/50 px-[32px] py-[14px] backdrop-blur-2xl transition-transform duration-500 ease-in-out {yPosition}"
  >
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
          <li class="my-auto uppercase">
            {#if !!highlight}
              <Cta href={pageUrl.current}>
                {title}
              </Cta>
            {:else}
              <a
                class="text-[16px] font-medium tracking-[0.48px]"
                href={pageUrl.current}
              >
                {title}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
