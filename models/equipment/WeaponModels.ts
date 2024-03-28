import { type EquipmentItem } from "./EquipmentModels"

export interface WeaponItem extends EquipmentItem {
  damage: string,
  attribute?: ["dexterity" | "strength"]
}

export interface ProjectileWeapon extends WeaponItem {
    range: [number, number],
    magazine: number | "N/A",
}