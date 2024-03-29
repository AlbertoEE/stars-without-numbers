import { type EquipmentItemType } from "./EquipmentModels"
import { type WeaponItem } from "./WeaponModels"

export default interface MeleeWeaponItem extends WeaponItem {
  itemType: EquipmentItemType.MELEE_WEAPON
  subtype: MeleeWeaponType
  shock?: MeleeWeaponShock
}

export interface MeleeWeaponShock {
  damage: number,
  armorClass: number
}

export enum MeleeWeaponType {
  SMALL_WEAPON = "Small Weapon",
  MEDIUM_WEAPON = "Medium Weapon",
  LARGE_WEAPON = "Large Weapon",
}
