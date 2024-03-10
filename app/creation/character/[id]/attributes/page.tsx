"use client"

import { type AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository"
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository"
import SplitDesign from "../../../components/SplitDesign"
import AttributeTabs from "./components/AttributeTabs"
import AttributeDescription from "./components/Description"
import { useStoreBasicAttributesState } from "../state"

export default function Page({ params }: { params: { id: string } }) {
  const { detail } = useStoreBasicAttributesState()
  const attributeDefinitionRepository: AttributeDefinitionRepository =
    new InMemoryAttributeDefinitionRepository()
  const attributes = attributeDefinitionRepository.getAttributes()
  const attributeDescription: string | undefined = attributes.find(
    (attribute) => attribute.name == detail,
  )?.description

  return (
    <SplitDesign
      leftChild={<AttributeTabs characterId={params.id} />}
      rightChild={
        attributeDescription && <AttributeDescription attribute={detail} />
      }
    />
  )
}
