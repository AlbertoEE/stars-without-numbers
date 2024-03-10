"use client"

import SplitDesign from "../../../components/SplitDesign"
import GameClassSelection from "./components/selection/GameClassSelection"
import GameClassDescription from "./components/selection/GameClassDescription"
import { useStoreGameClassState } from "../state"

export default function Page({ params }: { params: { id: string } }) {
  const { focusedGameClass } = useStoreGameClassState()

  const gameClassesNames = ["Psyquic", "Warrior", "Expert", "Adventurer"]

  return (
    <SplitDesign
      leftChild={<GameClassSelection />}
      rightChild={focusedGameClass && <GameClassDescription />}
    />
  )
}
