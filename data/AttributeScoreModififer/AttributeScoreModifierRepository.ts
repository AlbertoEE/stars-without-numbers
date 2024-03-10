import { type AttributeScoreModifier } from "@/models/AttributeScoreModifierModels";

export interface AttributeScoreModifierRepository {
    getAttributeScoreModifiers: () => AttributeScoreModifier
}