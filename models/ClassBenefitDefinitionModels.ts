export interface ClassBenefitDefinition {
    name: string,
    description: string,
    class: string,
    domain: string,
    type: ClassBenefitDefinitionType,
    level: number,
    cost: number,
}

export enum ClassBenefitDefinitionType {
    core,
    technique
}
