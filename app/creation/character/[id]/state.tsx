import { type AttributeDefinition } from "@/models/AttributeDefinitionModels"
import {
  type BackgroundBenefit,
  type BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels"
import { type FocusType, type FocusDefinition } from "@/models/FocusDefinitionModels"
import { type GameClassDefinition } from "@/models/GameClassDefinitionModels"
import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"
import Equipment from "@/models/equipment/EquipmentModels"
import { type DraggedState } from "@/utilities/DragAndDrop"
import { create } from "zustand"

// Attributes
export type AttributeValue = Record<string, string>

interface BasicAttributesState {
  initialValues: AttributeValue
  chosenAttributes: AttributeValue
  dragged: DraggedState
  draggedOver: DraggedState
  detail: string
  attributeTab: string
  setInitialValues: (newAttributes: AttributeValue) => void
  setChosenAttributes: (newAttributes: AttributeValue) => void
  setDragged: (newDraggedState: DraggedState) => void
  setDraggedOver: (newDraggedState: DraggedState) => void
  setDetail: (newDetail: string) => void
  setAttributeTab: (newAttributeTab: string) => void
}

export const useStoreBasicAttributesState = create<BasicAttributesState>(
  (set): BasicAttributesState => ({
    initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7" },
    chosenAttributes: {
      strength: "0",
      dexterity: "0",
      constitution: "0",
      intelligence: "0",
      wisdom: "0",
      charisma: "0",
    },
    dragged: { from: "", value: "", key: "" },
    draggedOver: { from: "", value: "", key: "" },
    detail: "",
    attributeTab: "standard",
    setInitialValues: (newInitialValues): void => {
      set({ initialValues: newInitialValues })
    },
    setChosenAttributes: (newAttributes): void => {
      set({ chosenAttributes: newAttributes })
    },
    setDragged: (newDragged): void => {
      set({ dragged: newDragged })
    },
    setDraggedOver: (newDraggedOver): void => {
      set({ draggedOver: newDraggedOver })
    },
    setDetail: (newDetail): void => {
      set({ detail: newDetail })
    },
    setAttributeTab: (newAttributeTab: string): void => {
      set({ attributeTab: newAttributeTab })
    },
  }),
)

// Backgrounds
export function addBenefit(
  cloneChosenBenefits: BackgroundBenefit[],
  benefit: BackgroundBenefit,
): void {
  cloneChosenBenefits.push(benefit)
}

export function deleteBenefitByName(
  cloneChosenBenefits: BackgroundBenefit[],
  benefitName: string,
): void {
  const index = cloneChosenBenefits.findIndex(
    (obj): boolean => obj.name === benefitName,
  )
  if (index !== -1) {
    cloneChosenBenefits.splice(index, 1)
  }
}
interface BackgroundState {
  focusedBackground: BackgroundDefinition | undefined
  chosenBenefits: BackgroundBenefit[]
  randomResults: BackgroundBenefit[]
  backgroundBenefitSelectionMethod: string
  rolledDice: boolean
  setFocusedBackground: (newFocusedBackground: BackgroundDefinition) => void
  setChosenBenefits: (newChosenBenefits: BackgroundBenefit[]) => void
  setRandomResults: (newRandomResults: BackgroundBenefit[]) => void
  setBackgroundBenefitSelectionMethod: (newBackgroundBenefitTab: string) => void
  setRolledDice: (newRolledDice: boolean) => void
}

export const useStoreBackgroundState = create<BackgroundState>(
  (set): BackgroundState => ({
    focusedBackground: undefined,
    chosenSkillsMap: new Map(),
    chosenBenefits: [],
    randomResults: [],
    backgroundTab: "backgroundDescription",
    backgroundBenefitSelectionMethod: "choose",
    rolledDice: false,
    setFocusedBackground: (newFocusedBackground): void => {
      set({ focusedBackground: newFocusedBackground })
    },
    setChosenBenefits: (newChosenBenefits): void => {
      set({ chosenBenefits: newChosenBenefits })
    },
    setRandomResults: (newRandomResults): void => {
      set({ randomResults: newRandomResults })
    },
    setBackgroundBenefitSelectionMethod: (newBackgroundBenefitTab): void => {
      set({ backgroundBenefitSelectionMethod: newBackgroundBenefitTab })
    },
    setRolledDice: (newRolledDice): void => {
      set({ rolledDice: newRolledDice })
    },
  }),
)

// Classes
interface GameClassState {
  focusedGameClass: GameClassDefinition | undefined
  setFocusedGameClass: (newFocusedGameClass: GameClassDefinition) => void
}

export const useStoreGameClassState = create<GameClassState>(
  (set): GameClassState => ({
    focusedGameClass: undefined,
    setFocusedGameClass: (newFocusedGameClass): void => {
      set({ focusedGameClass: newFocusedGameClass })
    },
  }),
)

// Focus

export interface FocusSelection {
  focus: FocusDefinition
  level: number
  origin: "foci" | "gameClass"
  currencyUsed: FocusType
}

export interface FocusPoints {
  generalFocus: number
  combatFocus: number
  psychicFocus: number
  nonCombatFocus: number
}

export interface FociState {
  filterFocus: string
  filterBenefitSkill: string[]
  focusedFocus: FocusDefinition | undefined
  chosenFoci: FocusSelection[]
  focusPoints: FocusPoints
  setFilterFocus: (newFilterFocus: string) => void
  setFilterBenefitSkill: (newFilterBenefitSkill: string[]) => void
  setFocusedFocus: (newFocusedFocus: FocusDefinition) => void
  setChosenFoci: (newChosenFoci: FocusSelection[]) => void
  setFocusPoints: (newFocusPoints: FocusPoints) => void
}

export const useStoreFociState = create<FociState>(
  (set): FociState => ({
    filterFocus: "",
    filterBenefitSkill: [],
    focusedFocus: undefined,
    chosenFoci: [],
    focusPoints: {
      generalFocus: 1,
      combatFocus: 1,
      psychicFocus: 0,
      nonCombatFocus: 0,
    },
    setFilterFocus: (newFilterFocus): void => {
      set({ filterFocus: newFilterFocus })
    },
    setFilterBenefitSkill: (newFilterBenefitSkill): void => {
      set({ filterBenefitSkill: newFilterBenefitSkill })
    },
    setFocusedFocus: (newFocusedFocus): void => {
      set({ focusedFocus: newFocusedFocus })
    },
    setChosenFoci: (newChosenFoci: FocusSelection[]): void => {
      set({ chosenFoci: newChosenFoci })
    },
    setFocusPoints: (newFocusPoints: FocusPoints): void => {
      set({ focusPoints: newFocusPoints })
    },
  }),
)

// Equipment
interface EquipmentState {
  equipment: Equipment
  credits: number
  setEquipment: (newEquipment: Equipment) => void
  setCredits: (newEquipment: number) => void
}
export const useStoreEquipment = create<EquipmentState>(
  (set): EquipmentState => ({
    equipment: new Equipment(),
    credits: 1000,
    setEquipment: (newEquipment: Equipment): void => {
      set({ equipment: newEquipment })
    },
    setCredits: (newCredits: number): void => {
      set({ credits: newCredits })
    },
  }),
)

// Definitions
interface DefinitionDataState {
  skillDefinitionList: StandardSkillDefinition[]
  attributeDefinitionList: AttributeDefinition[]
  backgroundDefinitionList: BackgroundDefinition[]
  gameClassDefinitionList: GameClassDefinition[]
  focusDefinitionList: FocusDefinition[]
  equipmentDefinition: Equipment
  setSkillDefinitions: (
    newSkillDefinitionList: StandardSkillDefinition[],
  ) => void
  setAttributeDefinitions: (
    newAttributeDefinitionList: AttributeDefinition[],
  ) => void
  setBackgroundDefinitionList: (
    newBackgroundDefinitionList: BackgroundDefinition[],
  ) => void
  setGameClassDefinitionList: (
    newGameClassDefinitionList: GameClassDefinition[],
  ) => void
  setFocusDefinitionList: (newFocusDefinitionList: FocusDefinition[]) => void
  setEquipmentDefinition: (newEquipmentDefinition: Equipment) => void
}

export const useStoreDefinitionDataState = create<DefinitionDataState>(
  (set): DefinitionDataState => ({
    skillDefinitionList: [],
    attributeDefinitionList: [],
    backgroundDefinitionList: [],
    gameClassDefinitionList: [],
    focusDefinitionList: [],
    equipmentDefinition: new Equipment(),
    setSkillDefinitions: (newSkillDefinitionList): void => {
      set({ skillDefinitionList: newSkillDefinitionList })
    },
    setAttributeDefinitions: (newAttributeDefinitionList): void => {
      set({ attributeDefinitionList: newAttributeDefinitionList })
    },
    setBackgroundDefinitionList: (newBackgroundDefinitionList): void => {
      set({ backgroundDefinitionList: newBackgroundDefinitionList })
    },
    setGameClassDefinitionList: (
      newGameClassDefinitionList: GameClassDefinition[],
    ): void => {
      set({ gameClassDefinitionList: newGameClassDefinitionList })
    },
    setFocusDefinitionList: (
      newFocusDefinitionList: FocusDefinition[],
    ): void => {
      set({ focusDefinitionList: newFocusDefinitionList })
    },
    setEquipmentDefinition: (newEquipmentDefinition: Equipment): void => {
      set({ equipmentDefinition: newEquipmentDefinition })
    },
  }),
)
