<script lang="ts">
  import type { Menu } from '@/lib/types/common';
  export let menu: Menu[];
</script>

<nav class="{$$props.class} ?">
  <ul class="grid grid-cols-2 gap-y-[25px]">
    {#each menu as { title, pageUrl }}
      <li
        class="text-[14px] font-medium text-[#0A142F] transition-colors duration-500 hover:text-slate-blue"
      >
        <a href="/{pageUrl.current}">{title}</a>
      </li>
    {/each}
  </ul>
</nav>
