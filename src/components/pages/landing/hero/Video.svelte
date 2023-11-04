<script lang="ts">
  export let mov: string;
  export let webm: string;
  export let isIntersecting: boolean;

  let videoEl: HTMLVideoElement;

  $: if (videoEl)
    if (isIntersecting) videoEl.play();
    else videoEl.pause();
</script>

<div
  class="relative aspect-video max-h-[70vh] flex-[0_0_100%] overflow-hidden lg:rounded-lg"
>
  <video
    bind:this={videoEl}
    class="absolute inset-0 object-cover w-full h-full"
    width="100%"
    height="100%"
    disablePictureInPicture
    controlsList="nodownload noplaybackrate"
    controls={false}
    playsInline
    autoPlay
    muted
    loop
    preload="false"
  >
    <source src={mov} type="video/mp4; codecs=hvc1" />
    <source src={webm} type="video/webm" />
    Sorry, your browser doesn&apos;t support embedded videos.
  </video>
</div>
