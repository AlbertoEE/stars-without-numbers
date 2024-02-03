import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { useStore } from "../../../state";
import ChooseBenefitCell from "./ChooseBenefitCell";
import TabStructure from "../commons/TabStructure";
import ChooseMain from "./ChooseMain";

export default function ChooseBenefitsTab(props: {
  background: BackgroundDefinition;
}) {
  const description =
    "Here you can pick two other skills from the table below.\n\n You may pick the same skill twice if you wish, to improve its starting proficiency.\n\n No starting character can begin with a skill level higher than level-1.";
  return (
    <TabStructure
      description={description}
      children={<ChooseMain background={props.background} />}
    />
  );
}
