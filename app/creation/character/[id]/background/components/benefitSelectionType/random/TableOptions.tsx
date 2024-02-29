import { Button, Card, Divider } from "@nextui-org/react";
import SpecificBenefitCell from "./SpecificBenefitCell";
import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";

export default function TableOptions(props: {
    rolls: number,
    benefits: BackgroundBenefit[],
    onMinusPress: () => void,
    onPlusPress: () => void
}) {
    return <Card className="w-[40%] p-4">
        <div className="flex flex-row items-center justify-center">
            <div>
                <Button
                    onPress={props.onMinusPress}
                    className="text-2xl m-2"
                    size="sm"
                >
                    -
                </Button>
            </div>
            <div>{props.rolls}</div>
            <div>
                <Button
                    onPress={props.onPlusPress}
                    className="text-2xl m-2"
                    size="sm"
                >
                    +
                </Button>
            </div>
        </div>
        <Divider className="my-2" />
        <div className="mx-auto">
            {props.benefits.map((benefit) => (
                <div className="flex-1 my-1 mx-0">
                    <SpecificBenefitCell benefit={benefit} />
                </div>
            ))}
        </div>
    </Card>
}