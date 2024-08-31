import { create } from "zustand";
export const useImageState = create((set) => ({
    state: "",
    list: {inputFirst:'',inputSecond:'',inputEmail:''},
    setState: (value) => set(() => ({ state: value })),
    setList: (newList) => set(() => ({ list: newList })),
}));