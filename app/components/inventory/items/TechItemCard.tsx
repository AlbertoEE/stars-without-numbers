import { Chip } from "@nextui-org/react";
import { type ReactElement } from "react";
import ShopItemCard from "./ShopItemCard";
import { type ItemProps } from "./ItemCommons";

export default function TechItemCard(props: ItemProps): ReactElement {
    const techLevelHeaderStyles: string[] = [
        "text-gray-100 bg-gradient-to-br from-gray-700/30",
        "text-green-100 bg-gradient-to-br from-green-700/10",
        "text-blue-100 bg-gradient-to-br from-blue-700/20",
        "text-purple-100 bg-gradient-to-br from-purple-800/20",
        "text-yellow-100 bg-gradient-to-br from-yellow-700/20",
        "text-orange-100 bg-gradient-to-br from-orange-700/20",
        "text-cyan-100 bg-gradient-to-br from-cyan-500/30"
    ]
    const techLevelCardStyles: string[] = [
        "border-medium border-gray-700",
        "border-medium border-green-900",
        "border-medium border-blue-900",
        "border-medium border-purple-900",
        "border-medium border-yellow-900",
        "border-medium border-orange-900",
        "border-medium border-cyan-500/70"
    ]
    const chip = (
        <Chip variant="light" startContent={
            <span className="ml-2 font-bold">TL</span>
        }><span className="font-bold">{props.item.techLevel}</span></Chip>
    )
    return (
        <ShopItemCard {...props} headerStyle={techLevelHeaderStyles[props.item.techLevel]} cardStyle={techLevelCardStyles[props.item.techLevel]} 
        chips={[
            chip,
            ...props.chips ?? [],
        ]} 
        />
    )
}