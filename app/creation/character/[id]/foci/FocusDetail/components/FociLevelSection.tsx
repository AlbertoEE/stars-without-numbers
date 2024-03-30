import { type FocusDefinition, FocusType } from "@/models/FocusDefinitionModels"
import { type ReactElement } from "react"
import {
  type FocusPoints,
  type FocusSelection,
  useStoreFociState,
} from "../../../state"
import SwnCard from "@/app/components/SwnCard"
import { CardHeader, Divider, CardBody, CardFooter } from "@nextui-org/react"

export function FociLevelSection(props: {
  focusedFocus: FocusDefinition
  level: number
  className?: string
}): ReactElement {
  const { chosenFoci, focusPoints, setFocusPoints, setChosenFoci } =
    useStoreFociState()

  function buyFocus(): void {
    setChosenFoci([
      ...chosenFoci,
      {
        focus: props.focusedFocus,
        level: props.level,
        origin: "foci",
      },
    ])
  }

  return (
    <SwnCard cardInCard className={`p-2 ${props.className}`}>
      <CardHeader className="text-2xl">LEVEL {props.level}</CardHeader>
      <Divider />
      <CardBody>
        <div>
          <ul className="ml-8">
            {props.focusedFocus.levels[props.level - 1].descriptionSchema.map(
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
          {renderButton(
            chosenFoci,
            props.level,
            props.focusedFocus,
            focusPoints,
          )}
        </div>
      </CardFooter>
    </SwnCard>
  )
}

export function renderButton(
  chosenFoci: FocusSelection[],
  level: number,
  focusedFocus: FocusDefinition,
  focusPoints: FocusPoints,
): string | undefined {
  const isFocusChosen = chosenFoci.some(
    (e): boolean => e.focus === focusedFocus && e.level === level,
  )
  if (isFocusChosen) return "refund"

  const canBuyLevelOne = level === 1 && canBuyFocus(focusedFocus, focusPoints)
  const hasPreviousLevelFocus =
    level === 2 &&
    chosenFoci.some(
      (e): boolean => e.focus === focusedFocus && e.level === level - 1,
    )
  const canBuyLevelTwo =
    hasPreviousLevelFocus && canBuyFocus(focusedFocus, focusPoints)

  if (canBuyLevelOne || canBuyLevelTwo) return "buy"

  return "blocked"
}

function canBuyFocus(
  focusedFocus: FocusDefinition,
  focusPoints: FocusPoints,
): boolean {
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
