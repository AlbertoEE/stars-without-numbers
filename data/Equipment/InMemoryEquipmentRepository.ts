import Equipment from "@/models/equipment/EquipmentModels"
import type EquipmentDefinitionRepository from "./EquipmentRepository"
import { ArmorType } from "@/models/equipment/ArmorModels"
import {
  EquipmentItemType,
  type EquipmentModel,
} from "@/models/equipment/EquipmentModels"
import { GeneralEquipmentType } from "@/models/equipment/GeneralEquipmentModels"
import { MeleeWeaponType } from "@/models/equipment/MeleeWeaponModels"

export default class InMemoryEquipmentDefinitionRepository
  implements EquipmentDefinitionRepository
{
  getEquipmentDefinition = (): Equipment => equipment
}

const equipment = new Equipment({
  armors: [
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Shield",
      description:
        "Shields are an ancient yet extremely useful adjunct to body armor. Primitive shields are usually of wood or stretched hide, while more modern riot shields tend toward clear plastic.\nThese grant a base AC to their user If the bearer’s AC is already equal or better, the shield simply grants a +1 AC bonus. Primitive and riot shields are ignored by all weapons that ignore primitive armor.\nAside from their AC benefit, a shield also renders the bearer immune to the first instance of melee Shock damage they take each round, assuming the shield is effective against the weapon being used.",
      subtype: ArmorType.PRIMITIVE_ARMOR,
      armorClass: 13,
      shield: true,
      encumbrance: 2,
      techLevel: 0,
      cost: 10,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Test TL 1",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.STREET_ARMOR,
      armorClass: 12,
      shield: false,
      encumbrance: 0,
      techLevel: 1,
      cost: 300,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Test TL 2",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.STREET_ARMOR,
      armorClass: 13,
      shield: false,
      encumbrance: 0,
      techLevel: 2,
      cost: 1000,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Test TL 3",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.COMBAT_ARMOR,
      armorClass: 15,
      shield: false,
      encumbrance: 0,
      techLevel: 3,
      cost: 1000,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Warpaint",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.STREET_ARMOR,
      armorClass: 12,
      shield: false,
      encumbrance: 0,
      techLevel: 4,
      cost: 300,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Test TL 5",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.COMBAT_ARMOR,
      armorClass: 20,
      shield: false,
      encumbrance: 0,
      techLevel: 5,
      cost: 1500,
    },
    {
      itemType: EquipmentItemType.ARMOR,
      name: "Test TL 6",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      subtype: ArmorType.POWERED_ARMOR,
      armorClass: 999,
      shield: false,
      encumbrance: 0,
      techLevel: 6,
      cost: 30000,
    },
  ],
  rangedWeapons: [
    {
      itemType: EquipmentItemType.RANGED_WEAPON,
      name: "Test Ranged Weapon",
      description:
        "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
      damage: "1d6",
      range: [50,75],
      magazine: 1,
      extraReloadAction: true,
      burst: true,
      encumbrance: 0,
      techLevel: 0,
      cost: 300,
    },
  ],
  meleeWeapons: [
    {
      itemType: EquipmentItemType.MELEE_WEAPON,
      subtype: MeleeWeaponType.SMALL_WEAPON,
      name: "Small primitive weapon",
      description:
        "Small weapons are small one-handed implements no larger than a baton or knife. These weapons are easily concealed in normal clothing, and can even be kept Readied up sleeves or in tailored pockets. Many can be thrown at a range up to 10 meters.",
      damage: "1d4",
      encumbrance: 0,
      techLevel: 0,
      cost: 300,
    },
  ],
  heavyWeapons: [
    {
      itemType: EquipmentItemType.HEAVY_WEAPON,
      name: "Heavy Machine Gun",
      description:
        "Heavy machine guns represent a large family of air- or water-cooled projectile weapons that are usually fed with belts of linked ammunition. HMGs require a ve-hicle mounting or emplaced firing position for effective results. An HMG magazine contains enough ammuni-tion for 10 rounds of firing, but each round of firing eats 25 credits worth of projectile ammunition.",
      damage: "3d6",
      supressFire: true,
      range: [500, 2000],
      magazine: 10,
      encumbrance: "∞",
      techLevel: 0,
      cost: 300,
    },
  ],
  generalEquipment: [
    {
      itemType: EquipmentItemType.GENERAL_EQUIPMENT,
      subtype: GeneralEquipmentType.AMMO_AND_POWER,
      name: "Ammo, 20 rounds",
      description:
        "A few worlds are too primitive or too resource-poor to manufacture ammunition, but the vast majority of worlds provide cartridges in almost every conceivable caliber and make. Most local gunsmiths can load ammunition to any specification required by a buyer.",
      bundleable: true,
      encumbrance: 1,
      techLevel: 2,
      cost: 10,
    },
  ],
} satisfies EquipmentModel)
