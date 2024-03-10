import { type GameClassDefinition } from "@/models/GameClassDefinitionModels"
import { useStoreDefinitionDataState } from "../../../state"
import GameClassOption from "./GameClassOption"

export default function GameClassSelection() {
  const { gameClassDefinitionList } = useStoreDefinitionDataState()

  return (
    <div className="flex flex-col h-full w-full">
      {gameClassDefinitionList.map((e: GameClassDefinition) => (
        <GameClassOption gameClassDefinition={e} />
      ))}
    </div>
  )
}
