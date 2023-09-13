<script lang="ts">
  import Seo from '@/components/Seo.svelte';
  import Tagline from '@/components/Tagline.svelte';
  import ContactForm from '@/components/pages/contact-us/ContactForm.svelte';
  import { emailSchema } from '@/lib/helpers.js';
  import { superForm } from 'sveltekit-superforms/client';
  import type { ActionData } from './$types.js';

  export let data;
  export let form: ActionData;

  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections, seo },
  } = data);

  const f = superForm(data.form, {
    taintedMessage: 'Are you sure you want leave?',
    validators: emailSchema,
    resetForm: true,
  });
</script>

<Seo {seo} siteOgImg={ogImage} />
{#each sections as props}
  {#if props._type === 'common.tagline'}
    <Tagline
      class="max-md:pb-[102px] max-md:pt-[169px] md:py-[180px] xl:py-[208px]"
      {props}
    />
  {:else if props._type === 'contactForm'}
    <ContactForm {props} form={f} formMessage={form?.formMessage} />
  {/if}
{/each}
