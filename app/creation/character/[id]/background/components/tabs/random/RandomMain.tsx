import {
  BackgroundBenefit,
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import { rollDice } from "@/utilities/Roll";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { useStoreBackgroundState } from "../../../../state";
import GenericBenefitCellResult from "./GenericBenefitCellResult";
import SpecificBenefitCell from "./SpecificBenefitCell";

export default function RandomMain(props: {
  backgroundDefinition: BackgroundDefinition;
}) {
  const { chosenBenefits, setChosenBenefits, rolledDice, setRolledDice } =
    useStoreBackgroundState();

  const [rolls, setRolls] = useState({
    availableRolls: 3,
    growthRolls: 0,
    learningRolls: 0,
  });

  const growthSkills = props.backgroundDefinition.benefits.growth;
  const learningSkills = props.backgroundDefinition.benefits.learning;

  function handleRoll() {
    if (rolls.availableRolls != 0) return;
    setRolledDice(true);
    let results = [];

    for (let i = 0; i < rolls.growthRolls; i++) {
      let diceRollResult = rollDice(1, growthSkills.length) - 1;
      results.push({ ...growthSkills[diceRollResult] });
    }
    for (let i = 0; i < rolls.learningRolls; i++) {
      let diceRollResult = rollDice(1, learningSkills.length) - 1;
      results.push({ ...learningSkills[diceRollResult] });
    }

    setChosenBenefits([props.backgroundDefinition.benefits.free]);
    results.push({ ...props.backgroundDefinition.benefits.free });

    setChosenBenefits(results);
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
      {!rolledDice && (
        <>
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
              {props.backgroundDefinition.benefits.learning.map((benefit) => (
                <div className="flex-1 py-1 px-3">
                  <SpecificBenefitCell benefit={benefit} />
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
              {props.backgroundDefinition.benefits.growth.map((benefit) => (
                <div className="py-1 px-3">
                  <SpecificBenefitCell benefit={benefit} />
                </div>
              ))}
            </Card>
          </div>
          <Card
            className="h-12 w-24 m-auto mt-2"
            isPressable
            onPress={handleRoll}
          >
            <CardBody className="text-center justify-center">
              {3 - rolls.availableRolls}/3 🎲
            </CardBody>
          </Card>
        </>
      )}
      {rolledDice && (
        <div className="flex flex-col gap-2">
          {chosenBenefits.map((e: BackgroundBenefit, i) =>
            e.subtype !== "specific" ? (<GenericBenefitCellResult benefit={e} index={i} />) : (<SpecificBenefitCell benefit={e} />)
          )}
        </div>
      )}
    </>
  );
}
