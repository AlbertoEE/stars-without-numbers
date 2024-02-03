import {
    BackgroundBenefit,
    BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import { Button } from "@nextui-org/react";
import { deleteBenefitByName, useStoreBackgroundState } from "../../../../state";

export default function ButtonLevelUpBenefit(props: {
  backgroundBenefit: BackgroundBenefit;
  dropdownChosenBenefit: string | undefined;
}) {
  const {
    chosenBenefits,
    focusedBackground: detailBackground,
    setChosenBenefits,
  } = useStoreBackgroundState();

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
      props.backgroundBenefit.name == detailBackground?.benefits.free.name;
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
        onPress={() => handleChooseSkill("minus")}
      >
        -
      </Button>
      <div className="min-w-unit-6 text-right">
        {skillLevel === -1 ? "❌" : skillLevel}
      </div>
      <div>LvL</div>
      <Button
        isIconOnly
        isDisabled={
          (!props.dropdownChosenBenefit &&
            props.backgroundBenefit.subtype !== "specific") ||
          checkFreeAlreadyMaxLevel()
        }
        className="h-4"
        onPress={() => handleChooseSkill("plus")}
      >
        +
      </Button>
    </>
  );
}
