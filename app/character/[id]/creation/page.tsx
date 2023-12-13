import { Card, CardBody } from "@nextui-org/react";
import SplitDesign from "./components/SplitDesign";

export default function Page() {
  return (
    <SplitDesign
      leftChild={
        <div className="grid grid-cols-2 gap-5">
          <Card>
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
