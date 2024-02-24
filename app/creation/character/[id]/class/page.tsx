"use client";

import { Button } from "@nextui-org/react";
import SplitDesign from "../../../components/SplitDesign";
import GameClassSelection from "./components/GameClassSelection";

export default function Page({ params }: { params: { id: string } }) {

    const gameClassesNames = ["Psyquic", "Warrior", "Expert", "Adventurer"]

    return (
        <SplitDesign
            leftChild={
                <div className="w-full h-full">
                    <GameClassSelection />
                </div>
            }
            rightChild={
                <></>
            }
        />
    );
}
