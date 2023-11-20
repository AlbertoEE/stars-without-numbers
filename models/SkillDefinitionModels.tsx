export interface SkillDefinition {
  name: string;
  description: string;
  shortDescription: string;
  type: SkillDefinitionType[];
}

export enum SkillDefinitionType {
  generic,
  combat,
}
