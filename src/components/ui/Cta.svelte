<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string;
</script>

<a {href} class={twMerge('cta-btn', $$props.class)}>
  <slot />
</a>
