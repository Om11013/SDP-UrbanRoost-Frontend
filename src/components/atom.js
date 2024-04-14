import { atom } from "recoil";

export const stateAtom = atom({
    key: 'stateAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
  
