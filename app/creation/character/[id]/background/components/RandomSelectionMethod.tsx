import {
  BackgroundBenefit,
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import { rollDice } from "@/utilities/Roll";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useStoreBackgroundState } from "../../state";
import BenefitImage from "./commons/BenefitImage";
import DropDownGenericBenefit from "./commons/DropDownGenericBenefit";

export default function RandomSelectionMethod(props: {
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

      switch (true) {
        case sign === "minus" && table === "growth" && growthRolls > 0:
          growthRolls--;
          availableRolls++;
          break;
        case sign === "minus" && table === "learning" && learningRolls > 0:
          learningRolls--;
          availableRolls++;
          break;
        case sign === "plus" && table === "growth" && availableRolls > 0:
          growthRolls++;
          availableRolls--
          break;
        case sign === "plus" && table === "learning" && availableRolls > 0:
          learningRolls++;
          availableRolls--
          break;
      }

      return { availableRolls, growthRolls, learningRolls };
    });
  }

  function renderRandomTables() {
    return (
      <>
        <div className="flex flex-row justify-around">
          <TableOptions
            rolls={rolls.learningRolls}
            benefits={props.backgroundDefinition.benefits.learning}
            onMinusPress={() => handleRollSelection("minus", "learning")}
            onPlusPress={() => handleRollSelection("plus", "learning")}
          />
          <TableOptions
            rolls={rolls.growthRolls}
            benefits={props.backgroundDefinition.benefits.growth}
            onMinusPress={() => handleRollSelection("minus", "growth")}
            onPlusPress={() => handleRollSelection("plus", "growth")}
          />
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
      </>
    );
  }

  function renderRandomResults() {
    return (
      <div className="flex flex-col gap-2">
        {chosenBenefits.map((e: BackgroundBenefit, i) =>
          e.subtype !== "specific" ? (
            <GenericBenefitCellResult benefit={e} index={i} />
          ) : (
            <SpecificBenefitCell benefit={e} />
          )
        )}
      </div>
    );
  }

  return rolledDice ? renderRandomResults() : renderRandomTables();
}

export function GenericBenefitCellResult(props: {
  benefit: BackgroundBenefit;
  index: number;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();

  function handleOnDropdownChange(keys: Selection, option: number) {
    let cloneChosenBenefits = [...chosenBenefits];

    let foundBenefit = cloneChosenBenefits[props.index];

    foundBenefit.selected = foundBenefit.selected || new Map();

    foundBenefit.selected.set(option, {
      name: keys.currentKey,
      type: props.benefit.type,
      subtype: "specific",
    });

    setChosenBenefits(cloneChosenBenefits);
  }

  function renderGenericBenefitRow(option: number) {
    return (
      <div className="flex flex-row">
        <BenefitImage benefit={props.benefit} />
        <div className="mr-2">+1</div>
        <DropDownGenericBenefit
          dropDownName={props.benefit.selected?.get(option)?.name}
          benefit={props.benefit}
          selectedKeys={
            props.benefit.selected
              ? new Set([props.benefit.selected.get(option)?.name])
              : new Set()
          }
          handleOnDropdownChange={(keys: Selection) =>
            handleOnDropdownChange(keys, option)
          }
        />
      </div>
    );
  }

  function render() {
    let rows = [];
    for (let i = 0; i < props.benefit.amount!; i++) {
      rows.push(renderGenericBenefitRow(i));
    }
    return rows;
  }

  return render();
}

export function SpecificBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      <div>{props.benefit.name}</div>
    </div>
  );
}

export function TableOptions(props: {
  rolls: number,
  benefits: BackgroundBenefit[],
  onMinusPress: () => void,
  onPlusPress: () => void
}) {
  return <Card className="w-[40%] p-4">
      <div className="flex flex-row items-center justify-center">
          <div>
              <Button
                  onPress={props.onMinusPress}
                  className="text-2xl m-2"
                  size="sm"
              >
                  -
              </Button>
          </div>
          <div>{props.rolls}</div>
          <div>
              <Button
                  onPress={props.onPlusPress}
                  className="text-2xl m-2"
                  size="sm"
              >
                  +
              </Button>
          </div>
      </div>
      <Divider className="my-2" />
      <div className="mx-auto">
          {props.benefits.map((benefit) => (
              <div className="flex-1 my-1 mx-0">
                  <SpecificBenefitCell benefit={benefit} />
              </div>
          ))}
      </div>
  </Card>
}