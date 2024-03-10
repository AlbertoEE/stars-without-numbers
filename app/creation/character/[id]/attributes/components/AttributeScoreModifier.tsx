"use client";

import { type AttributeScoreModifierRepository } from "@/data/AttributeScoreModififer/AttributeScoreModifierRepository";
import { InMemoryAttributeScoreModifierRepository } from "@/data/AttributeScoreModififer/InMemoryAttributeScoreModifierRepository";
import { type AttributeScoreModifier } from "@/models/AttributeScoreModifierModels";
import { Card, CardBody, Image } from "@nextui-org/react";
import useSWR from "swr";
import { useStoreBasicAttributesState } from "../../state";

export default function AttributeScoreModifierRow(props: {
    score: string,
    statName: string,
    zoneName: string,
    onDragEnd: () => void,
}) {
    const { setDragged, setDraggedOver, setDetail } = useStoreBasicAttributesState();
    const draggedState = { from: props.zoneName, value: props.score, key: props.statName }


    const attributeScoreModifierRepository: AttributeScoreModifierRepository = new InMemoryAttributeScoreModifierRepository()
    const { data } = useSWR<AttributeScoreModifier>("testAttributeScoreModifier", attributeScoreModifierRepository.getAttributeScoreModifiers)

    if (!data) return;

    const modifier = data[parseInt(props.score)]

    const color = () => {
        switch (true) {
            case (modifier == -2):
                return "bg-red-950"
            case (modifier == -1):
                return "bg-orange-950"
            case (modifier == 0):
                return "bg-cyan-800"
            case (modifier == 1):
                return "bg-green-800"
            case (modifier == 2):
                return "bg-yellow-400"
        }
    }

    return (
        <Card
            onMouseOver={() => { setDetail(props.statName); }}
            className="flex-1"
            onDragEnter={() => { setDraggedOver(draggedState); }}
        >
            <CardBody className="flex flex-row items-center justify-center">
                <table className="flex-1">
                    <tbody>
                        <tr>
                            <td className="w-1/2">
                                <div className="flex flex-row items-center">
                                    <Image
                                        loading="eager"
                                        className="mx-4 my-0 flex-1"
                                        src={`/imgs/attributes/${props.statName}.svg`}
                                        alt="me"
                                        width="34"
                                        height="34"
                                    />
                                    <div>{props.statName.toUpperCase()}</div>
                                </div>
                            </td>
                            <td className="w-1/2">
                                <div className="flex flex-row justify-around">
                                    <Card
                                        className="w-12 h-12"
                                        draggable
                                        onDragStart={() => { setDragged(draggedState); }}
                                        onDragEnter={() => { setDraggedOver(draggedState); }}
                                        onDragEnd={props.onDragEnd}
                                    >
                                        <CardBody className="flex items-center justify-center text-center px-3 py-1">
                                            {props.score}
                                        </CardBody>
                                    </Card>
                                </div>
                            </td>
                            <td>
                                <div className="mr-6">MOD</div>
                            </td>
                            <td>
                                <Card className={`w-12 h-12 ${color()}`}>
                                    <CardBody className="flex items-center justify-center text-center px-3 py-1">
                                        {modifier}
                                    </CardBody>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}