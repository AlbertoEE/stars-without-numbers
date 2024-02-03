import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function SplitDesign(props: {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname().split("/");
  path.pop()

  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full h-full">
      <Card className="h-[80%] w-1/2 flex flex-col items-center">{props.leftChild}</Card>
      <Card className="h-[80%] w-1/2 flex flex-col items-center">{props.rightChild}</Card>
    </div >
  );
}
