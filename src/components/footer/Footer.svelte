<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SiteProps } from '@/lib/types/common';
  import type { SanityAssetDocument } from '@sanity/client';
  import Links from './Links.svelte';
  import Contact from './Contact.svelte';

  export let contact: SiteProps['contact'];
  export let footer: SiteProps['footer'];
  export let logo: SanityAssetDocument;

  $: ({ menu, title } = footer);
</script>

<footer>
  <div class="bg-white">
    <div
      class="container grid grid-cols-12 py-[26px] max-xl:space-y-[48px] lg:py-[46px]"
    >
      <div class="col-span-12 grid grid-cols-4 xl:col-span-4">
        <div class="col-span-4 space-y-[24px] xl:col-span-3">
          <figure>
            <SanityImage
              class="h-fit max-h-[70px] w-full object-contain object-left"
              sizes="20vw"
              src={logo}
              alt="logo"
              imageUrlBuilder={imageBuilder}
            />
          </figure>
          <p class="text-[14px] tracking-[0.3px]">
            {title}
          </p>
        </div>
        <div class="col-span-1 hidden xl:block" />
      </div>
      <Links class="col-span-12 lg:col-span-6 xl:col-span-3" {menu} />
      <Contact class="col-span-12 lg:col-span-6 xl:col-span-5" {contact} />
    </div>
  </div>

  <div class="bg-[#1B1464] py-[14px]">
    <div
      class="container flex flex-col justify-between text-[12px] font-light text-white max-lg:space-y-1 lg:flex-row lg:text-[14px]"
    >
      <span
        >Copyright © {new Date().getFullYear()} •
        <span class="font-medium">BM ABROAD DREAMERS</span></span
      >
      <span
        >Developed by <a class="font-medium" href="mailto:edistys.dev@gmail.com"
          >EDISTYS</a
        ></span
      >
    </div>
  </div>
</footer>
