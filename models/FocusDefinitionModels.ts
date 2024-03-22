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
  COMBAT_FOCUS = "combat",
  PSYCHIC_FOUCS = "psychic",
  NON_COMBAT_FOCUS = "non combat",
}
