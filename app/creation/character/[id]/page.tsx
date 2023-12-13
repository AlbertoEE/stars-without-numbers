"use client";

import { Card, CardBody } from "@nextui-org/react";
import SplitDesign from "./components/SplitDesign";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <SplitDesign
      leftChild={
        <div className="grid grid-cols-2 gap-5">
          <Card isPressable onPress={
            () => router.push(`${pathName}/attributes`)
          }>
            <CardBody>Attributes</CardBody>
          </Card>
          <Card>
            <CardBody>Background</CardBody>
          </Card>
          <Card>
            <CardBody>Skills</CardBody>
          </Card>
          <Card>
            <CardBody>Class</CardBody>
          </Card>
        </div>
      }
      rightChild={<div></div>}
    />
  );
}
