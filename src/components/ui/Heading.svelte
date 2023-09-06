<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Heading } from '@/lib/types/common';
  export let el: Heading | undefined = 'h1';
  export let variant: '2xl' | 'xl' = 'xl';

  $: style = () => {
    switch (variant) {
      case '2xl':
        return 'xl:text-h1 text-h1-sm md:text-h1-md';
      case 'xl':
        return 'xl:text-h2 md:text-h2-md text-h2-sm text-space-blue';
      default:
        return '';
    }
  };
</script>

<svelte:element
  this={el}
  class={twMerge(
    'font-oswald font-semibold uppercase',
    style(),
    $$props.class ?? '',
  )}
>
  <slot />
</svelte:element>
