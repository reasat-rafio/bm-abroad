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

<section class="relative mb-[48px]">
  <article
    style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
    class="container relative z-10 grid grid-cols-2 gap-5 rounded-[32px] bg-white px-[111px] py-[83px]"
  >
    <div class="space-y-[64px]">
      <H1>
        <PortableText
          value={title}
          components={{
            marks: {
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </H1>

      <p class="text-[18px] font-light leading-[160%]">{description}</p>
      <Cta href={link.href}>{link.title}</Cta>
    </div>

    <figure class="max-h-[552px]">
      <SanityImage
        class="h-full w-full object-contain"
        src={image}
        alt={image.alt}
        sizes="50vw"
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  </article>
</section>
