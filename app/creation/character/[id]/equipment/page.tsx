"use client"
import SplitDesign from "@/app/creation/components/SplitDesign";
import Shop from "./components/Shop";
import CharacterInventory from "./components/CharacterInventory";

export default function EquipmentPage() {
    return (
        <SplitDesign
            leftChild={<CharacterInventory/>}
            rightChild={<Shop/>}
        />
    )
}