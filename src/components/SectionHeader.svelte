<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let title: string;
  export let subtitle: string;
</script>

<header
  class={twMerge(
    'relative space-y-[12px] pl-[25px] before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:bg-slate-blue before:content-[""] before:md:w-[9px]',
    $$props.class,
  )}
>
  <h2 class="heading-2xl leading-none">{title}</h2>
  <h3 class="font-poppins text-[12px] text-dark-gray md:text-[16px]">
    {subtitle}
  </h3>
</header>
