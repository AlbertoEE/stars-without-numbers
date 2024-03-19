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
import SwnCard from "@/app/components/SwnCard"
import SwnButton from "@/app/components/SwnButton"

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
        <div className="flex flex-col gap-4">
          {focusedFocus.levels.map(
            (lvlDef: FocusLevelDefinition): ReactElement => (
              <FociLevelSection status="bought" level={lvlDef.level}>
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
  const myStyle = {
    backgroundImage: "",
  }
  return (
    <SwnCard cardInCard className={`p-2 ${props.className}`}>
      <CardHeader className="text-2xl">LEVEL {props.level}</CardHeader>
      <Divider />
      <CardBody>{props.children}</CardBody>
      <Divider />
      <CardFooter>
        <div className="flex items-center gap-4 mt-2 w-full">
          <div className="border-divider border-3 py-[6px] px-3 flex-1 rounded-sm">
            <div className="flex w-full justify-between">
              <div>Precio:</div>
              <div className={`text-yellow-400`}>1 GFP</div>
            </div>
          </div>
          <SwnButton
            color="warning"
            size="md"
            variant="bordered"
            style={myStyle}
            onPress={(): void => {}}
          >
            OBTENER
          </SwnButton>
        </div>
      </CardFooter>
    </SwnCard>
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
