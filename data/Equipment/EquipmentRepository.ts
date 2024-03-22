import type Equipment from "@/models/equipment/EquipmentModels"

export default interface EquipmentDefinitionRepository {
  getEquipmentDefinition: () => Equipment
}
