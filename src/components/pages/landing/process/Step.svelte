<script lang="ts">
  export let title: string;
  export let description: string;
  export let index: number;

  let stepEl: HTMLDivElement;
  let windowHeight = 0;
  let scrollPercentage = 0;
  $: textColor = (color: string = 'text-black') =>
    scrollPercentage > 0 ? color : 'text-black/10';

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
<div bind:this={stepEl} class="grid grid-cols-12">
  <div class="col-span-1">
    <div class="relative h-full !w-[3px]">
      <div class="absolute inset-0 -z-10 h-full w-full bg-black/10" />
      <div
        style="height: {scrollPercentage}%"
        class="inset-0 w-full bg-[#04BF4F] transition-all duration-75 ease-out"
      />
    </div>
  </div>
  <div class="col-span-11 space-y-[16px] pb-[150px]">
    <div
      class="{textColor(
        'text-[#A0A1A3]',
      )} text-[16px] uppercase transition-colors duration-500"
    >
      Step {index + 1} :
    </div>
    <h5
      class="{textColor()} font-oswald text-[32px] font-semibold uppercase transition-colors duration-500"
    >
      {title}
    </h5>
    <p
      class="{textColor()} text-[18px] font-light leading-[160%] transition-colors duration-500"
    >
      {description}
    </p>
  </div>
</div>
