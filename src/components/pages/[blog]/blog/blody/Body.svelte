<script lang="ts">
  import type { PortableTextBlock } from 'sanity';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import Block from './Block.svelte';
  import Number from './Number.svelte';
  import { onMount } from 'svelte';
  import Disc from './Disc.svelte';

  export let description: PortableTextBlock[];
  let componentRef: HTMLDivElement;
  onMount(() => {
    const paragraphs = componentRef.querySelectorAll('p');

    Array.from(paragraphs).forEach((paragraph) => {
      if (!paragraph.innerText) {
        paragraph.style.paddingTop = '56px';
      }
    });
  });

  const components = {
    block: Block,
    listItem: {
      normal: Disc,
      number: Number,
    },
  } as any;
</script>

<div class="pt-[56px]" bind:this={componentRef}>
  <PortableText {components} value={description} />
</div>
