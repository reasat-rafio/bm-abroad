import { SvelteComponentTyped } from "svelte";
import type { ToolkitTextNode } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        global: GlobalProps;
        node: ToolkitTextNode;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RenderTextProps = typeof __propDef.props;
export declare type RenderTextEvents = typeof __propDef.events;
export declare type RenderTextSlots = typeof __propDef.slots;
export default class RenderText extends SvelteComponentTyped<RenderTextProps, RenderTextEvents, RenderTextSlots> {
}
export {};
