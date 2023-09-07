<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SiteProps } from '@/lib/types/common';
  // import uiStore from '@/stores/ui';
  import Cta from '../ui/Cta.svelte';
  import Hamburger from './Hamburger.svelte';
  import Dropdown from './Dropdown.svelte';

  export let nav: SiteProps['nav'];
  export let logo: SiteProps['logos']['logo'];

  let windowWidth = 0;
  let scrollY = 0;
  let dropdown: 'active' | 'inactive' = 'inactive';
  $: yPosition = scrollY > 25 ? 'translate-y-0' : 'sm:translate-y-[25px]';
  $: if (windowWidth >= 1024) dropdown = 'inactive';

  // const navAction = (node: HTMLElement, _: number) => {
  //   const navbarHeight = node.getBoundingClientRect().height;
  //   uiStore.setNavbarHeight(navbarHeight);
  //   return {
  //     update(_: number) {
  //       const navbarHeight = node.getBoundingClientRect().height;
  //       uiStore.setNavbarHeight(navbarHeight);
  //     },
  //   };
  // };
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />
<nav class="fixed left-0 top-0 z-50 w-full">
  <div
    style="box-shadow: 0px 8px 20px -5px rgba(0, 0, 0, 0.10);"
    class="container bg-white/50 px-[32px] py-[14px] backdrop-blur-2xl transition-transform duration-500 ease-in-out sm:rounded-[10px] lg:rounded-lg {yPosition} relative"
  >
    <div class="flex items-center justify-between space-x-5">
      <a class="h-[50px] 2xl:h-[69px]" href="/">
        <SanityImage
          class="h-full w-fit object-cover"
          src={logo}
          sizes="100px"
          imageUrlBuilder={imageBuilder}
        />
      </a>
      <ul class="hidden space-x-[20px] lg:flex 2xl:space-x-[46px]">
        {#each nav.menu as { title, highlight, pageUrl }}
          <li class="my-auto uppercase">
            {#if !!highlight}
              <Cta href={pageUrl.current}>
                {title}
              </Cta>
            {:else}
              <a
                class="text-[12px] font-medium tracking-[0.48px] transition-colors duration-300 hover:text-[#764AF1] xl:text-[16px]"
                href={pageUrl.current}
              >
                {title}
              </a>
            {/if}
          </li>
        {/each}
      </ul>

      <Hamburger bind:dropdown class="block lg:hidden" />
    </div>
    <Dropdown {dropdown} menu={nav.menu} />
  </div>
</nav>
