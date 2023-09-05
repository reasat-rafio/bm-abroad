<script lang="ts">
  import H1 from './ui/H1.svelte';

  export let title: string;
  export let subtitle: string;
</script>

<header class="relative space-y-[12px] pl-[25px]">
  <H1 class="leading-none" el="h2">{title}</H1>
  <h3 class="text-[12px] text-[#A8A8A8] md:text-[16px]">{subtitle}</h3>
</header>

<style>
  header::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 9px;
    background-color: #764af1;
  }
</style>
