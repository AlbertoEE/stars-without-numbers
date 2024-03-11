import ShopItem from "../ShopItemModels"
import Armor from "./ArmorModels"

export default interface Equipment {
    armors: Armor[]
    rangedWeapons: EquipmentItem[]
    meleeWeapons: EquipmentItem[]
    generalEquipment: GeneralEquipment[]
}

export interface GeneralEquipment {
    type: GeneralEquipmentType
    items: EquipmentItem[]
}

export interface EquipmentItem extends ShopItem {
    encumbrance: number
    techLevel: number // Some items can have a range of tech levels (General equipment)
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