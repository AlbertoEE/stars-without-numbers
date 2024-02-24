import { StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels";

export interface SkillDefinitionRepository {
    getSkills: () => StandardSkillDefinition[]
}
