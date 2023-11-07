import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { TeamPageProps } from '@/lib/types/team';
import { error } from '@sveltejs/kit';
import groq from 'groq';

const query = groq`
    *[_type == "teamPage"][0]{
        ...,
        sections[]{
            ...,
            ${asset('image')},
            ${asset('decorators[]', { as: 'decorators' })},
            introduction[0],
            teamMembers[]{
                ...,
                ${asset('image')},
                saying[0],
                socials[]{
                    ...,
                    ${asset('icon')},
                }
            }
        }
    }
`;

export async function load() {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as TeamPageProps,
  };
}
