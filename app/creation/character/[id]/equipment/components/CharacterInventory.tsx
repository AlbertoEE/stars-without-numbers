import EquipmentInventory from "@/app/components/inventory/EquipmentInventory";
import type Equipment from "@/models/equipment/EquipmentModels";
import { type AnyEquipmentItem } from "@/models/equipment/EquipmentModels";
import { type ReactElement } from "react";

export default function CharacterInventory(props: {
    credits: number,
    equipment: Equipment,
    onRefund: (item: AnyEquipmentItem) => void,
}): ReactElement  {
    return (
        <EquipmentInventory id="inventory" equipment={props.equipment} credits={props.credits} onPress={props.onRefund}/>
    )
}