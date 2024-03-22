import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { type ReactElement } from "react";
import { ITEM_ICON_DEFAULT_PROPS, type ShopItemProps } from "./ItemCommons";
import { type PressEvent } from "@react-types/shared";
import GeneralEquipmentIcon from "@/public/imgs/equipment/general_equipment.svg"
import CreditsChip from "../CreditsChip";



export default function ShopItemCard(props: ShopItemProps): ReactElement {
    return (
        <Card radius="none" 
            className={`w-full border-medium ${props.cardStyle}`} 
            isPressable={props.onPress != null} 
            isDisabled={!props.isAffordable}
            onPress={(e: PressEvent): void => {if (props.onPress != null) props.onPress(props.item)}}>
            <CardHeader className={props.headerStyle}>
                <div className="flex justify-between w-full">
                    <div className="flex align-middle gap-4">
                        {props.icon ?? <GeneralEquipmentIcon {...ITEM_ICON_DEFAULT_PROPS}/>}
                        <div>
                            <div>{props.item.name}</div>
                            { props.item.subtype != null && 
                                <div className="italic text-xs text-gray-400">{props.item.subtype}</div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-end">
                        {props.chips ?? null}
                        <CreditsChip credits={props.item.cost} variant={props.isAffordable ? "default" : "unaffordable"}/>
                    </div>
                </div>
            </CardHeader>
            { props.children != null &&
                <CardBody>
                    {props.children}
                </CardBody>
            }
        </Card>
    )
}