<script lang="ts">
  import type { Link } from '@/lib/types/common';

  export let link: Link;
  export let name: string;
  export let location: string;
</script>

<section class="flex items-center pt-[61px]">
  <div class="flex-1">
    <h3
      class="text-[24px] font-semibold uppercase text-space-blue md:text-[32px] xl:text-[40px]"
    >
      {name}
    </h3>
    <p>{location}</p>
  </div>
  <!-- <a
    class="flex space-x-[12px] rounded-[45px] border border-slate-blue px-[28px] py-[16px] text-[16px] font-medium text-slate-blue"
    href={link.href}
    ><span>
      {link.title}
    </span>
    <img src="/icons/link.svg" alt="Link" />
  </a> -->
</section>
