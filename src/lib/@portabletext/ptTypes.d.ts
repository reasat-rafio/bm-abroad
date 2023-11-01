import type { nestLists } from '@portabletext/toolkit';
import type {
  ArbitraryTypedObject,
  PortableTextBlock,
} from '@portabletext/types';
export interface PortableTextSvelteContext {
  [key: string]: unknown;
}
export declare type PortableTextMarkType =
  | 'strong'
  | 'em'
  | 'strike-through'
  | 'underline'
  | 'code'
  | string;
export declare type InputValue =
  | PortableTextBlock
  | ArbitraryTypedObject
  | (PortableTextBlock | ArbitraryTypedObject)[];
export declare type NormalizedBlocks = ReturnType<typeof nestLists>;
export declare type GenericNode = NormalizedBlocks[0];
