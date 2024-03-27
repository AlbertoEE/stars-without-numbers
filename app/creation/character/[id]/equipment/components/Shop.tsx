import EquipmentInventory from "@/app/components/inventory/EquipmentInventory"
import { useStoreDefinitionDataState } from "../../state"
import { type ReactElement } from "react"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"

export default function Shop(props: {
  budget: number
  onBuy: (item: AnyEquipmentItem) => void
}): ReactElement {
  const { equipmentDefinition } = useStoreDefinitionDataState()

  return (
    <EquipmentInventory
      id="shop"
      equipment={equipmentDefinition}
      isShop
      budget={props.budget}
      onPress={props.onBuy}
    />
  )
}
