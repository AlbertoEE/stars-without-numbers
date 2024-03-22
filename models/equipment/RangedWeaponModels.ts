import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels";

export default interface RangedWeapon extends EquipmentItem {
    itemType: EquipmentItemType.RANGED_WEAPON
}