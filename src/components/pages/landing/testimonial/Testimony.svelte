<script lang="ts">
  import Typography from '@/components/ui/Typography.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Testimonial } from '@/lib/types/landing';

  export let testimony: Testimonial;
  $: ({ name, header, image, role, testimony: t } = testimony);
</script>

<article
  style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
  class="grid min-h-[500px] flex-[0_0_90%] grid-cols-8 overflow-hidden rounded-[16px] bg-white sm:flex-[0_0_100%]"
>
  <div
    class="relative col-span-8 flex h-[250px] justify-end sm:h-[350px] md:col-span-3 md:h-full"
  >
    <div
      class="relative z-10 mt-auto w-full space-y-[16px] px-[30px] py-[33px] text-white"
    >
      <h6
        class="text-[18px] font-semibold leading-none tracking-[0.4px] lg:text-[20px]"
      >
        {name}
      </h6>
      <p class="text-[12px] text-white/70 lg:text-[14px]">{role}</p>
    </div>
    <figure class="absolute inset-0 h-full w-full">
      <SanityImage
        sizes="(min-width: 768px) 30vw, 80vw"
        src={image}
        alt={name}
        class="h-full w-full object-cover"
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  </div>
  <div
    class="col-span-8 my-auto space-y-[24px] px-[20px] py-[16px] md:col-span-5 lg:space-y-[48px] lg:px-[68px] lg:py-[30px]"
  >
    <h5 class="text-[24px] font-medium text-space-blue lg:text-[32px]">
      {header}
    </h5>
    <Typography variant="sm">{t}</Typography>
  </div>
</article>
