import { Card, CardBody, CardFooter, CheckboxGroup, Image } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";
import { useState } from "react";

export default function ChooseSkill() {
    const [groupSelected, setGroupSelected] = useState<string[]>([]);

    return (
        <div className="grid grid-cols-2 gap-2 w-full">
            {["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8"].map(e =>
                <Card key={e} isPressable onPress={() => {
                    setGroupSelected(choosenSkills => [...choosenSkills, e])
                    
                }}>
                    <CardBody className="flex flex-row justify-center">
                        <Image className="ml-4 mb-4" src={`/imgs/attributes/strength.svg`} alt="me" width="64" height="64" />
                    </CardBody>
                    <CardFooter className="text-small justify-center">
                        {e}
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}