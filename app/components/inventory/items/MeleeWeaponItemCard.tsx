import { type ReactElement } from "react"
import EquipmentItemCard from "./EquipmentItemCard"
import { Chip } from "@nextui-org/react"
import { ITEM_ICON_DEFAULT_PROPS } from "./ItemCommons"
import MeleeWeaponIcon from "@/public/imgs/equipment/melee_weapon.svg"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"
import type MeleeWeaponItem from "@/models/equipment/MeleeWeaponModels"
import DamageChip from "./stats/DamageChip"

export default function MeleeWeaponItemCard(props: {
  item: MeleeWeaponItem
  onPress?: (item: AnyEquipmentItem) => void
}): ReactElement {
  const icon = (): ReactElement => {
    return <MeleeWeaponIcon {...ITEM_ICON_DEFAULT_PROPS} />
  }

  return (
    <EquipmentItemCard {...props} icon={icon()}>
      <div className="flex gap-2">
        <DamageChip {...props.item} />
        {props.item.attribute != null && (
          <Chip color="primary">{props.item.attribute}</Chip>
        )}
      </div>
    </EquipmentItemCard>
  )
}
