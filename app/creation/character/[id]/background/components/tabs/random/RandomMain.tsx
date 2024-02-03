import {
  BackgroundBenefit,
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import { rollDice } from "@/utilities/Roll";
import { Card, CardBody, Button } from "@nextui-org/react";
import { useState } from "react";
import RandomBenefitCell from "./RandomBenefitCell";
import RandomBenefitCellResult from "./RandomBenefitCellResult";
import { useStoreBackgroundState } from "../../../../state";

export default function RandomMain(props: {
  background: BackgroundDefinition;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();
  const [rolledDice, setRolledDice] = useState<boolean>(false);
  const [randomResults, setRandomResults] = useState<BackgroundBenefit[]>([]);
  const [rolls, setRolls] = useState({
    availableRolls: 3,
    growthRolls: 0,
    learningRolls: 0,
  });

  const growthSkills = props.background.benefits.growth;
  const learningSkills = props.background.benefits.learning;

  function handleRoll() {
    if (rolls.availableRolls != 0) return;
    setRolledDice(true);
    let results = [];

    for (let i = 0; i < rolls.growthRolls; i++) {
      let diceRollResult = rollDice(1, growthSkills.length) - 1;
      results.push(growthSkills[diceRollResult]);
    }
    for (let i = 0; i < rolls.learningRolls; i++) {
      let diceRollResult = rollDice(1, learningSkills.length) - 1;
      results.push(learningSkills[diceRollResult]);
    }
    
    setChosenBenefits([props.background.benefits.free]);
    results.push(props.background.benefits.free);

    setRandomResults(results);
  }

  function reset() {
    setRolledDice(false);
    setRandomResults([]);
  }

  function handleRollSelection(
    sign: "minus" | "plus",
    table: "growth" | "learning"
  ) {
    setRolls((prev) => {
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
      <div className="flex flex-row">
        {rolledDice && (
          <Card className="h-12 w-24 m-auto mb-2" isPressable onPress={reset}>
            <CardBody className="text-center justify-center">Reset ↻</CardBody>
          </Card>
        )}
      </div>
      {rolledDice == false && (
        <div className="flex flex-row justify-around">
          <Card className="p-5 w-[43%]">
            <div className="flex flex-row items-center justify-center">
              <div>
                <Button
                  onPress={() => handleRollSelection("minus", "learning")}
                  className="text-2xl m-2"
                  size="sm"
                >
                  -
                </Button>
              </div>
              <div>{rolls.learningRolls}</div>
              <div>
                <Button
                  onPress={() => handleRollSelection("plus", "learning")}
                  className="text-2xl m-2"
                  size="sm"
                >
                  +
                </Button>
              </div>
            </div>
            {props.background.benefits.learning.map((benefit) => (
              <div className="flex-1 py-1 px-3">
                <RandomBenefitCell benefit={benefit} />
              </div>
            ))}
          </Card>
          <Card className="p-5 w-[43%]">
            <div className="flex flex-row items-center justify-center">
              <div>
                <Button
                  onPress={() => handleRollSelection("minus", "growth")}
                  className="text-2xl m-2"
                  size="sm"
                >
                  -
                </Button>
              </div>
              <div>{rolls.growthRolls}</div>
              <div>
                <Button
                  onPress={() => handleRollSelection("plus", "growth")}
                  className="text-2xl m-2"
                  size="sm"
                >
                  +
                </Button>
              </div>
            </div>
            {props.background.benefits.growth.map((benefit) => (
              <div className="py-1 px-3">
                <RandomBenefitCell benefit={benefit} />
              </div>
            ))}
          </Card>
        </div>
      )}
      {rolledDice == false && (
        <Card
          className="h-12 w-24 m-auto mt-2"
          isPressable
          onPress={handleRoll}
        >
          <CardBody className="text-center justify-center">
            {3 - rolls.availableRolls}/3 🎲
          </CardBody>
        </Card>
      )}
      <div className="flex flex-col gap-2">
        {randomResults.map((e) => (
          <RandomBenefitCellResult benefit={e} />
        ))}
      </div>
      <div>{chosenBenefits.map((e) => e.name)}</div>
    </>
  );
}
