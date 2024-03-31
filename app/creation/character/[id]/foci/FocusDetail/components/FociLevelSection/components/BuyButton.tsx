import SwnButton from "@/app/components/swn/SwnButton"
import { useStoreFociState } from "@/app/creation/character/[id]/state"
import { FocusType, type FocusDefinition } from "@/models/FocusDefinitionModels"
import { type ReactElement } from "react"

type color =
  | "warning"
  | "success"
  | "danger"
  | "default"
  | "primary"
  | "secondary"
  | undefined

interface ButtonType {
  color: color
  text: string
  onPress?: () => void
  isDisabled: boolean
}

export function FocusButton({
  type,
  level,
  focusedFocus,
}: {
  type: "buy" | "refund" | "blocked" | "refund_blocked"
  level: number
  focusedFocus: FocusDefinition
}): ReactElement {
  const { chosenFoci, focusPoints, setFocusPoints, setChosenFoci } =
    useStoreFociState()

  const types: Record<string, ButtonType> = {
    buy: {
      color: "warning",
      text: "BUY",
      onPress: buyFocus,
      isDisabled: false,
    },
    refund: {
      color: "success",
      text: "REFUND",
      onPress: refundFocus,
      isDisabled: false,
    },
    refund_blocked: {
      color: "success",
      text: "REFUND",
      onPress: undefined,
      isDisabled: true,
    },
    blocked: {
      color: "danger",
      text: "BLOCKED",
      onPress: undefined,
      isDisabled: true,
    },
  }

  function buyFocus(): void {
    if (focusPoints.generalFocus >= 1) {
      setFocusPoints({
        ...focusPoints,
        [FocusType.GENERAL_FOCUS]: focusPoints[FocusType.GENERAL_FOCUS] - 1,
      })
      setChosenFoci([
        ...chosenFoci,
        {
          focus: focusedFocus,
          level,
          origin: "foci",
          currencyUsed: FocusType.GENERAL_FOCUS,
        },
      ])
    } else {
      const focusPointKey = focusedFocus.type
      setFocusPoints({
        ...focusPoints,
        [focusPointKey]: focusPoints[focusPointKey] - 1,
      })
      setChosenFoci([
        ...chosenFoci,
        {
          focus: focusedFocus,
          level,
          origin: "foci",
          currencyUsed: focusPointKey,
        },
      ])
    }
  }

  function refundFocus(): void {
    const foundFocus = chosenFoci.find(
      (f): boolean => f.focus === focusedFocus && f.level === level,
    )
    if (foundFocus !== undefined) {
      setFocusPoints({
        ...focusPoints,
        [foundFocus.currencyUsed]: focusPoints[foundFocus.currencyUsed] + 1,
      })

      setChosenFoci(chosenFoci.filter((f): boolean => f !== foundFocus))
    }
  }

  return (
    <SwnButton
      color={types[type].color}
      variant="bordered"
      onPress={types[type].onPress}
      isDisabled={types[type].isDisabled}
      className="w-[25%]"
    >
      {types[type].text}
    </SwnButton>
  )
}
