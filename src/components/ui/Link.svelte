<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string;
</script>

<a {href} class={twMerge('', $$props.class ?? '')}>
  <slot />
</a>
