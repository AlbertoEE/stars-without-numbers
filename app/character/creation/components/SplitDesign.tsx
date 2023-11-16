import { Card } from "@nextui-org/card";

export default function SplitDesign(props: {
    leftChild: React.ReactNode,
    rightChild: React.ReactNode,
}) {
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <Card className="flex-1 h-[90vh]">
                {props.leftChild}
            </Card>
            <Card className="flex-1 max-h-[90vh]">
                {props.rightChild}
            </Card>
        </div>
    )
}