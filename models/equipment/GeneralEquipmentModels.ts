import { type EquipmentItem, type EquipmentItemType } from "./EquipmentModels"

export interface GeneralEquipmentItem extends EquipmentItem {
  itemType: EquipmentItemType.GENERAL_EQUIPMENT
  subtype?: GeneralEquipmentType
}

export enum GeneralEquipmentType {
  AMMO_AND_POWER = "Ammo and Power",
  COMMUNICATIONS = "Communications",
  COMPUTING_GEAR = "Computing Gear",
  FIELD_EQUIPMENT = "Field Equipment",
  PHARMACEUTICS = "Pharmaceutics",
  TOOLS_AND_MEDICAL = "Tools and Medical",
  OTHER = "Other",
}
