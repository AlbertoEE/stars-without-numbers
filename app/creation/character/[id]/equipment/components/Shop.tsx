import { useStoreDefinitionDataState } from "../../state"
import { type ReactElement } from "react"
import Inventory from "../../../../../components/inventory/Inventory"

export default function Shop(): ReactElement  {
    
    const { equipmentDefinition } = useStoreDefinitionDataState()

    return (
        <Inventory equipment={equipmentDefinition}/>
    )
}