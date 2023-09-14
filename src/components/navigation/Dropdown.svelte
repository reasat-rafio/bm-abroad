<script lang="ts">
  import type { Menu } from '@/lib/types/common';
  import Cta from '../ui/Cta.svelte';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  export let menu: Menu[];
  export let dropdown: 'active' | 'inactive';
</script>

{#if dropdown === 'active'}
  <ul
    transition:slide={{ duration: 400, easing: cubicInOut }}
    class="space-y-5 pt-8"
  >
    {#each menu as { pageUrl, title, highlight }}
      <li
        class="my-auto flex items-center justify-center text-center uppercase transition-opacity duration-500"
      >
        {#if !!highlight}
          <Cta href={pageUrl.current}>
            {title}
          </Cta>
        {:else}
          <a
            class="hover:text-slate-blue text-[16px] font-medium tracking-[0.48px] transition-colors duration-300 xl:text-[16px]"
            href={pageUrl.current}
          >
            {title}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
{/if}
