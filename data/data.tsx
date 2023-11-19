
export const attributeDescription = {
    "Dexterity": "In the wasteland, a quick hand and a quicker mind are your best allies..\n\nDexterity isn't just about speed; it's your evasion, your manual finesse with tools and weapons, and the snap of your reflexes in a firefight..\n\nIt's what puts you first in the line of action, giving you the upper hand in combat before the dust even settles.",
    "Strength": "The raw power to bend the post-apocalyptic world to your will..\n\nStrength is your physical might, the brute force that turns a simple punch into a knock-out..\n\nIt's what lets you carry your burdens across the wasteland, stand firm in melee brawls, and smash through obstacles that would stop a weaker survivor dead in their tracks.",
    "Constitution": "Survival is for the hardy, the ones who can take a beating and keep going..\n\nConstitution is your grit, your resilience..\n\nIt's enduring injuries that would fell lesser souls, resisting the toxic hazards of the wasteland, and pushing on when there's no food or sleep to be had..\n\nThis is the attribute of those who refuse to yield, no matter the odds.",
    "Intelligence": "In a world ruled by rust and ruin, knowledge is power..\n\nIntelligence is your capacity for memory, the sharpness of your reasoning, and your aptitude for technical skills..\n\nIt's the breadth of your general education, allowing you to understand and manipulate the world around you..\n\nIntelligence is the light that cuts through the darkness of ignorance.",
    "Wisdom": "The wasteland is full of deceptions, and only the wise can discern truth from lies..\n\nWisdom is your eye for detail, your ability to judge situations accurately, and read the intentions of friends and foes alike..\n\nIt's the intuition that guides you when maps fail and the insight to see solutions where others see only rubble.",
    "Charisma": "In a land of solitude and desolation, the power to inspire and influence is invaluable..\n\nCharisma is your ability to command attention, to charm and persuade, to inspire loyalty or instill fear..\n\nIt's being taken seriously in negotiations, rallying others to your cause, and swaying the hearts and minds of those you encounter..\n\nCharisma is the unseen force that can turn the tide of any encounter."
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
    administer: {
        description: "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis.\n\nRoll it for bureaucratic expertise, organizational management, legal knowledge, dealing with government agencies, and understanding how institutions really work.",
        shortDescription: "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis.",
        type: ["AnySkill"],
    },
    connect: {
        description: "Find people who can be helpful to your purposes and get them to cooperate with you.\n\nRoll it to make useful connections with others, find people you know, know where to get illicit goods and services, and be familiar with foreign cultures and languages.\n\nYou can use it in place of Talk for persuading people you find via this skill.",
        shortDescription: "Find people who can be helpful to your purposes and get them to cooperate with you.",
        type: ["AnySkill"],
    },
    exert: {
        description: "Apply trained speed, strength, or stamina in some feat of physical exertion.\n\nRoll it to run, jump, lift, swim, climb, throw, and so forth.\n\nYou can use it as a combat skill when throwing things, though it doesn't qualify as a combat skill for other ends.",
        shortDescription: "Apply trained speed, strength, or stamina in some feat of physical exertion.",
        type: ["AnySkill"],
    },
    fix: {
        description: "Create and repair devices both simple and complex.\n\nHow complex will depend on your character's background; a lostworlder blacksmith is going to need some study time before he's ready to fix that broken fusion reactor, though he can do it eventually.\n\nRoll it to fix things, build things, and identify what something is supposed to do",
        shortDescription: "Create and repair devices both simple and complex.",
        type: ["AnySkill"],
    },
    heal: {
        description: "Employ medical and psychological treatment for the injured or disturbed.\n\nRoll it to cure diseases, stabilize the critically injured, treat psychological disorders, or diagnose illnesses.",
        shortDescription: "Employ medical and psychological treatment for the injured or disturbed.",
        type: ["AnySkill"],
    },
    know: {
        description: "Know facts about academic or scientific fields.\n\nRoll it to understand planetary ecologies, remember relevant history, solve science mysteries, and know the basic facts about rare or esoteric topics ",
        shortDescription: "Know facts about academic or scientific fields.",
        type: ["AnySkill"],
    },
    lead: {
        description: "Convince others to also do whatever it is you're trying to do.\n\nTalk might persuade them that following you is smart, but Lead can make them do it even when they think it's a bad idea.\n\nRoll it to lead troops in combat, convince others to follow you, or maintain morale and discipline",
        shortDescription: "Convince others to also do whatever it is you're trying to do.",
        type: ["AnySkill"],
    },
    notice: {
        description: "Spot anomalies or interesting facts about your environment.\n\nRoll it for searching places, detecting ambushes, spotting things, and reading the emotional state of other people.",
        shortDescription: "Spot anomalies or interesting facts about your environment.",
        type: ["AnySkill"],
    },
    perform: {
        description: "Exhibit some performative skill.\n\nRoll it to dance, sing, orate, act, or otherwise put on a convincing or emotionally moving performance.",
        shortDescription: "Exhibit some performative skill.",
        type: ["AnySkill"],
    },
    pilot: {
        description: "Use this skill to pilot vehicles or ride beasts.\n\nRoll it to fly spaceships, drive vehicles, ride animals, or tend to basic vehicle repair.\n\nThis skill doesn't help you with things entirely outside the scope of your background or experience, though with some practice a PC can expand their expertise",
        shortDescription: "Use this skill to pilot vehicles or ride beasts.",
        type: ["AnySkill"],
    },
    program: {
        description: "Operating or hacking computing and communications hardware.\n\nRoll it to program or hack computers, control computer-operated hardware, operate communications tech, or decrypt things.",
        shortDescription: "Operating or hacking computing and communications hardware.",
        type: ["AnySkill"],
    },
    punch: {
        description: "Use it as a combat skill when fighting unarmed.\n\nIf your PC means to make a habit of this rather than as a recourse of desperation, you should take the Unarmed Fighter focus described later.",
        shortDescription: "Use it as a combat skill when fighting unarmed.",
        type: ["AnySkill", "AnyCombat"],
    },
    shoot: {
        description: "Use it as a combat skill when using ranged weaponry, whether hurled rocks, bows, laser pistols, combat rifles, or ship's gunnery",
        shortDescription: "Use it as a combat skill when using ranged weaponry.",
        type: ["AnySkill", "AnyCombat"],
    },
    sneak: {
        description: "Move without drawing notice.\n\nRoll it for stealth, disguise, infiltration, manual legerdemain, pickpocketing, and the defeat of security measures.",
        shortDescription: "Move without drawing notice.",
        type: ["AnySkill"],
    },
    stab: {
        description: "Use it as a combat skill when wielding melee weapons, whether primitive or complex.",
        shortDescription: "Use it as a combat skill when wielding melee weapons.",
        type: ["AnySkill", "AnyCombat"],
    },
    survive: {
        description: "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils.\n\nRoll it to handle animals, navigate difficult terrain, scrounge urban resources, make basic tools, and avoid wild beasts or gangs.",
        shortDescription: "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils.",
        type: ["AnySkill"],
    },
    talk: {
        description: "Convince other people of the facts you want them to believe.\n\nWhat they do with that conviction may not be completely predictable.\n\nRoll it to persuade, charm, or deceive others in conversation.",
        shortDescription: "Convince other people of the facts you want them to believe.",
        type: ["AnySkill"],
    },
    trade: {
        description: "Find what you need on the market and sell what you have.\n\nRoll it to sell or buy things, figure out where to purchase hard-to-get or illicit goods, deal with customs agents, or run a business.",
        shortDescription: "Find what you need on the market and sell what you have.",
        type: ["AnySkill"],
    },
    work: {
        description: "This is a catch-all skill for professions not represented by other skills.\n\nRoll it to work at a particular profession, art, or trade.",
        shortDescription: "This is a catch-all skill for professions not represented by other skills.",
        type: ["AnySkill"],
    },
}

export interface Background {
    name: string,
    description: string,
    skills: BackgroundSkill
}

export interface BackgroundSkill {
    free: Benefit[],
    quick: Benefit[],
    growth: Benefit[],
    learning: Benefit[],
}

export interface Benefit {
    type: BenefitType,
    name: string,
    amount?: number,
}

export enum BenefitType {
    SkillBenefit,
    StatBenefit,
}

export const backgrounds: Background[] = [
    {
        name: "barbarian",
        description: "Standards of barbarism vary when many worlds are capable of interstellar spaceflight, but your hero comes from a savage world of low technology and high violence..\n\nTheir planet may have survived an all-consuming war, or been deprived of critical materials or energy resources, or simply have been colonized by confirmed Luddites..\n\nOther barbarians might be drawn from the impoverished underclass of advanced worlds or the technologically-degenerate inheritors of some high-tech space station or planetary hab.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "survive" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Exert" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "punch" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "survive" }],
        }
    },
    {
        name: "clergy",
        description: "Faith is nigh-universal among human civilizations, and your hero is dedicated to one such belief..\n\nSome clergy are conventional priests or priestesses, while others might be cloistered monastics or nuns, or more martial warrior-monks..\n\nModern-day faiths such as Christianity, Islam, Judaism, Hinduism, Buddhism, and other creeds all exist in various sectors, often in altered form, while some worlds have developed entirely new deities or faiths..\n\nIf you'd like to create your own religion, you can work with the GM to define its characteristic beliefs.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "talk" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "perform" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "courtesan",
        description: "Your hero's career was one of proffered pleasure..\n\nSimple prostitution is one form of this background, perhaps as an ordinary streetwalker, a part-time amateur with bills to pay, or an expensive companion to the wealthy, but other forms of satisfaction exist among the many worlds..\n\nRefined artists of conversation and grace command high fees in some societies, while others pay well for the simple company of certain men and women with the right bloodlines, special appearance, or auspicious personal qualities esteemed by their culture.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "sneak" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "talk" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Physycal" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "trade" }],
        }
    },
    {
        name: "criminal",
        description: "Whether thief, murderer, forger, smuggler, spy, or some other variety of malefactor, your hero was a criminal.\n\nSome such rogues are guilty only of crossing some oppressive government or offending a planetary lord, while others have done things that no civilized society could tolerate.\n\nStill, their ability to deal with the most desperate and dangerous of contacts and navigate the perils of a less-than-legal adventure can make them attractive associates for a party of freebooters bent on profit and glory more than strict legality.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "sneak" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "talk" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "trade" }],
        }
    },
    {
        name: "dilettante",
        description: "Your hero never had a profession, strictly speaking, but spent their formative years in travel, socializing, and a series of engaging hobbies.\n\nThey might have been the scion of a wealthy industrialist, a planetary noble's younger offspring, or a hanger-on to someone with the money and influence they lacked.\n\nBy the time your hero's adventures start, they've run through the money that once fueled their lifestyle.\n\nExtreme measures may be necessary to acquire further funding.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "connect" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "talk" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "program" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "trade" }],
        }
    },
    {
        name: "entertainer",
        description: "Singers, dancers, actors, poets, writers… the interstellar reaches teem with artists of unnumbered styles and mediums, some of which are only physically possible with advanced technological support.\n\nYour hero was a dedicated entertainer, one likely focused in a particular form of art.\n\nPatrons and talent scouts can be temperamental, however, and sometimes a budding artist needs to take steps to find their audience.\n\nOr at least, to find their audience's money.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "perform" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "connect" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "merchant",
        description: "Your hero was or is a trader.\n\nSome merchants are mere peddlers and shopkeepers on primitive, lowtech worlds, while others are daring far traders who venture to distant worlds to bring home their alien treasures.\n\nThe nature of trade varies widely among worlds.\n\nOn some of them, it's a business of soberly-dressed men and women ticking off trades on virtual terminals, while on others it is a more… active pursuit, requiring the judicious application of monoblades and deniable gunfire against competitors.\n\nSometimes a deal goes bad or capital needs to be raised, and a merchant's natural talents are turned toward the perils of adventure.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "trade" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "trade" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "connect" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "trade" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "noble",
        description: "Many planets are ruled by a class of nobles, and your hero was a member of one such exalted group.\n\nSuch planets are often worlds of exquisite courtesy alloyed with utterly remorseless violence, and a misplaced word at the morning levee can result in an executioner's monoblade at noon.\n\nYour hero has done something or been the victim of something to dislodge them from their comfortable place at court.\n\nWithout their familiar allies, wealth, or influence, they must take a new place in the world, however distasteful that claiming might be.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "lead" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "administer" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "official",
        description: "Most advanced worlds run on their bureaucracies, the legions of faceless men and women who fill unnumbered roles in keeping the government running as it should.\n\nYour hero was one such official.\n\nSome were law enforcement officers, others government office clerks or tax officials or trade inspectors.\n\nHowever necessary the work may be, it is often of unendurably tedious nature, and any man or woman with an adventurous spark to their blood will soon find themselves desperate for more exciting use of their talents.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "administer" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "connect" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anySkill" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "trade" },],
        }
    },
    {
        name: "peasant",
        description: "A technologically-advanced world can usually produce all its necessary foodstuffs and basic resources with a handful of workers, the bulk of the labor being performed by agricultural bots.\n\nOn more primitive worlds, or those with a natural environment that requires close personal attention to crops, a class of peasants will emerge.\n\nThese men and women often become chattel, part and parcel of the land they occupy and traded among their betters like the farm equipment of richer worlds.\n\nYour hero was not satisfied with that life, and has done something to break free from their muddy and toilsome past.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "exert" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "survive" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "Exert" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "trade" }, { type: BenefitType.SkillBenefit, name: "work" }],
        }
    },
    {
        name: "physician",
        description: "Bodies wear and break, even on worlds that possess the full resources of advanced postech medicine.\n\nYour hero was a physician, one trained to cure the maladies of the body or the afflictions of the mind.\n\nSome physicians are conventional health workers, while others are ship's surgeons, military medics, missionary healers of an expanding faith, or dubious slum doctors who'll graft over laser burns with no awkward questions asked.\n\nWherever men and women go into danger, however, the skills of a physician are eagerly sought.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "fix" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "trade" }],
        }
    },
    {
        name: "pilot",
        description: "A pilot's role is a broad one in the far future.\n\nThe most glamorous and talented navigate starships through the metadimensional storms of interstellar space, while less admired figures fly the innumerable intra-system shuttles and atmosphere craft that serve in most advanced systems.\n\nOn other worlds, this career might reflect a long-haul trucker, or a horse-riding messenger, or an intrepid sailor on an alien sea.\n\nAs the Pilot skill covers all these modes of transport, any character whose role revolves around vehicles or riding beasts might justify their selection of this career.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "pilot" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "shoot" }, { type: BenefitType.SkillBenefit, name: "trade" }],
            growth: [{ type: BenefitType.SkillBenefit, name: "+1 Any Stat" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Physical" }, { type: BenefitType.SkillBenefit, name: "+2 Mental" }, { type: BenefitType.SkillBenefit, name: "Connect" }, { type: BenefitType.SkillBenefit, name: "Any Skill" },],
            learning: [{ type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "shoot" }, { type: BenefitType.SkillBenefit, name: "trade" }],
        }
    },
    {
        name: "politician",
        description: "The nature of a political career varies from world to world.\n\nOn some, it's much like one we'd recognize, with glad-handing voters, loud rallies, and quiet back room deals with supposed rivals in government.\n\nOn others, it might involve a great deal more ceremonial combat, appeals to councils of elders, and success at ritual trials.\n\nWhatever the details, your hero was a politician in their home culture.\n\nSomething went wrong, though, and the only way to fix it is to get clear of your constituents for a while and seek some alternative means of advancement.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "talk" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "connect" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "scholar",
        description: "Scientists, sages, and professors all qualify under this career.\n\nYour hero was one such, a man or woman with a life dedicated to knowledge and understanding.\n\nIt might have involved the technical expertise of a metadimensional structures engineer or the sacred memorization of the chronicles of some lostworlder sage-order, but your hero’s life was in learning.\n\nSometimes that learning cannot be found in familiar surroundings, however, and for one reason or another, willing or not, your hero must venture out into the wider world.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "perform" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "administer" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "program" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "soldier",
        description: "Whatever the technology or structure of their parent world, a soldier’s work is universal.\n\nYour hero was a professional fighter, whether that took the form of a barbarian noble’s thegn, a faceless conscript in a planetary army, or an elite soldier in the service of a megacorp’s private military.\n\nWhether it was because they were on the losing side, choosing to leave the service, or being forced to flee a cause they couldn’t fight for, they now find themselves navigating a world where their most salable skill is one that can cause them a great deal of trouble.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "survive" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "lead" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "survive" }],
        }
    },
    {
        name: "spacer",
        description: "Almost every advanced world is highly dependent upon the resources that space flight brings them.\n\nSome of this work can be automated, but every really important task needs a flexible human operator to oversee the work.\n\nYour hero is one such spacer, either a worker who toils in the sky or a native voidborn man or woman who has spent their entire life outside of natural gravity.\n\nIt’s not uncommon for such workers to find better prospects in places where they can breathe without a vacc suit.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "fix" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "program" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "program" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "technician",
        description: "Old things break and new things need to be made.\n\nWhether a humble lostworlder blacksmith or an erudite astronautic engineer, your hero made a career out of building and mending the fruits of technology.\n\nWhile almost every society has a need for such services, not all of them treat their providers as generously as a technician might wish.\n\nSometimes, these same talents can be turned toward less licit ends, and a skilled technician’s expertise is always useful to an adventuring group that plans to rely on anything more sophisticated than a sharpened stick.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "fix" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "notice" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "pilot" }],
        }
    },
    {
        name: "thug",
        description: "Your hero was a bruiser.\n\nThey might have had a notional allegiance to some so-called “army”, or have been part of some crime boss’ strong-arm crew, or simply been a private contractor of misfortune for those who failed to pay up.\n\nThey might have even been a fist in a righteous cause, defending their neighborhood from hostile outsiders or serving as informal muscle for a local leader in need of protection.\n\nWhatever the details, they’ve had to move on from their old life, and their new one is likely to involve a similar application of directed force.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "talk" }, { type: BenefitType.SkillBenefit, name: "connect" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "talk" }],
        }
    },
    {
        name: "vagabond",
        description: "A dilettante has money and friends; your hero simply has the road.\n\nWhether they were knocked loose from polite society at a young age or have recently found themselves cast out of a familiar life, they now roam the ways of the world and the spaces between.\n\nSome heroes find this life satisfying, with its constant novelty and the regular excitement of bare survival.\n\nOthers long for a more stable arrangement, and are willing to lend their pragmatic talents to a group that offers some prospect of profit.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "survive" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "notice" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "physical", amount: 2 }, { type: BenefitType.StatBenefit, name: "mental", amount: 2 }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "anyCombat" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "notice" }, { type: BenefitType.SkillBenefit, name: "perform" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "sneak" }, { type: BenefitType.SkillBenefit, name: "survive" }, { type: BenefitType.SkillBenefit, name: "work" }],
        }
    },
    {
        name: "worker",
        description: "Countless in number, every industrialized world has swarms of workers to operate the machines and perform the labor that keeps society functioning.\n\nCooks, factory laborers, mine workers, personal servants, lawyers, clerks, and innumerable other roles are covered under this career.\n\nIf your hero rolls or picks Work as a skill but has a career that would better fit another existing skill, they may substitute it accordingly.\n\nThus, a wage-slave programmer might take Program instead of Work, while a lawyer would use Administer instead as a reflection of their litigious talent.",
        skills: {
            free: [{ type: BenefitType.SkillBenefit, name: "work" }],
            quick: [{ type: BenefitType.SkillBenefit, name: "work" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }],
            growth: [{ type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.StatBenefit, name: "anyStat", amount: 1 }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "anySkill"},],
            learning: [{ type: BenefitType.SkillBenefit, name: "administer" }, { type: BenefitType.SkillBenefit, name: "anySkill" }, { type: BenefitType.SkillBenefit, name: "connect" }, { type: BenefitType.SkillBenefit, name: "exert" }, { type: BenefitType.SkillBenefit, name: "fix" }, { type: BenefitType.SkillBenefit, name: "pilot" }, { type: BenefitType.SkillBenefit, name: "program" }, { type: BenefitType.SkillBenefit, name: "work" }],
        }
    },
]













