import { type BackgroundDefinition } from "@/models/BackgroundDefinitionModels";

export interface BackgroundDefinitionRepository {
    getBackgrounds: () => BackgroundDefinition[]
}