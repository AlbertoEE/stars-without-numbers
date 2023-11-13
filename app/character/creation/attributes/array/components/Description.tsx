"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Description(props: {
    detail: string,
    description: string,
}) {
    return (
        <Card className="flex-1">
            <CardBody>
                <div>
                    <div className="bg-black w-full flex flex-row items-center p-0">
                        <Image className="m-0" src={`/imgs/${props.detail}.svg`} alt="me" width="128" height="64" />
                        <h1 className="font-orbitron text-2xl font-bold uppercase tracking-widest text-4xl bg-black p-4">{props.detail}</h1>
                    </div>
                </div>
                <hr className="h-1 my-2 bg-gray-200 border-0 rounded" />
                <div>
                    <div className="my-6 whitespace-pre-line">
                        {props.description}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}