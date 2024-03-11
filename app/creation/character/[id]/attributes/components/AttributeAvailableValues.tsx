"use client"

import { Card, CardBody } from "@nextui-org/react"
import { useStoreBasicAttributesState } from "../../state"
import { type ReactElement } from "react"

export default function AttributeAvailableValues(props: {
  keyValue: string
  value: string
  zoneName: string
  onDragEnd: () => void
  onClick?: () => void
}): ReactElement {
  const { setDragged, setDraggedOver } = useStoreBasicAttributesState()
  const draggedState = {
    from: props.zoneName,
    value: props.value,
    key: props.keyValue,
  }

  return (
    <Card
      className="w-12 h-12"
      key={props.keyValue}
      draggable
      onDragStart={(): void => {
        setDragged(draggedState)
      }}
      onDragEnter={(): void => {
        setDraggedOver(draggedState)
      }}
      onDragEnd={props.onDragEnd}
      onPress={props.onClick != null ? props.onClick : (): void => {}}
      isPressable={props.onClick != null}
    >
      <CardBody className="text-center justify-center">{props.value}</CardBody>
    </Card>
  )
}
