import { type FocusLevelDefinition } from "@/models/FocusDefinitionModels"
import CoinIcon from "@/public/imgs/equipment/coin.svg"
import { Divider, Image } from "@nextui-org/react"
import { type ReactElement } from "react"
import { useStoreFociState } from "../../state"
import { FociLevelSection } from "./components/FociLevelSection/FociLevelSection"

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
