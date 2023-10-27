import React from 'react';

interface VideoPreviewType {
  webm: string;
  hevc: string;
  background?: string;
}

const VideoPreview = ({ webm, hevc }: VideoPreviewType) => (
  <video muted playsInline autoPlay loop>
    <source src={webm} type="video/webm" />
    <source src={hevc} type="video/quicktime" />
  </video>
);

export default VideoPreview;
