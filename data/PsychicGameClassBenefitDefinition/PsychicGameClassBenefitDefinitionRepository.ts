import { type PsychicClassBenefitDefinition } from "@/models/PsychicClassBenefitDefinitionModels"

export interface PsychicGameClassBenefitDefinitionRepository {
  getPsychicClassBenefits: () => PsychicClassBenefitDefinition[]
}
