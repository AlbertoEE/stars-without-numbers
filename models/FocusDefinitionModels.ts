export interface FocusDefinition {
    name: string,
    description: string,
    levels: FocusLevelDefinition[],
    type: FocusType
}

export interface FocusLevelDefinition {
    level: number,
    description: string,
    skillBenefitOptionList?: string[],
}

export enum FocusType {
    COMBAT_FOCUS,
    PSYCHIC_FOUCS,
    NON_COMBAT_FOCUS,
}