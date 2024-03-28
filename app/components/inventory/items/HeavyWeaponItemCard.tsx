import { type ReactElement } from "react"
import EquipmentItemCard from "./EquipmentItemCard"
import { Chip, Tooltip } from "@nextui-org/react"
import { ITEM_ICON_DEFAULT_PROPS } from "./ItemCommons"
import HeavyWeaponIcon from "@/public/imgs/equipment/heavy_weapon.svg"
import MagazineIcon from "@/public/imgs/equipment/magazine.svg"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"
import type HeavyWeaponItem from "@/models/equipment/HeavyWeaponModels"
import DamageChip from "./stats/DamageChip"

export default function HeavyWeaponItemCard(props: {
  item: HeavyWeaponItem
  onPress?: (item: AnyEquipmentItem) => void
}): ReactElement {
  const icon = (): ReactElement => {
    return <HeavyWeaponIcon {...ITEM_ICON_DEFAULT_PROPS}/>
  }

  return (
    <EquipmentItemCard {...props} icon={icon()}>
      <div className="flex gap-2">
        <DamageChip {...props.item} />
        <Chip variant="bordered">
          <div className="flex">
            <MagazineIcon height="16" width="16" className="fill-current mr-1"/>
            {`${props.item.magazine}`}
          </div>
        </Chip>
        {props.item.supressFire && 
          <Tooltip 
            className="w-60 bg-zinc-900 text-zinc-100"
            closeDelay={100}
            content="Can be fired to supress. Double the usual ammunition is fired in one round, and every target in front of the weapon that is not under hard cover is automatically hit for half normal damage. A successful Evasion saving throw eliminates this damage.">
            <Chip variant="bordered">
              Supressive fire
            </Chip>
          </Tooltip>
        }
        {(props.item.attribute != null) && 
          <Chip color="primary">
            {props.item.attribute}
          </Chip>
        }
      </div>
    </EquipmentItemCard>
  )
}
