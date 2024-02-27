import { BackgroundBenefit, BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { useEffect } from "react";
import PredifinedBenefitCell from "./PredifinedBenefitCell";
import { useStoreBackgroundState } from "../../../../state";

export default function PredifinedMain(props: { backgroundDefinition: BackgroundDefinition }) {
    const {
        focusedBackground: detailBackground,
        chosenBenefits,
        setChosenBenefits,
    } = useStoreBackgroundState();
    
    useEffect(() => {
        const predifinedBenefits: BackgroundBenefit[] = [];

        props.backgroundDefinition.benefits.predifined
            .filter((benefit) => benefit.subtype == "specific")
            .forEach((benefit) => {
                predifinedBenefits.push(benefit);
            });

        predifinedBenefits.push(props.backgroundDefinition.benefits.free);

        setChosenBenefits(predifinedBenefits);
    }, [detailBackground]);

    return (
        <>
            <div className="flex flex-col">
                {props.backgroundDefinition.benefits.predifined.map((benefit) => (
                    <div className="flex-1 py-1 px-3">
                        <PredifinedBenefitCell benefit={benefit} />
                    </div>
                ))}
                {
                    <div className="flex-1 py-1 px-3">
                        <PredifinedBenefitCell
                            benefit={props.backgroundDefinition.benefits.free}
                        />
                    </div>
                }
            </div>
        </>
    );
}