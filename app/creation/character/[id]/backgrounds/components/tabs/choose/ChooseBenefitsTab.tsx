import { Tab } from "@nextui-org/react";
import BackgroundSkillTypeSection from "../BackgroundSkillTypeSection";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";

export default function ChooseBenefitsTab(props: {
    background: BackgroundDefinition;
  }) {
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
      <BackgroundSkillTypeSection
        rows={9}
        columns={1}
        benefits={props.background.benefits.learning.map((e) => e.name)}
        skillBuyMethod="choose"
      />
    </>
  );
}
