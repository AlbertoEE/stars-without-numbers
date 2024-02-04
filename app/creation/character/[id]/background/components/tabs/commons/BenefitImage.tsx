import { BackgroundBenefit, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import { Image } from "@nextui-org/react";

export default function BenefitImage(props: {
    benefit: BackgroundBenefit
}) {
  let folderPath =
    props.benefit.type == BackgroundBenefitType.stat
      ? "/imgs/attributes/"
      : "/imgs/skills/";
  return (
    <Image
      loading="eager"
      className="mx-4 my-0 flex-1"
      src={folderPath + props.benefit.name + ".svg"}
      alt="me"
      width="24"
      height="24"
    />
  );
}