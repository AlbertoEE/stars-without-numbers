import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";

export default function GameClassSelection() {
  return (
    <div className="flex flex-col h-full w-full">
      <Card isBlurred radius="lg" className="border-none flex-1 rounded-none" isPressable>
        <CardHeader className="flex flex-col items-center mt-auto mb-auto h-full m-0 p-0">
          <div className="select-none w-full h-full flex flex-col items-center justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] backdrop-blur hover:backdrop-blur-none text-white italic text-5xl transition duration-1000 ease-in-out">
            PSYCHIC
          </div>
        </CardHeader>
        <Image
          fill
          alt="Woman listing to music"
          className="object-cover"
          src="/imgs/classes/psionic.jpeg"
        />
      </Card>
      <Card isBlurred radius="lg" className="border-none flex-1 rounded-none" isPressable>
        <CardHeader className="flex flex-col items-center mt-auto mb-auto h-full m-0 p-0">
          <div className="select-none w-full h-full flex flex-col items-center justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] backdrop-blur hover:backdrop-blur-none text-white italic text-5xl transition duration-1000 ease-in-out">
            EXPERT
          </div>
        </CardHeader>
        <Image
          fill
          alt="Woman listing to music"
          className="object-cover"
          src="/imgs/classes/expert.jpg"
        />
      </Card>
      <Card isBlurred radius="lg" className="border-none flex-1 rounded-none" isPressable>
        {" "}
        <CardHeader className="flex flex-col items-center mt-auto mb-auto h-full m-0 p-0">
          <div className="select-none w-full h-full flex flex-col items-center justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] backdrop-blur hover:backdrop-blur-none text-white italic text-5xl transition duration-1000 ease-in-out">
            WARRIOR
          </div>
        </CardHeader>
        <Image
          fill
          alt="Woman listing to music"
          className="object-cover"
          src="/imgs/classes/warrior.png"
        />
      </Card>
      <Card isBlurred radius="lg" className="border-none flex-1 rounded-none" isPressable>
        {" "}
        <CardHeader className="flex flex-col items-center mt-auto mb-auto h-full m-0 p-0">
          <div className="select-none w-full h-full flex flex-col items-center justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] backdrop-blur hover:backdrop-blur-none text-white italic text-5xl transition duration-1000 ease-in-out">
            ADVENTURER
          </div>
        </CardHeader>
        <Image
          fill
          alt="Woman listing to music"
          className="object-cover"
          src="/imgs/classes/adventurer.png"
        />
      </Card>
    </div>
  );
}
