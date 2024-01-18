import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import { useStore } from "../../../state";
import { Button } from "@nextui-org/react";

export default function ButtonLevelUpBenefit(props: {
  benefit: BackgroundBenefit;
  chosenBenefit: string | undefined;
}) {
  const { chosenSkills, setChosenSkills } = useStore();

  function handleChooseSkill(sign: "plus" | "minus") {
    const benefitName = getBenefitName();
    const cloneChosenSkills = new Map(chosenSkills);

    const currentSkillLevel = chosenSkills.get(benefitName);
    const totalSkillPoints = calculateTotalSkillPoints();

    if (sign === "plus" && totalSkillPoints < 2) {
      updateSkillLevelPlus(cloneChosenSkills, benefitName, currentSkillLevel);
    } else if (sign === "minus") {
      updateSkillLevelMinus(cloneChosenSkills, benefitName, currentSkillLevel);
    }

    setChosenSkills(cloneChosenSkills);
  }

  function getBenefitName() {
    return props.benefit.subtype === "specific" ||
      props.chosenBenefit == undefined
      ? props.benefit.name
      : props.chosenBenefit;
  }

        function calculateTotalSkillPoints(): number {
            return Array.from(chosenSkills.values()).reduce(
            (total, level) => total + (level ? level + 1 : 1),
            0
            );
        }

  function updateSkillLevelPlus(
    cloneChosenSkills: Map<string, number>,
    benefitName: string,
    currentSkillLevel: number | undefined
  ) {
    if (currentSkillLevel == undefined) {
      cloneChosenSkills.set(benefitName, 0);
    } else {
      cloneChosenSkills.set(benefitName, currentSkillLevel + 1);
    }
  }

  function updateSkillLevelMinus(
    cloneChosenSkills: Map<string, number>,
    benefitName: string,
    currentSkillLevel: number | undefined
  ) {
    if (currentSkillLevel == undefined) return;

    if (currentSkillLevel === 0) {
      cloneChosenSkills.delete(benefitName);
    } else {
      cloneChosenSkills.set(benefitName, currentSkillLevel - 1);
    }
  }

  const skillLevel = chosenSkills.get(
    props.benefit.subtype === "specific" || props.chosenBenefit == undefined
      ? props.benefit.name
      : props.chosenBenefit
  );

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
        {skillLevel === undefined ? "❌" : skillLevel}
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
