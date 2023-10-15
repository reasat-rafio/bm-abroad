<script lang="ts">
  import Gallery from '@/components/Gallery.svelte';
  import type { Highlights } from '@/lib/types/services';

  export let props: Highlights;
  $: ({
    title,
    gallery: { college, singleImage },
  } = props);
</script>

<section class="mb-lg lg:mb-2xl">
  <div class="container">
    <Gallery {college} {singleImage} />
    <h2
      class="heading-lg mx-auto mt-[90px] max-w-[1058px] text-center font-poppins !font-medium !normal-case !text-black sm:mt-[130px] lg:mt-[150px]"
    >
      {title}
    </h2>
  </div>
</section>
