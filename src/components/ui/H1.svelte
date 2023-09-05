<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Heading } from '@/lib/types/common';
  export let el: Heading | undefined = 'h1';
</script>

<svelte:element
  this={el}
  class={twMerge(
    'font-oswald text-[32px] font-semibold uppercase lg:text-[47px] xl:text-[64px]',
    $$props.class ?? '',
  )}
>
  <slot />
</svelte:element>
