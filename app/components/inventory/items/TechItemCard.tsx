import { Chip } from "@nextui-org/react";
import { type ReactElement } from "react";
import ShopItemCard from "./ShopItemCard";
import { type ItemProps } from "./ItemCommons";

export default function TechItemCard(props: ItemProps): ReactElement {
    return (
        <ShopItemCard {...props} chips={[
            ...props.chips ?? [],
            <Chip variant="flat" color="secondary" startContent={
                <span className="ml-2">TL</span>
            }>{props.item.techLevel}</Chip>
        ]} />
    )
}