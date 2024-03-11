"use client"

import SplitDesign from "../../../components/SplitDesign"
import GameClassSelection from "./components/selection/GameClassSelection"
import GameClassDescription from "./components/selection/GameClassDescription"
import { useStoreGameClassState } from "../state"
import { type ReactElement } from "react"

export default function Page({ params }: { params: { id: string } }): ReactElement {
  const { focusedGameClass } = useStoreGameClassState()

  const gameClassesNames = ["Psyquic", "Warrior", "Expert", "Adventurer"]

  return (
    <SplitDesign
      leftChild={<GameClassSelection />}
      rightChild={focusedGameClass && <GameClassDescription />}
    />
  )
}
