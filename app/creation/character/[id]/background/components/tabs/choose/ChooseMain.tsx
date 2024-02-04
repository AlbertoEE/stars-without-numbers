import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import ChooseBenefitCell from "./ChooseBenefitCell";
import { Card, CardBody } from "@nextui-org/react";
import { useStoreBackgroundState } from "../../../../state";

export default function ChooseMain(props: {
  background: BackgroundDefinition;
}) {
  const { chosenBenefits } = useStoreBackgroundState();

  return (
    <>
      <Card className="h-12 w-24 m-auto mb-4">
        <CardBody className="text-center justify-center">
          {chosenBenefits.length - 1 + "/2"}
        </CardBody>
      </Card>
      <div className="flex flex-col">
        {props.background.benefits.learning
          .filter(
            (obj, index, self) =>
              index === self.findIndex((t) => t.name === obj.name)
          )
          .map((benefit) => (
            <div className="flex-1 py-1 px-3">
              <ChooseBenefitCell benefit={benefit} />
            </div>
          ))}
      </div>
      <div>{chosenBenefits.map((e) => e.name)}</div>
    </>
  );
}