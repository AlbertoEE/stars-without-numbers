import { FocusType } from "@/models/FocusDefinitionModels"
import { describe, expect, it } from "vitest"
import { useStoreFociState, type FocusSelection } from "../../../state"
import { render, screen } from "@testing-library/react"
import { FociLevelSection } from "./FociLevelSection"

describe("render button", (): void => {
  const initialStoreState = useStoreFociState.getState()

  beforeEach((): any => {
    useStoreFociState.setState(initialStoreState, true)
  })
  it("should return buy button, because 1 general points are available and no chosen foci", (): void => {
    const focusedFocus = {
      name: "assasin",
      description: "",
      levels: [
        {
          level: 0,
          description: "",
          descriptionSchema: ["", ""],
          skillBenefitOptionList: ["survive"],
        },
        {
          level: 1,
          description: "",
          descriptionSchema: ["", ""],
        },
      ],
      type: FocusType.COMBAT_FOCUS,
    }
    const focusPoints = {
      generalFocusPoints: 1,
      combatFocusPoints: 0,
      nonCombatFocusPoints: 0,
      psychicFocusPoints: 0,
    }
    const chosenFoci: FocusSelection[] = []
    const wantedLevel: number = 1

    useStoreFociState.setState({
      focusPoints,
      chosenFoci,
    })

    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    expect(screen.getByText("Buy")).toBeDefined()
  })
  // it("2", (): void => {
  //   const focusDefinition = {
  //     name: "assasin",
  //     description: "",
  //     levels: [
  //       {
  //         level: 0,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //         skillBenefitOptionList: ["survive"],
  //       },
  //       {
  //         level: 1,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //       },
  //     ],
  //     type: FocusType.COMBAT_FOCUS,
  //   }
  //   const focusPoints = {
  //     generalFocusPoints: 0,
  //     combatFocusPoints: 1,
  //     nonCombatFocusPoints: 0,
  //     psychicFocusPoints: 0,
  //   }
  //   const chosenFoci: FocusSelection[] = [
  //     {
  //       focus: focusDefinition,
  //       level: 1,
  //       origin: "foci",
  //     },
  //   ]
  //   const wantedLevel: number = 2

  //   const result = renderButton(
  //     chosenFoci,
  //     wantedLevel,
  //     focusDefinition,
  //     focusPoints,
  //   )

  //   expect(result).toBe("buy")
  // })
  // it("3", (): void => {
  //   const focusDefinition = {
  //     name: "assasin",
  //     description: "",
  //     levels: [
  //       {
  //         level: 0,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //         skillBenefitOptionList: ["survive"],
  //       },
  //       {
  //         level: 1,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //       },
  //     ],
  //     type: FocusType.COMBAT_FOCUS,
  //   }
  //   const focusPoints = {
  //     generalFocusPoints: 0,
  //     combatFocusPoints: 1,
  //     nonCombatFocusPoints: 0,
  //     psychicFocusPoints: 0,
  //   }
  //   const chosenFoci: FocusSelection[] = [
  //     {
  //       focus: focusDefinition,
  //       level: 1,
  //       origin: "foci",
  //     },
  //   ]
  //   const wantedLevel: number = 1

  //   const result = renderButton(
  //     chosenFoci,
  //     wantedLevel,
  //     focusDefinition,
  //     focusPoints,
  //   )

  //   expect(result).toBe("refund")
  // })
  // it("4", (): void => {
  //   const focusDefinition = {
  //     name: "assasin",
  //     description: "",
  //     levels: [
  //       {
  //         level: 0,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //         skillBenefitOptionList: ["survive"],
  //       },
  //       {
  //         level: 1,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //       },
  //     ],
  //     type: FocusType.COMBAT_FOCUS,
  //   }
  //   const focusPoints = {
  //     generalFocusPoints: 0,
  //     combatFocusPoints: 0,
  //     nonCombatFocusPoints: 0,
  //     psychicFocusPoints: 0,
  //   }
  //   const chosenFoci: FocusSelection[] = [
  //     {
  //       focus: focusDefinition,
  //       level: 1,
  //       origin: "foci",
  //     },
  //   ]
  //   const wantedLevel: number = 2

  //   const result = renderButton(
  //     chosenFoci,
  //     wantedLevel,
  //     focusDefinition,
  //     focusPoints,
  //   )

  //   expect(result).toBe("blocked")
  // })
  // it("5", (): void => {
  //   const focusDefinition = {
  //     name: "assasin",
  //     description: "",
  //     levels: [
  //       {
  //         level: 0,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //         skillBenefitOptionList: ["survive"],
  //       },
  //       {
  //         level: 1,
  //         description: "",
  //         descriptionSchema: ["", ""],
  //       },
  //     ],
  //     type: FocusType.COMBAT_FOCUS,
  //   }
  //   const focusPoints = {
  //     generalFocusPoints: 1,
  //     combatFocusPoints: 1,
  //     nonCombatFocusPoints: 0,
  //     psychicFocusPoints: 0,
  //   }
  //   const chosenFoci: FocusSelection[] = []
  //   const wantedLevel: number = 2

  //   const result = renderButton(
  //     chosenFoci,
  //     wantedLevel,
  //     focusDefinition,
  //     focusPoints,
  //   )

  //   expect(result).toBe("blocked")
  // })
})
