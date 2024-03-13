import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement } from "react";
import ArmorItemCard from "./items/ArmorItemCard";

export default function Inventory(props: {
    equipment: Equipment
}): ReactElement {
    return (
        <div className="flex flex-wrap justify-evenly w-[95%] gap-1">
            {props.equipment.armors.map((item): ReactElement => (
                <ArmorItemCard item={item}/>
            ))}
        </div>
    )
}