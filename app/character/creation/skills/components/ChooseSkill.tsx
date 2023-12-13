import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { Card, CardBody, CardFooter, CheckboxGroup, Image } from "@nextui-org/react";
import { useState } from "react";

export default function ChooseSkill(props: {
    skills: SkillDefinition[]
}) {
    const [chosenSkills, setChosenSkills] = useState<string[]>([]);

    const onClickSkill = (skill: string) => {
        if (chosenSkills.includes(skill)) {
            setChosenSkills(chosenSkills => chosenSkills.filter(e => e != skill))
            return
        }

        if (chosenSkills.length == 2) return
        setChosenSkills(choosenSkills => [...choosenSkills, skill])
    }

    return (<>
        <div className="text-center">
            <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">Choose 2 Skills</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full p-5">
            {["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8"].map(e =>
                <Card key={e}
                    isPressable
                    onPress={() => onClickSkill(e)}
                    {...(chosenSkills.includes(e) && { className: "bg-cyan-950" })}
                >
                    <CardBody className="flex flex-row justify-center">
                        <Image className="ml-4" src={`/imgs/attributes/strength.svg`} alt="me" width="64" height="64" />
                    </CardBody>
                    <CardFooter className="text-small justify-center">
                        {e}
                    </CardFooter>
                </Card>
            )}
        </div>
    </>
    )
}