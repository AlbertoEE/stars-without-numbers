import { create } from 'zustand';

interface MyState {
    filterBackground: string,
    filterChooseSkill: string[];
    filterRandomSkill: string[];
    detailBackground: string;
    setFilterBackground: (newFilterBackground: string) => void;
    setFilterChooseSkill: (newFilterChooseSkill: string[]) => void;
    setFilterRandomSkill: (newFilterRandomSkill: string[]) => void;
    setDetailBackground: (newDetailBackground: string) => void;
}

export const useStore = create<MyState>(((set) => ({
    filterBackground: "",
    filterChooseSkill: [],
    filterRandomSkill: [],
    detailBackground: "",
    setFilterBackground: (newFilterBackground) => set({ filterBackground: newFilterBackground }),
    setFilterChooseSkill: (newFilterChooseSkill) => set({ filterChooseSkill: newFilterChooseSkill }),
    setFilterRandomSkill: (newFilterRandomSkill) => set({ filterRandomSkill: newFilterRandomSkill }),
    setDetailBackground: (newDetailBackground) => set({ detailBackground: newDetailBackground }),
})));