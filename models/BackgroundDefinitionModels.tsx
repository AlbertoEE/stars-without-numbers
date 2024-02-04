import { AttributeDefinitionType } from "./AttributeDefinitionModels";
import { SkillDefinitionType } from "./SkillDefinitionModels";

export interface BackgroundDefinition {
  name: string;
  description: string;
  benefits: BackgroundBenefits;
}

export interface BackgroundBenefits {
  free: BackgroundBenefit;
  predifined: BackgroundBenefit[];
  growth: BackgroundBenefit[];
  learning: BackgroundBenefit[];
}

export interface BackgroundBenefit {
  type: BackgroundBenefitType;
  subtype: SkillDefinitionType | AttributeDefinitionType | "specific"
  name: string;
  amount?: number;
  selected?: BackgroundBenefit[];
}

export enum BackgroundBenefitType {
  skill,
  stat,
}
