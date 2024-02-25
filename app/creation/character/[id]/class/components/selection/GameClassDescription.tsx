import { Button, Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useStoreGameClassState } from "../../../state";
import { Ability } from "@/models/GameClassDefinitionModels";

export default function GameClassDescription() {
  const { focusedGameClass } = useStoreGameClassState();

  if (!focusedGameClass) return <></>;

  function renderDetails(details: string[]) {
    if (details.length === 1) {
      return <div>{details[0]}</div>;
    } else {
      return (
        <div>
          <ul className="pl-10">
            {details.map((detail: string) => (
              <li className="list-disc">{detail}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="w-full h-full flex flex-col p-10 justify-evenly">
      <h1 className="text-4xl italic">{focusedGameClass.name.toUpperCase()}</h1>
      {focusedGameClass.abilities.map((ability: Ability) => (
        <div>
          {ability.summary !== "" && (
            <div className="text-2xl text-primary">{`> ${ability.summary}`}</div>
          )}
          <div>{renderDetails(ability.details)}</div>
        </div>
      ))}
      <div className="flex flex-row justify-center">
        <Button color="primary">Select Class</Button>
      </div>
    </div>
  );
}
