import { Button, Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function GameClassDescription() {
    return <div className="w-full h-full flex flex-col p-10 justify-evenly">
        <div>
            <div className="text-2xl">Re-roll Skill Check</div>
            <div>Once per scene, you can reroll a failed skill check, taking the new roll if it’s better.</div>
        </div>
        <div>
            <div className="text-2xl">Extra Skill Points</div>
            <div>When you advance an experience level, you gain a bonus skill point that can be spent on any non-combat, non-psychic skill. You can save this point to spend later if you wish.</div>
        </div>
        <div>
            <div className="text-2xl">Free non-combat focus</div>
            <div>
                You gain a free level in a non-combat focus.
            </div>
        </div>
        <div className="flex flex-row justify-center">
            <Button color="primary">Select Class</Button>
        </div>
    </div>;
}