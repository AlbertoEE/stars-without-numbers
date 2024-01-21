import {
  BackgroundBenefit,
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import PredifinedBenefitCell from "./PredifinedBenefitCell";
import { Button } from "@nextui-org/react";
import { useStore } from "../../../state";
import { useEffect } from "react";

export default function PredefinedBenefitsTab(props: {
  background: BackgroundDefinition;
}) {
  const { chosenSkills, setChosenSkills,detailBackground } = useStore();
  useEffect(() => {
    const newChosenSkills = new Map(chosenSkills); // Create a new Map based on the current state

    props.background.benefits.predifined.forEach((benefit) => {
      if (benefit.subtype == "specific") {
        newChosenSkills.set(benefit.name, 0); // Update the new Map inside the loop
      }
    });

    setChosenSkills(newChosenSkills);
  }, [detailBackground]);

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
      <div className="flex flex-col">
        {props.background.benefits.predifined.map((benefit) => (
          <div className="flex-1 py-1 px-3" key={benefit.name}>
            <PredifinedBenefitCell benefit={benefit} />
          </div>
        ))}
      </div>
    </>
  );
}
