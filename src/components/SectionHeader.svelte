<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let title: string;
  export let subtitle: string;
</script>

<header
  class={twMerge('relative space-y-[12px] pl-[25px]', $$props.class ?? '')}
>
  <h2 class="heading-2xl leading-none">{title}</h2>
  <h3 class="font-poppins text-[12px] text-dark-gray md:text-[16px]">
    {subtitle}
  </h3>
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
