import { create } from 'zustand';

interface MyState {
    filterBackground: string,
    filterChooseSkill: string[];
    filterRandomSkill: string[];
    detailBackground: string;
    chosenSkills: Map<string, number>;
    chosenAttributes: Map<string, number>;
    setFilterBackground: (newFilterBackground: string) => void;
    setFilterChooseSkill: (newFilterChooseSkill: string[]) => void;
    setFilterRandomSkill: (newFilterRandomSkill: string[]) => void;
    setDetailBackground: (newDetailBackground: string) => void;
    setChosenSkills: (newChosenSkills: Map<string, number>) => void;
    setChosenAttributes: (newChosenAttributes: Map<string, number>) => void;
}

export const useStore = create<MyState>(((set) => ({
    filterBackground: "",
    filterChooseSkill: [],
    filterRandomSkill: [],
    detailBackground: "",
    chosenSkills: new Map(),
    chosenAttributes: new Map(),
    setFilterBackground: (newFilterBackground) => set({ filterBackground: newFilterBackground }),
    setFilterChooseSkill: (newFilterChooseSkill) => set({ filterChooseSkill: newFilterChooseSkill }),
    setFilterRandomSkill: (newFilterRandomSkill) => set({ filterRandomSkill: newFilterRandomSkill }),
    setDetailBackground: (newDetailBackground) => set({ detailBackground: newDetailBackground }),
    setChosenSkills: (newChosenSkills) => set({ chosenSkills: newChosenSkills }),
    setChosenAttributes: (newChosenAttributes) => set({ chosenAttributes: newChosenAttributes }),
})));