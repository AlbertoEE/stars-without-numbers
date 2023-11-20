import { SkillDefinition, SkillDefinitionType } from "@/models/SkillDefinitionModels";
import { SkillDefinitionRepository } from "./SkillDefinitionRepository";


export class InMemorySkillDefinitionRepository implements SkillDefinitionRepository {
    getSkills = () => {return skillDefinitions};
}

const skillDefinitions: SkillDefinition[] = [
    {
      name: "administer",
      description:
        "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis.\n\nRoll it for bureaucratic expertise, organizational management, legal knowledge, dealing with government agencies, and understanding how institutions really work.",
      shortDescription:
        "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "connect",
      description:
        "Find people who can be helpful to your purposes and get them to cooperate with you.\n\nRoll it to make useful connections with others, find people you know, know where to get illicit goods and services, and be familiar with foreign cultures and languages.\n\nYou can use it in place of Talk for persuading people you find via this skill.",
      shortDescription:
        "Find people who can be helpful to your purposes and get them to cooperate with you.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "exert",
      description:
        "Apply trained speed, strength, or stamina in some feat of physical exertion.\n\nRoll it to run, jump, lift, swim, climb, throw, and so forth.\n\nYou can use it as a combat skill when throwing things, though it doesn't qualify as a combat skill for other ends.",
      shortDescription:
        "Apply trained speed, strength, or stamina in some feat of physical exertion.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "fix",
      description:
        "Create and repair devices both simple and complex.\n\nHow complex will depend on your character's background; a lostworlder blacksmith is going to need some study time before he's ready to fix that broken fusion reactor, though he can do it eventually.\n\nRoll it to fix things, build things, and identify what something is supposed to do",
      shortDescription: "Create and repair devices both simple and complex.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "heal",
      description:
        "Employ medical and psychological treatment for the injured or disturbed.\n\nRoll it to cure diseases, stabilize the critically injured, treat psychological disorders, or diagnose illnesses.",
      shortDescription:
        "Employ medical and psychological treatment for the injured or disturbed.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "know",
      description:
        "Know facts about academic or scientific fields.\n\nRoll it to understand planetary ecologies, remember relevant history, solve science mysteries, and know the basic facts about rare or esoteric topics ",
      shortDescription: "Know facts about academic or scientific fields.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "lead",
      description:
        "Convince others to also do whatever it is you're trying to do.\n\nTalk might persuade them that following you is smart, but Lead can make them do it even when they think it's a bad idea.\n\nRoll it to lead troops in combat, convince others to follow you, or maintain morale and discipline",
      shortDescription:
        "Convince others to also do whatever it is you're trying to do.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "notice",
      description:
        "Spot anomalies or interesting facts about your environment.\n\nRoll it for searching places, detecting ambushes, spotting things, and reading the emotional state of other people.",
      shortDescription:
        "Spot anomalies or interesting facts about your environment.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "perform",
      description:
        "Exhibit some performative skill.\n\nRoll it to dance, sing, orate, act, or otherwise put on a convincing or emotionally moving performance.",
      shortDescription: "Exhibit some performative skill.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "pilot",
      description:
        "Use this skill to pilot vehicles or ride beasts.\n\nRoll it to fly spaceships, drive vehicles, ride animals, or tend to basic vehicle repair.\n\nThis skill doesn't help you with things entirely outside the scope of your background or experience, though with some practice a PC can expand their expertise",
      shortDescription: "Use this skill to pilot vehicles or ride beasts.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "program",
      description:
        "Operating or hacking computing and communications hardware.\n\nRoll it to program or hack computers, control computer-operated hardware, operate communications tech, or decrypt things.",
      shortDescription:
        "Operating or hacking computing and communications hardware.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "punch",
      description:
        "Use it as a combat skill when fighting unarmed.\n\nIf your PC means to make a habit of this rather than as a recourse of desperation, you should take the Unarmed Fighter focus described later.",
      shortDescription: "Use it as a combat skill when fighting unarmed.",
      type: [SkillDefinitionType.generic, SkillDefinitionType.combat],
    },
    {
      name: "shoot",
      description:
        "Use it as a combat skill when using ranged weaponry, whether hurled rocks, bows, laser pistols, combat rifles, or ship's gunnery",
      shortDescription: "Use it as a combat skill when using ranged weaponry.",
      type: [SkillDefinitionType.generic, SkillDefinitionType.combat],
    },
    {
      name: "sneak",
      description:
        "Move without drawing notice.\n\nRoll it for stealth, disguise, infiltration, manual legerdemain, pickpocketing, and the defeat of security measures.",
      shortDescription: "Move without drawing notice.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "stab",
      description:
        "Use it as a combat skill when wielding melee weapons, whether primitive or complex.",
      shortDescription: "Use it as a combat skill when wielding melee weapons.",
      type: [SkillDefinitionType.generic, SkillDefinitionType.combat],
    },
    {
      name: "survive",
      description:
        "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils.\n\nRoll it to handle animals, navigate difficult terrain, scrounge urban resources, make basic tools, and avoid wild beasts or gangs.",
      shortDescription:
        "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "talk",
      description:
        "Convince other people of the facts you want them to believe.\n\nWhat they do with that conviction may not be completely predictable.\n\nRoll it to persuade, charm, or deceive others in conversation.",
      shortDescription:
        "Convince other people of the facts you want them to believe.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "trade",
      description:
        "Find what you need on the market and sell what you have.\n\nRoll it to sell or buy things, figure out where to purchase hard-to-get or illicit goods, deal with customs agents, or run a business.",
      shortDescription:
        "Find what you need on the market and sell what you have.",
      type: [SkillDefinitionType.generic],
    },
    {
      name: "work",
      description:
        "This is a catch-all skill for professions not represented by other skills.\n\nRoll it to work at a particular profession, art, or trade.",
      shortDescription:
        "This is a catch-all skill for professions not represented by other skills.",
      type: [SkillDefinitionType.generic],
    },
  ];