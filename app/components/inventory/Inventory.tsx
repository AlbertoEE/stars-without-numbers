import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement } from "react";
import ArmorItemCard from "./items/ArmorItemCard";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Inventory(props: {
    equipment: Equipment
}): ReactElement {
    let showingCategories: string[] = ["armor"]
    const scrollToCategory = (key: React.Key | string): void => {
        console.log(key)
    }
    const isShowingCategory = (category: string): boolean =>
        showingCategories.includes(category)
    return (
        <div className="flex flex-col h-full">
            <Navbar isBordered className="flex-1" position="static">
                <NavbarContent>
                    <NavbarItem isActive={isShowingCategory("armor")}>
                        <Link color="foreground" href="#armor">ARMOR</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#rangedWeapons">RANGED WEAPONS</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="overflow-y-auto scroll-smooth">
                <Card radius="none" id="armor">
                    <CardHeader className="justify-center"><h1>ARMOR</h1></CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-wrap justify-evenly w-[95%] gap-1">
                            {props.equipment.armors.map((item): ReactElement => (
                                <ArmorItemCard item={item} />
                            ))}
                        </div>
                    </CardBody>
                </Card>
                <Card radius="none" id="rangedWeapons">
                    <CardHeader className="justify-center"><h1>RANGED WEAPONS</h1></CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-wrap justify-evenly w-[95%] gap-1">
                            {props.equipment.armors.map((item): ReactElement => (
                                <ArmorItemCard item={item} />
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}