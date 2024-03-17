import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement, useEffect, useState, useCallback } from "react";
import ArmorItemCard from "./items/ArmorItemCard";
import { Card, Divider, Link, Navbar, NavbarContent, NavbarItem, ScrollShadow } from "@nextui-org/react";
import ARMOR_ICON from "@/public/imgs/equipment/armor.svg"
import RANGED_WEAPONS_ICON from "@/public/imgs/equipment/ranged_weapon.svg"
import MELEE_WEAPONS_ICON from "@/public/imgs/equipment/melee_weapon.svg"
import HEAVY_WEAPONS_ICON from "@/public/imgs/equipment/heavy_weapon.svg"
import GENERAL_EQUIPMENT from "@/public/imgs/equipment/general_equipment.svg"
import { ITEM_ICON_DEFAULT_PROPS } from "./items/ItemCommons";
import InventorySection from "./InventorySection";
import type ArmorItem from "@/models/equipment/ArmorModels";
import { type EquipmentItem, type GeneralEquipment } from "@/models/equipment/EquipmentModels";
import EquipmentItemCard from "./items/EquipmentItemCard";

export default function EquipmentInventory(props: {
    id: string,
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
        const sections = document.getElementById(props.id)?.querySelectorAll(".inventory-section");
        const observers: Record<string, IntersectionObserver> = {}
        sections?.forEach((section): void => {
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
            sections?.forEach((section): void => {
                observers[section.id]?.unobserve(section)
            })
        }
    }, [setShowingCategory, removeShowingCategory, props.id])

    const isSectionActive = (itemList: any[], id: string): boolean => {
        return (itemList?.length ?? 0) > 0 && showingCategories.includes(sectionId(id))
    }

    const sectionId = (id: string): string => {
        return `${props.id}-${id}`
    }

    return (
        <Card id={props.id} className="flex flex-col h-full w-full pb-5">
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
                <div>
                    <h1>{props.id.toUpperCase()}</h1>
                </div>
                <Divider className="h-[70%]" orientation="vertical"/>
                <NavbarContent className="flex justify-between w-full">
                    <NavbarItem isActive={isSectionActive(props.equipment.armors, "armor")}>
                        <Link color="foreground" href={`#${sectionId("armor")}`}>
                            <ARMOR_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isSectionActive(props.equipment.rangedWeapons, "rangedWeapons")}>
                        <Link color="foreground" href={`#${sectionId("rangedWeapons")}`}>
                            <RANGED_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isSectionActive(props.equipment.meleeWeapons, "meleeWeapons")}>
                        <Link color="foreground" href={`#${sectionId("meleeWeapons")}`}>
                            <MELEE_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isSectionActive(props.equipment.heavyWeapons, "heavyWeapons")}>
                        <Link color="foreground" href={`#${sectionId("heavyWeapons")}`}>
                            <HEAVY_WEAPONS_ICON {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={isSectionActive(props.equipment.generalEquipment, "generalEquipment")}>
                        <Link color="foreground" href={`#${sectionId("generalEquipment")}`}>
                            <GENERAL_EQUIPMENT {...ITEM_ICON_DEFAULT_PROPS} />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <ScrollShadow id="inventory-scroll" className="overflow-y-auto scroll-smooth px-5 tb-5 h-full">
                <InventorySection id={sectionId("armor")} title="ARMOR">
                    {props.equipment.armors?.map((item: ArmorItem): ReactElement => (
                        <ArmorItemCard item={item}/>
                    ))}
                </InventorySection>
                <InventorySection id={sectionId("rangedWeapons")} title="RANGED WEAPONS">
                    {props.equipment.rangedWeapons?.map((item: EquipmentItem): ReactElement => (
                        <EquipmentItemCard item={item}/>
                    ))}
                </InventorySection>
                <InventorySection id={sectionId("meleeWeapons")} title="MELEE WEAPONS">
                    {props.equipment.meleeWeapons?.map((item: EquipmentItem): ReactElement => (
                        <EquipmentItemCard item={item}/>
                    ))}
                </InventorySection>
                <InventorySection id={sectionId("heavyWeapons")} title="HEAVY WEAPONS">
                    {props.equipment.heavyWeapons?.map((item: EquipmentItem): ReactElement => (
                        <EquipmentItemCard item={item}/>
                    ))}
                </InventorySection>
                <InventorySection id={sectionId("generalEquipment")} title="GENERAL EQUIPMENT">
                    {props.equipment.generalEquipment?.map((equipmentSubtype: GeneralEquipment): ReactElement[] => (
                        equipmentSubtype.items.map((item: EquipmentItem): ReactElement => (
                            <EquipmentItemCard subtitle={equipmentSubtype.type} item={item}/>
                        ))
                    )).flat()}
                </InventorySection>
            </ScrollShadow>
        </Card>
    )
}