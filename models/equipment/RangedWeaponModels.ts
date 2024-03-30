import { type EquipmentItemType } from "./EquipmentModels"
import { type ProjectileWeapon } from "./WeaponModels"

export default interface RangedWeaponItem extends ProjectileWeapon {
  itemType: EquipmentItemType.RANGED_WEAPON
  extraReloadAction: boolean
  burst: boolean
}
