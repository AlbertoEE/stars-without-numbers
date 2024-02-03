"use client";

import { Card, CardBody } from "@nextui-org/react";
import { useStoreBasicAttributesState } from "../../state";


export default function AttributeAvailableValues(props: {
    keyValue: string,
    value: string,
    zoneName: string,
    onDragEnd: () => void,
    onClick?: () => void,
}) {
    const { setDragged, setDraggedOver } = useStoreBasicAttributesState();
    const draggedState = { from: props.zoneName, value: props.value, key: props.keyValue }

    return (
        <Card
            className="w-12 h-12"
            key={props.keyValue}
            draggable
            onDragStart={() => setDragged(draggedState)}
            onDragEnter={() => setDraggedOver(draggedState)}
            onDragEnd={props.onDragEnd}
            onPress={props.onClick != null ? props.onClick : () => { }}
            isPressable={props.onClick != null}
        >
            <CardBody className="text-center justify-center">{props.value}</CardBody>
        </Card>
    )
}