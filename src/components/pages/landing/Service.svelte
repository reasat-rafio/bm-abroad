<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Service } from '@/lib/types/landing';
  import { onMount } from 'svelte';
  import { gsap } from '@/lib/gsap';

  export let services: Service[];
  let sectionEl: HTMLElement;

  onMount(() => {
    gsap.from('.landing-service__card', {
      y: '60px',
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: sectionEl,
    });
  });
</script>

<section bind:this={sectionEl} class="mb-2xl md:mb-xl">
  <div
    class="container grid grid-cols-2 gap-[20px] lg:grid-cols-3 lg:gap-[24px] 2xl:grid-cols-4"
  >
    {#each services as { name, image, description }}
      <article
        style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
        class="landing-service__card group grid h-[150px] grid-rows-2 gap-1 rounded-[24px] bg-white px-[20px] py-[20px] transition-colors duration-500 hover:bg-[#764AF1] md:h-[430px] md:gap-[20px] md:px-[36px] md:py-[29px]"
      >
        <figure>
          <SanityImage
            class="h-[90%] w-full object-contain transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt={name}
            imageUrlBuilder={imageBuilder}
            sizes="(min-width: 1024px) 30vw, 50vw"
          />
        </figure>

        <div class="flex flex-col justify-center space-y-[24px] text-center">
          <h4
            class="font-oswald text-[16px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white md:text-[24px] xl:text-h2"
          >
            {name}
          </h4>

          <p
            class="body-2 hidden transition-colors duration-500 group-hover:text-white md:block"
          >
            {description}
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>
