import type Equipment from "@/models/equipment/EquipmentModels"
import type EquipmentDefinitionRepository from "./EquipmentRepository"
import { ArmorType } from "@/models/equipment/ArmorModels"

export default class InMemoryEquipmentDefinitionRepository implements EquipmentDefinitionRepository {
    getEquipmentDefinition = (): Equipment => equipment
}

const equipment: Equipment = {
    armors: [{
        name: "Shield",
        description: "Shields are an ancient yet extremely useful adjunct to body armor. Primitive shields are usually of wood or stretched hide, while more modern riot shields tend toward clear plastic.\nThese grant a base AC to their user If the bearer’s AC is already equal or better, the shield simply grants a +1 AC bonus. Primitive and riot shields are ignored by all weapons that ignore primitive armor.\nAside from their AC benefit, a shield also renders the bearer immune to the first instance of melee Shock damage they take each round, assuming the shield is effective against the weapon being used.",
        armorType: ArmorType.PRIMITIVE_ARMOR,
        armorClass: 13,
        shield: true,
        encumbrance: 2,
        techLevel: 0,
        cost: 10,
    },{
        name: "Warpaint",
        description: "Warpaint is the common term for the bizarre combat fashions and scrap-built street harness of gangers, cult enforcers, street toughs, and other marginal sorts with little money but much need for protection. Most warpaint is fashioned of scrounged scraps of TL4 materials that are exceptionally tough or rigid, filled out with gang colors, body paint, intimidating tattoos, and the usual threatening grimace. It is often exceedingly impractical but inspirational to its wearer; an NPC in warpaint that is meaningful to them gains a +1 Morale bonus. Most warpaint is either pieced together over years or taken from the dead. Actually purchasing a finished suit comes at the listed price, assuming someone can be found willing to part with theirs.",
        armorType: ArmorType.STREET_ARMOR,
        armorClass: 12,
        shield: false,
        encumbrance: 0,
        techLevel: 4,
        cost: 300,
    }],
    rangedWeapons: [],
    meleeWeapons: [],
    generalEquipment: [],
}