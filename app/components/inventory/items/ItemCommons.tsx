import { type AnyEquipmentItem, type EquipmentItem } from "@/models/equipment/EquipmentModels";
import { type ReactNode, type ReactElement } from "react";

export interface ItemProps {
    item: EquipmentItem,
    icon?: ReactElement,
    chips?: ReactElement[],
    children?: ReactNode[] | ReactNode,
    onPress?: (item: AnyEquipmentItem) => void,
}

export interface ShopItemProps extends ItemProps {
    cardStyle: string
    headerStyle: string
    isAffordable: boolean
}

export const ITEM_ICON_SIZE = 40
export const ITEM_CHIP_ICON_SIZE = 16

export const ITEM_ICON_DEFAULT_PROPS = {
    height: ITEM_ICON_SIZE,
    width: ITEM_ICON_SIZE,
    className: "fill-current"
}