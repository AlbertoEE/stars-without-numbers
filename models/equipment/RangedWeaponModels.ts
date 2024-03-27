import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels"

export default interface RangedWeaponItem extends EquipmentItem {
  itemType: EquipmentItemType.RANGED_WEAPON
  damage: string,
  range: [number, number],
  magazine: number,
  extraReloadAction: boolean,
  burst: boolean,
}
