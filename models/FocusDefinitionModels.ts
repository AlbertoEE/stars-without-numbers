export interface FocusDefinition {
  name: string
  description: string
  levels: FocusLevelDefinition[]
  type: FocusType
}

export interface FocusLevelDefinition {
  level: number
  description: string
  descriptionSchema: string[]
  skillBenefitOptionList?: string[]
}

export enum FocusType {
  GENERAL_FOCUS = "generalFocus",
  COMBAT_FOCUS = "combatFocus",
  PSYCHIC_FOCUS = "psychicFocus",
  NON_COMBAT_FOCUS = "nonCombatFocus",
}
