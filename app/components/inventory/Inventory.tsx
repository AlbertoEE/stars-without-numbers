import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement } from "react";
import ArmorItemCard from "./items/ArmorItemCard";
import { Card, CardBody, CardHeader, Divider, Link, Navbar, NavbarContent, NavbarItem, ScrollShadow } from "@nextui-org/react";
import ARMOR_ICON from "@/public/imgs/equipment/armor.svg"
import RANGED_WEAPONS_ICON from "@/public/imgs/equipment/ranged_weapon.svg"
import MELEE_WEAPONS_ICON from "@/public/imgs/equipment/melee_weapon.svg"
import HEAVY_WEAPONS_ICON from "@/public/imgs/equipment/heavy_weapon.svg"
import GENERAL_EQUIPMENT from "@/public/imgs/equipment/general_equipment.svg"
import { ITEM_ICON_DEFAULT_PROPS } from "./items/ItemCommons";

export default function Inventory(props: {
    equipment: Equipment
}): ReactElement {
    let showingCategories: string[] = ["armor"]
    const isShowingCategory = (category: string): boolean =>
        showingCategories.includes(category)
    return (
        <Card className="flex flex-col h-full w-full pb-5">
            <Navbar isBordered className="flex-1 rounded-t-large border-small" 
                classNames={{
                    item: [
                        "flex",
                        "flex-grow",
                        "pb-1",
                        "justify-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:border-b-small"
                    ]
                }}
            position="static">
                <NavbarContent className="flex justify-between w-full">
                    <NavbarItem isActive={isShowingCategory("armor")}>
                        <Link color="foreground" href="#armor">
                            <ARMOR_ICON {...ITEM_ICON_DEFAULT_PROPS}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isShowingCategory("rangedWeapons")}>
                        <Link color="foreground" href="#rangedWeapons">
                            <RANGED_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isShowingCategory("meleeWeapons")}>
                        <Link color="foreground" href="#meleeWeapons">
                            <MELEE_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isShowingCategory("heavyWeapons")}>
                        <Link color="foreground" href="#heavyWeapons">
                            <HEAVY_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS}/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isShowingCategory("generalEquipment")}>
                        <Link color="foreground" href="#generalEquipment">
                            <GENERAL_EQUIPMENT {...ITEM_ICON_DEFAULT_PROPS}/>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <ScrollShadow className="overflow-y-auto scroll-smooth p-5">
                <Card radius="none" id="armor" className="mt-6 scroll-mt-6">
                    <CardHeader className="justify-center"><h1>ARMOR</h1></CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-wrap justify-evenly gap-1">
                            {props.equipment.armors.map((item): ReactElement => (
                                <ArmorItemCard item={item} />
                            ))}
                        </div>
                    </CardBody>
                </Card>
                <Card radius="none" id="rangedWeapons" className="mt-6 scroll-mt-6">
                    <CardHeader className="justify-center"><h1>RANGED WEAPONS</h1></CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-wrap justify-evenly gap-1">
                            {props.equipment.armors.map((item): ReactElement => (
                                <ArmorItemCard item={item} />
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </ScrollShadow>
        </Card>
    )
}