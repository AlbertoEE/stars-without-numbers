"use client";

import { AttributeDefinitionRepository } from "@/data/AttributeDefinition/AttributeDefinitionRepository";
import { InMemoryAttributeDefinitionRepository } from "@/data/AttributeDefinition/InMemoryAttributeDefinitionRepository";
import { attributeDefinitionRepository } from "@/injection/injection";
import { AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import useSWR from 'swr'


export default function AttributeDescription(props: {
    attribute: string
}) {
    const { data } = useSWR<AttributeDefinition[]>("testAttributeDefinition", attributeDefinitionRepository.getAttributes)

    if (!data) return;

    const attributeDefinition: AttributeDefinition | undefined = data.find(e => e.name == props.attribute)

    if (!attributeDefinition) return;


    return (
        <CardBody>
            <div>
                <div className="flex flex-row">
                    <Image className="ml-4 mb-4" src={`/imgs/attributes/${attributeDefinition.name}.svg`} alt="me" width="64" height="64" />
                    <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">{attributeDefinition.name}</h1>
                </div>
            </div>
            <hr className="h-1 my-2 bg-gray-200 border-0 rounded" />
            <div>
                <div className="my-6 whitespace-pre-line">
                    {attributeDefinition.description}
                </div>
            </div>
        </CardBody>
    )
}