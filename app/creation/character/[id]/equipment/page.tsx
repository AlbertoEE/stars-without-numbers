"use client"
import SplitDesign from "@/app/creation/components/SplitDesign";
import Shop from "./components/Shop";
import CharacterInventory from "./components/CharacterInventory";
import { useState, type ReactElement } from "react";
import Equipment, { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels";

export default function EquipmentPage(): ReactElement {

    const [characterInventory, setCharacterInventory] = useState(new Equipment())

    const onBuy = (item: AnyEquipmentItem):void => {
        characterInventory.add(item)
        setCharacterInventory(characterInventory)
    }

    return (
        <SplitDesign
            leftChild={<CharacterInventory equipment={characterInventory} credits={1000}/>}
            rightChild={<Shop onBuy={onBuy}/>}
        />
    )
}