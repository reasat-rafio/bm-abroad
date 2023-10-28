<script lang="ts">
  import type { PortableTextBlock } from 'sanity';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import Block from './Block.svelte';
  import Number from './Number.svelte';
  import Disc from './Disc.svelte';

  export let description: PortableTextBlock[];
  const components = {
    block: Block,
    listItem: {
      normal: Number,
      number: Number,
      bullet: Disc,
    },
  } as any;
</script>

<div id="blog-body" class="pt-[56px] text-p2-sm">
  <PortableText {components} value={description} />
</div>
