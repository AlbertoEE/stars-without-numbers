"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return(
        <div>
            <Button onPress={() => {
                const randomUUID: string = crypto.randomUUID()
                router.push(`/creation/character/${randomUUID}`)
            }}>Create Character</Button>
        </div>
    )
}