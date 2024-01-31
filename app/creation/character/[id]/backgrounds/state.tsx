import { BackgroundBenefit, BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { create } from "zustand";

export function addBenefit(
  cloneChosenBenefits: BackgroundBenefit[],
  benefit: BackgroundBenefit,
) {
  cloneChosenBenefits.push(benefit);
}

export function deleteBenefitByName(
  cloneChosenBenefits: BackgroundBenefit[],
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
  focusedBackground: BackgroundDefinition | undefined;
  chosenSkillsMap: Map<string, number>;
  chosenAttributesMap: Map<string, number>;
  chosenBenefits: BackgroundBenefit[];
  setFilterBackground: (newFilterBackground: string) => void;
  setFilterChooseSkill: (newFilterChooseSkill: string[]) => void;
  setFilterRandomSkill: (newFilterRandomSkill: string[]) => void;
  setFocusedBackground: (newFocusedBackground: BackgroundDefinition) => void;
  setChosenSkillsMap: (newChosenSkills: Map<string, number>) => void;
  setChosenAttributesMap: (newChosenAttributes: Map<string, number>) => void;
  setChosenBenefits: (newChosenBenefits: BackgroundBenefit[]) => void;
}

export const useStore = create<MyState>((set) => ({
  filterBackground: "",
  filterChooseSkill: [],
  filterRandomSkill: [],
  focusedBackground: undefined,
  chosenSkillsMap: new Map(),
  chosenAttributesMap: new Map(),
  chosenBenefits: [],
  setFilterBackground: (newFilterBackground) =>
    set({ filterBackground: newFilterBackground }),
  setFilterChooseSkill: (newFilterChooseSkill) =>
    set({ filterChooseSkill: newFilterChooseSkill }),
  setFilterRandomSkill: (newFilterRandomSkill) =>
    set({ filterRandomSkill: newFilterRandomSkill }),
  setFocusedBackground: (newFocusedBackground) =>
    set({ focusedBackground: newFocusedBackground }),
  setChosenSkillsMap: (newChosenSkills) =>
    set({ chosenSkillsMap: newChosenSkills }),
  setChosenAttributesMap: (newChosenAttributes) =>
    set({ chosenAttributesMap: newChosenAttributes }),
  setChosenBenefits: (newChosenBenefits) =>
    set({ chosenBenefits: newChosenBenefits }),
}));
