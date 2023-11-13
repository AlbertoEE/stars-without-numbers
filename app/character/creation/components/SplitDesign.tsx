import { Card } from "@nextui-org/card";

export default function SplitDesign(props: {
    leftChild: React.ReactNode,
    rightChild: React.ReactNode,
}) {
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <Card className="flex-1">
                {props.leftChild}
            </Card>
            <Card className="flex-1">
                {props.rightChild}
            </Card>
        </div>
    )
}