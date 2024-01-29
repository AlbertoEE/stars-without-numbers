import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import { Button } from "@nextui-org/react";
import {
  SimpleBenefit,
  addBenefit,
  deleteBenefit,
  useStore,
} from "../../../state";

export default function ButtonLevelUpBenefit(props: {
  backgroundBenefit: BackgroundBenefit;
  dropdownChosenBenefit: string | undefined;
}) {
  const {
    chosenBenefits,
    detailBackground,
    setChosenBenefits,
  } = useStore();

  function handleChooseSkill(sign: "plus" | "minus") {
    const benefitName = getBenefitName();
    const cloneChosenBenefits: SimpleBenefit[] = [...chosenBenefits];

    if (sign === "plus" && chosenBenefits.length < 3) {
      addBenefit(cloneChosenBenefits, benefitName, "skill");
    } else if (sign === "minus" && chosenBenefits.length != 1) {
      if (cloneChosenBenefits.find((e) => e.name == benefitName)) {
        deleteBenefit(cloneChosenBenefits, benefitName);
      }
    }

    setChosenBenefits(cloneChosenBenefits);
  }

  function getBenefitName() {
    return props.backgroundBenefit.subtype === "specific" ||
      props.dropdownChosenBenefit == undefined
      ? props.backgroundBenefit.name
      : props.dropdownChosenBenefit;
  }

  const skillLevel = chosenBenefits.filter(
    (benefit) =>
      benefit.name ==
      (props.backgroundBenefit.subtype === "specific" || props.dropdownChosenBenefit == undefined
        ? props.backgroundBenefit.name
        : props.dropdownChosenBenefit)
  ).length - 1;

  function checkFreeIsStillInChosenBenefits() {
    return props.backgroundBenefit.name == detailBackground?.benefits.free[0].name && chosenBenefits.filter(e => e.name == props.backgroundBenefit.name).length == 1
  }

  return (
    <>
      <Button
        isIconOnly
        isDisabled={
          (!props.dropdownChosenBenefit && props.backgroundBenefit.subtype !== "specific") || checkFreeIsStillInChosenBenefits()
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
          !props.dropdownChosenBenefit && props.backgroundBenefit.subtype !== "specific"
        }
        className="h-4"
        onPress={() => handleChooseSkill("plus")}
      >
        +
      </Button>
    </>
  );
}
