<script lang="ts">
  import Heading from '@/components/ui/Heading.svelte';
  import type { ContactForm } from '@/lib/types/contact-us';

  export let props: ContactForm;
  $: ({ title, subtitle, decoration } = props);
  console.log(title);
</script>

<section>
  <div class="container grid grid-cols-12">
    <div class="col-span-6">
      <Heading variant="lg">
        {title}
      </Heading>
    </div>
    <div></div>
  </div>
</section>
