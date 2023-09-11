<script lang="ts">
  import type { emailSchema } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { ContactForm } from '@/lib/types/contact-us';
  import { twMerge } from 'tailwind-merge';
  import Form from './Form.svelte';
  import type { SuperForm } from 'sveltekit-superforms/client';

  type T = $$Generic;
  export let props: ContactForm;
  export let form: SuperForm<typeof emailSchema>;
  $: ({ title, subtitle, decoration } = props);
</script>

<section>
  <div class="mx-auto grid max-w-screen-xl grid-cols-12">
    <div class="col-span-6">
      <div class="max-w-lg space-y-[72px]">
        <header class="space-y-[24px]">
          <h2 class={twMerge('heading-lg-secondary', 'text-black')}>
            {title}
          </h2>
          <p class="body-2">{subtitle}</p>
        </header>

        <SanityImage
          src={decoration}
          alt={decoration.alt}
          sizes="(min-width: 1024px) 40vw, 70vw"
          imageUrlBuilder={imageBuilder}
        />
      </div>
    </div>
    <div class="col-span-6">
      <Form {form} />
    </div>
  </div>
</section>
