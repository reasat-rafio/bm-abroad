<script lang="ts">
  import type { TeamProps } from '@/lib/types/team';
  import Introduction from './Introduction.svelte';
  import Member from './Member.svelte';
  import Saying from './Saying.svelte';

  export let props: TeamProps;
  $: ({ teamMembers, introduction } = props);
</script>

<section class="pb-[80px] lg:pb-[135px]">
  <div
    class="container flex flex-col gap-y-[90px] md:gap-y-[120px] 2xl:gap-y-[148px]"
  >
    {#if !!introduction}
      <Introduction {introduction} />
    {/if}

    <section
      class="flex flex-col gap-y-[90px] md:gap-y-[120px] 2xl:gap-y-[148px]"
    >
      {#each teamMembers as member}
        <section
          class="flex flex-col gap-y-[90px] md:gap-y-[120px] 2xl:gap-y-[148px]"
        >
          <Member {member} />
          {#if !!member?.saying}
            <Saying sayings={member.saying} />
          {/if}
        </section>
      {/each}
    </section>
  </div>
</section>
