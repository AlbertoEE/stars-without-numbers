import { Button, Divider, Image, Tooltip } from "@nextui-org/react";
import { useStoreDefinitionDataState, useStoreFociState } from "../state";

export default function FocusDetail(props: {

}) {

    const { focusedFocus, chosenFoci, setChosenFoci } = useStoreFociState();

    function chooseFocus(level: number) {
        const cleanedFoci = chosenFoci.filter(focus => focus.origin != "foci");
        setChosenFoci(
            [
                ...cleanedFoci,
                {
                    focus: focusedFocus!!,
                    level: level,
                    origin: "foci",
                }
            ]
        )
    }

    return (
        <div className="flex flex-col gap-4 w-full h-full py-5 px-5">
            <div className="flex flex-row items-center gap-4">
                <Image
                    className=""
                    src={`/imgs/foci/${focusedFocus?.name.replace(" ", "-")}.svg`}
                    alt="me"
                    width="64"
                    height="64"
                />
                <h1 className="font-bold uppercase text-4xl">{focusedFocus?.name}</h1>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto pr-5">
                <div>
                    {focusedFocus?.description}
                </div>
                <div className="border-4 p-2 rounded-md border-primary-400">
                    <div className="flex gap-4 items-center">
                        <Button isIconOnly size="sm" color="primary" onPress={() => chooseFocus(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-http-get" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
                                <path d="M14 8h-4v8h4" />
                                <path d="M10 12h2.5" />
                                <path d="M17 8h4" />
                                <path d="M19 8v8" />
                            </svg>
                        </Button>
                        <h2 className="text-2xl italic">Level 1</h2>
                    </div>
                    <Divider className="my-2" />
                    <ul className="ml-8">
                        {focusedFocus?.levels[0].descriptionSchema.map(e => <li className="list-disc">{e}</li>)}
                    </ul>
                </div>
                <div className="border-4 p-2 rounded-md">
                    <Tooltip
                        content="This level is not available at character creation."
                        placement="top-start"
                        closeDelay={0}
                        delay={70}
                    >
                        <div className="flex gap-4 items-center">
                            <Button size="sm" isDisabled color="primary" isIconOnly onPress={() => chooseFocus(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-http-get" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
                                    <path d="M14 8h-4v8h4" />
                                    <path d="M10 12h2.5" />
                                    <path d="M17 8h4" />
                                    <path d="M19 8v8" />
                                </svg>
                            </Button>
                            <h2 className="text-2xl italic">Level 2</h2>
                        </div>
                    </Tooltip>
                    <Divider className="my-2" />
                    <ul className="ml-8">
                        {focusedFocus?.levels[1].descriptionSchema.map(e => <li className="list-disc">{e}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}