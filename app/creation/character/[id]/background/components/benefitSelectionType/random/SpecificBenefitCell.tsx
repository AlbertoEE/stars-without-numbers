import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import BenefitImage from "../commons/BenefitImage";

export default function SpecificBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      <div>{props.benefit.name}</div>
    </div>
  );
}