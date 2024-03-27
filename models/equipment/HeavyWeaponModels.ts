import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels"

export default interface HeavyWeaponItem extends EquipmentItem {
  itemType: EquipmentItemType.HEAVY_WEAPON
}
