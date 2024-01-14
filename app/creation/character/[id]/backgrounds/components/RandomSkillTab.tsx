import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import BackgroundSkillTypeSection from "./BackgroundSkillTypeSection";
import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { rollDice } from "@/utilities/Roll";

export default function RandomSkillTab(props: {
  background: BackgroundDefinition;
}) {
    let [availableRolls, setAvailableRolls] = useState(3)

    const growthSkills = props.background.benefits.growth
    const learningSkills = props.background.benefits.learning

    function handleRoll(table: "growth" | "learning") {
        switch(table){
            case("growth"):
                growthSkills.at(rollDice(1, growthSkills.length) - 1)
        }
    }
  return (
    <>
      <div className="p-5">
        Here you can pick two other skills from the table below.
        <br />
        <br />
        You may pick the same skill twice if you wish, to improve its starting
        proficiency.
      </div>
      <div>
        <div className="flex flex-row items-center justify-around m-2">
          <Card className="" isPressable>
            <CardBody className="text-center justify-center">🎲 Learning table</CardBody>
          </Card>
          <Card className="" isPressable>
            <CardBody className="text-center justify-center">🎲 Growth table</CardBody>
          </Card>
          <Card className="h-12">
            <CardBody className="text-center justify-center">3/3</CardBody>
          </Card>
        </div>
      </div>
      <BackgroundSkillTypeSection
        rows={3}
        columns={3}
        skills={props.background.benefits.learning.map((e) => e.name)}
        thead="Learning"
        skillBuyMethod="random"
      />
      <BackgroundSkillTypeSection
        rows={2}
        columns={3}
        skills={props.background.benefits.growth.map((e) => e.name)}
        thead="Growth"
        skillBuyMethod="random"
      />
    </>
  );
}
