import {
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react"
import { useStoreFociState } from "../state"
import { type ReactElement } from "react"
import {
  FocusType,
  type FocusDefinition,
  type FocusLevelDefinition,
} from "@/models/FocusDefinitionModels"
import SwnCard from "@/app/components/SwnCard"
import SwnButton from "@/app/components/SwnButton"
import CoinIcon from "@/public/imgs/equipment/coin.svg"

export default function FocusDetail(): ReactElement {
  const { focusedFocus } = useStoreFociState()

  if (focusedFocus === undefined) return <></>

  return (
    <div className="flex flex-col gap-4 w-full h-full py-5 px-5">
      <div className="flex flex-row items-center gap-4">
        <Image
          className=""
          src={`/imgs/foci/${focusedFocus?.name.replace(" ", "-")}.svg`}
          alt="me"
          width="64"
          height="64"
        />
        <div>
          <h1 className="font-bold uppercase text-4xl">{focusedFocus.name}</h1>
          <div>Type: {Object.values(focusedFocus.type)}</div>
        </div>
        <div className="flex ml-auto gap-6 mr-2">
          <div className="flex flex-col">
            <CoinIcon className="fill-current" />
            <div>18</div>
          </div>
          <div className="flex flex-col">
            <CoinIcon className="fill-current" />
            <div>18</div>
          </div>
          <div className="flex flex-col">
            <CoinIcon className="fill-current" />
            <div>18</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 overflow-y-auto pr-5">
        <div>{focusedFocus.description}</div>
        <div className="flex flex-col gap-4">
          {focusedFocus.levels.map(
            (lvlDef: FocusLevelDefinition): ReactElement => (
              <FociLevelSection
                level={lvlDef.level}
                focusedFocus={focusedFocus}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

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

  const buyButton = (
    <SwnButton color="warning" size="md" variant="bordered" onPress={buyFocus}>
      BUY
    </SwnButton>
  )

  const refundButton = (
    <SwnButton color="success" size="md" variant="bordered">
      OBTAINED / REFUND
    </SwnButton>
  )

  const blockedButton = (
    <SwnButton isDisabled color="danger" size="md" variant="bordered">
      BLOCKED
    </SwnButton>
  )

  function renderButton(): ReactElement | undefined {
    const found = chosenFoci.find(
      (e): boolean => e.focus === props.focusedFocus,
    )

    let availablePoints = 0

    if (props.focusedFocus.type === FocusType.COMBAT_FOCUS) {
      availablePoints = focusPoints.combatFocusPoints
    } else if (props.focusedFocus.type === FocusType.PSYCHIC_FOUCS) {
      availablePoints = focusPoints.psychicFocusPoints
    } else if (props.focusedFocus.type === FocusType.NON_COMBAT_FOCUS) {
      availablePoints = focusPoints.psychicFocusPoints
    }

    switch (true) {
      case found !== undefined:
        return refundButton
      case found === undefined:
        return buyButton
      default:
        return undefined
    }
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
          {renderButton()}
        </div>
      </CardFooter>
    </SwnCard>
  )
}
