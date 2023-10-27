<script lang="ts">
  import type { VideoProps } from '@/lib/types/landing';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  export let props: VideoProps;
  $: ({ mov, webm } = props);

  let sectionEl: HTMLElement;
  let videoEl: HTMLVideoElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionEl,
      onToggle: ({ isActive }) => {
        if (isActive) videoEl?.play();
        else videoEl?.pause();
      },
    });
  });
</script>

<section bind:this={sectionEl} class="mb-xl lg:container">
  <div
    class=" relative aspect-video h-full max-h-[70vh] w-full overflow-hidden lg:rounded-lg"
  >
    <video
      bind:this={videoEl}
      class="absolute inset-0 h-full w-full object-cover"
      width="100%"
      height="100%"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      controls={false}
      playsInline
      autoPlay
      muted
      loop
    >
      <source src={mov} type="video/mp4; codecs=hvc1" />
      <source src={webm} type="video/webm" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  </div>
</section>
