import { type ReactElement } from "react"
import { type PressEvent } from "@react-types/shared"
import type ArmorItem from "@/models/equipment/ArmorModels"
import EquipmentItemCard from "./EquipmentItemCard"
import PrimitiveArmorIcon from "@/public/imgs/equipment/primitive_armor.svg"
import StreetArmorIcon from "@/public/imgs/equipment/street_armor.svg"
import CombatArmorIcon from "@/public/imgs/equipment/combat_armor.svg"
import PoweredArmorIcon from "@/public/imgs/equipment/powered_armor.svg"
import ShieldIcon from "@/public/imgs/equipment/shield.svg"
import { Chip } from "@nextui-org/react"
import { ArmorType } from "@/models/equipment/ArmorModels"
import { ITEM_ICON_DEFAULT_PROPS } from "./ItemCommons"


export default function ArmorItemCard(props: {
    item: ArmorItem,
    onPress?: (e: PressEvent) => void,
}): ReactElement {
    const armorIcon = (): ReactElement => {
        if (props.item.shield) {
            return <ShieldIcon {...ITEM_ICON_DEFAULT_PROPS}/>
        } else {
            switch(props.item.armorType) {
                case ArmorType.PRIMITIVE_ARMOR: 
                    return <PrimitiveArmorIcon {...ITEM_ICON_DEFAULT_PROPS}/>
                case ArmorType.STREET_ARMOR: 
                    return <StreetArmorIcon {...ITEM_ICON_DEFAULT_PROPS}/>
                case ArmorType.COMBAT_ARMOR: 
                    return <CombatArmorIcon {...ITEM_ICON_DEFAULT_PROPS}/>
                case ArmorType.POWERED_ARMOR: 
                    return <PoweredArmorIcon {...ITEM_ICON_DEFAULT_PROPS}/>
            }
        }
    }

    return (
        <EquipmentItemCard  {...props} subtitle={props.item.armorType} icon={armorIcon()}>
            <div className="flex gap-2">
                <Chip color="primary" className="text-blue-50 bg-blue-900">
                    {props.item.armorClass}{props.item.shield ? "/+1":""} AC
                </Chip>
                {props.item.shield &&
                    <Chip variant="bordered" startContent={<ShieldIcon className="fill-current" height="16" width="16"/>}>
                        Block first shock damage
                    </Chip>
                }
                
            </div>
        </EquipmentItemCard>
    )
}