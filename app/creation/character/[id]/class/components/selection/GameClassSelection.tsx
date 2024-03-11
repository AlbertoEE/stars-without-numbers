import { type GameClassDefinition } from "@/models/GameClassDefinitionModels"
import { useStoreDefinitionDataState } from "../../../state"
import GameClassOption from "./GameClassOption"
import { type ReactElement } from "react"

export default function GameClassSelection(): ReactElement {
  const { gameClassDefinitionList } = useStoreDefinitionDataState()

  return (
    <div className="flex flex-col h-full w-full">
      {gameClassDefinitionList.map(
        (e: GameClassDefinition): ReactElement => (
          <GameClassOption gameClassDefinition={e} />
        ),
      )}
    </div>
  )
}
