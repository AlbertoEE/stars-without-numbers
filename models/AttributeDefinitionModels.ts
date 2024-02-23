export interface AttributeDefinition {
  name: string;
  description: string;
  type: AttributeDefinitionType[];
}

export enum AttributeDefinitionType {
  mental,
  physical,
  any,
}
