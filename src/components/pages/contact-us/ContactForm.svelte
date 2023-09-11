<script lang="ts">
  import type { ContactForm } from '@/lib/types/contact-us';

  export let props: ContactForm;
  $: ({ title, subtitle, decoration } = props);
  console.log(title);
</script>

<section>
  <div class="container grid grid-cols-12">
    <div class="col-span-6">
      <h2 class="heading-lg">
        {title}
      </h2>
    </div>
    <div></div>
  </div>
</section>
