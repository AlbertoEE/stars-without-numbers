import { type AttributeScoreModifier } from "@/models/AttributeScoreModifierModels";
import { type AttributeScoreModifierRepository } from "./AttributeScoreModifierRepository";

export class InMemoryAttributeScoreModifierRepository
  implements AttributeScoreModifierRepository
{
  getAttributeScoreModifiers = () => attributeScoreModifier;
}

const attributeScoreModifier: AttributeScoreModifier = {
  0: -2,
  1: -2,
  3: -2,
  4: -1,
  5: -1,
  6: -1,
  7: -1,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 2,
  19: 2,
  20: 2,
};
