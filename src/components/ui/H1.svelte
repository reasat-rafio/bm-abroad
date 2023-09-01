<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Heading } from '@/lib/types/common';
  export let el: Heading | undefined = 'h1';
</script>

<svelte:element
  this={el}
  class={twMerge(
    'font-oswald text-center text-[64px] font-semibold uppercase',
    $$props.class ?? '',
  )}
>
  <slot />
</svelte:element>
