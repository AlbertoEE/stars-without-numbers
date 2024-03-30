import { Chip } from "@nextui-org/react"
import { type ReactElement } from "react"

export default function DamageChip(props: {
  damage: string
  range?: [number, number]
}): ReactElement {
  return (
    <Chip variant="flat" color="danger">
      <span>{props.damage}</span>
      {props.range != null && ` - ${props.range[0]}/${props.range[1]}m`}
    </Chip>
  )
}
