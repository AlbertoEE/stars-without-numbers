import { type GameClassDefinition } from "@/models/GameClassDefinitionModels"

export interface GameClassDefinitionRepository {
  getGameClassDefinitionList: () => GameClassDefinition[]
}
