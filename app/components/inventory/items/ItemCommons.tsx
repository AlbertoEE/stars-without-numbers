import { type EquipmentItem } from "@/models/equipment/EquipmentModels";
import { type ReactNode, type ReactElement } from "react";
import { type PressEvent } from "@react-types/shared"

export interface ItemProps {
    item: EquipmentItem,
    subtitle?: string,
    icon?: ReactElement,
    chips?: ReactElement[],
    children?: ReactNode[] | ReactNode,
    onPress?: (e: PressEvent) => void,
}

export const ITEM_ICON_SIZE = 40
export const ITEM_CHIP_ICON_SIZE = 16

export const ITEM_ICON_DEFAULT_PROPS = {
    height: ITEM_ICON_SIZE,
    width: ITEM_ICON_SIZE,
    className: "fill-current"
}