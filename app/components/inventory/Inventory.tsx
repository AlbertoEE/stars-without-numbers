import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement, useEffect, useState, useCallback } from "react";
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
    const [showingCategories, setShowingCategories] = useState([""])

    const setShowingCategory = useCallback((category: string): void => {
        const newShowingCategories = showingCategories.filter((v): boolean => v !== category)
        newShowingCategories.push(category)
        setShowingCategories(newShowingCategories)
    }, [showingCategories, setShowingCategories])

    const removeShowingCategory = useCallback((category: string): void => {
        const newShowingCategories = showingCategories.filter((v): boolean => v !== category)
        setShowingCategories(newShowingCategories)
    }, [showingCategories, setShowingCategories])

    useEffect((): () => void => {
        // Get custom attribute item-category from all sections
        const sections = document.querySelectorAll(".item-section");
        const observers: Record<string, IntersectionObserver> = {}
        sections.forEach((section): void => {
            // create new instance and pass a callback function
            const observer = new IntersectionObserver((entries): void => {
                const visibleSection = entries.find((entry): boolean => entry.isIntersecting)?.target.id
                // Update state with the visible section ID
                if (visibleSection != null) {
                    setShowingCategory(visibleSection)
                } else {
                    removeShowingCategory(section.id)
                }
            }, {
                threshold: 0,
                root: null,
            });

            observer.observe(section)

            observers[section.id] = (observer)
        })
        // Cleanup function to remove observer
        return (): void => {
            sections.forEach((section): void => {
                observers[section.id]?.unobserve(section)
            })
        }
    }, [setShowingCategory, removeShowingCategory])

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
                    <NavbarItem isActive={showingCategories.includes("armor")}>
                        <Link color="foreground" href="#armor">
                            <ARMOR_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={showingCategories.includes("rangedWeapons")}>
                        <Link color="foreground" href="#rangedWeapons">
                            <RANGED_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={showingCategories.includes("meleeWeapons")}>
                        <Link color="foreground" href="#meleeWeapons">
                            <MELEE_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={showingCategories.includes("heavyWeapons")}>
                        <Link color="foreground" href="#heavyWeapons">
                            <HEAVY_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={showingCategories.includes("generalEquipment")}>
                        <Link color="foreground" href="#generalEquipment">
                            <GENERAL_EQUIPMENT {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <ScrollShadow id="inventory-scroll" className="overflow-y-auto scroll-smooth px-5 tb-5">
                <Card radius="none" id="armor" className="item-section mt-7 scroll-mt-7">
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
                <Card radius="none" id="rangedWeapons" className="item-section mt-7 scroll-mt-6">
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