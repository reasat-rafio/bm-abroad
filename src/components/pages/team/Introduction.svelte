<script lang="ts">
  import type { Introduction } from '@/lib/types/team';

  export let introduction: Introduction;
  $: ({ description, subtitle, title } = introduction);
</script>

<section
  class="space-y-[46px] sm:p-[15px] md:p-[30px] lg:space-y-[64px] xl:p-[50px]"
>
  <header class="space-y-[24px]">
    <h2
      class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue"
    >
      {title}
    </h2>
    <h3
      class="heading-lg !font-poppins !font-medium !normal-case !leading-none"
    >
      {subtitle}
    </h3>
  </header>
  <p class="body-1 !font-poppins">{description}</p>
</section>

<style>
  section {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
  }
</style>
