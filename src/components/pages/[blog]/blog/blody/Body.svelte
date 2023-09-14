<script lang="ts">
  import type { PortableTextBlock } from 'sanity';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import Block from './Block.svelte';
  import ListItem from './ListItem.svelte';
  import { onMount } from 'svelte';

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
      normal: ListItem,
      number: ListItem,
    },
  } as any;
</script>

<div class="pt-[56px]" bind:this={componentRef}>
  <PortableText {components} value={description} />
</div>
