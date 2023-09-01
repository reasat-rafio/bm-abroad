import { SvelteComponentTyped } from "svelte";
import type { ToolkitPortableTextListItem } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        indexInParent: number;
        node: ToolkitPortableTextListItem;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type RenderListItemProps = typeof __propDef.props;
export declare type RenderListItemEvents = typeof __propDef.events;
export declare type RenderListItemSlots = typeof __propDef.slots;
export default class RenderListItem extends SvelteComponentTyped<RenderListItemProps, RenderListItemEvents, RenderListItemSlots> {
}
export {};
