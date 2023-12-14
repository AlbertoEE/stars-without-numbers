"use client";

import AttributeDescription from "./components/Description";
import SplitDesign from "../../../components/SplitDesign";
import AttributeTabs from "./components/AttributeTabs";
import { useStore } from "./state";
import { AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository";
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository";

export default function Page({ params }: { params: { id: string } }) {
  const { detail } = useStore();
  const attributeDefinitionRepository: AttributeDefinitionRepository = new InMemoryAttributeDefinitionRepository();
  const attributes = attributeDefinitionRepository.getAttributes();
  const attributeDescription: string | undefined = attributes.find((attribute) => attribute.name == detail)?.description;

  return (
    <SplitDesign
      leftChild={<AttributeTabs />}
      rightChild={ attributeDescription && ( <AttributeDescription attribute={detail} /> ) }
    />
  );
}
