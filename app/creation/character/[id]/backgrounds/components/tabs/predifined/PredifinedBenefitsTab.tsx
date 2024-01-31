import {
  BackgroundDefinition
} from "@/models/BackgroundDefinitionModels";
import { useEffect } from "react";
import { SimpleBenefit, useStore } from "../../../state";
import PredifinedBenefitCell from "./PredifinedBenefitCell";

export default function PredefinedBenefitsTab(props: {
  backgroundDefinition: BackgroundDefinition;
}) {
  const { focusedBackground: detailBackground, chosenBenefits, setChosenBenefits } = useStore();
  useEffect(() => {
    const predifinedBenefits: SimpleBenefit[] = []; // Create a new Map based on the current state

    props.backgroundDefinition.benefits.predifined.forEach((benefit) => {
      if (benefit.subtype == "specific") {
        predifinedBenefits.push({ name: benefit.name, type: "skill" });
      }
    });

    if (props.backgroundDefinition.benefits.free.subtype == "specific") {
      predifinedBenefits.push({ name: props.backgroundDefinition.benefits.free.name, type: "skill" })
    }

    setChosenBenefits(predifinedBenefits);
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
        {props.backgroundDefinition.benefits.predifined.map((benefit) => (
          <div className="flex-1 py-1 px-3">
            <PredifinedBenefitCell benefit={benefit} />
          </div>
        ))}
        {
          <div className="flex-1 py-1 px-3">
            <PredifinedBenefitCell benefit={props.backgroundDefinition.benefits.free} />
          </div>
        }
      </div>
      <div>
        {chosenBenefits.map(e => e.name)}
      </div>
    </>
  );
}
