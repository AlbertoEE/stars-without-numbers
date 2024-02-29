import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { useStoreBackgroundState } from "../../../../state";
import ChooseBenefitCell from "./ChooseBenefitCell";

export default function ChooseMain(props: {
  backgroundDefinition: BackgroundDefinition;
}) {
  const { chosenBenefits } = useStoreBackgroundState();

  return (
    <>
      <h1 className="text-xl mb-4">Upgrade up to <span className="italic">{chosenBenefits.length - 1 + "/2"}</span> skills</h1>
      <div className="flex flex-col mx-auto">
        {props.backgroundDefinition.benefits.learning
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
    </>
  );
}
