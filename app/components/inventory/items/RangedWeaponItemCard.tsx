import { type ReactElement } from "react"
import EquipmentItemCard from "./EquipmentItemCard"
import { Chip, Tooltip } from "@nextui-org/react"
import { ITEM_ICON_DEFAULT_PROPS } from "./ItemCommons"
import RangedWeaponIcon from "@/public/imgs/equipment/ranged_weapon.svg"
import MagazineIcon from "@/public/imgs/equipment/magazine.svg"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"
import type RangedWeaponItem from "@/models/equipment/RangedWeaponModels"
import DamageChip from "./stats/DamageChip"

export default function RangedWeaponItemCard(props: {
  item: RangedWeaponItem
  onPress?: (item: AnyEquipmentItem) => void
}): ReactElement {
  const icon = (): ReactElement => {
    return <RangedWeaponIcon {...ITEM_ICON_DEFAULT_PROPS}/>
  }

  return (
    <EquipmentItemCard {...props} icon={icon()}>
      <div className="flex gap-2">
        <DamageChip {...props.item} />
        <Tooltip 
          isDisabled={!props.item.extraReloadAction} 
          closeDelay={100}
          color="warning" 
          content="This weapon requires two Main Actions to reload instead of one">
          <Chip variant="bordered">
            <div className="flex">
              <MagazineIcon height="16" width="16" className="fill-current mr-1"/>
              {`${props.item.magazine}`}
              {props.item.extraReloadAction && 
                " *2xMA"
              }
            </div>
          </Chip>
        </Tooltip>
        {(props.item.attribute != null) && 
          <Chip color="primary">
            {props.item.attribute}
          </Chip>
        }
      </div>
    </EquipmentItemCard>
  )
}
