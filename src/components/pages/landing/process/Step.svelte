<script lang="ts">
  import Indicator from './Indicator.svelte';

  export let title: string;
  export let description: string;
  export let isLast: boolean;
  export let index: number;

  let stepEl: HTMLDivElement;
  let windowHeight = 0;
  let scrollPercentage = 0;
  $: isIntersecting = scrollPercentage > 0;
  $: textColor = (color: string = 'text-black') =>
    isIntersecting ? color : 'text-black/10';

  const scrollAction = () => {
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

<svelte:window bind:innerHeight={windowHeight} on:scroll={scrollAction} />
<div bind:this={stepEl} class="grid grid-cols-12 gap-[20px] !overflow-visible">
  <Indicator {isIntersecting} {isLast} {scrollPercentage} />
  <div
    class="col-span-11 space-y-[16px] pb-[65px] lg:pb-[150px] {isIntersecting
      ? 'scale-100'
      : 'scale-95'} transition-transform duration-500 ease-in-out"
  >
    <div
      class="{textColor(
        'text-[#A0A1A3]',
      )} text-[16px] uppercase transition-colors duration-500"
    >
      Step {index + 1} :
    </div>
    <h5
      class="{textColor()} font-oswald text-[24px] font-semibold uppercase transition-colors duration-500 lg:text-[32px]"
    >
      {title}
    </h5>
    <p
      class="{textColor()} text-[12px] font-light leading-[160%] transition-colors duration-500 lg:text-[18px]"
    >
      {description}
    </p>
  </div>
</div>
