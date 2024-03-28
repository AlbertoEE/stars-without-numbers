import { type TechnologyShopItem } from "../ShopItemModels"
import type ArmorItem from "./ArmorModels"
import type GeneralEquipmentItem from "./GeneralEquipmentModels"
import type HeavyWeaponItem from "./HeavyWeaponModels"
import type MeleeWeaponItem from "./MeleeWeaponModels"
import type RangedWeaponItem from "./RangedWeaponModels"

export default class Equipment implements EquipmentModel {
  armors: ArmorItem[] = []
  rangedWeapons: RangedWeaponItem[] = []
  meleeWeapons: MeleeWeaponItem[] = []
  heavyWeapons: HeavyWeaponItem[] = []
  generalEquipment: GeneralEquipmentItem[] = []

  constructor(equipment?: EquipmentModel) {
    this.armors = equipment?.armors ?? []
    this.rangedWeapons = equipment?.rangedWeapons ?? []
    this.meleeWeapons = equipment?.meleeWeapons ?? []
    this.heavyWeapons = equipment?.heavyWeapons ?? []
    this.generalEquipment = equipment?.generalEquipment ?? []
  }

  add(item: AnyEquipmentItem): void {
    ;(this.get(item.itemType) ?? this.generalEquipment).push(item)
  }

  remove(item: AnyEquipmentItem): void {
    const itemList = this.get(item.itemType)
    const index = itemList?.findIndex(
      (it: AnyEquipmentItem): boolean => it === item,
    )
    if (index != null && index > -1) {
      itemList?.splice(index, 1)
    }
  }

  get(itemType: EquipmentItemType | string): AnyEquipmentItem[] | null {
    switch (itemType) {
      case EquipmentItemType.ARMOR:
      case "armor":
        return this.armors
      case EquipmentItemType.RANGED_WEAPON:
      case "rangedWeapons":
        return this.rangedWeapons
      case EquipmentItemType.MELEE_WEAPON:
      case "meleeWeapons":
        return this.meleeWeapons
      case EquipmentItemType.HEAVY_WEAPON:
      case "heavyWeapons":
        return this.heavyWeapons
      case EquipmentItemType.GENERAL_EQUIPMENT:
      case "generalEquipment":
        return this.generalEquipment
      default:
        return null
    }
  }

  asMap(): Map<string, AnyEquipmentItem> {
    return new Map(Object.entries(this))
  }

  sections(): EquipmentSection[] {
    return EquipmentItemTypeValues.map(
      (itemType): EquipmentSection => ({
        itemType,
        items: this.get(itemType) ?? [],
      }),
    )
  }
}

export interface EquipmentSection {
  itemType: EquipmentItemType
  items: AnyEquipmentItem[]
}

export interface EquipmentModel {
  armors: ArmorItem[]
  rangedWeapons: RangedWeaponItem[]
  meleeWeapons: MeleeWeaponItem[]
  heavyWeapons: HeavyWeaponItem[]
  generalEquipment: GeneralEquipmentItem[]
}

export interface EquipmentItem extends TechnologyShopItem {
  itemType: EquipmentItemType
  encumbrance: number | "∞"
}

export enum EquipmentItemType {
  ARMOR = "ARMOR",
  RANGED_WEAPON = "RANGED_WEAPON",
  MELEE_WEAPON = "MELEE_WEAPON",
  HEAVY_WEAPON = "HEAVY_WEAPON",
  GENERAL_EQUIPMENT = "GENERAL_EQUIPMENT",
}
export const EquipmentItemTypeValues = Object.values(EquipmentItemType)
  .filter((it): boolean => typeof it === "string")
  .map((it): EquipmentItemType => it as EquipmentItemType)

export type AnyEquipmentItem =
  | ArmorItem
  | RangedWeaponItem
  | MeleeWeaponItem
  | HeavyWeaponItem
  | GeneralEquipmentItem
  | EquipmentItem
