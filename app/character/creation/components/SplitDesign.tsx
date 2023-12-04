import { Card } from "@nextui-org/card";
import { CardBody } from "@nextui-org/react";

export default function SplitDesign(props: {
    leftChild: React.ReactNode,
    rightChild: React.ReactNode,
}) {
    return (
        <div className="flex flex-row items-center justify-center gap-4 w-full">
            <Card className="flex-1 max-h-[90vh]">
                <CardBody>
                    {props.leftChild}
                </CardBody>
            </Card>
            <Card className="flex-1 max-h-[90vh]">
                <CardBody>
                    {props.rightChild}
                </CardBody>
            </Card>
        </div>
    )
}