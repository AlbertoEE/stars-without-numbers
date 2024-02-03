"use client";

import { AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository";
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository";
import SplitDesign from "../../../components/SplitDesign";
import AttributeTabs from "./components/AttributeTabs";
import AttributeDescription from "./components/Description";
import { useStoreBasicAttributes } from "./state";

export default function Page({ params }: { params: { id: string } }) {
  const { detail } = useStoreBasicAttributes();
  const attributeDefinitionRepository: AttributeDefinitionRepository = new InMemoryAttributeDefinitionRepository();
  const attributes = attributeDefinitionRepository.getAttributes();
  const attributeDescription: string | undefined = attributes.find((attribute) => attribute.name == detail)?.description;

  return (
      <SplitDesign
        leftChild={<AttributeTabs characterId={params.id} />}
        rightChild={attributeDescription && (<AttributeDescription attribute={detail} />)}
      />
  );
}
