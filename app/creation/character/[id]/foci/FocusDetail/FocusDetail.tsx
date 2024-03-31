import { type FocusLevelDefinition } from "@/models/FocusDefinitionModels"
import { Chip, Divider, Image } from "@nextui-org/react"
import { type ReactElement } from "react"
import { useStoreFociState } from "../../state"
import { FociLevelSection } from "./components/FociLevelSection/FociLevelSection"
import SwnChip from "@/app/components/swn/SwnChip"

export default function FocusDetail(): ReactElement {
  const { focusedFocus, focusPoints } = useStoreFociState()

  if (focusedFocus === undefined) return <></>
//
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
        <div className="grid grid-cols-2 gap-4 ml-auto mr-4 p-2">
          <SwnChip radius="sm">{focusPoints.generalFocus}-G</SwnChip>
          <SwnChip radius="sm">{focusPoints.combatFocus}-C</SwnChip>
          <SwnChip radius="sm">{focusPoints.nonCombatFocus}-N</SwnChip>
          <SwnChip radius="sm">{focusPoints.psychicFocus}-P</SwnChip>
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
