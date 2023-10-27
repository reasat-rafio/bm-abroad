import type { Rule, SanityDefaultPreviewProps } from 'sanity';
import VideoPreview from '../../../components/VideoPreview';
import React from 'react';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';

const video = {
  name: 'landingPage.video',
  title: 'Video',
  type: 'object',
  icon: AiOutlineVideoCameraAdd,
  fields: [
    {
      name: 'video_webm',
      type: 'file',
      title: 'WebM',
      options: {
        accept: 'video/webm,video/x-matroska',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'video_hevc',
      type: 'file',
      title: 'MOV - HEVC',
      options: {
        accept: 'video/quicktime,video/mp4',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      webm: 'video_webm.asset.url',
      hevc: 'video_hevc.asset.url',
    },
    prepare: ({
      webm,
      hevc,
    }: SanityDefaultPreviewProps & {
      webm: string;
      hevc: string;
    }) => ({
      title: 'Video',
      media: <VideoPreview webm={webm} hevc={hevc} />,
    }),
  },
};

export default video;
