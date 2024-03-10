import { type AttributeDefinitionType } from "./AttributeDefinitionModels"
import { type StandardSkillDefinitionType } from "./StandardSkillDefinitionModels"

export interface BackgroundDefinition {
  name: string
  description: string
  benefits: BackgroundBenefits
}

export interface BackgroundBenefits {
  free: BackgroundBenefit
  predifined: BackgroundBenefit[]
  growth: BackgroundBenefit[]
  learning: BackgroundBenefit[]
}

export interface BackgroundBenefit {
  type: BackgroundBenefitType
  subtype: StandardSkillDefinitionType | AttributeDefinitionType | "specific"
  name: string
  amount?: number
  selected?: Map<number, BackgroundBenefit | undefined>
}

export enum BackgroundBenefitType {
  skill,
  stat,
}
