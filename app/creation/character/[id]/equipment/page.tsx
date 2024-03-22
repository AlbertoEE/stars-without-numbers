"use client"
import SplitDesign from "@/app/creation/components/SplitDesign"
import Shop from "./components/Shop"
import CharacterInventory from "./components/CharacterInventory"
import { type ReactElement } from "react"
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels"
import { useStoreEquipment } from "../state"

export default function EquipmentPage(): ReactElement {
  const { equipment, setEquipment, credits, setCredits } = useStoreEquipment()

  const onBuy = (item: AnyEquipmentItem): void => {
    if (item.cost <= credits) {
      equipment.add(item)
      setEquipment(equipment)
      setCredits(credits - item.cost)
    }
  }

  const onRefund = (item: AnyEquipmentItem): void => {
    equipment.remove(item)
    setEquipment(equipment)
    setCredits(credits + item.cost)
  }

  return (
    <SplitDesign
      leftChild={
        <CharacterInventory
          equipment={equipment}
          credits={credits}
          onRefund={onRefund}
        />
      }
      rightChild={<Shop budget={credits} onBuy={onBuy} />}
    />
  )
}
