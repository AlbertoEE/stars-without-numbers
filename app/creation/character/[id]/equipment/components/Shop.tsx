import EquipmentInventory from "@/app/components/inventory/EquipmentInventory"
import { useStoreDefinitionDataState } from "../../state"
import { type ReactElement } from "react"

export default function Shop(): ReactElement  {
    
    const { equipmentDefinition } = useStoreDefinitionDataState()

    return (
        <EquipmentInventory id="shop" equipment={equipmentDefinition}/>
    )
}