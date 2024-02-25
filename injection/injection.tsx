import { AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository";
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository";
import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { FocusDefinitionRepository } from "@/data/FocusDefinition/FocusDefinitionRepository";
import { InMemoryFocusDefinitionRepository } from "@/data/FocusDefinition/InMemoryFocusDefinitionRepository";
import { GameClassDefinitionRepository } from "@/data/GameClassDefinition/GameClassDefinitionRepository";
import { InMemoryGameClassDefinitionRepository } from "@/data/GameClassDefinition/InMemoryGameClassDefinitionRepository";
import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";

export const attributeDefinitionRepository: AttributeDefinitionRepository = new InMemoryAttributeDefinitionRepository();
export const skillsDefinitionRepository: SkillDefinitionRepository = new InMemorySkillDefinitionRepository();
export const backgroundDefinitionRepository: BackgroundDefinitionRepository = new InMemoryBackgroundDefinitionRepository();
export const gameClassDefinitionRepository: GameClassDefinitionRepository = new InMemoryGameClassDefinitionRepository();
export const focusDefinitionRepository: FocusDefinitionRepository = new InMemoryFocusDefinitionRepository();