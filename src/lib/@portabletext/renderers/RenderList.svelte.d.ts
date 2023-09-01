import { SvelteComponentTyped } from "svelte";
import type { ToolkitPortableTextList } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        indexInParent: number;
        node: ToolkitPortableTextList;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type RenderListProps = typeof __propDef.props;
export declare type RenderListEvents = typeof __propDef.events;
export declare type RenderListSlots = typeof __propDef.slots;
export default class RenderList extends SvelteComponentTyped<RenderListProps, RenderListEvents, RenderListSlots> {
}
export {};
