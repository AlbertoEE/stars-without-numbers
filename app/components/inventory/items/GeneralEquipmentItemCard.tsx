import { type ReactElement } from "react"
import EquipmentItemCard from "./EquipmentItemCard"
import { Chip } from "@nextui-org/react"
import { ITEM_ICON_DEFAULT_PROPS } from "./ItemCommons"
import GeneralEquipmentIcon from "@/public/imgs/equipment/general_equipment.svg"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"
import type GeneralEquipmentItem from "@/models/equipment/GeneralEquipmentModels"

export default function GeneralEquipmentItemCard(props: {
  item: GeneralEquipmentItem
  onPress?: (item: AnyEquipmentItem) => void
}): ReactElement {
  const icon = (): ReactElement => {
    return <GeneralEquipmentIcon {...ITEM_ICON_DEFAULT_PROPS} />
  }

  return (
    <EquipmentItemCard {...props} icon={icon()}>
      <div className="flex gap-2">
        <Chip variant="bordered">{props.item.bundleable && "Bundleable"}</Chip>
      </div>
    </EquipmentItemCard>
  )
}
