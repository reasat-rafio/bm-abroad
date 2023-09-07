<script lang="ts">
  import Heading from '@/components/ui/Heading.svelte';
  import Indicator from './Indicator.svelte';
  import Typography from '@/components/ui/Typography.svelte';

  export let title: string;
  export let description: string;
  export let isLast: boolean;
  export let index: number;
  export let allStepsComplete: boolean;

  let stepEl: HTMLDivElement;
  let windowHeight = 0;
  let scrollPercentage = 0;
  $: isIntersecting = scrollPercentage > 0;
  $: textColor = (color: string = 'text-black') =>
    isIntersecting ? color : 'text-black/10';
  $: if (isLast) {
    if (scrollPercentage > 0) allStepsComplete = true;
  } else {
    if (scrollPercentage < 100) allStepsComplete = false;
  }

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
        'text-dark-gray',
      )} text-[12px] uppercase transition-colors duration-500 lg:text-[16px]"
    >
      Step {index + 1} :
    </div>
    <Heading
      el="h5"
      variant="xl"
      class="{textColor()} transition-colors duration-500"
    >
      {title}
    </Heading>
    <Typography variant="lg" class="{textColor()} text-[12px]"
      >{description}</Typography
    >
  </div>
</div>
