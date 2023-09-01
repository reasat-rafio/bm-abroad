import { SvelteComponentTyped } from "svelte";
import type { PortableTextBlock } from '@portabletext/types';
import type { GenericNode } from './ptTypes';
import type { GlobalProps } from './rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        options: {
            indexInParent: number;
            node: GenericNode;
            parentBlock?: PortableTextBlock;
            isInline?: boolean;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RenderNodeProps = typeof __propDef.props;
export declare type RenderNodeEvents = typeof __propDef.events;
export declare type RenderNodeSlots = typeof __propDef.slots;
export default class RenderNode extends SvelteComponentTyped<RenderNodeProps, RenderNodeEvents, RenderNodeSlots> {
}
export {};
