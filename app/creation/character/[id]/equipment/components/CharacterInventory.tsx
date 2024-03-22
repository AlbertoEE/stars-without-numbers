import EquipmentInventory from "@/app/components/inventory/EquipmentInventory";
import Equipment from "@/models/equipment/EquipmentModels";
import { useState, type ReactElement } from "react";

export default function CharacterInventory(): ReactElement  {
    const [characterInventory] = useState(new Equipment())
    return (
        <EquipmentInventory id="inventory" equipment={characterInventory}/>
    )
}