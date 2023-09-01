/** @typedef {typeof __propDef.props}  DefaultListItemProps */
/** @typedef {typeof __propDef.events}  DefaultListItemEvents */
/** @typedef {typeof __propDef.slots}  DefaultListItemSlots */
export default class DefaultListItem extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DefaultListItemProps = typeof __propDef.props;
export type DefaultListItemEvents = typeof __propDef.events;
export type DefaultListItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
