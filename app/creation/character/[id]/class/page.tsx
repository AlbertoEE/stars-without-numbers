"use client";

import { Button } from "@nextui-org/react";
import SplitDesign from "../../../components/SplitDesign";
import GameClassSelection from "./components/selection/GameClassSelection";
import GameClassDescription from "./components/selection/GameClassDescription";

export default function Page({ params }: { params: { id: string } }) {

    const gameClassesNames = ["Psyquic", "Warrior", "Expert", "Adventurer"]

    return (
        <SplitDesign
            leftChild={
                <GameClassSelection />
            }
            rightChild={
                <GameClassDescription />
            }
        />
    );
}
