<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  interface $$Props extends HTMLButtonAttributes {
    active: boolean;
    clickAction: () => void;
  }
</script>

<button
  class={twMerge(
    'group flex h-[9px] w-[9px] cursor-pointer items-center justify-center rounded-full border-slate-blue bg-transparent transition-colors duration-300 hover:lg:border',
    $$props.active && 'border',
    $$props.class,
  )}
  on:click={$$props.clickAction}
  {...$$restProps}
>
  <div
    class={twMerge(
      'h-[5px] w-[5px] rounded-full bg-[#D9D9D9] transition-colors duration-300 group-hover:bg-slate-blue',
      $$props.active && 'bg-slate-blue',
    )}
  ></div>
</button>
