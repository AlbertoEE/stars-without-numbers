
export const attributeDescription = {
    "Dexterity": "In the wasteland, a quick hand and a quicker mind are your best allies.\n\nDexterity isn't just about speed; it's your evasion, your manual finesse with tools and weapons, and the snap of your reflexes in a firefight.\n\nIt's what puts you first in the line of action, giving you the upper hand in combat before the dust even settles.",
    "Strength": "The raw power to bend the post-apocalyptic world to your will.\n\nStrength is your physical might, the brute force that turns a simple punch into a knock-out.\n\nIt's what lets you carry your burdens across the wasteland, stand firm in melee brawls, and smash through obstacles that would stop a weaker survivor dead in their tracks.",
    "Constitution": "Survival is for the hardy, the ones who can take a beating and keep going.\n\nConstitution is your grit, your resilience.\n\nIt's enduring injuries that would fell lesser souls, resisting the toxic hazards of the wasteland, and pushing on when there's no food or sleep to be had.\n\nThis is the attribute of those who refuse to yield, no matter the odds.",
    "Intelligence": "In a world ruled by rust and ruin, knowledge is power.\n\nIntelligence is your capacity for memory, the sharpness of your reasoning, and your aptitude for technical skills.\n\nIt's the breadth of your general education, allowing you to understand and manipulate the world around you.\n\nIntelligence is the light that cuts through the darkness of ignorance.",
    "Wisdom": "The wasteland is full of deceptions, and only the wise can discern truth from lies.\n\nWisdom is your eye for detail, your ability to judge situations accurately, and read the intentions of friends and foes alike.\n\nIt's the intuition that guides you when maps fail and the insight to see solutions where others see only rubble.",
    "Charisma": "In a land of solitude and desolation, the power to inspire and influence is invaluable.\n\nCharisma is your ability to command attention, to charm and persuade, to inspire loyalty or instill fear.\n\nIt's being taken seriously in negotiations, rallying others to your cause, and swaying the hearts and minds of those you encounter.\n\nCharisma is the unseen force that can turn the tide of any encounter."
}

export const attributeScoreModifier = {
    0: -2,
    1: -2,
    3: -2,
    4: -1,
    5: -1,
    6: -1,
    7: -1,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
    18: 2,
    19: 2,
    20: 2,
};

export const skills = {
    Administer: { 
        description: "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis. Roll it for bureaucratic expertise, organizational management, legal knowledge, dealing with government agencies, and understanding how institutions really work.", 
        type: ["AnySkill"],
     },
    Connect: { 
        description: "Find people who can be helpful to your purposes and get them to cooperate with you. Roll it to make useful connections with others, find people you know, know where to get illicit goods and services, and be familiar with foreign cultures and languages. You can use it in place of Talk for persuading people you find via this skill.", 
        type: ["AnySkill"],
     },
    Exert: { 
        description: "Apply trained speed, strength, or stamina in some feat of physical exertion. Roll it to run, jump, lift, swim, climb, throw, and so forth. You can use it as a combat skill when throwing things, though it doesn’t qualify as a combat skill for other ends.", 
        type: ["AnySkill"],
     },
    Fix: { 
        description: "Create and repair devices both simple and complex. How complex will depend on your character’s background; a lostworlder blacksmith is going to need some study time before he’s ready to fix that broken fusion reactor, though he can do it eventually. Roll it to fix things, build things, and identify what something is supposed to do", 
        type: ["AnySkill"],
     },
    Heal: { 
        description: "Employ medical and psychological treatment for the injured or disturbed. Roll it to cure diseases, stabilize the critically injured, treat psychological disorders, or diagnose illnesses.", 
        type: ["AnySkill"],
     },
    Know: { 
        description: "Know facts about academic or scientific fields. Roll it to understand planetary ecologies, remember relevant history, solve science mysteries, and know the basic facts about rare or esoteric topics ", 
        type: ["AnySkill"],
     },
    Lead: { 
        description: "Convince others to also do whatever it is you’re trying to do. Talk might persuade them that following you is smart, but Lead can make them do it even when they think it’s a bad idea. Roll it to lead troops in combat, convince others to follow you, or maintain morale and discipline", 
        type: ["AnySkill"],
     },
    Notice: { 
        description: "Spot anomalies or interesting facts about your environment. Roll it for searching places, detecting ambushes, spotting things, and reading the emotional state of other people.", 
        type: ["AnySkill"],
     },
    Perform: { 
        description: "Exhibit some performative skill. Roll it to dance, sing, orate, act, or otherwise put on a convincing or emotionally moving performance.", 
        type: ["AnySkill"],
     },
    Pilot: { 
        description: "Use this skill to pilot vehicles or ride beasts. Roll it to fly spaceships, drive vehicles, ride animals, or tend to basic vehicle repair. This skill doesn’t help you with things entirely outside the scope of your background or experience, though with some practice a PC can expand their expertise", 
        type: ["AnySkill"],
     },
    Program: { 
        description: "Operating or hacking computing and communications hardware. Roll it to program or hack computers, control computer-operated hardware, operate communications tech, or decrypt things.", 
        type: ["AnySkill"],
     },
    Punch: { 
        description: "Use it as a combat skill when fighting unarmed. If your PC means to make a habit of this rather than as a recourse of desperation, you should take the Unarmed Fighter focus described later.", 
        type: ["AnySkill", "AnyCombat"],
     },
    Shoot: { 
        description: "Use it as a combat skill when using ranged weaponry, whether hurled rocks, bows, laser pistols, combat rifles, or ship’s gunnery", 
        type: ["AnySkill", "AnyCombat"],
     },
    Sneak: { 
        description: "Move without drawing notice. Roll it for stealth, disguise, infiltration, manual legerdemain, pickpocketing, and the defeat of security measures.", 
        type: ["AnySkill"],
     },
    Stab: { 
        description: "Use it as a combat skill when wielding melee weapons, whether primitive or complex.", 
        type: ["AnySkill", "AnyCombat"],
     },
    Survive: { 
        description: "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils. Roll it to handle animals, navigate difficult terrain, scrounge urban resources, make basic tools, and avoid wild beasts or gangs.", 
        type: ["AnySkill"],
     },
    Talk: { 
        description: "Convince other people of the facts you want them to believe. What they do with that conviction may not be completely predictable. Roll it to persuade, charm, or deceive others in conversation.", 
        type: ["AnySkill"],
     },
    Trade: { 
        description: "Find what you need on the market and sell what you have. Roll it to sell or buy things, figure out where to purchase hard-to-get or illicit goods, deal with customs agents, or run a business.", 
        type: ["AnySkill"],
     },
    Work: { 
        description: "This is a catch-all skill for professions not represented by other skills. Roll it to work at a particular profession, art, or trade.", 
        type: ["AnySkill"],
     },
}
