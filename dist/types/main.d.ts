import { type NameData, type TrueNames } from "./data.js";
type Name = TrueNames | string & {};
export declare function isUndertaleCh(name: Name): boolean;
export declare function checkUndertaleCh(name: Name): NameData | null;
export {};
