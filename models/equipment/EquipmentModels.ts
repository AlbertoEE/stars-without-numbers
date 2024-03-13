import { type TechnologyShopItem } from "../ShopItemModels"
import type ArmorItem from "./ArmorModels"

export default interface Equipment {
    armors: ArmorItem[]
    rangedWeapons: EquipmentItem[]
    meleeWeapons: EquipmentItem[]
    generalEquipment: GeneralEquipment[]
}

export interface GeneralEquipment {
    type: GeneralEquipmentType
    items: EquipmentItem[]
}

export interface EquipmentItem extends TechnologyShopItem {
    encumbrance: number
}

export enum GeneralEquipmentType {
    AMMO_AND_POWER = "Ammo and Power",
    COMMUNICATIONS = "Communications",
    COMPUTING_GEAR = "Computing Gear",
    FIELD_EQUIPMENT = "Field Equipment",
    PHARMACEUTICS = "Pharmaceutics",
    TOOLS_AND_MEDICAL = "Tools and Medical",
    OTHER = "Other",
}