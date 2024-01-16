import { AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository";
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository";
import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";

export const attributeDefinitionRepository: AttributeDefinitionRepository = new InMemoryAttributeDefinitionRepository();
export const skillsDefinitionRepository: SkillDefinitionRepository = new InMemorySkillDefinitionRepository();