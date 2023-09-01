/** @typedef {typeof __propDef.props}  UnknownTypeProps */
/** @typedef {typeof __propDef.events}  UnknownTypeEvents */
/** @typedef {typeof __propDef.slots}  UnknownTypeSlots */
export default class UnknownType extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type UnknownTypeProps = typeof __propDef.props;
export type UnknownTypeEvents = typeof __propDef.events;
export type UnknownTypeSlots = typeof __propDef.slots;
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
