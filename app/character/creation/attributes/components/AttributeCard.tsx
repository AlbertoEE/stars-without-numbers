import { Card, CardBody } from "@nextui-org/card";
import { Draggable } from "react-beautiful-dnd";

export default function AttributeCard(props: { 
  name: string;
  value: number;
}) {
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <Card>
      <CardBody className="flex flex-row items-center place-content-around">
        <Card>
          <CardBody>
            {props.name}
          </CardBody>
        </Card>
        <Card>
          <CardBody onDrop={()=>{}} onDragOver={handleDragOver}>
            {props.value}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}
