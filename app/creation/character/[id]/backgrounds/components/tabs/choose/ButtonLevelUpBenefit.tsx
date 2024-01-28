import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import {
  SimpleBenefit,
  addBenefit,
  deleteBenefit,
  useStore,
} from "../../../state";
import { Button } from "@nextui-org/react";

export default function ButtonLevelUpBenefit(props: {
  benefit: BackgroundBenefit;
  chosenBenefit: string | undefined;
}) {
  const {
    chosenBenefits,
    setChosenBenefits,
    chosenSkillPointsLeft,
    setChosenSkillPointsLeft,
  } = useStore();

  function handleChooseSkill(sign: "plus" | "minus") {
    const benefitName = getBenefitName();
    const cloneChosenBenefits: SimpleBenefit[] = [...chosenBenefits];

    if (sign === "plus" && chosenBenefits.length < 2) {
      addBenefit(cloneChosenBenefits, benefitName, "skill");
    } else if (sign === "minus" && chosenBenefits.length != 0) {
      if (cloneChosenBenefits.find((e) => e.name == benefitName)) {
        deleteBenefit(cloneChosenBenefits, benefitName);
      }
    }

    setChosenBenefits(cloneChosenBenefits);
  }

  function getBenefitName() {
    return props.benefit.subtype === "specific" ||
      props.chosenBenefit == undefined
      ? props.benefit.name
      : props.chosenBenefit;
  }

  const skillLevel = chosenBenefits.filter(
    (benefit) =>
      benefit.name ==
      (props.benefit.subtype === "specific" || props.chosenBenefit == undefined
        ? props.benefit.name
        : props.chosenBenefit)
  ).length - 1;

  return (
    <>
      <Button
        isIconOnly
        isDisabled={
          !props.chosenBenefit && props.benefit.subtype !== "specific"
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
          !props.chosenBenefit && props.benefit.subtype !== "specific"
        }
        className="h-4"
        onPress={() => handleChooseSkill("plus")}
      >
        +
      </Button>
    </>
  );
}
