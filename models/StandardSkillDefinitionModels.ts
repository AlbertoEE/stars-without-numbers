export interface StandardSkillDefinition {
  name: string
  description: string
  shortDescription: string
  type: StandardSkillDefinitionType[]
}

export enum StandardSkillDefinitionType {
  any,
  combat,
}
