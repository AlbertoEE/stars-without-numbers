import {
  BackgroundBenefit,
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import { rollDice } from "@/utilities/Roll";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useStoreBackgroundState } from "../../../../state";
import GenericBenefitCellResult from "./GenericBenefitCellResult";
import SpecificBenefitCell from "./SpecificBenefitCell";
import TableOptions from "./TableOptions";

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
          <div className="w-full h-full">
            <div className="flex flex-row justify-around">
              <TableOptions
                rolls={rolls.learningRolls}
                benefits={props.backgroundDefinition.benefits.learning}
                onMinusPress={() => handleRollSelection("minus", "learning")}
                onPlusPress={() => handleRollSelection("plus", "learning")} />
              <TableOptions
                rolls={rolls.growthRolls}
                benefits={props.backgroundDefinition.benefits.growth}
                onMinusPress={() => handleRollSelection("minus", "growth")}
                onPlusPress={() => handleRollSelection("plus", "growth")} />
            </div>

            <Card
              className="m-auto mt-4 w-[45%] bg-gray-600"
              isPressable
              onPress={handleRoll}
            >
              <CardBody className="text-center justify-center">
                {3 - rolls.availableRolls}/3 🎲
              </CardBody>
            </Card>
          </div>
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
