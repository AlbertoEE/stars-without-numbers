import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"

export interface SkillDefinitionRepository {
  getSkills: () => StandardSkillDefinition[]
}
