import CoinIcon from "@/public/imgs/equipment/coin.svg"
import { Chip } from "@nextui-org/react";
import { type ReactElement } from "react"

export default function CreditsChip(props: {
    credits: number,
    variant?: "default" | "unaffordable"
}): ReactElement {

    const variant = props.variant === "unaffordable" ? "text-red-500" : "text-cyan-300"

    return (
        <Chip variant="light" className={variant} endContent={
            <CoinIcon className="fill-current " height="19" width="19"/>
        }>{props.credits}</Chip>
    )
}