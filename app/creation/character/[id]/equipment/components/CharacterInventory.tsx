import EquipmentInventory from "@/app/components/inventory/EquipmentInventory";
import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement } from "react";

export default function CharacterInventory(props: {
    equipment: Equipment
}): ReactElement  {
    return (
        <EquipmentInventory id="inventory" equipment={props.equipment}/>
    )
}