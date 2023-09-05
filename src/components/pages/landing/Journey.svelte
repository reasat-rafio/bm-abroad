<script lang="ts">
  import Cta from '@/components/ui/Cta.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { JourneyProps } from '@/lib/types/landing';
  import GradientPurpleBlue from './tagline/GradientPurpleBlue.svelte';

  export let props: JourneyProps;
  $: ({ title, description, link, image } = props);
</script>

<section class="container relative mb-[48px]">
  <article
    style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
    class=" relative z-10 grid grid-cols-1 gap-5 rounded-[32px] bg-white px-[20px] py-[44px] md:px-[40px] md:py-[70px] lg:grid-cols-2 xl:px-[111px] xl:py-[83px]"
  >
    <div class="space-y-[32px] md:space-y-[64px]">
      <H1 class="max-lg:text-center">
        <PortableText
          value={title}
          components={{
            marks: {
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </H1>

      <figure class="block lg:hidden">
        <SanityImage
          class="h-full max-h-[397px] w-full object-contain"
          src={image}
          alt={image.alt}
          sizes="100vw"
          imageUrlBuilder={imageBuilder}
        />
      </figure>

      <p class="text-[18px] font-light leading-[160%]">{description}</p>
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
