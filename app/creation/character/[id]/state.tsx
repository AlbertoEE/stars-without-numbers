import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { BackgroundBenefit, BackgroundDefinition } from '@/models/BackgroundDefinitionModels';
import { SkillDefinition } from '@/models/SkillDefinitionModels';
import { DraggedState } from "@/utilities/DragAndDrop";
import { Key } from "@react-types/shared";
import { create } from "zustand";


// Attributes
export interface AttributeValue {
    [key: string]: string;
}

interface BasicAttributesState {
    initialValues: AttributeValue,
    chosenAttributes: AttributeValue;
    dragged: DraggedState;
    draggedOver: DraggedState;
    detail: string;
    attributeTab: Key;
    setInitialValues: (newAttributes: AttributeValue) => void;
    setChosenAttributes: (newAttributes: AttributeValue) => void;
    setDragged: (newDraggedState: DraggedState) => void;
    setDraggedOver: (newDraggedState: DraggedState) => void;
    setDetail: (newDetail: string) => void;
    setAttributeTab: (newAttributeTab: Key) => void;
}

export const useStoreBasicAttributesState = create<BasicAttributesState>(((set) => ({
    initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", },
    chosenAttributes: { strength: "0", dexterity: "0", constitution: "0", intelligence: "0", wisdom: "0", charisma: "0", },
    dragged: { from: "", value: "", key: "" },
    draggedOver: { from: "", value: "", key: "" },
    detail: "",
    attributeTab: "standard",
    setInitialValues: (newInitialValues) => set({ initialValues: newInitialValues }),
    setChosenAttributes: (newAttributes) => set({ chosenAttributes: newAttributes }),
    setDragged: (newDragged) => set({ dragged: newDragged }),
    setDraggedOver: (newDraggedOver) => set({ draggedOver: newDraggedOver }),
    setDetail: (newDetail) => set({ detail: newDetail }),
    setAttributeTab: (newAttributeTab: Key) => set({attributeTab: newAttributeTab}),
})));


// Backgrounds
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
interface BackgroundState {
    filterBackground: string;
    filterChooseSkill: string[];
    filterRandomSkill: string[];
    focusedBackground: BackgroundDefinition | undefined;
    chosenBenefits: BackgroundBenefit[];
    randomResults: BackgroundBenefit[];
    backgroundTab: Key;
    backgroundBenefitTab: Key;
    rolledDice: boolean;
    setFilterBackground: (newFilterBackground: string) => void;
    setFilterChooseSkill: (newFilterChooseSkill: string[]) => void;
    setFilterRandomSkill: (newFilterRandomSkill: string[]) => void;
    setFocusedBackground: (newFocusedBackground: BackgroundDefinition) => void;
    setChosenBenefits: (newChosenBenefits: BackgroundBenefit[]) => void;
    setRandomResults: (newRandomResults: BackgroundBenefit[]) => void;
    setBackgroundTab: (newBackgroundTab: Key) => void;
    setBackgroundBenefitTab: (newBackgroundBenefitTab: Key) => void;
    setRolledDice: (newRolledDice: boolean) => void;
}

export const useStoreBackgroundState = create<BackgroundState>((set) => ({
    filterBackground: "",
    filterChooseSkill: [],
    filterRandomSkill: [],
    focusedBackground: undefined,
    chosenSkillsMap: new Map(),
    chosenBenefits: [],
    randomResults: [],
    backgroundTab: "backgroundDescription",
    backgroundBenefitTab: "predifined",
    rolledDice: false,
    setFilterBackground: (newFilterBackground) =>
        set({ filterBackground: newFilterBackground }),
    setFilterChooseSkill: (newFilterChooseSkill) =>
        set({ filterChooseSkill: newFilterChooseSkill }),
    setFilterRandomSkill: (newFilterRandomSkill) =>
        set({ filterRandomSkill: newFilterRandomSkill }),
    setFocusedBackground: (newFocusedBackground) =>
        set({ focusedBackground: newFocusedBackground }),
    setChosenBenefits: (newChosenBenefits) =>
        set({ chosenBenefits: newChosenBenefits }),
    setRandomResults: (newRandomResults) =>
        set({ randomResults: newRandomResults }),
    setBackgroundTab: (newBackgroundTab) =>
        set({ backgroundTab: newBackgroundTab }),
    setBackgroundBenefitTab: (newBackgroundBenefitTab) =>
        set({ backgroundBenefitTab: newBackgroundBenefitTab }),
    setRolledDice: (newRolledDice) =>
        set({ rolledDice: newRolledDice }),
}));


// Definitions
interface DefinitionDataState {
    skillDefinitionList: SkillDefinition[],
    attributeDefinitionList: AttributeDefinition[],
    backgroundDefinitionList: BackgroundDefinition[],
    setSkillDefinitions: (newSkillDefinitionList: SkillDefinition[]) => void;
    setAttributeDefinitions: (newAttributeDefinitionList: AttributeDefinition[]) => void;
    setBackgroundDefinitionList: (newBackgroundDefinitionList: BackgroundDefinition[]) => void;
}

export const useStoreDefinitionDataState = create<DefinitionDataState>(((set) => ({
    skillDefinitionList: [],
    attributeDefinitionList: [],
    backgroundDefinitionList: [],
    setSkillDefinitions: (newSkillDefinitionList) => set({ skillDefinitionList: newSkillDefinitionList }),
    setAttributeDefinitions: (newAttributeDefinitionList) => set({ attributeDefinitionList: newAttributeDefinitionList }),
    setBackgroundDefinitionList: (newBackgroundDefinitionList) => set({ backgroundDefinitionList: newBackgroundDefinitionList }),
})));

