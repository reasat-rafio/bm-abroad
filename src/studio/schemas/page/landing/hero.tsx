import { FcHome } from 'react-icons/fc';
import type { Rule, SanityDefaultPreviewProps } from 'sanity';
import VideoPreview from '../../../components/VideoPreview';
import React from 'react';

const hero = {
  title: 'Hero',
  name: 'landingPage.hero',
  type: 'object',
  icon: FcHome,
  fields: [
    {
      name: 'banners',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          title: 'Image',
          name: 'img',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
            { name: 'url', type: 'string' },
          ],
          preview: {
            select: { title: 'image.alt', media: 'image' },
          },
        },
        {
          name: 'video',
          type: 'object',
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
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Hero' }),
  },
};

export default hero;
