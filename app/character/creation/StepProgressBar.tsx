
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useState } from "react";

export default function StepProgressBar() {

    const [test, setTest] = useState();

    return (
        <div className="fixed translate-y-[-50%] left-0 top-[50%] bg-white flex flex-col items-center justify-center p-1 rounded-r-lg">
            <Card isPressable onPress={() => setTest(!test)} className="p-3">
                prev
            </Card>
            <div className="my-2">
                <Image className="m-0" src={`/imgs/strength.svg`} alt="me" width="44" height="44" />
            </div>
            <div className={`my-2 p-1 bg-white ${test && "translate-x-4 scale-150 transform transition duration-500 rounded-lg"}`}>
                <Image className={`m-0`} src={`/imgs/strength.svg`} alt="me" width="44" height="44" />
            </div>
            <div className="my-2">
                <Image className="m-0" src={`/imgs/strength.svg`} alt="me" width="44" height="44" />
            </div>
            <div className="my-2">
                <Image className="m-0" src={`/imgs/strength.svg`} alt="me" width="44" height="44" />
            </div>
            <Card isPressable onPress={() => setTest(!test)} className="p-3">
                next
            </Card>
        </div>
    )
}
