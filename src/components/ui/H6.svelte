<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Heading } from '@/lib/types/common';
  export let el: Heading | undefined = 'h6';
</script>

<svelte:element this={el} class={twMerge('', $$props.class ?? '')}>
  <slot />
</svelte:element>
