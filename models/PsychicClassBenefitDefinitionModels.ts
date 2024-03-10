export interface PsychicClassBenefitDefinition {
  name: string
  description: string
  class: string
  domain: string
  type: PsychicClassBenefitDefinitionType
  level: number
  cost: number
}

export enum PsychicClassBenefitDefinitionType {
  core,
  technique,
}
