import {
  type GameClassDefinition,
  GameSubClass,
} from "@/models/GameClassDefinitionModels"
import { type GameClassDefinitionRepository } from "./GameClassDefinitionRepository"
import { rollDice } from "@/utilities/Roll"

export class InMemoryGameClassDefinitionRepository
  implements GameClassDefinitionRepository
{
  getGameClassDefinitionList = (): GameClassDefinition[] =>
    gameClassDefinitionList
}

const gameClassDefinitionList: GameClassDefinition[] = [
  {
    name: "expert",
    abilities: [
      {
        summary: "Free non-combat Focus level",
        details: [
          "You gain a free level in a non-combat focus relat- ed to your background. Most concepts will take Specialist in their main skill, though Diplomat, Star- farer, Healer, or some other focus might suit better. You may not take a combat-oriented focus with this perk.",
        ],
      },
      {
        summary: "Re-roll Skill Checks",
        details: [
          "Once per scene, you can reroll a failed skill check, taking the new roll if it’s better.",
        ],
      },
      {
        summary: "Extra Skill Points",
        details: [
          "When you advance an experience level, you gain a bonus skill point that can be spent on any non-combat, non-psychic skill. You can save this point to spend later if you wish.",
        ],
      },
    ],
    atackBonusFormula: (level: number): number => {
      return Math.floor(level / 2)
    },
    hitPointsFormula: (constitutionModifier: number): number => {
      const result = rollDice(1, 6) + constitutionModifier
      return result < 1 ? 1 : result
    },
  },
  {
    name: "warrior",
    abilities: [
      {
        summary: "Free combat-related Focus level",
        details: [
          "You gain a free level in a combat-related focus as- sociated with your background. ",
        ],
      },
      {
        summary: "Re-roll enemy/own attacks",
        details: [
          "Once per scene, as an Instant ability, you can either choose to negate a successful attack roll against you or turn a missed attack roll you made into a successful hit. You can use this ability after the dice are rolled, but it cannot be used against environmental damage, effects without an attack roll, or hits on a vehicle you’re occupying.",
        ],
      },
      {
        summary: "Extra Hit Points and Attack Bonus",
        details: [
          "You gain two extra maximum hit points at each character level, including level 1, also, your attack bonus is equal to your character level so it is +1 at first level.",
        ],
      },
    ],
    atackBonusFormula: (level: number): number => {
      return level
    },
    hitPointsFormula: (constitutionModifier: number): number => {
      const result = rollDice(1, 6) + constitutionModifier + 2
      return result < 1 ? 1 : result
    },
  },
  {
    name: "psychic",
    abilities: [
      {
        summary: "Psychic Training",
        details: [
          "Unlike Warriors or Experts, you are capable of learning psychic disciplines and their associated techniques",
        ],
      },
      {
        summary: "Choose 2 Psychic Core Skills",
        details: [
          "When you pick this class, choose any two psychic skills as bonus skills. You can pick the same one twice to obtain level-1 proficiency in it and a free level-1 technique from that discipline.",
        ],
      },
      {
        summary: "Effort Score",
        details: [
          "You have an Effort score, which can be used to fuel psychic abilities. Your maximum Effort is equal to 1 plus your highest psychic skill plus the better of your Wisdom or Constitution modifi- ers. Even with a penalty, your maximum Effort cannot be lower than 1.",
        ],
      },
    ],
    atackBonusFormula: (level: number): number => {
      return Math.floor(level / 2)
    },
    hitPointsFormula: (constitutionModifier: number): number => {
      const result = rollDice(1, 6) + constitutionModifier
      return result < 1 ? 1 : result
    },
  },
  {
    name: "adventurer",
    abilities: [
      {
        summary: "",
        details: ["You can choose 2 classes of the ones mentioned below."],
      },
      {
        summary: "Partial Expert",
        details: [
          "You gain a free level in a non-combat focus.",
          "Gain an extra non-combat/non-psychic skill point each time you level up.",
        ],
      },
      {
        summary: "Partial Warrior",
        details: [
          "You gain a free level in a combat focus.",
          "Gain +1 to your attack bonus at first and fifth levels.",
          "Gain 2 extra maximum hit points each level.",
        ],
      },
      {
        summary: "Partial Psychic",
        details: [
          "Pick one psychic discipline at level-0 but you cannot learn or improve any other psychic skill.",
          "Your maximum Effort is equal to 1 + highest psychic skill + (Wisdom or Constitution) modifiers cannot be lower than 1.",
        ],
      },
    ],
    atackBonusFormula: (level: number, gameSubClass?: GameSubClass): number => {
      return gameSubClass === GameSubClass.PARTIAL_WARRIOR
        ? level
        : Math.floor(level / 2)
    },
    hitPointsFormula: (
      constitutionModifier: number,
      gameSubClass?: GameSubClass,
    ): number => {
      const diceResult = rollDice(1, 6)
      const result: number =
        gameSubClass === GameSubClass.PARTIAL_WARRIOR
          ? diceResult + constitutionModifier + 2
          : diceResult + constitutionModifier

      return result < 1 ? 1 : result
    },
  },
]
