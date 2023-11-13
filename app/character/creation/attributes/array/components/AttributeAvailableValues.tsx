"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useStore } from "../page";


export default function AttributeAvailableValues(props: {
    keyValue: string,
    value: string,
    onDragEnd: () => void,
    onClick?: () => void,
}) {
    const { setDragged, setDraggedOver } = useStore();
    const draggedState = { from: "initial", value: props.value, key: props.keyValue }

    return (
        <Card
            className="w-16 h-16"
            key={props.keyValue}
            draggable
            onDragStart={() => setDragged(draggedState)}
            onDragEnter={() => setDraggedOver(draggedState)}
            onDragEnd={props.onDragEnd}
            onPress={props.onClick != null ? props.onClick : () => {}}
            isPressable={props.onClick != null}
        >
            <CardBody className="text-center">{props.value}</CardBody>
        </Card>
    )
}