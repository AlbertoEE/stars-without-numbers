import { AttributeDefinition, AttributeDefinitionType } from "@/models/AttributeDefinitionModels";
import { AttributeDefinitionRepository } from "./AttributeDefinitionRepository";

export class InMemoryAttributeDefinitionRepository implements AttributeDefinitionRepository {
    getAttributes = () => {
        return attributeDefinitions
    }
}

const attributeDefinitions: AttributeDefinition[] = [
    {
      name: "dexterity",
      description:
        "In the wasteland, a quick hand and a quicker mind are your best allies..\n\nDexterity isn't just about speed; it's your evasion, your manual finesse with tools and weapons, and the snap of your reflexes in a firefight..\n\nIt's what puts you first in the line of action, giving you the upper hand in combat before the dust even settles.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.physical],
    },
    {
      name: "strength",
      description:
        "The raw power to bend the post-apocalyptic world to your will..\n\nStrength is your physical might, the brute force that turns a simple punch into a knock-out..\n\nIt's what lets you carry your burdens across the wasteland, stand firm in melee brawls, and smash through obstacles that would stop a weaker survivor dead in their tracks.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.physical],
    },
    {
      name: "constitution",
      description:
        "Survival is for the hardy, the ones who can take a beating and keep going..\n\nConstitution is your grit, your resilience..\n\nIt's enduring injuries that would fell lesser souls, resisting the toxic hazards of the wasteland, and pushing on when there's no food or sleep to be had..\n\nThis is the attribute of those who refuse to yield, no matter the odds.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.physical],
    },
    {
      name: "intelligence",
      description:
        "In a world ruled by rust and ruin, knowledge is power..\n\nIntelligence is your capacity for memory, the sharpness of your reasoning, and your aptitude for technical skills..\n\nIt's the breadth of your general education, allowing you to understand and manipulate the world around you..\n\nIntelligence is the light that cuts through the darkness of ignorance.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.mental],
    },
    {
      name: "wisdom",
      description:
        "The wasteland is full of deceptions, and only the wise can discern truth from lies..\n\nWisdom is your eye for detail, your ability to judge situations accurately, and read the intentions of friends and foes alike..\n\nIt's the intuition that guides you when maps fail and the insight to see solutions where others see only rubble.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.mental],
    },
    {
      name: "charisma",
      description:
        "In a land of solitude and desolation, the power to inspire and influence is invaluable..\n\nCharisma is your ability to command attention, to charm and persuade, to inspire loyalty or instill fear..\n\nIt's being taken seriously in negotiations, rallying others to your cause, and swaying the hearts and minds of those you encounter..\n\nCharisma is the unseen force that can turn the tide of any encounter.",
      type: [AttributeDefinitionType.any, AttributeDefinitionType.mental],
    },
];