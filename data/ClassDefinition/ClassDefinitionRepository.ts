import { AttributeScoreModifier } from "@/models/AttributeScoreModifierModels";

export interface ClassDefinitionRepository {
    getAttributeScoreModifiers: () => AttributeScoreModifier
}