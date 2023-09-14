<script lang="ts">
  import Input from '@/components/ui/Input.svelte';
  import type { emailSchema } from '@/lib/helpers';
  import { fade } from 'svelte/transition';
  import type { SuperForm } from 'sveltekit-superforms/client';
  import { twMerge } from 'tailwind-merge';

  export let form: SuperForm<typeof emailSchema>;
  export let formMessage: undefined | string;

  const { form: f, errors, enhance, delayed } = form;
  let successEl: HTMLElement;

  $: if (delayed) {
    if (successEl)
      window.scrollTo({
        top: successEl.getBoundingClientRect().top,
        behavior: 'smooth',
      });
  }

  const clearForm = () =>
    f.update(() => ({
      email: '',
      subject: '',
      message: '',
      name: '',
      phone: '',
    }));
</script>

{#if !!formMessage}
  <p
    bind:this={successEl}
    transition:fade
    class="body-1 w-full rounded-[12px] bg-green-600/40 p-5 text-white lg:max-w-lg"
  >
    {formMessage}
  </p>
{/if}

<form
  method="POST"
  use:enhance
  class="w-full max-w-full space-y-[32px] rounded-[12px] bg-white max-lg:px-[20px] max-lg:py-[50px] lg:max-w-lg lg:p-[50px]"
  style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
>
  <Input
    label="Name"
    name="name"
    bind:value={$f.name}
    error={$errors.name}
    placeholder="your name"
  />
  <Input
    label="Phone number"
    name="phone"
    bind:value={$f.phone}
    error={$errors.phone}
    placeholder="your phone number"
  />
  <Input
    label="Email"
    name="email"
    bind:value={$f.email}
    error={$errors.email}
    placeholder="your email"
  />

  <Input
    label="Subject of Inquiry"
    name="subject"
    bind:value={$f.subject}
    error={$errors.subject}
    placeholder="subject you want to talk"
  />

  <div class="flex w-full flex-col space-y-[16px]">
    <label class="text-[16px] font-semibold" for="message">Message</label>
    <div>
      <textarea
        name="message"
        placeholder="type your massage here"
        id="message"
        bind:value={$f.message}
        rows="5"
        class="w-full rounded-[8px] border-[1.5px] border-black/10 bg-white/10 px-[16px] py-[12px] placeholder:text-[14px] placeholder:text-black/20"
      ></textarea>
      {#if $errors.message}
        <small class="text-red-600">{$errors.message}</small>
      {/if}
    </div>
  </div>

  <div class="flex space-x-[16px] lg:space-x-[32px]">
    <button
      disabled={$delayed}
      type="submit"
      class={twMerge('cta-btn flex-1 space-x-[10px]')}
    >
      {#if $delayed}
        <div
          class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
      {:else}
        <img
          class="inline h-4 w-4 object-contain"
          src="/icons/message.svg"
          alt=""
        />
      {/if}
      <span class="inline">Send Message</span>
    </button>
    <button
      on:click={clearForm}
      disabled={$delayed}
      class="block w-fit rounded-[12px] border border-black/20 bg-[length:125%] bg-left px-[18px] py-[13px] text-[16px] font-medium tracking-[0.48px] text-black/20 transition-all duration-300 hover:scale-[1.01] hover:border-red-600 hover:bg-right hover:text-red-600 hover:shadow-xl md:px-[32px]"
      >Clear</button
    >
  </div>
</form>
