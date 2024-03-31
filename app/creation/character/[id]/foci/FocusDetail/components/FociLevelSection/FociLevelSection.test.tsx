import { FocusType } from "@/models/FocusDefinitionModels"
import { beforeEach, describe, expect, it } from "vitest"
import { useStoreFociState, type FocusSelection } from "../../../../state"
import { render, screen } from "@testing-library/react"
import { FociLevelSection } from "./FociLevelSection"

describe("render button", (): void => {
  const initialStoreState = useStoreFociState.getState()
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

  beforeEach((): any => {
    useStoreFociState.setState(initialStoreState, true)
  })
  it("should return buy button because 1 general points is available and there are no chosen foci", (): void => {
    // Arrange
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

    // Act
    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    // Assert
    expect(screen.getByText("Buy")).toBeDefined()
  })
  it("should return buy button for level 2 because 1 combat point is available and there is level 1 correct focus", (): void => {
    // Arrange
    const focusPoints = {
      generalFocusPoints: 0,
      combatFocusPoints: 1,
      nonCombatFocusPoints: 0,
      psychicFocusPoints: 0,
    }
    const chosenFoci: FocusSelection[] = [
      {
        focus: focusedFocus,
        level: 1,
        origin: "foci",
      },
    ]
    const wantedLevel: number = 2
    useStoreFociState.setState({
      focusPoints,
      chosenFoci,
    })

    // Act
    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    // Assert
    expect(screen.getByText("Buy")).toBeDefined()
  })
  it("should return refund button because focus is already chosen", (): void => {
    // Arrange
    const focusPoints = {
      generalFocusPoints: 0,
      combatFocusPoints: 1,
      nonCombatFocusPoints: 0,
      psychicFocusPoints: 0,
    }
    const chosenFoci: FocusSelection[] = [
      {
        focus: focusedFocus,
        level: 1,
        origin: "foci",
      },
    ]
    const wantedLevel: number = 1
    useStoreFociState.setState({
      focusPoints,
      chosenFoci,
    })

    // Act
    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    // Assert
    expect(screen.getByText("Refund")).toBeDefined()
  })
  it("should return blocked button because there are no available points", (): void => {
    // Arrange
    const focusPoints = {
      generalFocusPoints: 0,
      combatFocusPoints: 0,
      nonCombatFocusPoints: 0,
      psychicFocusPoints: 0,
    }
    const chosenFoci: FocusSelection[] = [
      {
        focus: focusedFocus,
        level: 1,
        origin: "foci",
      },
    ]
    const wantedLevel: number = 2
    useStoreFociState.setState({
      focusPoints,
      chosenFoci,
    })

    // Act
    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    // Assert
    expect(screen.getByText("Blocked")).toBeDefined()
  })
  it("should return blocked button because wanted focus is level 2 and no level 1 is already chosen", (): void => {
    // Arrange
    const focusPoints = {
      generalFocusPoints: 1,
      combatFocusPoints: 1,
      nonCombatFocusPoints: 0,
      psychicFocusPoints: 0,
    }
    const chosenFoci: FocusSelection[] = []
    const wantedLevel: number = 2
    useStoreFociState.setState({
      focusPoints,
      chosenFoci,
    })

    // Act
    render(<FociLevelSection focusedFocus={focusedFocus} level={wantedLevel} />)

    // Assert
    expect(screen.getByText("Blocked")).toBeDefined()
  })
})
