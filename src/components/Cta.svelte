<script lang="ts">
  import Cta from '@/components/ui/Cta.svelte';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import GradientPurpleBlue from './GradientPurpleBlue.svelte';
  import type { CtaProps } from '@/lib/types/common';
  import { twMerge } from 'tailwind-merge';

  export let props: CtaProps;
  $: ({ title, description, link, image } = props);
</script>

<section class="container relative pb-[62px] md:pb-[160px]">
  <article
    style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
    class=" relative z-10 grid grid-cols-1 gap-5 rounded-[32px] bg-white px-[20px] py-[44px] md:px-[40px] md:py-[70px] lg:grid-cols-2 xl:px-[111px] xl:py-[83px]"
  >
    <div class="space-y-[64px]">
      <h2 class={twMerge('heading-2xl', 'max-lg:text-center')}>
        <PortableText
          value={title}
          components={{
            marks: {
              // @ts-ignore
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </h2>

      <figure class="block lg:hidden">
        <SanityImage
          class="h-full max-h-[397px] w-full object-contain"
          src={image}
          alt={image.alt}
          sizes="100vw"
          imageUrlBuilder={imageBuilder}
        />
      </figure>

      <p class="body-1">{description}</p>
      <Cta class="max-lg:mx-auto" href={link.href}>{link.title}</Cta>
    </div>

    <figure class="hidden lg:block">
      <SanityImage
        class="h-full max-h-[552px] w-full object-contain"
        src={image}
        alt={image.alt}
        sizes="50vw"
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  </article>
</section>
