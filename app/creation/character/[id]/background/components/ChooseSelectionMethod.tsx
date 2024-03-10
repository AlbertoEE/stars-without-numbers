import {
  type BackgroundBenefit,
  BackgroundBenefitType,
  type BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import {
  addBenefit,
  deleteBenefitByName,
  useStoreBackgroundState,
} from "../../state";
import { Button } from "@nextui-org/react";
import { useState, type Key } from "react";
import BenefitImage from "./commons/BenefitImage";
import DropDownGenericBenefit from "./commons/DropDownGenericBenefit";

export default function ChooseSelectionMethod(props: {
  backgroundDefinition: BackgroundDefinition;
}) {
  const { chosenBenefits } = useStoreBackgroundState();

  return (
    <>
      <h1 className="text-xl mb-4">
        Upgrade up to <span>{`[${2 - (chosenBenefits.length - 1)}]`}</span>{" "}
        skills
      </h1>
      <div className="flex flex-col mx-auto">
        {props.backgroundDefinition.benefits.learning
          .filter(
            (obj, index, self) =>
              index === self.findIndex((t) => t.name === obj.name)
          )
          .map((benefit) => (
            <div className="flex-1 py-1 px-3">
              <ChooseBenefitCell benefit={benefit} />
            </div>
          ))}
      </div>
    </>
  );
}

export function ChooseBenefitCell(props: { benefit: BackgroundBenefit }) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();
  const [selectedKeys, setSelectedKeys] = useState<
    Iterable<Key> | undefined | "all"
  >(undefined);

  function handleOnDropdownChange(keys: Selection) {
    const cloneChosenBenefits = [...chosenBenefits];
    deleteBenefitByName(cloneChosenBenefits, selectedKeys?.currentKey);
    setSelectedKeys(keys);
    setChosenBenefits(cloneChosenBenefits);
  }

  function renderSpecificBenefit() {
    return <div>{props.benefit.name}</div>;
  }

  function renderGenericBenefit() {
    return (
      <DropDownGenericBenefit
        benefit={props.benefit}
        selectedKeys={selectedKeys}
        handleOnDropdownChange={handleOnDropdownChange}
      />
    );
  }

  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <ButtonLevelUpBenefit
        backgroundBenefit={props.benefit}
        dropdownChosenBenefit={selectedKeys?.currentKey}
      />
      <BenefitImage benefit={props.benefit} />
      {props.benefit.subtype === "specific"
        ? renderSpecificBenefit()
        : renderGenericBenefit()}
    </div>
  );
}

export function ButtonLevelUpBenefit(props: {
  backgroundBenefit: BackgroundBenefit;
  dropdownChosenBenefit: string | undefined;
}) {
  const { chosenBenefits, focusedBackground, setChosenBenefits } =
    useStoreBackgroundState();

  function handleChooseSkill(sign: "plus" | "minus") {
    const chosenBenefit: BackgroundBenefit = getChosenBenefit();
    const cloneChosenBenefits: BackgroundBenefit[] = [...chosenBenefits];

    if (sign === "plus" && chosenBenefits.length < 3) {
      addBenefit(cloneChosenBenefits, chosenBenefit);
    } else if (sign === "minus" && chosenBenefits.length != 1) {
      if (cloneChosenBenefits.find((e) => e.name == chosenBenefit.name)) {
        deleteBenefitByName(cloneChosenBenefits, chosenBenefit.name);
      }
    }

    setChosenBenefits(cloneChosenBenefits);
  }

  function getChosenBenefit(): BackgroundBenefit {
    return props.backgroundBenefit.subtype === "specific" ||
      props.dropdownChosenBenefit == undefined
      ? props.backgroundBenefit
      : {
          type: BackgroundBenefitType.skill,
          subtype: "specific",
          name: props.dropdownChosenBenefit,
        };
  }

  const skillLevel =
    chosenBenefits.filter(
      (benefit) =>
        benefit.name ==
        (props.backgroundBenefit.subtype === "specific" ||
        props.dropdownChosenBenefit == undefined
          ? props.backgroundBenefit.name
          : props.dropdownChosenBenefit)
    ).length - 1;

  function checkBenefitCount(expectedCount: number): boolean {
    const isBenefitNameMatch =
      props.backgroundBenefit.name == focusedBackground?.benefits.free.name;
    const benefitCount = chosenBenefits.filter(
      (e) => e.name == props.backgroundBenefit.name
    ).length;

    return isBenefitNameMatch && benefitCount == expectedCount;
  }

  function checkFreeIsStillInChosenBenefits() {
    return checkBenefitCount(1);
  }

  function checkFreeAlreadyMaxLevel() {
    return checkBenefitCount(2);
  }

  return (
    <>
      <Button
        isIconOnly
        isDisabled={
          (!props.dropdownChosenBenefit &&
            props.backgroundBenefit.subtype !== "specific") ||
          checkFreeIsStillInChosenBenefits()
        }
        className="h-4"
        onPress={() => { handleChooseSkill("minus"); }}
      >
        -
      </Button>
      <Button
        isIconOnly
        isDisabled={
          (!props.dropdownChosenBenefit &&
            props.backgroundBenefit.subtype !== "specific") ||
          checkFreeAlreadyMaxLevel()
        }
        className="h-4"
        onPress={() => { handleChooseSkill("plus"); }}
      >
        +
      </Button>
      <div>LvL</div>
      <div className="min-w-unit-6 text-center">
        {skillLevel === -1 ? "❌" : skillLevel}
      </div>
    </>
  );
}
