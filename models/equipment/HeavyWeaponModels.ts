import { type EquipmentItemType } from "./EquipmentModels"
import { type ProjectileWeapon } from "./WeaponModels"

export default interface HeavyWeaponItem extends ProjectileWeapon {
  itemType: EquipmentItemType.HEAVY_WEAPON
  supressFire: boolean
}
