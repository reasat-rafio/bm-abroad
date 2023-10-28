<script lang="ts">
  import type { BlockComponentProps } from '@/lib/@portabletext';
  import DefaultBlock from '@/lib/@portabletext/defaultComponents/DefaultBlock.svelte';

  export let portableText: BlockComponentProps;

  let {
    value: { style },
  } = portableText;

  $: isHeader =
    style === 'h1' ||
    style === 'h2' ||
    style === 'h3' ||
    style === 'h4' ||
    style === 'h5' ||
    style === 'h6';
</script>

{#if style === 'h1' || style === 'h2'}
  <h2 class="text-h2-sm font-semibold text-space-blue md:text-h2-md xl:text-h2">
    <slot />
  </h2>
{:else if style === 'h3' || style === 'h4'}
  <h3 class="text-[24px] font-medium text-space-blue lg:text-[32px]">
    <slot />
  </h3>
{:else if style === 'normal'}
  <p class="body-1">
    <slot />
  </p>
{:else}
  <DefaultBlock {portableText}>
    <slot />
  </DefaultBlock>
{/if}
