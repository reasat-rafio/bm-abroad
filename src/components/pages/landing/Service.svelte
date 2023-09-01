<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Service } from '@/lib/types/landing';
  import { inView, animate, stagger } from 'motion';

  export let services: Service[];
  let sectionEl: HTMLElement;

  $: if (sectionEl) {
    inView(
      sectionEl,
      () => {
        animate(
          '.landing-service__card',
          { y: ['60px', 0] },
          {
            delay: stagger(0.1),
            easing: 'ease-in-out',
            duration: 0.6,
          },
        );
      },
      { amount: 0.25 },
    );
  }
</script>

<section bind:this={sectionEl} class="">
  <div class="container grid grid-cols-4 gap-[24px]">
    {#each services as { name, image, description }}
      <article
        style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
        class="landing-service__card grid h-[430px] translate-y-[60px] grid-rows-2 rounded-[24px] bg-white px-[36px] py-[29px]"
      >
        <figure>
          <SanityImage
            class="h-full w-full object-contain"
            src={image}
            alt={name}
            imageUrlBuilder={imageBuilder}
            sizes="20vw"
          />
        </figure>

        <div class="flex flex-col justify-center space-y-[24px] text-center">
          <h4
            class="font-oswald text-[32px] font-semibold uppercase leading-none text-[#1B1464]"
          >
            {name}
          </h4>
          <p class="text-[16px] font-light leading-[160%] tracking-[0.4px]">
            {description}
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>
