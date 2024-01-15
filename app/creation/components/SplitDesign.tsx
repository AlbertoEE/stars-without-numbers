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
      <div className="h-[90%] w-1/2 flex flex-col items-center">
        <Card className="h-[90%] w-full">{props.leftChild}</Card>
        <Button className="m-5" onPress={() => router.push(path.join("/"))}>BACK</Button>
      </div>

      <div className="h-[90%] w-1/2 flex flex-col items-center">
        <Card className="w-full h-[90%]">{props.rightChild}</Card>
        <Button className="m-5" onPress={() => router.push(path.join("/"))}>DONE</Button>
      </div>
    </div >
  );
}
