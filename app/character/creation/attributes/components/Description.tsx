"use client";

import { CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useStore } from "../state";

export default function Description(props: {
    title: string,
    description: string,
    imgPath: string,
}) {

    return (
        <CardBody>
            <div>
                <div className="bg-black w-full flex flex-row items-center p-0">
                    <Image className="m-0" src={`/imgs/${props.imgPath}`} alt="me" width="128" height="64" />
                    <h1 className="font-orbitron font-bold uppercase tracking-widest text-4xl bg-black p-4">{props.title}</h1>
                </div>
            </div>
            <hr className="h-1 my-2 bg-gray-200 border-0 rounded" />
            <div>
                <div className="my-6 whitespace-pre-line">
                    {props.description}
                </div>
            </div>
        </CardBody>
    )
}