import { Button } from "@nextui-org/react"
import { useStoreGameClassState } from "../../../state"
import { type Ability } from "@/models/GameClassDefinitionModels"
import { type ReactElement } from "react"

export default function GameClassDescription(): ReactElement {
  const { focusedGameClass } = useStoreGameClassState()

  if (!focusedGameClass) return <></>

  function renderDetails(details: string[]): ReactElement {
    if (details.length === 1) {
      return <div>{details[0]}</div>
    } else {
      return (
        <div>
          <ul className="pl-10">
            {details.map(
              (detail: string): ReactElement => (
                <li className="list-disc">{detail}</li>
              ),
            )}
          </ul>
        </div>
      )
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-[90%] flex flex-col p-10 justify-evenly">
        <h1 className="text-4xl italic">
          {focusedGameClass.name.toUpperCase()}
        </h1>
        {focusedGameClass.abilities.map(
          (ability: Ability): ReactElement => (
            <div>
              {ability.summary !== "" && (
                <div className="text-2xl text-primary">{`> ${ability.summary}`}</div>
              )}
              <div>{renderDetails(ability.details)}</div>
            </div>
          ),
        )}
      </div>
      <div className="flex flex-row justify-center mt-auto">
        <Button color="primary">Select Class</Button>
      </div>
    </div>
  )
}
