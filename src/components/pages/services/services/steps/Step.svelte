<script lang="ts">
  import Indicator from './Indicator.svelte';
  import { twMerge } from 'tailwind-merge';

  export let title: string;
  export let description: string;
  export let isLast: boolean;
  export let index: number;

  let windowHeight = 0;
  let scrollPercentage = 0;
  let stepEl: HTMLDivElement;
  let heraderEl: HTMLHeadElement;
  let innerWidth = 0;
  $: headerDeltaY =
    heraderEl?.getBoundingClientRect().top -
    stepEl?.getBoundingClientRect().top;

  $: isIntersecting = scrollPercentage > 0;
  $: textColor = (color: string = 'text-black') =>
    isIntersecting ? color : '!text-black/10';

  const calcDeltaY = () => {
    headerDeltaY =
      heraderEl.getBoundingClientRect().top -
      stepEl.getBoundingClientRect().top;
  };

  const scrollAction = () => {
    if (scrollPercentage === 100) return;

    let elBottomPosition =
      stepEl.getBoundingClientRect().top - windowHeight / 2;
    let elHeight = stepEl.getBoundingClientRect().height;

    scrollPercentage =
      Math.min(
        elBottomPosition < 0 ? Math.abs(elBottomPosition) / elHeight : 0,
        1,
      ) * 100;
  };
</script>

<svelte:window
  bind:innerHeight={windowHeight}
  bind:innerWidth
  on:scroll={scrollAction}
  on:resize={calcDeltaY}
/>
{#if innerWidth >= 1024}
  <div
    bind:this={stepEl}
    class="grid grid-cols-11 gap-[20px] !overflow-visible"
  >
    {#if index % 2 === 0}
      <div
        class="col-span-5 space-y-[2px] pb-[65px] text-right lg:pb-[150px] {isIntersecting
          ? 'scale-100'
          : 'scale-95'} transition-transform duration-500 ease-in-out"
      >
        <div
          class="{textColor(
            'text-dark-gray',
          )} text-[12px] uppercase transition-colors duration-500 lg:text-[16px]"
        >
          Step {index + 1} :
        </div>

        <h4
          bind:this={heraderEl}
          class="{textColor()} heading-xl transition-colors duration-500"
        >
          {title}
        </h4>

        <p class={twMerge(`${textColor()} body-2`, 'text-[12px]')}>
          {description}
        </p>
      </div>
    {:else}
      <div class="col-span-5" />
    {/if}

    <Indicator {headerDeltaY} {isIntersecting} {isLast} {scrollPercentage} />
    {#if index % 2 !== 0}
      <div
        class="col-span-5 space-y-[2px] pb-[65px] text-left lg:pb-[150px] {isIntersecting
          ? 'scale-100'
          : 'scale-95'} transition-transform duration-500 ease-in-out"
      >
        <div
          class="{textColor(
            'text-dark-gray',
          )} text-[12px] uppercase transition-colors duration-500 lg:text-[16px]"
        >
          Step {index + 1} :
        </div>

        <h4
          bind:this={heraderEl}
          class="{textColor()} heading-xl transition-colors duration-500"
        >
          {title}
        </h4>

        <p class={twMerge(`${textColor()} body-2`, 'text-[12px]')}>
          {description}
        </p>
      </div>
    {:else}
      <div class="col-span-5" />
    {/if}
  </div>
{:else}
  <div
    bind:this={stepEl}
    class="grid grid-cols-12 gap-[20px] !overflow-visible"
  >
    <Indicator {headerDeltaY} {isIntersecting} {isLast} {scrollPercentage} />
    <div
      class="col-span-11 space-y-[2px] pb-[65px] lg:pb-[150px] {isIntersecting
        ? 'scale-100'
        : 'scale-95'} transition-transform duration-500 ease-in-out"
    >
      <div
        class="{textColor(
          'text-dark-gray',
        )} text-[12px] uppercase transition-colors duration-500 lg:text-[16px]"
      >
        Step {index + 1} :
      </div>

      <h4
        bind:this={heraderEl}
        class="{textColor()} heading-xl transition-colors duration-500"
      >
        {title}
      </h4>

      <p class={twMerge(`${textColor()} body-2`, 'text-[12px]')}>
        {description}
      </p>
    </div>
  </div>
{/if}
