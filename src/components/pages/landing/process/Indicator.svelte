<script lang="ts">
  import { fade, draw } from 'svelte/transition';

  export let isIntersecting: boolean;
  export let isLast: boolean;
  export let scrollPercentage: number;
</script>

<div
  class="col-span-1 flex translate-y-[23px] flex-col items-center justify-center md:translate-y-[32px] lg:translate-y-[41px]"
>
  <div class="my-2">
    {#if isIntersecting}
      <svg
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 0 }}
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 16.5C0 12.1239 1.73839 7.92709 4.83274 4.83274C7.92709 1.73839 12.1239 0 16.5 0C20.8761 0 25.0729 1.73839 28.1673 4.83274C31.2616 7.92709 33 12.1239 33 16.5C33 20.8761 31.2616 25.0729 28.1673 28.1673C25.0729 31.2616 20.8761 33 16.5 33C12.1239 33 7.92709 31.2616 4.83274 28.1673C1.73839 25.0729 0 20.8761 0 16.5ZM15.5584 23.562L25.058 11.6864L23.342 10.3136L15.2416 20.4358L9.504 15.6552L8.096 17.3448L15.5584 23.5642V23.562Z"
          fill="#04BF4F"
        />
      </svg>
    {:else}
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          in:draw={{ duration: 500 }}
          out:draw={{ duration: 0 }}
          d="M10.25 18.5L17.3214 24.3929L26.75 12.6071M18.5 35C16.3332 35 14.1876 34.5732 12.1857 33.744C10.1839 32.9148 8.3649 31.6994 6.83274 30.1673C5.30057 28.6351 4.08519 26.8161 3.25599 24.8143C2.42679 22.8124 2 20.6668 2 18.5C2 16.3332 2.42679 14.1876 3.25599 12.1857C4.08519 10.1839 5.30057 8.3649 6.83274 6.83274C8.3649 5.30057 10.1839 4.08519 12.1857 3.25599C14.1876 2.42679 16.3332 2 18.5 2C22.8761 2 27.0729 3.73839 30.1673 6.83274C33.2616 9.92709 35 14.1239 35 18.5C35 22.8761 33.2616 27.0729 30.1673 30.1673C27.0729 33.2616 22.8761 35 18.5 35Z"
          stroke="black"
          stroke-opacity="0.1"
          stroke-width="3"
        />
      </svg>
    {/if}
  </div>
  <div class="relative h-full !w-[3px]">
    {#if !isLast}
      <div class="absolute inset-0 -z-10 h-full w-full bg-black/10" />
      <div
        style="height: {scrollPercentage}%"
        class="inset-0 w-full bg-[#04BF4F] transition-all duration-75 ease-out"
      />
    {/if}
  </div>
</div>
