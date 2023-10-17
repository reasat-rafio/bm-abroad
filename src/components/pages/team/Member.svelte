<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { TeamMember } from '@/lib/types/team';

  export let member: TeamMember;
  $: ({ name, description, image, role, socials } = member);
</script>

<article class="grid grid-cols-12 max-lg:gap-y-[32px]">
  <section
    class="col-span-12 flex flex-col max-lg:gap-y-[32px] lg:col-span-5 xl:col-span-4"
  >
    <div class="block space-y-[8px] lg:hidden">
      <h4
        class="heading-lg !font-poppins !font-medium !normal-case !leading-none !text-black"
      >
        {name}
      </h4>
      <span class="body-1 font-medium text-[#979797]">{role}</span>
    </div>
    <figure class="h-full w-full">
      <SanityImage
        class="h-full w-full rounded-[18px] object-cover"
        src={image}
        imageUrlBuilder={imageBuilder}
        sizes="40vw"
        alt={name}
      />
    </figure>
  </section>
  <!--  -->
  <section
    class="col-span-12 flex flex-col gap-y-[36px] lg:col-span-7 lg:justify-center lg:gap-y-[54px] lg:pl-[50px] xl:col-span-8 xl:pl-[100px]"
  >
    <div class="hidden space-y-[8px] lg:block">
      <h4
        class="heading-lg !font-poppins !font-medium !normal-case !leading-none !text-black"
      >
        {name}
      </h4>
      <span class="body-1 font-medium text-[#979797]">{role}</span>
    </div>

    <p class="body-1 whitespace-pre-wrap">{description}</p>

    <ul class="flex gap-x-[20px]">
      {#each socials as { icon, link }}
        <li>
          <a href={link}>
            <SanityImage
              class="aspect-square h-[20px] object-contain"
              src={icon}
              imageUrlBuilder={imageBuilder}
              height="20px"
              width="20px"
              alt="Social Media Icon"
            />
          </a>
        </li>
      {/each}
    </ul>
  </section>
</article>
