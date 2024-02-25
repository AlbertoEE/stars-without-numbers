import { FocusDefinition, FocusType } from "@/models/FocusDefinitionModels";
import { FocusDefinitionRepository } from "./FocusDefinitionRepository";


export class InMemoryFocusDefinitionRepository implements FocusDefinitionRepository {
    getFoci = () => focusList;
}


const focusList: FocusDefinition[] = [
  {
    name: "alert",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are keenly aware of your surroundings and virtually impossible to take unaware. You have an instinctive alacrity of response that helps you act before less wary persons can think to move.",
    levels: [
      {
        level: 1,
        description: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. When you roll initiative, roll twice and take the best result.",
        skillBenefitList: [
          "Notice"
        ]
      },
      {
        level: 2,
        description: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. When you roll initiative, roll twice and take the best result."
      }
    ]
  },
  {
    name: "armsman",
    type: FocusType.COMBAT_FOCUS,
    description: "You have an unusual competence with thrown weapons and melee attacks. This focus’ benefits do not apply to unarmed attacks or projectile weapons. For thrown weapons, you can’t use the benefits of the Armsman focus at the same time as Gunslinger.",
    levels: [
      {
        level: 1,
        description: "Gain Stab as a bonus skill. You can draw or sheath a Stowed melee or thrown weapon as an Instant action. You may add your Stab skill level to a melee or thrown weapon’s damage roll or Shock damage, assuming it has any to begin with.",
        skillBenefitList: [
          "Stab"
        ]
      },
      {
        level: 2,
        description: "Gain Stab as a bonus skill. You can draw or sheath a Stowed melee or thrown weapon as an Instant action. You may add your Stab skill level to a melee or thrown weapon’s damage roll or Shock damage, assuming it has any to begin with."
      }
    ]
  },
  {
    name: "assassin",
    type: FocusType.COMBAT_FOCUS,
    description: "You are practiced at sudden murder, and have certain advantages in carrying out an Execution Attack as described in the rules on page 52.",
    levels: [
      {
        level: 1,
        description: "Gain Sneak as a bonus skill. You can conceal an object no larger than a knife or pistol from anything less invasive than a strip search, including normal TL4 weapon detection devices. You can draw or produce this object as an On Turn action, and your point-blank ranged attacks made from surprise with it cannot miss the target.",
        skillBenefitList: [
          "Sneak"
        ]
      },
      {
        level: 2,
        description: "Gain Sneak as a bonus skill. You can conceal an object no larger than a knife or pistol from anything less invasive than a strip search, including normal TL4 weapon detection devices. You can draw or produce this object as an On Turn action, and your point-blank ranged attacks made from surprise with it cannot miss the target."
      }
    ]
  },
  {
    name: "authority",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have an uncanny kind of charisma about you, one that makes others instinctively follow your instructions and further your causes. At level 1, this is a knack of charm and personal magnetism, while level 2 might suggest latent telepathic influence or transhuman memetic hacking augmentations. Where this focus refers to followers, it means NPCs who have voluntarily chosen to be in your service. PCs never count as followers",
    levels: [
      {
        level: 1,
        description: "Gain Lead as a bonus skill. Once per day, you can make a request from an NPC who is not openly hostile to you, rolling a Cha/Lead skill check at a difficulty of the NPC’s Morale score. If you succeed, they will comply with the request, provided it is not harmful or extremely uncharacteristic.",
        skillBenefitList: [
          "Lead"
        ]
      },
      {
        level: 2,
        description: "Gain Lead as a bonus skill. Once per day, you can make a request from an NPC who is not openly hostile to you, rolling a Cha/Lead skill check at a difficulty of the NPC’s Morale score. If you succeed, they will comply with the request, provided it is not harmful or extremely uncharacteristic."
      }
    ]
  },
  {
    name: "close combatant",
    type: FocusType.COMBAT_FOCUS,
    description: "You’ve had all too much practice at close-in fighting and desperate struggles with pistol or blade. You’re extremely skilled at avoiding injury in melee combat, and at level 2 you can dodge through a melee scrum without fear of being knifed in passing.",
    levels: [
      {
        level: 1,
        description: "Gain any combat skill as a bonus skill. You can use pistol-sized ranged weapons in melee without suffering penalties for the proximity of melee attackers. You ignore Shock damage from melee assailants, even if you’re unarmored at the time.",
        skillBenefitList: [
          "Any Combat"
        ]
      },
      {
        level: 2,
        description: "Gain any combat skill as a bonus skill. You can use pistol-sized ranged weapons in melee without suffering penalties for the proximity of melee attackers. You ignore Shock damage from melee assailants, even if you’re unarmored at the time."
      }
    ]
  },
  {
    name: "connected",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You’re remarkably gifted at making friends and forging ties with the people around you. Wherever you go, you always seem to know somebody useful to your ends.",
    levels: [
      {
        level: 1,
        description: "Gain Connect as a bonus skill. If you’ve spent at least a week in a not-entirely-hostile location, you’ll have built a web of contacts willing to do favors for you that are no more than mildly illegal. You can call on one favor per game day and the GM decides how far they’ll go for you.",
        skillBenefitList: [
          "Connect"
        ]
      },
      {
        level: 2,
        description: "Gain Connect as a bonus skill. If you’ve spent at least a week in a not-entirely-hostile location, you’ll have built a web of contacts willing to do favors for you that are no more than mildly illegal. You can call on one favor per game day and the GM decides how far they’ll go for you."
      }
    ]
  },
  {
    name: "die Hard",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are surprisingly hard to kill. You can survive injuries or bear up under stresses that would incapacitate a less determined hero.",
    levels: [
      {
        level: 1,
        description: "You gain an extra 2 maximum hit points per level. This bonus applies retroactively if you take this focus after first level. You automatically stabilize if mortally wounded by anything smaller than a Heavy weapon."
      },
      {
        level: 2,
        description: "The first time each day that you are reduced to zero hit points by an injury, you instead survive with one hit point remaining. This ability can’t save you from Heavy weapons or similar trauma."
      }
    ]
  },
  {
    name: "diplomat",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You know how to get your way in personal negotiations, and can manipulate the attitudes of those around you. Even so, while smooth words are versatile, they’ll only work if your interlocutor is actually willing to listen to you.",
    levels: [
      {
        level: 1,
        description: "Gain Talk as a bonus skill. You speak all the languages common to the sector and can learn new ones to a workable level in a week, becoming fluent in a month. Reroll 1s on any skill check dice related to negotiation or diplomacy.",
        skillBenefitList: [
          "Talk"
        ]
      },
      {
        level: 2,
        description: "Gain Talk as a bonus skill. You speak all the languages common to the sector and can learn new ones to a workable level in a week, becoming fluent in a month. Reroll 1s on any skill check dice related to negotiation or diplomacy."
      }
    ]
  },
  {
    name: "gunslinger",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have a gift with a gun. While this talent most commonly applies to slugthrowers or energy weapons, it is also applicable to thrown weapons, bows, or other ranged weapons that can be used with the Shoot skill. For thrown weapons, you can’t use the benefits of the Armsman focus at the same time as Gunslinger",
    levels: [
      {
        level: 1,
        description: "Gain Shoot as a bonus skill. You can draw or holster a Stowed ranged weapon as an On Turn action. You may add your Shoot skill level to a ranged weapon’s damage roll.",
        skillBenefitList: [
          "Gain Shoot"
        ]
      },
      {
        level: 2,
        description: "Gain Shoot as a bonus skill. You can draw or holster a Stowed ranged weapon as an On Turn action. You may add your Shoot skill level to a ranged weapon’s damage roll."
      }
    ]
  },
  {
    name: "hacker",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have a considerable fluency with digital security measures and standard encryption methods. You know how to make computerized systems obey you until their automatic failsafes come down on your control.",
    levels: [
      {
        level: 1,
        description: "Gain Program as a bonus skill. When attempting to hack a database or computerized system, roll 3d6 on the skill check and drop the lowest die.",
        skillBenefitList: [
          "Program"
        ]
      },
      {
        level: 2,
        description: "Gain Program as a bonus skill. When attempting to hack a database or computerized system, roll 3d6 on the skill check and drop the lowest die."
      }
    ]
  },
  {
    name: "healer",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "Healing comes naturally to you, and you’re particularly gifted at preventing the quick bleed-out of wounded allies and comrades",
    levels: [
      {
        level: 1,
        description: "Gain Heal as a bonus skill. You may attempt to stabilize one mortally-wounded adjacent person per round as an On Turn action. When rolling Heal skill checks, roll 3d6 and drop the lowest die.",
        skillBenefitList: [
          "Heal"
        ]
      },
      {
        level: 2,
        description: "Gain Heal as a bonus skill. You may attempt to stabilize one mortally-wounded adjacent person per round as an On Turn action. When rolling Heal skill checks, roll 3d6 and drop the lowest die."
      }
    ]
  },
  {
    name: "henchkeeper",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have an distinct knack for picking up lost souls who willingly do your bidding. You might induce them with promises of money, power, excitement, sex, or some other prize that you may or may not eventually grant. A henchman obtained with this focus will serve in loyal fashion until clearly betrayed or placed in unacceptable danger. Henchmen are not “important” people in their society, and are usually marginal sorts, outcasts, the desperate, or other persons with few options. You can use more conventional pay or inducements to acquire additional henchmen, but these extra hirelings are no more loyal or competent than your pay and treatment can purchase.",
    levels: [
      {
        level: 1,
        description: "Gain Lead as a bonus skill. You can acquire henchmen within 24 hours of arriving in a community, assuming anyone is suitable hench material. These henchmen will not fight except to save their own lives, but will escort you on adventures and risk great danger to help you. Most henchmen will be treated as Peaceful Humans from the Xenobestiary section of the book. You can have one henchmen at a time for every three character levels you have, rounded up. You can release henchmen with no hard feelings at any plausible time and pick them back up later should you be without a current henchman.",
        skillBenefitList: [
          "Lead"
        ]
      },
      {
        level: 2,
        description: "Gain Lead as a bonus skill. You can acquire henchmen within 24 hours of arriving in a community, assuming anyone is suitable hench material. These henchmen will not fight except to save their own lives, but will escort you on adventures and risk great danger to help you. Most henchmen will be treated as Peaceful Humans from the Xenobestiary section of the book. You can have one henchmen at a time for every three character levels you have, rounded up. You can release henchmen with no hard feelings at any plausible time and pick them back up later should you be without a current henchman."
      }
    ]
  },
  {
    name: "ironhide",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "Whether through uncanny reflexes, remarkable luck, gengineered skin fibers, or subtle telekinetic shielding, you have natural defenses equivalent to high-quality combat armor. The benefits of this focus don’t stack with armor, though Dexterity or shield modifiers apply.",
    levels: [
      {
        level: 1,
        description: "You have an innate Armor Class of 15 plus half your character level, rounded up"
      },
      {
        level: 2,
        description: "Your abilities are so effective that they render you immune to unarmed attacks or primitive weaponry as if you wore powered armor"
      }
    ]
  },
  {
    name: "savage Fray",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are a whirlwind of bloody havoc in melee combat, and can survive being surrounded far better than most combatants.",
    levels: [
      {
        level: 1,
        description: "Gain Stab as a bonus skill. All enemies adjacent to you at the end of your turn whom you have not attacked suffer the Shock damage of your weapon if their Armor Class is not too high to be affected.",
        skillBenefitList: [
          "Stab"
        ]
      },
      {
        level: 2,
        description: "Gain Stab as a bonus skill. All enemies adjacent to you at the end of your turn whom you have not attacked suffer the Shock damage of your weapon if their Armor Class is not too high to be affected."
      }
    ]
  },
  {
    name: "shocking Assault",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You’re extremely dangerous to enemies around you. The ferocity of your melee attacks stresses and distracts enemies even when your blows don’t draw blood.",
    levels: [
      {
        level: 1,
        description: "Gain Punch or Stab as a bonus skill. The Shock damage of your weapon treats all targets as if they were AC 10, assuming your weapon is capable of harming the target in the first place.",
        skillBenefitList: [
          "Punch Or Stab"
        ]
      },
      {
        level: 2,
        description: "Gain Punch or Stab as a bonus skill. The Shock damage of your weapon treats all targets as if they were AC 10, assuming your weapon is capable of harming the target in the first place."
      }
    ]
  },
  {
    name: "sniper",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are an expert at placing a bullet or beam on an unsuspecting target. These special benefits only apply when making an Execution Attack with a firearm or bow, as described on page 52",
    levels: [
      {
        level: 1,
        description: "Gain Shoot as a bonus skill. When making a skill check for an Execution Attack or target shooting, roll 3d6 and drop the lowest die.",
        skillBenefitList: [
          "Shoot"
        ]
      },
      {
        level: 2,
        description: "Gain Shoot as a bonus skill. When making a skill check for an Execution Attack or target shooting, roll 3d6 and drop the lowest die."
      }
    ]
  },
  {
    name: "specialist",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are remarkably talented at a particular skill. Whether a marvelous cat burglar, a world-famous athlete, a brilliant engineer, or some other savant, your expertise is extremely reliable. You may take this focus more than once for different skills.",
    levels: [
      {
        level: 1,
        description: "Gain a non-combat, non-psychic skill as a bonus. Roll 3d6 and drop the lowest die for all skill checks in this skill.",
        skillBenefitList: [
          "Any Non Combat"
        ]
      },
      {
        level: 2,
        description: "Gain a non-combat, non-psychic skill as a bonus. Roll 3d6 and drop the lowest die for all skill checks in this skill."
      }
    ]
  },
  {
    name: "star Captain",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have a tremendous natural talent for ship combat, and can make any starship you captain a significantly more fearsome opponent. You must take the captain’s role during a fight as described on page 117 of the Ship Combat rules in order to benefit from this focus.",
    levels: [
      {
        level: 1,
        description: "Gain Lead as a bonus skill. Your ship gains 2 extra Command Points at the start of each turn.",
        skillBenefitList: [
          "Lead"
        ]
      },
      {
        level: 2,
        description: "Gain Lead as a bonus skill. Your ship gains 2 extra Command Points at the start of each turn."
      }
    ]
  },
  {
    name: "starfarer",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You are an expert in the plotting and execution of interstellar spike drills. While most experienced pilots can manage conventional drills along well-charted spike routes, you have the knack for forging new drill paths and cutting courses too dangerous for lesser navigators.",
    levels: [
      {
        level: 1,
        description: "Gain Pilot as a bonus skill. You automatically succeed at all spike drill-related skill checks of difficulty 10 or less.",
        skillBenefitList: [
          "Pilot"
        ]
      },
      {
        level: 2,
        description: "Gain Pilot as a bonus skill. You automatically succeed at all spike drill-related skill checks of difficulty 10 or less."
      }
    ]
  },
  {
    name: "tinker",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "You have a natural knack for modifying and improving equipment, as given in the rules on page 100.",
    levels: [
      {
        level: 1,
        description: "Gain Fix as a bonus skill. Your Maintenance score is doubled, allowing you to maintain twice as many mods. Both ship and gear mods cost only half their usual price in credits, though pretech salvage requirements remain the same.",
        skillBenefitList: [
          "Fix"
        ]
      },
      {
        level: 2,
        description: "Gain Fix as a bonus skill. Your Maintenance score is doubled, allowing you to maintain twice as many mods. Both ship and gear mods cost only half their usual price in credits, though pretech salvage requirements remain the same."
      }
    ]
  },
  {
    name: "unarmed Combatant",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "Your empty hands are more dangerous than knives and guns in the grip of the less gifted. Your unarmed attacks are counted as melee weapons when it comes to binding up opponents wielding rifles and similar long arms, though you need at least one hand free to do so.",
    levels: [
      {
        level: 1,
        description: "Gain Punch as a bonus skill. Your unarmed attacks become more dangerous as your Punch skill increases. At level-0, they do 1d6 damage. At level-1, they do 1d8 damage. At level-2 they do 1d10, level-3 does 1d12, and level-4 does 1d12+1. At Punch-1 or better, they have the Shock quality equal to your Punch skill against AC 15 or less. While you normally add your Punch skill level to any unarmed damage, don’t add it twice to this Shock damage.",
        skillBenefitList: [
          "Punch"
        ]
      },
      {
        level: 2,
        description: "Gain Punch as a bonus skill. Your unarmed attacks become more dangerous as your Punch skill increases. At level-0, they do 1d6 damage. At level-1, they do 1d8 damage. At level-2 they do 1d10, level-3 does 1d12, and level-4 does 1d12+1. At Punch-1 or better, they have the Shock quality equal to your Punch skill against AC 15 or less. While you normally add your Punch skill level to any unarmed damage, don’t add it twice to this Shock damage."
      }
    ]
  },
  {
    name: "wanderer",
    type: FocusType.NON_COMBAT_FOCUS,
    description: "Your hero gets around. As part of a life on the road, they’ve mastered a number of tricks for ensuring their mobility and surviving the inevitable difficulties of a vagabond existence.",
    levels: [
      {
        level: 1,
        description: "Gain Survive as a bonus skill. You can convey basic ideas in all the common languages of the sector. You can always find free transport to a desired destination for yourself and a small group of your friends provided any traffic goes to the place. Finding this transport takes no more than an hour, but it may not be a strictly legitimate means of travel and may require working passage.",
        skillBenefitList: [
          "Survive"
        ]
      },
      {
        level: 2,
        description: "Gain Survive as a bonus skill. You can convey basic ideas in all the common languages of the sector. You can always find free transport to a desired destination for yourself and a small group of your friends provided any traffic goes to the place. Finding this transport takes no more than an hour, but it may not be a strictly legitimate means of travel and may require working passage."
      }
    ]
  }
] 