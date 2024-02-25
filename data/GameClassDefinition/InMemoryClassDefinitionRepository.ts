import { GameClassDefinition } from "@/models/GameClassDefinitionModels";
import { GameClassDefinitionRepository } from "./ClassDefinitionRepository";
import { rollDice } from "@/utilities/Roll";

export class InMemoryGameClassDefinitionRepository implements GameClassDefinitionRepository {
    getGameClassDefinitionList = () => gameClassDefinitionList;
}

const gameClassDefinitionList: GameClassDefinition[] = [
    {
        name: "expert",
        abilities: [
            {
                summary: "Free non-combat Focus level",
                detail: "You gain a free level in a non-combat focus relat- ed to your background. Most concepts will take Specialist in their main skill, though Diplomat, Star- farer, Healer, or some other focus might suit better. You may not take a combat-oriented focus with this perk. In case of uncertainty, the GM decides whether or not a focus is permitted."
            },
            {
                summary: "Re-roll Skill Checks",
                detail: "Once per scene, you can reroll a failed skill check, taking the new roll if it’s better."
            },
            {
                summary: "Extra Skill Points",
                detail: "When you advance an experience level, you gain a bonus skill point that can be spent on any non-combat, non-psychic skill. You can save this point to spend later if you wish."
            }
        ],
        atackBonusFormula: (level: number) => { return Math.floor(level / 2) },
        hitPointsFormula: (constitutionModifier: number) => {
            const result = rollDice(1, 6) + constitutionModifier;
            return result < 1 ? 1 : result;
        },
    },
    {
        name: "warrior",
        abilities: [
            {
                summary: "Free combat-related Focus level",
                detail: "You gain a free level in a combat-related focus as- sociated with your background. The GM decides if a focus qualifies if it’s an ambiguous case."
            },
            {
                summary: "Re-roll enemy/own attacks",
                detail: "Once per scene, as an Instant ability, you can either choose to ne- gate a successful attack roll against you or turn a missed attack roll you made into a successful hit. You can use this ability after the dice are rolled, but it cannot be used against environmental dam- age, effects without an attack roll, or hits on a vehicle you’re occupying."
            },
            {
                summary: "Extra Hit Points",
                detail: "You gain two extra maximum hit points at each character level, including level 1."
            },
            {
                summary: "Improved Attack Bonus",
                detail: "Your attack bonus is equal to your character level so it is +1 at first level. Other classes attack bonus is equal to their character level divided by 2 and rounded down."
            }
        ],
        atackBonusFormula: (level: number) => { return level },
        hitPointsFormula: (constitutionModifier: number) => {
            const result = rollDice(1, 6) + constitutionModifier + 2;
            return result < 1 ? 1 : result;
        },
    }
]