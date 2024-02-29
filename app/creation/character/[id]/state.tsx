import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { BackgroundBenefit, BackgroundDefinition } from '@/models/BackgroundDefinitionModels';
import { FocusDefinition } from '@/models/FocusDefinitionModels';
import { GameClassDefinition } from '@/models/GameClassDefinitionModels';
import { StandardSkillDefinition } from '@/models/StandardSkillDefinitionModels';
import { DraggedState } from "@/utilities/DragAndDrop";
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
    attributeTab: string;
    setInitialValues: (newAttributes: AttributeValue) => void;
    setChosenAttributes: (newAttributes: AttributeValue) => void;
    setDragged: (newDraggedState: DraggedState) => void;
    setDraggedOver: (newDraggedState: DraggedState) => void;
    setDetail: (newDetail: string) => void;
    setAttributeTab: (newAttributeTab: string) => void;
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
    setAttributeTab: (newAttributeTab: string) => set({ attributeTab: newAttributeTab }),
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
    focusedBackground: BackgroundDefinition | undefined;
    chosenBenefits: BackgroundBenefit[];
    randomResults: BackgroundBenefit[];
    backgroundBenefitSelectionMethod: string;
    rolledDice: boolean;
    setFocusedBackground: (newFocusedBackground: BackgroundDefinition) => void;
    setChosenBenefits: (newChosenBenefits: BackgroundBenefit[]) => void;
    setRandomResults: (newRandomResults: BackgroundBenefit[]) => void;
    setBackgroundBenefitSelectionMethod: (newBackgroundBenefitTab: string) => void;
    setRolledDice: (newRolledDice: boolean) => void;
}

export const useStoreBackgroundState = create<BackgroundState>((set) => ({
    focusedBackground: undefined,
    chosenSkillsMap: new Map(),
    chosenBenefits: [],
    randomResults: [],
    backgroundTab: "backgroundDescription",
    backgroundBenefitSelectionMethod: "choose",
    rolledDice: false,
    setFocusedBackground: (newFocusedBackground) =>
        set({ focusedBackground: newFocusedBackground }),
    setChosenBenefits: (newChosenBenefits) =>
        set({ chosenBenefits: newChosenBenefits }),
    setRandomResults: (newRandomResults) =>
        set({ randomResults: newRandomResults }),
    setBackgroundBenefitSelectionMethod: (newBackgroundBenefitTab) =>
        set({ backgroundBenefitSelectionMethod: newBackgroundBenefitTab }),
    setRolledDice: (newRolledDice) =>
        set({ rolledDice: newRolledDice }),
}));


// Classes
interface GameClassState {
    focusedGameClass: GameClassDefinition | undefined,
    setFocusedGameClass: (newFocusedGameClass: GameClassDefinition) => void
}

export const useStoreGameClassState = create<GameClassState>((set) => ({
    focusedGameClass: undefined,
    setFocusedGameClass: (newFocusedGameClass) => set({ focusedGameClass: newFocusedGameClass })
}))


interface FociState {
    filterFocus: string;
    filterBenefitSkill: string[];
    focusedFocus: FocusDefinition | undefined;
    setFilterFocus: (newFilterFocus: string) => void;
    setFilterBenefitSkill: (newFilterBenefitSkill: string[]) => void; 
    setFocusedFocus: (newFocusedFocus: FocusDefinition) => void;
}

export const useStoreFociState = create<FociState>((set) => ({
    filterFocus: "",
    filterBenefitSkill: [],
    focusedFocus: undefined,
    setFilterFocus: (newFilterFocus) => set({ filterFocus: newFilterFocus }),
    setFilterBenefitSkill: (newFilterBenefitSkill) => set({ filterBenefitSkill: newFilterBenefitSkill }),
    setFocusedFocus: (newFocusedFocus) => set({ focusedFocus: newFocusedFocus }),
}));


// Definitions
interface DefinitionDataState {
    skillDefinitionList: StandardSkillDefinition[],
    attributeDefinitionList: AttributeDefinition[],
    backgroundDefinitionList: BackgroundDefinition[],
    gameClassDefinitionList: GameClassDefinition[],
    focusDefinitionList: FocusDefinition[],
    setSkillDefinitions: (newSkillDefinitionList: StandardSkillDefinition[]) => void;
    setAttributeDefinitions: (newAttributeDefinitionList: AttributeDefinition[]) => void;
    setBackgroundDefinitionList: (newBackgroundDefinitionList: BackgroundDefinition[]) => void;
    setGameClassDefinitionList: (newGameClassDefinitionList: GameClassDefinition[]) => void;
    setFocusDefinitionList: (newFocusDefinitionList: FocusDefinition[]) => void;
}

export const useStoreDefinitionDataState = create<DefinitionDataState>(((set) => ({
    skillDefinitionList: [],
    attributeDefinitionList: [],
    backgroundDefinitionList: [],
    gameClassDefinitionList: [],
    focusDefinitionList: [],
    setSkillDefinitions: (newSkillDefinitionList) => set({ skillDefinitionList: newSkillDefinitionList }),
    setAttributeDefinitions: (newAttributeDefinitionList) => set({ attributeDefinitionList: newAttributeDefinitionList }),
    setBackgroundDefinitionList: (newBackgroundDefinitionList) => set({ backgroundDefinitionList: newBackgroundDefinitionList }),
    setGameClassDefinitionList: (newGameClassDefinitionList: GameClassDefinition[]) => set({ gameClassDefinitionList: newGameClassDefinitionList }),
    setFocusDefinitionList: (newFocusDefinitionList: FocusDefinition[]) => set({ focusDefinitionList: newFocusDefinitionList })
})));

