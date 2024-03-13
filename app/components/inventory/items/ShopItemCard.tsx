import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import CoinIcon from "@/public/imgs/equipment/coin.svg"
import { type ReactElement } from "react";
import { ITEM_ICON_DEFAULT_PROPS, type ItemProps } from "./ItemCommons";

export default function ShopItemCard(props: ItemProps): ReactElement {
    return (
        <Card className="w-full" isPressable={props.onPress != null} onPress={props.onPress}>
            <CardHeader>
                <div className="flex justify-between w-full">
                    <div className="flex align-middle gap-4">
                        {props.icon ?? <CoinIcon {...ITEM_ICON_DEFAULT_PROPS}/>}
                        <div>
                            <div>{props.item.name}</div>
                            { props.subtitle != null && 
                                <div className="italic text-xs text-gray-400">{props.subtitle}</div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        {props.chips ?? null}
                        <Chip variant="bordered" className="text-cyan-300 border-cyan-300" endContent={
                            <CoinIcon className="fill-current " height="19" width="19"/>
                        }>{props.item.cost}</Chip>
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