import {
  BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels";
import PredifinedMain from "./PredifinedMain";
import TabStructure from "../commons/TabStructure";

export default function PredefinedBenefitsTab(props: {
  backgroundDefinition: BackgroundDefinition;
}) {

  const description = `If you prefer to avoid the hassle of selecting or rolling dice to obtain specific advantages for your character's background, simply opt for this choice, and the benefits shown will automatically be allocated to your character.`

  return <TabStructure description={""}>
    <PredifinedMain backgroundDefinition={props.backgroundDefinition} />
  </TabStructure>
}
