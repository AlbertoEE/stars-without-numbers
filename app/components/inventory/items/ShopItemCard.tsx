import {
  Accordion,
  AccordionItem,
  CardBody,
  CardHeader,
} from "@nextui-org/react"
import { useState, type ReactElement } from "react"
import { ITEM_ICON_DEFAULT_PROPS, type ShopItemProps } from "./ItemCommons"
import { type PressEvent } from "@react-types/shared"
import GeneralEquipmentIcon from "@/public/imgs/equipment/general_equipment.svg"
import CreditsChip from "../CreditsChip"
import SwnCard from "../../SwnCard"
import SwnButton from "../../SwnButton"

export default function ShopItemCard(props: ShopItemProps): ReactElement {
  const [descriptionShowing, setDescriptionShowing] = useState<any>(new Set())

  const onBuy = (e: PressEvent): void => {
    if (props.onPress != null) props.onPress(props.item)
  }

  return (
    <SwnCard
      radius="none"
      className={`w-full border-medium ${props.cardStyle}`}
      isDisabled={!props.isAffordable}
      // onPress={onBuy}
    >
      <CardHeader className={`${props.headerStyle} p-1`}>
        <Accordion
          isCompact
          selectedKeys={descriptionShowing}
          onSelectionChange={setDescriptionShowing}
        >
          <AccordionItem
            hideIndicator
            title={
              <div className="relative">
                <div className="flex justify-between w-full">
                  <div className="flex align-middle gap-4">
                    {props.icon ?? (
                      <GeneralEquipmentIcon {...ITEM_ICON_DEFAULT_PROPS} />
                    )}
                    <div>
                      <div>{props.item.name}</div>
                      {props.item.subtype != null && (
                        <div className="italic text-xs text-gray-400">
                          {props.item.subtype}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {props.chips ?? null}
                    <CreditsChip
                      credits={props.item.cost}
                      variant={props.isAffordable ? "default" : "unaffordable"}
                    />
                  </div>
                </div>
                <div
                  className={`absolute h-0 bottom-1 w-full flex justify-center transition-all ${descriptionShowing.size > 0 && "rotate-180"}`}
                >
                  <span className="text-5xl text-gray-50/10">🢓</span>
                </div>
              </div>
            }
          >
            <span className="text-md text-gray-400">
              {props.item.description}
            </span>
          </AccordionItem>
        </Accordion>
      </CardHeader>
      <CardBody className="flex flex-row justify-between">
        <div>{props.children}</div>
        {props.buttonContent != null && (
          <SwnButton
            color="warning"
            size="sm"
            variant="bordered"
            onPress={onBuy}
          >
            {props.buttonContent}
          </SwnButton>
        )}
      </CardBody>
    </SwnCard>
  )
}
