import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels"

export default interface ArmorItem extends EquipmentItem {
  itemType: EquipmentItemType.ARMOR
  subtype: ArmorType
  armorClass: number
  shield: boolean
}

export enum ArmorType {
  PRIMITIVE_ARMOR = "Primitive Armor",
  STREET_ARMOR = "Street Armor",
  COMBAT_ARMOR = "Combat Armor",
  POWERED_ARMOR = "Powered Armor",
}
