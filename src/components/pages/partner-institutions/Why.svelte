<script lang="ts">
  import GradientPurpleBlue from '@/components/GradientPurpleBlue.svelte';
  import { PortableText } from '@/lib/@portabletext/index';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { WhyProps } from '@/lib/types/partner-institutions';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  export let props: WhyProps;
  $: ({ title, reasons } = props);

  let containerEl: HTMLElement;
  let headerEl: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = containerEl.querySelectorAll('.why-card');
    const cardTextEls = containerEl.querySelectorAll('[data-animate-y]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
        },
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      });

      tl.to(headerEl, { y: 0 })
        .to(cards, { y: 0, opacity: 1, stagger: 0.1 }, 0.2)
        .to(cardTextEls, { y: 0, opacity: 1, stagger: 0.1 }, 0.2);
    });

    return () => ctx.revert();
  });
</script>

<section
  bind:this={containerEl}
  class="overflow-hidden max-md:pt-[169px] md:py-[180px] xl:py-[208px]"
>
  <div class="container relative">
    <div class="overflow-hidden">
      <h1 bind:this={headerEl} class="heading-2xl translate-y-full text-center">
        <PortableText
          value={title}
          components={{
            marks: {
              // @ts-ignore
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </h1>
    </div>

    <div
      class="grid grid-cols-1 gap-[24px] max-lg:py-[90px] lg:pt-[101px] xl:grid-cols-2"
    >
      {#each reasons as { title, image, description }}
        <article
          class="why-card grid translate-y-[20%] grid-cols-12 rounded-lg bg-white p-[20px] opacity-0 max-md:gap-y-[32px] md:gap-[50px]"
        >
          <figure class="col-span-12 md:col-span-4 md:py-[20px] md:pl-[20px]">
            <SanityImage
              class="h-full max-h-[250px] w-full object-contain md:max-h-[300px] xl:max-h-[400px]"
              sizes="20vw"
              src={image}
              alt={image.alt}
              imageUrlBuilder={imageBuilder}
            />
          </figure>
          <section
            class="col-span-12 flex flex-col justify-center space-y-[24px] md:col-span-8"
          >
            <h3
              data-animate-y
              class="translate-y-[20%] text-center font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue opacity-0 transition-colors duration-500 group-hover:text-white max-md:pb-[16px] md:text-left md:text-[24px] xl:text-h2"
            >
              {title}
            </h3>
            <p data-animate-y class="body-1 translate-y-[20%] opacity-0">
              {description}
            </p>
          </section>
        </article>
      {/each}
    </div>
  </div>
</section>
