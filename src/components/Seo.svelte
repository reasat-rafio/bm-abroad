<script lang="ts">
  import SvelteSeo from 'svelte-seo';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import { urlFor } from '@/lib/sanity/sanityClient';
  import type { SeoProps } from '@/lib/types/common';

  export let seo: SeoProps;
  export let siteOgImg: SanityAsset | undefined = undefined;

  let title = seo.title;
  let description = seo.description;
  let ogImage = seo?.ogImage ?? siteOgImg;

  const openGraphImages = ogImage
    ? [
        { w: 800, h: 600 },
        { w: 1200, h: 630 },
        { w: 600, h: 600 },
        { w: 256, h: 256 },
      ].map(({ w, h }) => ({
        url: `${urlFor(ogImage).width(w).height(h).url()}`,
        width: w,
        height: h,
        alt: `${title}`,
      }))
    : [];
</script>

<SvelteSeo
  {title}
  {description}
  canonical="https://www.bmabroaddreamers.com/"
  openGraph={{
    type: 'website',
    title,
    description,
    url: 'https://www.bmabroaddreamers.com/',
    images: openGraphImages,
  }}
  keywords="study abroad bangladesh, study abroad agency bangladesh, study abroad consultant bangladesh, study abroad visa bangladesh, study abroad scholarships bangladesh, study abroad cost bangladesh, study abroad requirements bangladesh, study abroad universities bangladesh, study abroad courses bangladesh, best study abroad agency bangladesh, top study abroad agency bangladesh, leading study abroad agency bangladesh, study abroad in usa from bangladesh, study abroad in canada from bangladesh, study abroad in uk from bangladesh, study abroad in australia from bangladesh, study abroad in germany from bangladesh, study abroad in malaysia from bangladesh, study abroad in singapore from bangladesh, study abroad for undergraduate degree from bangladesh, study abroad for postgraduate degree from bangladesh, study abroad for mba from bangladesh, study abroad for engineering from bangladesh, study abroad for medicine from bangladesh, how to study abroad from bangladesh, best study abroad programs for bangladeshi students, affordable study abroad programs for bangladeshi students, study abroad scholarships for bangladeshi students, step-by-step guide to study abroad from bangladesh, requirements for study abroad visa in bangladesh, top universities for bangladeshi students to study abroad, best study abroad consultants in bangladesh, study abroad reviews from bangladeshi students"
/>
