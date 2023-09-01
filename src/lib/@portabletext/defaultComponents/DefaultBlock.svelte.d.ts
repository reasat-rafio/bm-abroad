import { SvelteComponentTyped } from "svelte";
import type { BlockComponentProps } from '../rendererTypes';
declare const __propDef: {
    props: {
        portableText: BlockComponentProps;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DefaultBlockProps = typeof __propDef.props;
export declare type DefaultBlockEvents = typeof __propDef.events;
export declare type DefaultBlockSlots = typeof __propDef.slots;
export default class DefaultBlock extends SvelteComponentTyped<DefaultBlockProps, DefaultBlockEvents, DefaultBlockSlots> {
}
export {};
