import { SvelteComponentTyped } from 'svelte';
import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
  props: {
    global: GlobalProps;
    node: PortableTextBlock;
    indexInParent: number;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {
    default: {};
  };
};
export declare type RenderBlockProps = typeof __propDef.props;
export declare type RenderBlockEvents = typeof __propDef.events;
export declare type RenderBlockSlots = typeof __propDef.slots;
export default class RenderBlock extends SvelteComponentTyped<
  RenderBlockProps,
  RenderBlockEvents,
  RenderBlockSlots
> {}
export {};
