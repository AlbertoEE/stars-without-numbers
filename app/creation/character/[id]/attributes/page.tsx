"use client"

import { type AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository"
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository"
import SplitDesign from "../../../components/SplitDesign"
import { useStoreBasicAttributesState } from "../state"
import AttributeTabs from "./components/AttributeTabs"
import AttributeDescription from "./components/Description"
import { type ReactElement } from "react"

export default function Page({ params }: { params: { id: string } }): ReactElement {
  const { detail } = useStoreBasicAttributesState()
  const attributeDefinitionRepository: AttributeDefinitionRepository =
    new InMemoryAttributeDefinitionRepository()
  const attributes = attributeDefinitionRepository.getAttributes()
  const attributeDescription: string | undefined = attributes.find(
    (attribute): boolean => attribute.name === detail,
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
