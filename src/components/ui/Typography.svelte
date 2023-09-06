<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let el: 'p' | 'div' | 'span' | undefined = 'p';
  export let variant: 'lg' | 'sm' = 'lg';

  $: style = () => {
    switch (variant) {
      case 'lg':
        return 'md:text-p1 text-p1-sm max-sm:tracking-sm leading-lg md:leading-md';
      case 'sm':
        return 'md:text-p2 text-p2-sm tracking-[0.35px] md:tracking-md leading-md';
      default:
        return '';
    }
  };
</script>

<svelte:element
  this={el}
  class={twMerge('font-light', style(), $$props.class ?? '')}
>
  <slot />
</svelte:element>
