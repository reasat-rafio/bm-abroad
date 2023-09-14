<script lang="ts">
  import type { emailSchema } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { ContactForm } from '@/lib/types/contact-us';
  import { twMerge } from 'tailwind-merge';
  import Form from './Form.svelte';
  import type { SuperForm } from 'sveltekit-superforms/client';

  export let props: ContactForm;
  export let form: SuperForm<typeof emailSchema>;
  export let formMessage: undefined | string;

  $: ({ title, subtitle, decoration } = props);
</script>

<section class="mx-5 pb-[90px] lg:pb-[160px]">
  <div class="mx-auto grid max-w-screen-xl grid-cols-12 max-lg:gap-y-[56px]">
    <div class="col-span-12 lg:col-span-6">
      <div class="flex max-w-full flex-col-reverse lg:max-w-lg lg:flex-col">
        <header class="mt-[56px] space-y-[24px] lg:mb-[72px]">
          <h2 class={twMerge('heading-lg-secondary', 'text-black')}>
            {title}
          </h2>
          <p class="body-2">{subtitle}</p>
        </header>

        <SanityImage
          class="h-full w-full object-cover"
          src={decoration}
          alt={decoration.alt}
          sizes="(min-width: 1024px) 40vw, 100vw"
          imageUrlBuilder={imageBuilder}
        />
      </div>
    </div>
    <div
      class="col-span-12 flex flex-col items-end justify-end space-y-[16px] lg:col-span-6"
    >
      <Form {form} {formMessage} />
    </div>
  </div>
</section>
