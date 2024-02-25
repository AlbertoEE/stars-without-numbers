import { FocusDefinition } from "@/models/FocusDefinitionModels";

export interface FocusDefinitionRepository {
    getFoci: () => FocusDefinition[]
}