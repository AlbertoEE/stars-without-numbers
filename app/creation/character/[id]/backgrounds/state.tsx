import { create } from "zustand";

export interface SimpleBenefit {
  name: string;
  type: "skill" | "stat";
}

export function addBenefit(
  cloneChosenBenefits: SimpleBenefit[],
  benefitName: string,
  type: "skill" | "stat"
) {
  cloneChosenBenefits.push({ name: benefitName, type: type });
}

export function deleteBenefit(
  cloneChosenBenefits: SimpleBenefit[],
  benefitName: string
) {
  const index = cloneChosenBenefits.findIndex(
    (obj) => obj.name === benefitName
  );
  if (index !== -1) {
    cloneChosenBenefits.splice(index, 1);
  }
}
interface MyState {
  filterBackground: string;
  filterChooseSkill: string[];
  filterRandomSkill: string[];
  detailBackground: string;
  chosenSkillsMap: Map<string, number>;
  chosenAttributesMap: Map<string, number>;
  chosenBenefits: SimpleBenefit[];
  chosenSkillPointsLeft: number;
  setFilterBackground: (newFilterBackground: string) => void;
  setFilterChooseSkill: (newFilterChooseSkill: string[]) => void;
  setFilterRandomSkill: (newFilterRandomSkill: string[]) => void;
  setDetailBackground: (newDetailBackground: string) => void;
  setChosenSkillsMap: (newChosenSkills: Map<string, number>) => void;
  setChosenAttributesMap: (newChosenAttributes: Map<string, number>) => void;
  setChosenBenefits: (newChosenBenefits: SimpleBenefit[]) => void;
  setChosenSkillPointsLeft: (newChosenSkillPointsLeft: number) => void;
}

export const useStore = create<MyState>((set) => ({
  filterBackground: "",
  filterChooseSkill: [],
  filterRandomSkill: [],
  detailBackground: "",
  chosenSkillsMap: new Map(),
  chosenAttributesMap: new Map(),
  chosenBenefits: [],
  chosenSkillPointsLeft: 2,
  setFilterBackground: (newFilterBackground) =>
    set({ filterBackground: newFilterBackground }),
  setFilterChooseSkill: (newFilterChooseSkill) =>
    set({ filterChooseSkill: newFilterChooseSkill }),
  setFilterRandomSkill: (newFilterRandomSkill) =>
    set({ filterRandomSkill: newFilterRandomSkill }),
  setDetailBackground: (newDetailBackground) =>
    set({ detailBackground: newDetailBackground }),
  setChosenSkillsMap: (newChosenSkills) =>
    set({ chosenSkillsMap: newChosenSkills }),
  setChosenAttributesMap: (newChosenAttributes) =>
    set({ chosenAttributesMap: newChosenAttributes }),
  setChosenBenefits: (newChosenBenefits) =>
    set({ chosenBenefits: newChosenBenefits }),
  setChosenSkillPointsLeft: (newChosenBenefits) =>
    set({ chosenSkillPointsLeft: newChosenBenefits }),
}));
