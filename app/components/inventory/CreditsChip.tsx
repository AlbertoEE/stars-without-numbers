import CoinIcon from "@/public/imgs/equipment/coin.svg"
import { Chip } from "@nextui-org/react";
import { type ReactElement } from "react"

export default function CreditsChip(props: {
    credits: number
}): ReactElement {
    return (
        <Chip variant="light" className="text-cyan-300" endContent={
            <CoinIcon className="fill-current " height="19" width="19"/>
        }>{props.credits}</Chip>
    )
}