import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import TabStructure from "../commons/TabStructure";
import ChooseMain from "./ChooseMain";

export default function ChooseBenefitsTab(props: {
  background: BackgroundDefinition;
}) {
  const description =
    "Here you can pick two other skills from the table below.\n\n You may pick the same skill twice if you wish, to improve its starting proficiency.\n\n No starting character can begin with a skill level higher than level-1.";
  return (
    <TabStructure
      description={""}
      children={<ChooseMain backgroundDefinition={props.background} />}
    />
  );
}
