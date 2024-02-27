import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import TabStructure from "../commons/TabStructure";
import RandomMain from "./RandomMain";

export default function RandomSkillTab(props: {
  background: BackgroundDefinition;
}) {
  const description = `You can randomly choose up to 4 background benefits. \n\nDistribute 3 dice between two tables.\n\n As a ${props.background.name}, you gain the ${props.background.benefits.free.name} skill for free.`;

  return (
    <TabStructure
      description={""}
      children={<RandomMain backgroundDefinition={props.background} />}
    />
  );
}
