"use client";

import SplitDesign from "../../../components/SplitDesign";
import { useStoreFociState } from "../state";
import FocusList from "./FocusList";
import { Image } from "@nextui-org/react";

export default function Page({ params }: { params: { id: string } }) {
  const { focusedFocus } = useStoreFociState();

  return (
    <SplitDesign
      leftChild={<FocusList />}
      rightChild={ true &&
        <div className="w-full h-full flex flex-col p-5 justify-evenly">
          <div className="flex flex-row items-center gap-4">
            <Image
              className=""
              src={`/imgs/backgrounds/clergy.svg`}
              alt="me"
              width="64"
              height="64"
            />
            <h1 className="text-4xl">Alert</h1>
          </div>
          <div>
            Your hero gets around. As part of a life on the road, they’ve
            mastered a number of tricks for ensuring their mobility and
            surviving the inevitable difficulties of a vagabond existence.
          </div>
          <div>
            <h2 className="text-2xl italic">Level 1</h2>
            <div>
              Gain Survive as a bonus skill. You can convey basic ideas in all
              the common languages of the sector. You can always find free
              transport to a de- sired destination for yourself and a small
              group of your friends provided any traffic goes to the place.
              Finding this transport takes no more than an hour, but it may not
              be a strictly legitimate means of travel and may require working
              passage.
            </div>
          </div>
          <div>
            <h2 className="text-2xl italic">Level 2</h2>
            <div>
              You can forge, scrounge, or snag travel papers and identification
              for the party with 1d6 hours of work. These papers and permits
              will stand up to ordinary scrutiny, but require an opposed Int/
              Administer versus Wis/Notice check if examined by an official
              while the PC is actually wanted by the state for some crime. When
              finding transport for the party, the transportation always makes
              the trip at least as fast as a dedicated charter would.
            </div>
          </div>
        </div>
      }
    />
  );
}
