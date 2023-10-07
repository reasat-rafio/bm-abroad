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
  <h4 class="heading-lg-secondary">
    {name}
  </h4>

  <table class="w-full table-fixed font-poppins">
    <thead>
      <tr class="rounded-[8px] bg-[#F4F8FF]">
        {#each head.cells as cell, index}
          <th
            class={twMerge(
              'px-[20px] py-[12px] text-left text-[20px] font-semibold',
              index === 1 && 'pr-[10%] text-right',
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
                'px-[20px] py-[14px] text-[18px]',
                index === 1 && 'pr-[10%] text-right',
              )}>{cell}</td
            >
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
