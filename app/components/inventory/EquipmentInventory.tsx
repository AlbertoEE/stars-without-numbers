import type Equipment from "@/models/equipment/EquipmentModels";
import { type ReactElement, useEffect, useState, useCallback } from "react";
import ArmorItemCard from "./items/ArmorItemCard";
import { Card, Divider, Link, Navbar, NavbarContent, NavbarItem, ScrollShadow } from "@nextui-org/react";
import ArmorIcon from "@/public/imgs/equipment/armor.svg"
import RangedWeaponIcon from "@/public/imgs/equipment/ranged_weapon.svg"
import MeleeWeaponIcon from "@/public/imgs/equipment/melee_weapon.svg"
import HeavyWeaponIcon from "@/public/imgs/equipment/heavy_weapon.svg"
import GeneralEquipmentIcon from "@/public/imgs/equipment/general_equipment.svg"
import { ITEM_ICON_DEFAULT_PROPS } from "./items/ItemCommons";
import InventorySection from "./InventorySection";
import type ArmorItem from "@/models/equipment/ArmorModels";
import { EquipmentItemType, EquipmentItemTypeValues, type AnyEquipmentItem, type EquipmentSection } from "@/models/equipment/EquipmentModels";
import EquipmentItemCard from "./items/EquipmentItemCard";
import CreditsChip from "./CreditsChip";

export default function EquipmentInventory(props: {
    id: string,
    equipment: Equipment,
    credits?: number,
    onPress?: (item: AnyEquipmentItem) => void,
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

    const isSectionActive = (itemType: EquipmentItemType): boolean => {
        return (props.equipment.get(itemType)?.length ?? 0) > 0 && showingCategories.includes(sectionId(itemType))
    }

    const sectionId = (itemType: EquipmentItemType): string => {
        return `${props.id}-${itemType.toLowerCase()}`
    }

    const sectionName = (itemType: EquipmentItemType): string => {
        switch(itemType) {
            case EquipmentItemType.ARMOR:
                return "ARMORS"
            case EquipmentItemType.RANGED_WEAPON:
                return "RANGED WEAPONS"
            case EquipmentItemType.MELEE_WEAPON:
                return "MELEE WEAPONS"
            case EquipmentItemType.HEAVY_WEAPON:
                return "HEAVY WEAPONS"
            case EquipmentItemType.GENERAL_EQUIPMENT:
                return "GENERAL EQUIPMENT"
            default:
                return itemType
        }
    }

    const getSectionIcon = (itemType: EquipmentItemType): ReactElement => {
        switch(itemType) {
            case EquipmentItemType.ARMOR:
                return <ArmorIcon {...ITEM_ICON_DEFAULT_PROPS} />
            case EquipmentItemType.RANGED_WEAPON:
                return <RangedWeaponIcon {...ITEM_ICON_DEFAULT_PROPS} />
            case EquipmentItemType.MELEE_WEAPON:
                return <MeleeWeaponIcon {...ITEM_ICON_DEFAULT_PROPS} />
            case EquipmentItemType.HEAVY_WEAPON:
                return <HeavyWeaponIcon {...ITEM_ICON_DEFAULT_PROPS} />
            case EquipmentItemType.GENERAL_EQUIPMENT:
                return <GeneralEquipmentIcon {...ITEM_ICON_DEFAULT_PROPS} />
            default:
                return <GeneralEquipmentIcon {...ITEM_ICON_DEFAULT_PROPS}/>
        }
    }

    const getItemCard = (item: AnyEquipmentItem): ReactElement => {
        switch(item.itemType) {
            case EquipmentItemType.ARMOR:
                return <ArmorItemCard item={item as ArmorItem} onPress={props.onPress}/>
            default:
                return <EquipmentItemCard item={item} onPress={props.onPress}/>
        }
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
                    <div className="flex w-full justify-end">
                        {(props.credits != null)&&(
                            <CreditsChip credits={props.credits}/>
                        )}
                    </div>
                </div>
                <Divider className="h-[70%]" orientation="vertical"/>
                <NavbarContent className="flex justify-between w-full">
                    { EquipmentItemTypeValues.map((itemType: EquipmentItemType): ReactElement => (
                        <NavbarItem isActive={isSectionActive(itemType)}>
                            <Link color="foreground" href={`#${sectionId(itemType)}`}>
                                { getSectionIcon(itemType) }
                            </Link>
                        </NavbarItem>
                    )) }
                </NavbarContent>
            </Navbar>
            <ScrollShadow id="inventory-scroll" className="overflow-y-auto scroll-smooth px-5 tb-5 h-full">
                { props.equipment.sections().map((section: EquipmentSection): ReactElement => (
                    <InventorySection id={sectionId(section.itemType)} title={sectionName(section.itemType)}>
                        {section.items.map((item: AnyEquipmentItem): ReactElement => (
                            getItemCard(item)
                        ))}
                    </InventorySection>
                )) }
            </ScrollShadow>
        </Card>
    )
}