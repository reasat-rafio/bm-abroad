<script lang="ts">
  import Heading from './ui/Heading.svelte';
  import { twMerge } from 'tailwind-merge';

  export let title: string;
  export let subtitle: string;
</script>

<header
  class={twMerge('relative space-y-[12px] pl-[25px]', $$props.class ?? '')}
>
  <Heading el="h2" variant="2xl" class="leading-none">{title}</Heading>
  <h3 class="text-dark-gray text-[12px] md:text-[16px]">{subtitle}</h3>
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
