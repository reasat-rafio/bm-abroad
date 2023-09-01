<script lang="ts">
  import type { TaglineProps } from '@/lib/types/landing';

  export let props: TaglineProps;
  $: ({ title, decorators } = props);
</script>

<section></section>
