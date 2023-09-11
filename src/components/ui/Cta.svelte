<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string;
</script>

<a
  {href}
  class={twMerge(
    'gradient-purple-blue-90 block w-fit rounded-[12px] bg-[length:125%] bg-left px-[32px] py-[13px] text-[16px] font-medium tracking-[0.48px] text-white transition-all duration-300 hover:scale-[1.01] hover:bg-right hover:shadow-xl',
    $$props.class,
  )}
>
  <slot />
</a>
