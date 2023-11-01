import { SvelteComponentTyped } from 'svelte';
import type { ToolkitNestedPortableTextSpan } from '@portabletext/toolkit';
import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
  props: {
    global: GlobalProps;
    node: ToolkitNestedPortableTextSpan;
    parentBlock: PortableTextBlock;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {
    default: {};
  };
};
export declare type RenderSpanProps = typeof __propDef.props;
export declare type RenderSpanEvents = typeof __propDef.events;
export declare type RenderSpanSlots = typeof __propDef.slots;
export default class RenderSpan extends SvelteComponentTyped<
  RenderSpanProps,
  RenderSpanEvents,
  RenderSpanSlots
> {}
export {};
