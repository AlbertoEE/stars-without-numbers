import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react"
import { useStoreFociState } from "../state"
import { type ReactElement } from "react"
import Get from "@/public/imgs/ui/get.svg"
import {
  type FocusLevelDefinition,
  type FocusDefinition,
  FocusType,
} from "@/models/FocusDefinitionModels"

export default function FocusDetail(): ReactElement {
  const { focusedFocus, chosenFoci, setChosenFoci } = useStoreFociState()

  if (focusedFocus == null) return <></>

  function chooseFocus(level: number, focusedFocus: FocusDefinition): void {
    const cleanedFoci = chosenFoci.filter(
      (focus): boolean => focus.origin !== "foci",
    )
    setChosenFoci([
      ...cleanedFoci,
      {
        focus: focusedFocus,
        level,
        origin: "foci",
      },
    ])
  }

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
        <div className="ml-auto text-right">
          <div>Any Focus: 1</div>
          <Divider className="my-2" />
          <div>Class Focus: 1</div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 overflow-y-auto pr-5">
        <div>{focusedFocus.description}</div>
        <div>
          {focusedFocus.levels.map(
            (lvlDef: FocusLevelDefinition): ReactElement => (
              <FociLevelSection
                status="bought"
                className="mt-4"
                level={lvlDef.level}
              >
                <FociLevelDescription
                  focusLevelDefinition={lvlDef}
                  onFocusLevelSelectionPress={function (): void {
                    throw new Error("Function not implemented.")
                  }}
                  level={lvlDef.level}
                />
              </FociLevelSection>
            ),
          )}
          <Card className="p-2">
            <CardHeader className="text-2xl">
              Level 1
            </CardHeader>
            <CardBody>
              <FociLevelDescription
                focusLevelDefinition={focusedFocus.levels[0]}
                onFocusLevelSelectionPress={function (): void {
                  throw new Error("Function not implemented.")
                }}
                level={0}
              />
            </CardBody>
            <CardFooter>
              <div className="flex items-center gap-4 mt-2 w-full">
                <div className="border-gray-500 border-3 py-[6px] px-3 flex-1">
                  <div className="flex w-full">
                    <div>Precio:</div>
                    <div className={`ml-auto text-yellow-400`}>1 GFP</div>
                  </div>
                </div>
                <Button
                  className={`ml-auto border-yellow-400 border-3 text-yellow-400 hover:text-white hover:border-white rounded-none`}
                  size="md"
                  variant="bordered"
                  onPress={(): void => {}}
                >
                  OBTENER
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function FociLevelSection(props: {
  level: number
  children: ReactElement
  className?: string
  status: "bought" | "available" | "blocked"
}): ReactElement {
  let color = ""

  switch (props.status) {
    case "bought":
      color = "green-400"
      break
    case "available":
      color = "yellow-400"
      break
    case "blocked":
      color = "red-400"
      break
  }

  return (
    <div className={`border-${color} border-3 p-4 ${props.className}`}>
      <div className="text-2xl">Level - {props.level}</div>
      <Divider className="my-4" />
      {props.children}
      <div className="flex items-center gap-4 mt-2">
        <div className="border-gray-500 border-3 py-[6px] px-3 flex-1">
          <div className="flex w-full">
            <div>Precio:</div>
            <div className={`ml-auto text-${color}`}>1 GFP</div>
          </div>
        </div>
        <Button
          className={`ml-auto border-${color} border-3 text-${color} hover:text-white hover:border-white rounded-none`}
          size="md"
          variant="bordered"
          onPress={(): void => {}}
        >
          {props.status === "available" && "OBTENER"}
          {props.status === "blocked" && "BLOCKED"}
          {props.status === "bought" && "REFUND"}
        </Button>
      </div>
    </div>
  )
}

export function FociLevelDescription(props: {
  focusLevelDefinition: FocusLevelDefinition
  onFocusLevelSelectionPress: () => void
  level: number
}): ReactElement {
  return (
    <div>
      <ul className="ml-8">
        {props.focusLevelDefinition.descriptionSchema.map(
          (e): ReactElement => (
            <li className="list-disc">{e}</li>
          ),
        )}
      </ul>
    </div>
  )
}
