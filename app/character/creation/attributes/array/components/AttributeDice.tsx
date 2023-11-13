import { Card, CardBody } from "@nextui-org/card";

export default function AttributeDice(props: {
    key_value: string,
    value: string,
    onDragStart: () => void,
    onDragEnter: () => void,
    onDragEnd: () => void,
    onClick: () => void,
}) {
    return (
        <Card
            className="w-16 h-16"
            key={props.key_value}
            draggable
            onDragStart={() => props.onDragStart()}
            onDragEnter={() => props.onDragEnter()}
            onDragEnd={props.onDragEnd}
            onPress={props.onClick}
            isPressable
        >
            <CardBody className="text-center">{props.value}</CardBody>
        </Card>
    )
}