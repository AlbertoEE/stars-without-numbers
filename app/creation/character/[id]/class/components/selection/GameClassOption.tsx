import { GameClassDefinition } from "@/models/GameClassDefinitionModels";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function GameClassOption(props: {
    gameClassDefinition: GameClassDefinition,
    gameClassImageName: string,
}) {
  return (
    <Card
      isBlurred
      radius="lg"
      className="border-none flex-1 rounded-none"
      isPressable
      onPress={}
    >
      <CardHeader className="flex flex-col items-center mt-auto mb-auto h-full m-0 p-0">
        <div className="select-none w-full h-full flex flex-col items-center justify-center drop-shadow-[0_4.2px_0.2px_rgba(0,0,0,1)] backdrop-blur hover:backdrop-blur-none text-white italic text-5xl transition duration-1000 ease-in-out">
          {props.gameClassDefinition.name}
        </div>
      </CardHeader>
      <Image
        fill
        alt="Woman listing to music"
        className="object-cover"
        src={`/imgs/classes/${props.gameClassImageName}`}
      />
    </Card>
  );
}
