import BackgroundSkillTypeSection from "../BackgroundSkillTypeSection";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { useStore } from "../../../state";

export default function ChooseBenefitsTab(props: {
  background: BackgroundDefinition;
}) {
  const {chosenSkills} = useStore();

  function calculateTotalSkillPoints(): number {
    return Array.from(chosenSkills.values()).reduce(
      (total, level) => total + (level ? level + 1 : 1),
      0
    );
  }

  return (
    <>
      <div className="p-5">
        Here you can pick two other skills from the table below.
        <br />
        <br />
        You may pick the same skill twice if you wish, to improve its starting
        proficiency.
        <br />
        <br />
        No starting character can begin with a skill level higher than level-1.
      </div>
      <div>{calculateTotalSkillPoints() + "/2"}</div>
      <BackgroundSkillTypeSection
        rows={9}
        columns={1}
        benefits={props.background.benefits.learning}
        skillBuyMethod="choose"
      />
    </>
  );
}
