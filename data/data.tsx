
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
    administer: {
        description: "Manage an organization, handle paperwork, analyze records, and keep an institution functioning on a daily basis. Roll it for bureaucratic expertise, organizational management, legal knowledge, dealing with government agencies, and understanding how institutions really work.",
        type: ["AnySkill"],
    },
    connect: {
        description: "Find people who can be helpful to your purposes and get them to cooperate with you. Roll it to make useful connections with others, find people you know, know where to get illicit goods and services, and be familiar with foreign cultures and languages. You can use it in place of Talk for persuading people you find via this skill.",
        type: ["AnySkill"],
    },
    exert: {
        description: "Apply trained speed, strength, or stamina in some feat of physical exertion. Roll it to run, jump, lift, swim, climb, throw, and so forth. You can use it as a combat skill when throwing things, though it doesn't qualify as a combat skill for other ends.",
        type: ["AnySkill"],
    },
    fix: {
        description: "Create and repair devices both simple and complex. How complex will depend on your character's background; a lostworlder blacksmith is going to need some study time before he's ready to fix that broken fusion reactor, though he can do it eventually. Roll it to fix things, build things, and identify what something is supposed to do",
        type: ["AnySkill"],
    },
    heal: {
        description: "Employ medical and psychological treatment for the injured or disturbed. Roll it to cure diseases, stabilize the critically injured, treat psychological disorders, or diagnose illnesses.",
        type: ["AnySkill"],
    },
    know: {
        description: "Know facts about academic or scientific fields. Roll it to understand planetary ecologies, remember relevant history, solve science mysteries, and know the basic facts about rare or esoteric topics ",
        type: ["AnySkill"],
    },
    lead: {
        description: "Convince others to also do whatever it is you're trying to do. Talk might persuade them that following you is smart, but Lead can make them do it even when they think it's a bad idea. Roll it to lead troops in combat, convince others to follow you, or maintain morale and discipline",
        type: ["AnySkill"],
    },
    notice: {
        description: "Spot anomalies or interesting facts about your environment. Roll it for searching places, detecting ambushes, spotting things, and reading the emotional state of other people.",
        type: ["AnySkill"],
    },
    perform: {
        description: "Exhibit some performative skill. Roll it to dance, sing, orate, act, or otherwise put on a convincing or emotionally moving performance.",
        type: ["AnySkill"],
    },
    pilot: {
        description: "Use this skill to pilot vehicles or ride beasts. Roll it to fly spaceships, drive vehicles, ride animals, or tend to basic vehicle repair. This skill doesn't help you with things entirely outside the scope of your background or experience, though with some practice a PC can expand their expertise",
        type: ["AnySkill"],
    },
    program: {
        description: "Operating or hacking computing and communications hardware. Roll it to program or hack computers, control computer-operated hardware, operate communications tech, or decrypt things.",
        type: ["AnySkill"],
    },
    punch: {
        description: "Use it as a combat skill when fighting unarmed. If your PC means to make a habit of this rather than as a recourse of desperation, you should take the Unarmed Fighter focus described later.",
        type: ["AnySkill", "AnyCombat"],
    },
    shoot: {
        description: "Use it as a combat skill when using ranged weaponry, whether hurled rocks, bows, laser pistols, combat rifles, or ship's gunnery",
        type: ["AnySkill", "AnyCombat"],
    },
    sneak: {
        description: "Move without drawing notice. Roll it for stealth, disguise, infiltration, manual legerdemain, pickpocketing, and the defeat of security measures.",
        type: ["AnySkill"],
    },
    stab: {
        description: "Use it as a combat skill when wielding melee weapons, whether primitive or complex.",
        type: ["AnySkill", "AnyCombat"],
    },
    survive: {
        description: "Obtain the basics of food, water, and shelter in hostile environments, along with avoiding their natural perils. Roll it to handle animals, navigate difficult terrain, scrounge urban resources, make basic tools, and avoid wild beasts or gangs.",
        type: ["AnySkill"],
    },
    talk: {
        description: "Convince other people of the facts you want them to believe. What they do with that conviction may not be completely predictable. Roll it to persuade, charm, or deceive others in conversation.",
        type: ["AnySkill"],
    },
    trade: {
        description: "Find what you need on the market and sell what you have. Roll it to sell or buy things, figure out where to purchase hard-to-get or illicit goods, deal with customs agents, or run a business.",
        type: ["AnySkill"],
    },
    work: {
        description: "This is a catch-all skill for professions not represented by other skills. Roll it to work at a particular profession, art, or trade.",
        type: ["AnySkill"],
    },
}

export const backgrounds = [
    {
        name: "barbarian",
        description: "Standards of barbarism vary when many worlds are capable of interstellar spaceflight, but your hero comes from a savage world of low technology and high violence. Their planet may have survived an all-consuming war, or been deprived of critical materials or energy resources, or simply have been colonized by confirmed Luddites. Other barbarians might be drawn from the impoverished underclass of advanced worlds or the technologically-degenerate inheritors of some high-tech space station or planetary hab.",
        skills: {
            free: ["survive"],
            quick: ["survive", "notice", "anyCombat"],
            growth: [],
            learning: ["anyCombat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"],
        }
    },
    {
        name: "clergy",
        description: "Faith is nigh-universal among human civilizations, and your hero is dedicated to one such belief. Some clergy are conventional priests or priestesses, while others might be cloistered monastics or nuns, or more martial warrior-monks. Modern-day faiths such as Christianity, Islam, Judaism, Hinduism, Buddhism, and other creeds all exist in various sectors, often in altered form, while some worlds have developed entirely new deities or faiths. If you'd like to create your own religion, you can work with the GM to define its characteristic beliefs.",
        skills: {
            free: ["talk"],
            quick: ["talk", "perform", "know"],
            growth: [],
            learning: ["administer", "connect", "know", "lead", "notice", "perform", "talk", "talk"],
        }
    },
    {
        name: "courtesan",
        description: "Your hero's career was one of proffered pleasure. Simple prostitution is one form of this background, perhaps as an ordinary streetwalker, a part-time amateur with bills to pay, or an expensive companion to the wealthy, but other forms of satisfaction exist among the many worlds. Refined artists of conversation and grace command high fees in some societies, while others pay well for the simple company of certain men and women with the right bloodlines, special appearance, or auspicious personal qualities esteemed by their culture.",
        skills: {
            free: ["sneak"],
            quick: ["perform", "notice", "talk"],
            growth: [],
            learning: ["anyCombat", "connect", "exert", "notice", "perform", "survive", "talk", "trade"],
        }
    },
    {
        name: "criminal",
        description: "Whether thief, murderer, forger, smuggler, spy, or some other variety of malefactor, your hero was a criminal. Some such rogues are guilty only of crossing some oppressive government or offending a planetary lord, while others have done things that no civilized society could tolerate. Still, their ability to deal with the most desperate and dangerous of contacts and navigate the perils of a less-than-legal adventure can make them attractive associates for a party of freebooters bent on profit and glory more than strict legality.",
        skills: {
            free: ["sneak"],
            quick: ["sneak", "connect", "talk"],
            growth: [],
            learning: ["anyCombat", "connect", "exert", "notice", "perform", "survive", "talk", "trade"],
        }
    },
    {
        name: "dilettante",
        description: "Your hero never had a profession, strictly speaking, but spent their formative years in travel, socializing, and a series of engaging hobbies. They might have been the scion of a wealthy industrialist, a planetary noble's younger offspring, or a hanger-on to someone with the money and influence they lacked. By the time your hero's adventures start, they've run through the money that once fueled their lifestyle. Extreme measures may be necessary to acquire further funding.",
        skills: {
            free: ["connect"],
            quick: ["connect", "know", "talk"],
            growth: [],
            learning: ["administer", "anyCombat", "connect", "notice", "program", "sneak", "talk", "trade"],
        }
    },
    {
        name: "entertainer",
        description: "Singers, dancers, actors, poets, writers… the interstellar reaches teem with artists of unnumbered styles and mediums, some of which are only physically possible with advanced technological support. Your hero was a dedicated entertainer, one likely focused in a particular form of art. Patrons and talent scouts can be temperamental, however, and sometimes a budding artist needs to take steps to find their audience. Or at least, to find their audience's money.",
        skills: {
            free: ["perform"],
            quick: ["perform", "talk", "connect"],
            growth: [],
            learning: ["anyCombat", "connect", "exert", "notice", "perform", "perform", "sneak", "talk"],
        }
    },
    {
        name: "merchant",
        description: "Your hero was or is a trader. Some merchants are mere peddlers and shopkeepers on primitive, lowtech worlds, while others are daring far traders who venture to distant worlds to bring home their alien treasures. The nature of trade varies widely among worlds. On some of them, it's a business of soberly-dressed men and women ticking off trades on virtual terminals, while on others it is a more… active pursuit, requiring the judicious application of monoblades and deniable gunfire against competitors. Sometimes a deal goes bad or capital needs to be raised, and a merchant's natural talents are turned toward the perils of adventure.",
        skills: {
            free: ["trade"],
            quick: ["trade", "talk", "connect"],
            growth: [],
            learning: ["administer", "anyCombat", "connect", "fix", "know", "notice", "trade", "talk"],
        }
    },
    {
        name: "noble",
        description: "Many planets are ruled by a class of nobles, and your hero was a member of one such exalted group. Such planets are often worlds of exquisite courtesy alloyed with utterly remorseless violence, and a misplaced word at the morning levee can result in an executioner's monoblade at noon. Your hero has done something or been the victim of something to dislodge them from their comfortable place at court. Without their familiar allies, wealth, or influence, they must take a new place in the world, however distasteful that claiming might be.",
        skills: {
            free: ["lead"],
            quick: ["lead", "connect", "administer"],
            growth: [],
            learning: ["administer", "anyCombat", "connect", "know", "lead", "notice", "pilot", "talk"],
        }
    },
    {
        name: "official",
        description: "Most advanced worlds run on their bureaucracies, the legions of faceless men and women who fill unnumbered roles in keeping the government running as it should. Your hero was one such official. Some were law enforcement officers, others government office clerks or tax officials or trade inspectors. However necessary the work may be, it is often of unendurably tedious nature, and any man or woman with an adventurous spark to their blood will soon find themselves desperate for more exciting use of their talents.",
        skills: {
            free: ["administer"],
            quick: ["administer", "talk", "connect"],
            growth: [],
            learning: ["administer", "anySkill", "connect", "know", "lead", "notice", "talk", "trade",],
        }
    },
    {
        name: "peasant",
        description: "A technologically-advanced world can usually produce all its necessary foodstuffs and basic resources with a handful of workers, the bulk of the labor being performed by agricultural bots. On more primitive worlds, or those with a natural environment that requires close personal attention to crops, a class of peasants will emerge. These men and women often become chattel, part and parcel of the land they occupy and traded among their betters like the farm equipment of richer worlds. Your hero was not satisfied with that life, and has done something to break free from their muddy and toilsome past.",
        skills: {
            free: ["exert"],
            quick: ["exert", "sneak", "survive"],
            growth: [],
            learning: ["connect", "exert", "fix", "notice", "sneak", "survive", "trade", "work"],
        }
    },
    {
        name: "physician",
        description: "Bodies wear and break, even on worlds that possess the full resources of advanced postech medicine. Your hero was a physician, one trained to cure the maladies of the body or the afflictions of the mind. Some physicians are conventional health workers, while others are ship's surgeons, military medics, missionary healers of an expanding faith, or dubious slum doctors who'll graft over laser burns with no awkward questions asked. Wherever men and women go into danger, however, the skills of a physician are eagerly sought.",
        skills: {
            free: ["heal"],
            quick: ["heal", "know", "notice"],
            growth: [],
            learning: ["administer", "connect", "fix", "heal", "know", "notice", "talk", "trade"],
        }
    },
    {
        name: "pilot",
        description: "A pilot's role is a broad one in the far future. The most glamorous and talented navigate starships through the metadimensional storms of interstellar space, while less admired figures fly the innumerable intra-system shuttles and atmosphere craft that serve in most advanced systems. On other worlds, this career might reflect a long-haul trucker, or a horse-riding messenger, or an intrepid sailor on an alien sea. As the Pilot skill covers all these modes of transport, any character whose role revolves around vehicles or riding beasts might justify their selection of this career.",
        skills: {
            free: ["pilot"],
            quick: ["pilot", "shoot", "trade"],
            growth: [],
            learning: ["connect", "exert", "fix", "notice", "pilot", "pilot", "shoot", "trade"],
        }
    },
    {
        name: "politician",
        description: "The nature of a political career varies from world to world. On some, it's much like one we'd recognize, with glad-handing voters, loud rallies, and quiet back room deals with supposed rivals in government. On others, it might involve a great deal more ceremonial combat, appeals to councils of elders, and success at ritual trials. Whatever the details, your hero was a politician in their home culture. Something went wrong, though, and the only way to fix it is to get clear of your constituents for a while and seek some alternative means of advancement.",
        skills: {
            free: ["talk"],
            quick: ["talk", "lead", "connect"],
            growth: [],
            learning: [],
        }
    },
    {
        name: "scholar",
        description: "Scientists, sages, and professors all qualify under this career. Your hero was one such, a man or woman with a life dedicated to knowledge and understanding. It might have involved the technical expertise of a metadimensional structures engineer or the sacred memorization of the chronicles of some lostworlder sage-order, but your hero’s life was in learning. Sometimes that learning cannot be found in familiar surroundings, however, and for one reason or another, willing or not, your hero must venture out into the wider world.",
        skills: {
            free: ["know"],
            quick: ["know", "connect", "administer"],
            growth: [],
            learning: ["administer", "connect", "fix", "know", "notice", "perform", "program", "talk"],
        }
    },
    {
        name: "soldier",
        description: "Whatever the technology or structure of their parent world, a soldier’s work is universal. Your hero was a professional fighter, whether that took the form of a barbarian noble’s thegn, a faceless conscript in a planetary army, or an elite soldier in the service of a megacorp’s private military. Whether it was because they were on the losing side, choosing to leave the service, or being forced to flee a cause they couldn’t fight for, they now find themselves navigating a world where their most salable skill is one that can cause them a great deal of trouble.",
        skills: {
            free: ["anyCombat"],
            quick: ["anyCombat", "exert", "survive"],
            growth: [],
            learning: ["administer", "anyCombat", "exert", "fix", "lead", "notice", "sneak", "survive"],
        }
    },
    {
        name: "spacer",
        description: "Almost every advanced world is highly dependent upon the resources that space flight brings them. Some of this work can be automated, but every really important task needs a flexible human operator to oversee the work. Your hero is one such spacer, either a worker who toils in the sky or a native voidborn man or woman who has spent their entire life outside of natural gravity. It’s not uncommon for such workers to find better prospects in places where they can breathe without a vacc suit.",
        skills: {
            free: ["fix"],
            quick: ["fix", "pilot", "program"],
            growth: [],
            learning: ["administer", "connect", "exert", "fix", "know", "pilot", "program", "talk"],
        }
    },
    {
        name: "technician",
        description: "Old things break and new things need to be made. Whether a humble lostworlder blacksmith or an erudite astronautic engineer, your hero made a career out of building and mending the fruits of technology. While almost every society has a need for such services, not all of them treat their providers as generously as a technician might wish. Sometimes, these same talents can be turned toward less licit ends, and a skilled technician’s expertise is always useful to an adventuring group that plans to rely on anything more sophisticated than a sharpened stick.",
        skills: {
            free: ["fix"],
            quick: ["fix", "exert", "notice"],
            growth: [],
            learning: ["administer", "connect", "exert", "fix", "fix", "know", "notice", "pilot"],
        }
    },
    {
        name: "thug",
        description: "Your hero was a bruiser. They might have had a notional allegiance to some so-called “army”, or have been part of some crime boss’ strong-arm crew, or simply been a private contractor of misfortune for those who failed to pay up. They might have even been a fist in a righteous cause, defending their neighborhood from hostile outsiders or serving as informal muscle for a local leader in need of protection. Whatever the details, they’ve had to move on from their old life, and their new one is likely to involve a similar application of directed force.",
        skills: {
            free: ["anyCombat"],
            quick: ["anyCombat", "talk", "connect"],
            growth: [],
            learning: ["anyCombat", "connect", "exert", "notice", "sneak", "anyCombat", "survive", "talk"],
        }
    },
    {
        name: "vagabond",
        description: "A dilettante has money and friends; your hero simply has the road. Whether they were knocked loose from polite society at a young age or have recently found themselves cast out of a familiar life, they now roam the ways of the world and the spaces between. Some heroes find this life satisfying, with its constant novelty and the regular excitement of bare survival. Others long for a more stable arrangement, and are willing to lend their pragmatic talents to a group that offers some prospect of profit.",
        skills: {
            free: ["survive"],
            quick: ["survive", "sneak", "notice"],
            growth: [],
            learning: ["anyCombat", "connect", "notice", "perform", "pilot", "sneak", "survive", "work"],
        }
    },
    {
        name: "worker",
        description: "Countless in number, every industrialized world has swarms of workers to operate the machines and perform the labor that keeps society functioning. Cooks, factory laborers, mine workers, personal servants, lawyers, clerks, and innumerable other roles are covered under this career. If your hero rolls or picks Work as a skill but has a career that would better fit another existing skill, they may substitute it accordingly. Thus, a wage-slave programmer might take Program instead of Work, while a lawyer would use Administer instead as a reflection of their litigious talent.",
        skills: {
            free: ["work"],
            quick: ["work", "connect", "exert"],
            growth: [],
            learning: ["administer", "anySkill", "connect", "exert", "fix", "pilot", "program", "work"],
        }
    },
]













