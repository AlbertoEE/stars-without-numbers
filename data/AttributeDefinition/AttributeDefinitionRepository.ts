import { type AttributeDefinition } from "@/models/AttributeDefinitionModels";

export interface AttributeDefinitionRepository {
  getAttributes: () => AttributeDefinition[];
}
