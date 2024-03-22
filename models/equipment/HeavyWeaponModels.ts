import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels";

export default interface HeavyWeapon extends EquipmentItem {
    itemType: EquipmentItemType.HEAVY_WEAPON
}