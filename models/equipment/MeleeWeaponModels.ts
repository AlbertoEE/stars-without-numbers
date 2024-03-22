import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels";

export default interface MeleeWeapon extends EquipmentItem {
    itemType: EquipmentItemType.MELEE_WEAPON
}