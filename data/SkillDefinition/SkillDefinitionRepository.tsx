import { SkillDefinition } from "@/models/SkillDefinitionModels";

export interface SkillDefinitionRepository {
    getSkills: () => SkillDefinition[]
}
