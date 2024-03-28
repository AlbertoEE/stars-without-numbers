import { Chip } from "@nextui-org/react"
import WeightIcon from "@/public/imgs/equipment/weight.svg"
import { type ReactElement } from "react"
import TechItemCard from "./TechItemCard"
import { type ItemProps } from "./ItemCommons"

export default function EquipmentItemCard(props: ItemProps): ReactElement {
  return (
    <TechItemCard
      {...props}
      chips={[
        ...(props.chips ?? []),
        <Chip
          variant="light"
          endContent={
            <WeightIcon className="fill-current mx-1" height="14" width="14" />
          }
        >
          {/* "∞" */}
          <span className={props.item.encumbrance === "∞" ? "text-xl" : ""}>{props.item.encumbrance}</span>
        </Chip>,
      ]}
    />
  )
}
