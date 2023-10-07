<script lang="ts">
  import type { University } from '@/lib/types/partner-institutions';
  import CoverPhoto from './CoverPhoto.svelte';
  import Title from './Title.svelte';
  import Programs from './Programs.svelte';

  export let university: University;
  $: ({ coverPhoto, logo, name, location, link, programs } = university);
</script>

<article
  style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
  class="overflow-hidden rounded-[15px] bg-white"
>
  <CoverPhoto {coverPhoto} {logo} {name} />

  <section class="p-[20px] lg:p-[40px]">
    <Title {link} {name} {location} />

    <section class="mt-[46px] space-y-[60px] md:mt-[72px]">
      {#each programs as program}
        <Programs {program} />
      {/each}
    </section>
  </section>
</article>
