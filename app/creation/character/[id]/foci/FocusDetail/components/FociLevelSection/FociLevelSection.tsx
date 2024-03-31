import SwnCard from "@/app/components/swn/SwnCard"
import { FocusType, type FocusDefinition } from "@/models/FocusDefinitionModels"
import { CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import { type ReactElement } from "react"
import { useStoreFociState } from "../../../../state"
import { FocusButton } from "./components/BuyButton"

export function FociLevelSection({
  focusedFocus,
  level,
  className,
}: {
  focusedFocus: FocusDefinition
  level: number
  className?: string
}): ReactElement {
  const { chosenFoci, focusPoints } = useStoreFociState()

  function renderButton(): ReactElement | undefined {
    const isFocusChosen = chosenFoci.some(
      (e): boolean => e.focus === focusedFocus && e.level === level,
    )
    if (isFocusChosen)
      return (
        <FocusButton
          type={"refund"}
          level={level}
          focusedFocus={focusedFocus}
        />
      )

    const canBuyLevelOne = level === 1 && availableFocusPoints()
    const hasPreviousLevelFocus =
      level === 2 &&
      chosenFoci.some(
        (e): boolean => e.focus === focusedFocus && e.level === level - 1,
      )
    const canBuyLevelTwo = hasPreviousLevelFocus && availableFocusPoints()

    if (canBuyLevelOne || canBuyLevelTwo)
      return (
        <FocusButton type={"buy"} level={level} focusedFocus={focusedFocus} />
      )

    return (
      <FocusButton type={"blocked"} level={level} focusedFocus={focusedFocus} />
    )
  }

  function availableFocusPoints(): boolean {
    if (focusPoints.generalFocusPoints >= 1) return true

    switch (focusedFocus.type) {
      case FocusType.COMBAT_FOCUS:
        return focusPoints.combatFocusPoints >= 1
      case FocusType.PSYCHIC_FOCUS:
        return focusPoints.psychicFocusPoints >= 1
      case FocusType.NON_COMBAT_FOCUS:
        return focusPoints.nonCombatFocusPoints >= 1
      default:
        return false
    }
  }

  return (
    <SwnCard cardInCard className={`p-2 ${className}`}>
      <CardHeader className="text-2xl">LEVEL {level}</CardHeader>
      <Divider />
      <CardBody>
        <div>
          <ul className="ml-8">
            {focusedFocus.levels[level - 1].descriptionSchema.map(
              (e): ReactElement => (
                <li className="list-disc">{e}</li>
              ),
            )}
          </ul>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex items-center gap-4 mt-2 w-full">
          <div className="border-divider border-3 py-[6px] px-3 flex-1 rounded-sm">
            <div className="flex w-full justify-between">
              <div>Precio:</div>
              <div className={`text-yellow-400`}>1 GFP</div>
            </div>
          </div>
          {renderButton()}
        </div>
      </CardFooter>
    </SwnCard>
  )
}
