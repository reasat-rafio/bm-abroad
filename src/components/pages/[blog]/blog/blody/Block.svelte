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

{#if isHeader}
  <h2 class="heading-lg-secondary">
    <slot />
  </h2>
{:else if style === 'normal'}
  <p class="body-1">
    <slot />
  </p>
{:else}
  <DefaultBlock {portableText}>
    <slot />
  </DefaultBlock>
{/if}
