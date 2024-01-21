import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { rollDice } from "@/utilities/Roll";

export default function RandomSkillTab(props: {
  background: BackgroundDefinition;
}) {
  const [rolls, setRolls] = useState({ availableRolls: 3, growthRolls: 0, learningRolls: 0 });
  const [results, setResults] = useState<string[]>([])
  const growthSkills = props.background.benefits.growth
  const learningSkills = props.background.benefits.learning

  function handleRoll() {
    setResults([]);
    for (let i = 0; i < rolls.growthRolls; i++) {
      let diceRollResult = rollDice(1, growthSkills.length) - 1;
      setResults((prev) => [
        ...prev,
        growthSkills.at(diceRollResult)!.name
      ]);
    }

    console.log(results)
  }

  function handleRollSelection(sign: "minus" | "plus", table: "growth" | "learning") {
    setRolls(prev => {
      let { availableRolls, growthRolls, learningRolls } = prev;

      if (sign === "minus") {
        if (table === "growth" && growthRolls > 0) {
          growthRolls--;
          availableRolls++;
        } else if (table === "learning" && learningRolls > 0) {
          learningRolls--;
          availableRolls++;
        }
      } else if (sign === "plus") {
        if (availableRolls > 0) {
          if (table === "growth") {
            growthRolls++;
          } else if (table === "learning") {
            learningRolls++;
          }
          availableRolls--;
        }
      }

      return { availableRolls, growthRolls, learningRolls };
    });
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
      <div className="flex flex-row justify-around">
        <Card className="p-5 w-[40%]">
          <div className="flex flex-row items-center justify-center">
            <div><Button onPress={() => handleRollSelection("minus", "learning")} className="text-2xl m-2" size="sm">-</Button></div>
            <div>{rolls.learningRolls}</div>
            <div><Button onPress={() => handleRollSelection("plus", "learning")} className="text-2xl m-2" size="sm">+</Button></div>
          </div>
          {/* <BackgroundSkillTypeSection
            rows={8}
            columns={1}
            benefits={props.background.benefits.learning.map((e) => e.name)}
            skillBuyMethod="random"
          /> */}
        </Card>
        <Card className="p-5 w-[40%]">
          <div className="flex flex-row items-center justify-center">
            <div><Button onPress={() => handleRollSelection("minus", "growth")} className="text-2xl m-2" size="sm">-</Button></div>
            <div>{rolls.growthRolls}</div>
            <div><Button onPress={() => handleRollSelection("plus", "growth")} className="text-2xl m-2" size="sm">+</Button></div>
          </div>
          {/* <BackgroundSkillTypeSection
            rows={6}
            columns={1}
            benefits={props.background.benefits.growth.map((e) => e.name)}
            skillBuyMethod="random"
          /> */}
        </Card>

        <div className="flex flex-col items-center justify-center m-2 gap-5">
          <Card className="h-12 w-16">
            <CardBody className="text-center justify-center">{rolls.availableRolls}/3</CardBody>
          </Card>
          <Card className="h-12 w-16" isPressable onPress={handleRoll}>
            <CardBody className="text-center justify-center">🎲</CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
