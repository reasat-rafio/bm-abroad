<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps;
</script>

<span
  class="relative bg-gradient-to-b from-slate-blue to-[#290886] bg-clip-text text-transparent"
>
  <slot />
  <img
    loading="lazy"
    class="absolute -bottom-2 left-1/2 h-fit w-fit -translate-x-1/2 object-contain"
    src="/lines.png"
    alt="underline"
  />
</span>
