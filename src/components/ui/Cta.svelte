<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string;
</script>

<a
  {href}
  class={twMerge(
    'gradient-purple-blue-90 block w-fit rounded-[12px] px-[32px] py-[13px] text-[16px] font-medium tracking-[0.48px] text-white',
    $$props.class ?? '',
  )}
>
  <slot />
</a>
