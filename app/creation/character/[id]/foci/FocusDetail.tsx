import { Image } from "@nextui-org/react";
import { useStoreDefinitionDataState, useStoreFociState } from "../state";

export default function FocusDetail(props: {

}) {

    const { focusedFocus, setFocusedFocus } = useStoreFociState();

    return (
        <div className="w-full h-full flex flex-col p-5 justify-evenly gap-4">
            <div className="flex flex-row items-center gap-4">
                <Image
                    className=""
                    src={`/imgs/foci/${focusedFocus?.name}.svg`}
                    alt="me"
                    width="64"
                    height="64"
                />
                <h1 className="text-4xl">{focusedFocus?.name}</h1>
            </div>
            <div className="overflow-y-auto">{focusedFocus?.description}</div>
            <div className="overflow-y-auto">
                <h2 className="text-2xl italic">Level 1</h2>
                <ul className="ml-8">
                    {focusedFocus?.levels[0].descriptionSchema.map(e => <li className="list-disc">{e}</li>)}
                </ul>
            </div>
            <div className="overflow-y-auto">
                <h2 className="text-2xl italic">Level 2</h2>
                <ul className="ml-8">
                    {focusedFocus?.levels[1].descriptionSchema.map(e => <li className="list-disc">{e}</li>)}
                </ul>
            </div>
        </div>
    )
}