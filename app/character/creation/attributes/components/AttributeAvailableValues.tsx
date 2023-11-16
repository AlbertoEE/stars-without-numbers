"use client";

import { Card, CardBody } from "@nextui-org/react";
import { useStore } from "../state";


export default function AttributeAvailableValues(props: {
    keyValue: string,
    value: string,
    zoneName: string,
    onDragEnd: () => void,
    onClick?: () => void,
}) {
    const { setDragged, setDraggedOver } = useStore();
    const draggedState = { from: props.zoneName, value: props.value, key: props.keyValue }

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