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
export declare type DefaultLinkProps = typeof __propDef.props;
export declare type DefaultLinkEvents = typeof __propDef.events;
export declare type DefaultLinkSlots = typeof __propDef.slots;
export default class DefaultLink extends SvelteComponentTyped<DefaultLinkProps, DefaultLinkEvents, DefaultLinkSlots> {
}
export {};
