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
    <p class="body-2">{location}</p>
  </div>
  <a
    class="flex border-slate-blue md:space-x-[12px] md:rounded-[45px] md:border md:px-[28px] md:py-[16px] md:text-[16px] md:font-medium md:text-slate-blue"
    href={link.href}
    ><span class="hidden md:block">
      {link.title}
    </span>
    <img src="/icons/link.svg" alt="Link" />
  </a>
</section>
