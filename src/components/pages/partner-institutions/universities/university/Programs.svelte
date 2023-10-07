<script lang="ts">
  import type { Program } from '@/lib/types/partner-institutions';
  import { twMerge } from 'tailwind-merge';

  export let program: Program;
  $: ({
    name,
    courses: { rows },
  } = program);

  $: [head, ...values] = rows;
</script>

<div>
  <h4 class="heading-lg-secondary mb-[14px]">
    {name}
  </h4>

  <table class="w-full table-fixed font-poppins">
    <thead>
      <tr class="rounded-[8px] bg-[#F4F8FF]">
        {#each head.cells as cell, index}
          <th
            class={twMerge(
              'text-left text-[12px] font-semibold max-lg:p-[10px] lg:px-[20px] lg:py-[12px] lg:text-[20px]',
              index === 1 && 'lg:pr-[10%] lg:text-right',
            )}>{cell}</th
          >
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each values as { cells }}
        <tr class="border-b border-dashed">
          {#each cells as cell, index}
            <td
              class={twMerge(
                'text-[14px] max-lg:p-[10px] lg:px-[20px] lg:py-[14px] lg:text-[18px]',
                index === 1 && 'lg:pr-[10%] lg:text-right',
              )}>{cell}</td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
