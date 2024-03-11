import { EquipmentItem } from "./EquipmentModels"

export default interface Armor extends EquipmentItem {
    armorType: ArmorType
    armorClass: number
    shield: boolean
}

export enum ArmorType {
    PRIMITIVE_ARMOR = "Primitive Armor",
    STREET_ARMOR = "Street Armor",
    COMBAT_ARMOR = "Combat Armor",
    POWERED_ARMOR = "Powered Armor",
}