import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";
import { Image } from "@nextui-org/react";


export const CustomCheckbox = () => {
    return (
        <Checkbox
            classNames={{
                base: cn(
                    "inline-flex max-w-md w-full bg-content1 m-0",
                    "hover:bg-content2 items-center justify-start",
                    "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                    "data-[selected=true]:border-primary"
                ),
                label: "w-full",
            }}
            value="test"
        >
            <div className="w-full flex flex-col items-center">
                <Image className="ml-4 mb-4" src="/imgs/attributes/strength.svg" alt="me" width="64" height="64" />
                <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">Strength</h1>

            </div>
        </Checkbox>
    );
};

<div className="w-full flex flex-col items-center">
<Image className="ml-4 mb-4" src="/imgs/attributes/strength.svg" alt="me" width="64" height="64" />
<h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">Strength</h1>

</div>