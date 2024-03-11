import {
  type BackgroundBenefit,
  type BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels"
import { rollDice } from "@/utilities/Roll"
import { Button, Card, CardBody, Divider } from "@nextui-org/react"
import { type ReactElement, useState } from "react"
import { useStoreBackgroundState } from "../../state"
import BenefitImage from "./commons/BenefitImage"
import DropDownGenericBenefit from "./commons/DropDownGenericBenefit"

export default function RandomSelectionMethod(props: {
  backgroundDefinition: BackgroundDefinition
}): ReactElement {
  const { chosenBenefits, setChosenBenefits, rolledDice, setRolledDice } =
    useStoreBackgroundState()

  const [rolls, setRolls] = useState({
    availableRolls: 3,
    growthRolls: 0,
    learningRolls: 0,
  })

  const growthSkills = props.backgroundDefinition.benefits.growth
  const learningSkills = props.backgroundDefinition.benefits.learning

  function handleRoll(): void {
    if (rolls.availableRolls !== 0) return

    setRolledDice(true)
    const results = []

    for (let i = 0; i < rolls.growthRolls; i++) {
      const diceRollResult = rollDice(1, growthSkills.length) - 1
      results.push({ ...growthSkills[diceRollResult] })
    }
    for (let i = 0; i < rolls.learningRolls; i++) {
      const diceRollResult = rollDice(1, learningSkills.length) - 1
      results.push({ ...learningSkills[diceRollResult] })
    }

    setChosenBenefits([props.backgroundDefinition.benefits.free])
    results.push({ ...props.backgroundDefinition.benefits.free })

    setChosenBenefits(results)
  }

  function handleRollSelection(
    sign: "minus" | "plus",
    table: "growth" | "learning",
  ): void {
    setRolls((prev): any => {
      let { availableRolls, growthRolls, learningRolls } = prev

      switch (true) {
        case sign === "minus" && table === "growth" && growthRolls > 0:
          growthRolls--
          availableRolls++
          break
        case sign === "minus" && table === "learning" && learningRolls > 0:
          learningRolls--
          availableRolls++
          break
        case sign === "plus" && table === "growth" && availableRolls > 0:
          growthRolls++
          availableRolls--
          break
        case sign === "plus" && table === "learning" && availableRolls > 0:
          learningRolls++
          availableRolls--
          break
      }

      return { availableRolls, growthRolls, learningRolls }
    })
  }

  function renderRandomTables(): ReactElement {
    return (
      <>
        <div className="flex flex-row justify-around">
          <TableOptions
            rolls={rolls.learningRolls}
            benefits={props.backgroundDefinition.benefits.learning}
            onMinusPress={(): void => {
              handleRollSelection("minus", "learning")
            }}
            onPlusPress={(): void => {
              handleRollSelection("plus", "learning")
            }}
          />
          <TableOptions
            rolls={rolls.growthRolls}
            benefits={props.backgroundDefinition.benefits.growth}
            onMinusPress={(): void => {
              handleRollSelection("minus", "growth")
            }}
            onPlusPress={(): void => {
              handleRollSelection("plus", "growth")
            }}
          />
        </div>

        <Card
          className="m-auto mt-4 w-[45%] bg-gray-600"
          isPressable
          onPress={handleRoll}
        >
          <CardBody className="text-center justify-center">
            {3 - rolls.availableRolls}/3 🎲
          </CardBody>
        </Card>
      </>
    )
  }

  function renderRandomResults(): ReactElement {
    return (
      <>
        <h1 className="text-xl mb-2">Roll Results</h1>
        <div className="flex flex-col gap-2 px-3">
          {chosenBenefits.map(
            (e: BackgroundBenefit, i): ReactElement =>
              e.subtype !== "specific" ? (
                <GenericBenefitCellResult benefit={e} index={i} />
              ) : (
                <SpecificBenefitCell benefit={e} />
              ),
          )}
        </div>
      </>
    )
  }

  return rolledDice ? renderRandomResults() : renderRandomTables()
}

export function GenericBenefitCellResult(props: {
  benefit: BackgroundBenefit
  index: number
}): ReactElement {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState()

  function handleOnDropdownChange(keys: Selection, option: number): void {
    const cloneChosenBenefits = [...chosenBenefits]

    const foundBenefit = cloneChosenBenefits[props.index]

    foundBenefit.selected = foundBenefit.selected || new Map()

    foundBenefit.selected.set(option, {
      name: keys.currentKey,
      type: props.benefit.type,
      subtype: "specific",
    })

    setChosenBenefits(cloneChosenBenefits)
  }

  function renderGenericBenefitRow(option: number): ReactElement {
    return (
      <div className="flex flex-row">
        <BenefitImage benefit={props.benefit} />
        <div className="mx-2">+1</div>
        <DropDownGenericBenefit
          dropDownName={props.benefit.selected?.get(option)?.name}
          benefit={props.benefit}
          selectedKeys={
            props.benefit.selected
              ? new Set([props.benefit.selected.get(option)?.name])
              : new Set()
          }
          handleOnDropdownChange={(keys: Selection): void => {
            handleOnDropdownChange(keys, option)
          }}
        />
      </div>
    )
  }

  function render(): ReactElement[] {
    const rows = []
    for (let i = 0; i < props.benefit.amount!; i++) {
      rows.push(renderGenericBenefitRow(i))
    }
    return rows
  }

  return <>{render()}</>
}

export function TableOptions(props: {
  rolls: number
  benefits: BackgroundBenefit[]
  onMinusPress: () => void
  onPlusPress: () => void
}): ReactElement {
  return (
    <Card className="w-[40%] p-4">
      <div className="flex flex-row items-center justify-center">
        <div>
          <Button
            onPress={props.onMinusPress}
            className="text-2xl m-2"
            size="sm"
          >
            -
          </Button>
        </div>
        <div>{props.rolls}</div>
        <div>
          <Button
            onPress={props.onPlusPress}
            className="text-2xl m-2"
            size="sm"
          >
            +
          </Button>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="mx-auto">
        {props.benefits.map(
          (benefit): ReactElement => (
            <div className="flex-1 my-1 mx-0">
              <SpecificBenefitCell benefit={benefit} />
            </div>
          ),
        )}
      </div>
    </Card>
  )
}
export function SpecificBenefitCell(props: {
  benefit: BackgroundBenefit
}): ReactElement {
  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      <div className="ml-4">{props.benefit.name}</div>
    </div>
  )
}
