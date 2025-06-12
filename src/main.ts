import { type NameData, names, type TrueNames } from "./data.js";

type Name = TrueNames | string & {};

export function isUndertaleCh(name: Name): boolean {
    return names.some((data) => {
        return data.name.toLowerCase() === name.toLowerCase() || data.jpName === name;
    });
}

export function checkUndertaleCh(name: Name): NameData | null {
    const found = names.find((data) => {
        return data.name.toLowerCase() === name.toLowerCase() || data.jpName === name;
    });

    if (found) {
        return found;
    } else {
        return null;
    }
}
