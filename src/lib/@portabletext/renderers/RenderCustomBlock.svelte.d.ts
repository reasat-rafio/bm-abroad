import { SvelteComponentTyped } from "svelte";
import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: ArbitraryTypedObject;
        parentBlock: PortableTextBlock;
        indexInParent: number;
        isInline?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RenderCustomBlockProps = typeof __propDef.props;
export declare type RenderCustomBlockEvents = typeof __propDef.events;
export declare type RenderCustomBlockSlots = typeof __propDef.slots;
export default class RenderCustomBlock extends SvelteComponentTyped<RenderCustomBlockProps, RenderCustomBlockEvents, RenderCustomBlockSlots> {
}
export {};
