"use client"
import SplitDesign from "@/app/creation/components/SplitDesign";
import Shop from "./components/Shop";
import CharacterInventory from "./components/CharacterInventory";
import { type ReactElement } from "react";

export default function EquipmentPage(): ReactElement {
    return (
        <SplitDesign
            leftChild={<CharacterInventory/>}
            rightChild={<Shop/>}
        />
    )
}