import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { ContactUsPageProps } from '@/lib/types/contact-us';
import { error, fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';
import { superValidate } from 'sveltekit-superforms/server';
import { emailSchema } from '@/lib/helpers';
import { FORM_ACCESS_KEY } from '$env/static/private';

const q = groq`*[_id == "contactUsPage"][0]{
    ...,
    sections[]{
        ...,
        ${asset('image')},
        ${asset('decorators[]', { as: 'decorators' })},
        ${asset('decoration')},
    }
}`;

export const load: ServerLoad = async (event) => {
  const data = await sanityClient.fetch(q);
  if (!data) throw error(404, { message: 'Not found' });
  const form = await superValidate(event, emailSchema);

  return {
    page: data as ContactUsPageProps,
    form,
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, emailSchema);
    if (!form.valid)
      return fail(400, {
        form,
      });

    const data = form.data;
    data.access_key = FORM_ACCESS_KEY;
    data.from_name = 'BM Abroad Website Form Submission';

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    let formMessage = null;
    if (result?.success) {
      formMessage = result.message;
    }

    return { form, formMessage };
  },
};
