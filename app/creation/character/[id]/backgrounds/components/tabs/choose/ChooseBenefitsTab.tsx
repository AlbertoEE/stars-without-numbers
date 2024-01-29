import {
  BackgroundDefinition
} from "@/models/BackgroundDefinitionModels";
import { useStore } from "../../../state";
import ChooseBenefitCell from "./ChooseBenefitCell";

export default function ChooseBenefitsTab(props: {
  background: BackgroundDefinition;
}) {
  const { chosenBenefits } = useStore();

  return (
    <>
      <div className="p-5 whitespace-pre-line">
        {"Here you can pick two other skills from the table below.\n\n You may pick the same skill twice if you wish, to improve its starting proficiency. No starting character can begin with a skill level higher than level-1."}
      </div>
      <div>{2 + "/2"}</div>
      <div className="flex flex-col">
        {props.background.benefits.learning.map((benefit) => (
          <div className="flex-1 py-1 px-3">
            <ChooseBenefitCell benefit={benefit} />
          </div>
        ))}
      </div>
      <div>
        {chosenBenefits.map(e => e.name)}
      </div>
    </>
  );
}
