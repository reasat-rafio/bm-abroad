<script lang="ts">
  import type { Saying } from '@/lib/types/team';

  export let sayings: Saying;
  $: ({ title, description } = sayings);
</script>

<section class="space-y-[20px] sm:p-[15px] md:p-[30px] xl:p-[50px]">
  <h5
    class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue"
  >
    {title}
  </h5>
  <blockquote class="text-[20px] font-medium lg:text-[24px]">
    “{description}”
  </blockquote>
</section>

<style>
  @media screen and (min-width: 640px) {
    section {
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.76);
    }
  }
</style>
