import { SvelteComponentTyped } from "svelte";
import type { MarkComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: MarkComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DefaultMarkProps = typeof __propDef.props;
export declare type DefaultMarkEvents = typeof __propDef.events;
export declare type DefaultMarkSlots = typeof __propDef.slots;
export default class DefaultMark extends SvelteComponentTyped<DefaultMarkProps, DefaultMarkEvents, DefaultMarkSlots> {
}
export {};
