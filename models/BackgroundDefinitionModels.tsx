export interface BackgroundDefinition {
  name: string;
  description: string;
  benefits: BackgroundBenefits;
}

export interface BackgroundBenefits {
  free: BackgroundBenefit[];
  quick: BackgroundBenefit[];
  growth: BackgroundBenefit[];
  learning: BackgroundBenefit[];
}

export interface BackgroundBenefit {
  type: BackgroundBenefitType;
  name: string;
  amount?: number;
}

export enum BackgroundBenefitType {
  skill,
  stat,
}
