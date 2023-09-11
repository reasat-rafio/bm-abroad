<script lang="ts">
  import type { emailSchema } from '@/lib/helpers';
  import type { SuperForm } from 'sveltekit-superforms/client';

  export let form: SuperForm<typeof emailSchema>;

  const { form: f, errors, enhance } = form;
</script>

<form method="POST" use:enhance>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" bind:value={$f.name} />
    {#if $errors.name}
      <small>{$errors.name}</small>
    {/if}
  </div>
  <div>
    <label for="phone">Phone</label>
    <input type="text" id="phone" name="phone" bind:value={$f.phone} />
    {#if $errors.phone}
      <small>{$errors.phone}</small>
    {/if}
  </div>
  <div>
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" bind:value={$f.email} />
    {#if $errors.email}
      <small>{$errors.email}</small>
    {/if}
  </div>
  <div>
    <label for="inquery">inquery</label>
    <input type="text" id="inquery" name="inquery" bind:value={$f.inquery} />
    {#if $errors.inquery}
      <small>{$errors.inquery}</small>
    {/if}
  </div>
  <div>
    <label for="message">message</label>
    <input type="text" id="message" name="message" bind:value={$f.message} />
    {#if $errors.message}
      <small>{$errors.message}</small>
    {/if}
  </div>

  <button type="submit">Submit</button>
</form>
