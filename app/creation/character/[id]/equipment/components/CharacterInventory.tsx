import EquipmentInventory from "@/app/components/inventory/EquipmentInventory";
import { useState, type ReactElement } from "react";

export default function CharacterInventory(): ReactElement  {
    const [characterInventory] = useState({
        armors: [],
        rangedWeapons: [],
        meleeWeapons: [],
        heavyWeapons: [],
        generalEquipment: []
      })
    return (
        <EquipmentInventory id="inventory" equipment={characterInventory}/>
    )
}