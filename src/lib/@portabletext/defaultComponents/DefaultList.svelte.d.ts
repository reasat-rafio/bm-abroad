import { SvelteComponentTyped } from "svelte";
import type { ListComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: ListComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DefaultListProps = typeof __propDef.props;
export declare type DefaultListEvents = typeof __propDef.events;
export declare type DefaultListSlots = typeof __propDef.slots;
export default class DefaultList extends SvelteComponentTyped<DefaultListProps, DefaultListEvents, DefaultListSlots> {
}
export {};
