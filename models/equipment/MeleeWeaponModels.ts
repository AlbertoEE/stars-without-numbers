import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels"

export default interface MeleeWeaponItem extends EquipmentItem {
  itemType: EquipmentItemType.MELEE_WEAPON
}
