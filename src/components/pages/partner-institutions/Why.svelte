<script lang="ts">
  import GradientPurpleBlue from '@/components/GradientPurpleBlue.svelte';
  import { PortableText } from '@/lib/@portabletext/index';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { WhyProps } from '@/lib/types/partner-institutions';

  export let props: WhyProps;
  $: ({ title, reasons } = props);
</script>

<section class="overflow-hidden max-md:pt-[169px] md:py-[180px] xl:py-[208px]">
  <div class="container relative">
    <h1 class="heading-2xl text-center">
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

    <div class="grid grid-cols-2 gap-[24px]">
      {#each reasons as { title, image, description }}
        <article
          class="grid grid-cols-12 gap-[50px] rounded-lg bg-white p-[20px]"
        >
          <figure class="col-span-4">
            <SanityImage
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
              class="text-center font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white max-md:pb-[16px] md:text-left md:text-[24px] xl:text-h2"
            >
              {title}
            </h3>
            <p class="body-1 hidden md:block">
              {description}
            </p>
          </section>
        </article>
      {/each}
    </div>
  </div>
</section>
