import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import TabStructure from "../commons/TabStructure";
import RandomMain from "./RandomMain";

export default function RandomSkillTab(props: {
  background: BackgroundDefinition;
}) {
  const description = `If you opt for a random selection of benefits from your background, you can acquire a maximum of 4 benefits.\n\nYou have 3 dice at your disposal to distribute across two tables.\n\nDue to your background, specifically as a ${props.background.name}, you receive the skill of ${props.background.benefits.free.name} at no cost.`;

  return (
    <TabStructure
      description={description}
      children={<RandomMain background={props.background} />}
    />
  );
}
