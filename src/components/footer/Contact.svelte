<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SiteProps } from '@/lib/types/common';

  export let contact: SiteProps['contact'];
  $: ({ address, email, socials, contactNumber } = contact);
</script>

<div class="{$$props.class} grid grid-cols-5">
  <div class="col-span-1 hidden xl:block" />
  <div
    class="col-span-4 grid grid-cols-5 items-end gap-[24px] lg:gap-[40px] xl:gap-[81px]"
  >
    <div class="col-span-5 space-y-[29px] text-[12px] lg:col-span-3">
      <a
        class="flex space-x-[9px] transition-colors duration-500 hover:text-slate-blue"
        href="tel:{contactNumber}"
      >
        <img height="20px" width="20px" src="/icons/mobile.svg" alt="mobile" />
        <span>{contactNumber} </span>
      </a>
      <div class="flex space-x-[9px]">
        <img
          height="20px"
          width="20px"
          src="/icons/location.svg"
          alt="location"
        />
        <span>{address} </span>
      </div>
      <a
        class="flex space-x-[9px] transition-colors duration-500 hover:text-slate-blue"
        href="mailto:{email}"
      >
        <img height="20px" width="20px" src="/icons/mail.svg" alt="email" />
        <span>{email} </span>
      </a>
    </div>
    <div class="col-span-5 space-y-[24px] lg:col-span-2">
      <h4 class="font-poppins text-[14px] opacity-40">Social Media</h4>
      <ul class="flex space-x-[24px]">
        {#each socials as { icon, link }}
          <li>
            <a href={link}>
              <SanityImage
                class="aspect-square h-[20px] object-contain"
                src={icon}
                imageUrlBuilder={imageBuilder}
                height="20px"
                width="20px"
                alt="Social Media Icon"
              />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
