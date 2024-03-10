"use client"

import { CardBody, Image } from "@nextui-org/react"
import { useStoreDefinitionDataState } from "../../state"

export default function AttributeDescription(props: { attribute: string }) {
  const { attributeDefinitionList } = useStoreDefinitionDataState()

  const attributeDefinition = attributeDefinitionList.find(
    (attribute) => attribute.name == props.attribute,
  )

  if (!attributeDefinition) return

  return (
    <div className="w-full h-full">
      <CardBody className="p-5">
        <div>
          <div className="flex flex-row">
            <Image
              className="ml-4 mb-4"
              src={`/imgs/attributes/${attributeDefinition.name}.svg`}
              alt="me"
              width="64"
              height="64"
            />
            <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">
              {attributeDefinition.name}
            </h1>
          </div>
        </div>
        <hr className="h-1 my-2 bg-gray-200 border-0 rounded" />
        <div>
          <div className="my-6 whitespace-pre-line">
            {attributeDefinition.description}
          </div>
        </div>
      </CardBody>
    </div>
  )
}
