"use client";

import SplitDesign from "../../../components/SplitDesign";

export default function Page({ params }: { params: { id: string } }) {

    const gameClassesNames = ["Psyquic", "Warrior", "Expert", "Adventurer"]

    return (
        <SplitDesign
            leftChild={
                <></>
            }
            rightChild={
                <></>
            }
        />
    );
}
