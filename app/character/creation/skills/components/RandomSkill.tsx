import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { useState } from "react";

export default function RandomSKill() {

    const [chosenSkills, setChosenSkills] = useState<string[]>([]);
    const [availableRolls, setAvailableRolls] = useState<number>(3);

    return (
        <>
            <div>
                <div className="flex flex-row items-center justify-around m-2">
                    <Card className="w-12 h-12 align" isPressable >
                        <CardBody className="text-center justify-center">🎲</CardBody>
                    </Card>
                    <div className="ml-1">Learning table</div>
                    <Card className="w-12 h-12" isPressable >
                        <CardBody className="text-center justify-center">🎲</CardBody>
                    </Card>
                    <div className="ml-1">Growth table</div>
                    <Card className="h-12" isPressable >
                        <CardBody className="text-center justify-center">3/3</CardBody>
                    </Card>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex flex-row items-center">
                        <h2 className="font-orbitron font-bold uppercase tracking-widest text-1xl p-4">Learning Table</h2>
                    </div>                <div className="grid grid-cols-4 gap-5 w-full p-5">
                        {["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8"].map(e =>
                            <Card key={e}
                                {...(chosenSkills.includes(e) && { className: "bg-cyan-950" })}
                            >
                                <CardBody className="flex flex-row justify-center">
                                    <Image className="ml-4" src={`/imgs/attributes/strength.svg`} alt="me" width="48" height="48" />
                                </CardBody>
                                <CardFooter className="text-small justify-center">
                                    {e}
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center">
                        <h2 className="font-orbitron font-bold uppercase tracking-widest text-1xl p-4">Growth Table</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-5 w-full p-5">
                        {["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"].map(e =>
                            <Card key={e}
                                {...(chosenSkills.includes(e) && { className: "bg-cyan-950" })}
                            >
                                <CardBody className="pb-0 flex flex-row justify-center">
                                    <Image className="ml-4" src={`/imgs/attributes/strength.svg`} alt="me" width="48" height="48" />
                                </CardBody>
                                <CardFooter className="text-small justify-center">
                                    {e}
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}