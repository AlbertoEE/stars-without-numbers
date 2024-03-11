import { type FocusDefinition, FocusType } from "@/models/FocusDefinitionModels"
import { type FocusDefinitionRepository } from "./FocusDefinitionRepository"

export class InMemoryFocusDefinitionRepository
  implements FocusDefinitionRepository
{
  getFoci = (): FocusDefinition[] => focusList
}

const focusList: FocusDefinition[] = [
  {
    name: "alert",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are keenly aware of your surroundings and virtually impossible to take unaware. You have an instinctive alacrity of response that helps you act before less wary persons can think to move.",
    levels: [
      {
        level: 1,
        description:
          "Gain Notice as a bonus skill. You cannot besurprised, nor can others use the Execution Attackoption on you. When you roll initiative, roll twiceand take the best result.",
        descriptionSchema: [
          "Gain Notice as a bonus skill.",
          " You cannot besurprised, nor can others use the Execution Attackoption on you.",
          " When you roll initiative, roll twiceand take the best result.",
        ],
        skillBenefitOptionList: ["notice"],
      },
      {
        level: 2,
        description:
          "You always act first in a combat round unlesssomeone else involved is also this Alert.",
        descriptionSchema: [
          "You always act first in a combat round unlesssomeone else involved is also this Alert.",
        ],
      },
    ],
  },
  {
    name: "armsman",
    type: FocusType.COMBAT_FOCUS,
    description:
      "You have an unusual competence with thrown weapons and melee attacks. This focus’ benefits do not apply to unarmed attacks or projectile weapons. For thrown weapons, you can’t use the benefits of the Armsman focus at the same time as Gunslinger.",
    levels: [
      {
        level: 1,
        description:
          "Gain Stab as a bonus skill. You can draw orsheath a Stowed melee or thrown weapon as anInstant action. You may add your Stab skill level toa melee or thrown weapon’s damage roll or Shockdamage, assuming it has any to begin with.",
        descriptionSchema: [
          "Gain Stab as a bonus skill.",
          " You can draw orsheath a Stowed melee or thrown weapon as anInstant action.",
          " You may add your Stab skill level toa melee or thrown weapon’s damage roll or Shockdamage, assuming it has any to begin with.",
        ],
        skillBenefitOptionList: ["stab"],
      },
      {
        level: 2,
        description:
          "Your primitive melee and thrown weaponscount as TL4 weapons for the purpose of overcoming advanced armors. Even on a miss with amelee weapon, you do an unmodified 1d4 damageto the target, plus any Shock damage. This bonusdamage doesn’t apply to thrown weapons or attacks that use the Punch skill.",
        descriptionSchema: [
          "Your primitive melee and thrown weaponscount as TL4 weapons for the purpose of overcoming advanced armors.",
          " Even on a miss with amelee weapon, you do an unmodified 1d4 damageto the target, plus any Shock damage.",
          " This bonusdamage doesn’t apply to thrown weapons or attacks that use the Punch skill.",
        ],
      },
    ],
  },
  {
    name: "assassin",
    type: FocusType.COMBAT_FOCUS,
    description:
      "You are practiced at sudden murder, and have certain advantages in carrying out an Execution Attack as described in the rules on page 52.",
    levels: [
      {
        level: 1,
        description:
          "Gain Sneak as a bonus skill. You can conceal anobject no larger than a knife or pistol from anything less invasive than a strip search, includingnormal TL4 weapon detection devices. You candraw or produce this object as an On Turn action,and your point-blank ranged attacks made fromsurprise with it cannot miss the target.",
        descriptionSchema: [
          "Gain Sneak as a bonus skill.",
          " You can conceal anobject no larger than a knife or pistol from anything less invasive than a strip search, includingnormal TL4 weapon detection devices.",
          " You candraw or produce this object as an On Turn action,and your point-blank ranged attacks made fromsurprise with it cannot miss the target.",
        ],
        skillBenefitOptionList: ["sneak"],
      },
      {
        level: 2,
        description:
          "You can take a Move action on the same roundas you make an Execution Attack, closing rapidlywith a target before you attack. You may split thisMove action when making an Execution Attack,taking part of it before you murder your targetand part of it afterwards. This movement happenstoo quickly to alert a victim or to be hindered bybodyguards, barring an actual physical wall ofmeat between you and your prey.",
        descriptionSchema: [
          "You can take a Move action on the same roundas you make an Execution Attack, closing rapidlywith a target before you attack.",
          " You may split thisMove action when making an Execution Attack,taking part of it before you murder your targetand part of it afterwards.",
          " This movement happenstoo quickly to alert a victim or to be hindered bybodyguards, barring an actual physical wall ofmeat between you and your prey.",
        ],
      },
    ],
  },
  {
    name: "authority",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have an uncanny kind of charisma about you, one that makes others instinctively follow your instructions and further your causes. At level 1, this is a knack of charm and personal magnetism, while level 2 might suggest latent telepathic influence or transhuman memetic hacking augmentations. Where this focus refers to followers, it means NPCs who have voluntarily chosen to be in your service. PCs never count as followers",
    levels: [
      {
        level: 1,
        description:
          "Gain Lead as a bonus skill. Once per day, youcan make a request from an NPC who is not openly hostile to you, rolling a Cha/Lead skill check ata difficulty of the NPC’s Morale score. If you succeed, they will comply with the request, providedit is not harmful or extremely uncharacteristic.",
        descriptionSchema: [
          "Gain Lead as a bonus skill.",
          " Once per day, youcan make a request from an NPC who is not openly hostile to you, rolling a Cha/Lead skill check ata difficulty of the NPC’s Morale score.",
          " If you succeed, they will comply with the request, providedit is not harmful or extremely uncharacteristic.",
        ],
        skillBenefitOptionList: ["lead"],
      },
      {
        level: 2,
        description:
          "Those who follow you are fired with confidence. Any NPC being directly led by you gains aMorale and hit roll bonus equal to your Lead skilland a +1 bonus on all skill checks. Your followerswill not act against your interests unless underextreme pressure.",
        descriptionSchema: [
          "Those who follow you are fired with confidence.",
          " Any NPC being directly led by you gains aMorale and hit roll bonus equal to your Lead skilland a +1 bonus on all skill checks.",
          " Your followerswill not act against your interests unless underextreme pressure.",
        ],
      },
    ],
  },
  {
    name: "close combatant",
    type: FocusType.COMBAT_FOCUS,
    description:
      "You’ve had all too much practice at close-in fighting and desperate struggles with pistol or blade. You’re extremely skilled at avoiding injury in melee combat, and at level 2 you can dodge through a melee scrum without fear of being knifed in passing.",
    levels: [
      {
        level: 1,
        description:
          "Gain any combat skill as a bonus skill. You canuse pistol-sized ranged weapons in melee without suffering penalties for the proximity of meleeattackers. You ignore Shock damage from meleeassailants, even if you’re unarmored at the time.",
        descriptionSchema: [
          "Gain any combat skill as a bonus skill.",
          " You canuse pistol-sized ranged weapons in melee without suffering penalties for the proximity of meleeattackers.",
          " You ignore Shock damage from meleeassailants, even if you’re unarmored at the time.",
        ],
        skillBenefitOptionList: ["any Combat"],
      },
      {
        level: 2,
        description:
          "The Shock damage from your melee attackstreats all targets as if they were AC 10. The Fighting Withdrawal combat action is treated as an OnTurn action for you and can be performed freely.",
        descriptionSchema: [
          "The Shock damage from your melee attackstreats all targets as if they were AC 10.",
          " The Fighting Withdrawal combat action is treated as an OnTurn action for you and can be performed freely.",
        ],
      },
    ],
  },
  {
    name: "connected",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You’re remarkably gifted at making friends and forging ties with the people around you. Wherever you go, you always seem to know somebody useful to your ends.",
    levels: [
      {
        level: 1,
        description:
          "Gain Connect as a bonus skill. If you’ve spentat least a week in a not-entirely-hostile location,you’ll have built a web of contacts willing to dofavors for you that are no more than mildly illegal.You can call on one favor per game day and theGM decides how far they’ll go for you.",
        descriptionSchema: [
          "Gain Connect as a bonus skill.",
          " If you’ve spentat least a week in a not-entirely-hostile location,you’ll have built a web of contacts willing to dofavors for you that are no more than mildly illegal.",
          "You can call on one favor per game day and theGM decides how far they’ll go for you.",
        ],
        skillBenefitOptionList: ["connect"],
      },
      {
        level: 2,
        description:
          "Once per game session, if it’s not entirely implausible, you meet someone you know who iswilling to do modest favors for you. You can decide when and where you want to meet this person, but the GM decides who they are and whatthey can do for you.",
        descriptionSchema: [
          "Once per game session, if it’s not entirely implausible, you meet someone you know who iswilling to do modest favors for you.",
          " You can decide when and where you want to meet this person, but the GM decides who they are and whatthey can do for you.",
        ],
      },
    ],
  },
  {
    name: "die Hard",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are surprisingly hard to kill. You can survive injuries or bear up under stresses that would incapacitate a less determined hero.",
    levels: [
      {
        level: 1,
        description:
          "You gain an extra 2 maximum hit points perlevel. This bonus applies retroactively if you takethis focus after first level. You automatically stabilize if mortally wounded by anything smaller thana Heavy weapon..",
        descriptionSchema: [
          "You gain an extra 2 maximum hit points perlevel.",
          " This bonus applies retroactively if you takethis focus after first level.",
          " You automatically stabilize if mortally wounded by anything smaller thana Heavy weapon.",
          ".",
        ],
      },
      {
        level: 2,
        description:
          "The first time each day that you are reduced tozero hit points by an injury, you instead survivewith one hit point remaining. This ability can’tsave you from Heavy weapons or similar trauma.",
        descriptionSchema: [
          "The first time each day that you are reduced tozero hit points by an injury, you instead survivewith one hit point remaining.",
          " This ability can’tsave you from Heavy weapons or similar trauma.",
        ],
      },
    ],
  },
  {
    name: "diplomat",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You know how to get your way in personal negotiations, and can manipulate the attitudes of those around you. Even so, while smooth words are versatile, they’ll only work if your interlocutor is actually willing to listen to you.",
    levels: [
      {
        level: 1,
        description:
          "Gain Talk as a bonus skill. You speak all the languages common to the sector and can learn newones to a workable level in a week, becoming fluent in a month. Reroll 1s on any skill check dicerelated to negotiation or diplomacy.",
        descriptionSchema: [
          "Gain Talk as a bonus skill.",
          " You speak all the languages common to the sector and can learn newones to a workable level in a week, becoming fluent in a month.",
          " Reroll 1s on any skill check dicerelated to negotiation or diplomacy.",
        ],
        skillBenefitOptionList: ["talk"],
      },
      {
        level: 2,
        description:
          "Once per game session, shift an intelligentNPC’s reaction roll one step closer to friendly ifyou can talk to them for at least thirty seconds.",
        descriptionSchema: [
          "Once per game session, shift an intelligentNPC’s reaction roll one step closer to friendly ifyou can talk to them for at least thirty seconds.",
        ],
      },
    ],
  },
  {
    name: "gunslinger",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have a gift with a gun. While this talent most commonly applies to slugthrowers or energy weapons, it is also applicable to thrown weapons, bows, or other ranged weapons that can be used with the Shoot skill. For thrown weapons, you can’t use the benefits of the Armsman focus at the same time as Gunslinger",
    levels: [
      {
        level: 1,
        description:
          "Gain Shoot as a bonus skill. You can draw orholster a Stowed ranged weapon as an On Turnaction. You may add your Shoot skill level to aranged weapon’s damage roll.",
        descriptionSchema: [
          "Gain Shoot as a bonus skill.",
          " You can draw orholster a Stowed ranged weapon as an On Turnaction.",
          " You may add your Shoot skill level to aranged weapon’s damage roll.",
        ],
        skillBenefitOptionList: ["shoot"],
      },
      {
        level: 2,
        description:
          "Once per round, you can reload a ranged weapon as an On Turn action if it takes no more thanone round to reload. Even on a miss with a Shootattack, you do an unmodified 1d4 damage.",
        descriptionSchema: [
          "Once per round, you can reload a ranged weapon as an On Turn action if it takes no more thanone round to reload.",
          " Even on a miss with a Shootattack, you do an unmodified 1d4 damage.",
        ],
      },
    ],
  },
  {
    name: "hacker",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have a considerable fluency with digital security measures and standard encryption methods. You know how to make computerized systems obey you until their automatic failsafes come down on your control.",
    levels: [
      {
        level: 1,
        description:
          "Gain Program as a bonus skill. When attempting to hack a database or computerized system,roll 3d6 on the skill check and drop the lowest die.",
        descriptionSchema: [
          "Gain Program as a bonus skill.",
          " When attempting to hack a database or computerized system,roll 3d6 on the skill check and drop the lowest die.",
        ],
        skillBenefitOptionList: ["program"],
      },
      {
        level: 2,
        description:
          "Your hack duration increases to 1d4+Programskill x 10 minutes. You have an instinctive understanding of the tech; you never need to learn thedata protocols for a strange system and are alwaystreated as familiar with it.",
        descriptionSchema: [
          "Your hack duration increases to 1d4+Programskill x 10 minutes.",
          " You have an instinctive understanding of the tech; you never need to learn thedata protocols for a strange system and are alwaystreated as familiar with it.",
        ],
      },
    ],
  },
  {
    name: "healer",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "Healing comes naturally to you, and you’re particularly gifted at preventing the quick bleed-out of wounded allies and comrades",
    levels: [
      {
        level: 1,
        description:
          "Gain Heal as a bonus skill. You may attempt tostabilize one mortally-wounded adjacent personper round as an On Turn action. When rollingHeal skill checks, roll 3d6 and drop the lowest die.",
        descriptionSchema: [
          "Gain Heal as a bonus skill.",
          " You may attempt tostabilize one mortally-wounded adjacent personper round as an On Turn action.",
          " When rollingHeal skill checks, roll 3d6 and drop the lowest die.",
        ],
        skillBenefitOptionList: ["heal"],
      },
      {
        level: 2,
        description:
          "Stims or other technological healing devicesapplied by you heal twice as many hit points asnormal. Using only basic medical supplies, youcan heal 1d6+Heal skill hit points of damage toevery injured or wounded person in your groupwith ten minutes of first aid spread among them.Such healing can be applied to a given target onlyonce per day.",
        descriptionSchema: [
          "Stims or other technological healing devicesapplied by you heal twice as many hit points asnormal.",
          " Using only basic medical supplies, youcan heal 1d6+Heal skill hit points of damage toevery injured or wounded person in your groupwith ten minutes of first aid spread among them.",
          "Such healing can be applied to a given target onlyonce per day.",
        ],
      },
    ],
  },
  {
    name: "henchkeeper",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have an distinct knack for picking up lost souls who willingly do your bidding. You might induce them with promises of money, power, excitement, sex, or some other prize that you may or may not eventually grant. A henchman obtained with this focus will serve in loyal fashion until clearly betrayed or placed in unacceptable danger. Henchmen are not “important” people in their society, and are usually marginal sorts, outcasts, the desperate, or other persons with few options. You can use more conventional pay or inducements to acquire additional henchmen, but these extra hirelings are no more loyal or competent than your pay and treatment can purchase.",
    levels: [
      {
        level: 1,
        description:
          "Gain Lead as a bonus skill. You can acquirehenchmen within 24 hours of arriving in a community, assuming anyone is suitable hench material. These henchmen will not fight except to savetheir own lives, but will escort you on adventuresand risk great danger to help you. Most henchmen will be treated as Peaceful Humans from theXenobestiary section of the book. You can haveone henchmen at a time for every three character levels you have, rounded up. You can releasehenchmen with no hard feelings at any plausibletime and pick them back up later should you bewithout a current henchman.",
        descriptionSchema: [
          "Gain Lead as a bonus skill.",
          " You can acquirehenchmen within 24 hours of arriving in a community, assuming anyone is suitable hench material.",
          " These henchmen will not fight except to savetheir own lives, but will escort you on adventuresand risk great danger to help you.",
          " Most henchmen will be treated as Peaceful Humans from theXenobestiary section of the book.",
          " You can haveone henchmen at a time for every three character levels you have, rounded up.",
          " You can releasehenchmen with no hard feelings at any plausibletime and pick them back up later should you bewithout a current henchman.",
        ],
        skillBenefitOptionList: ["lead"],
      },
      {
        level: 2,
        description:
          "Your henchmen are remarkably loyal anddetermined, and will fight for you against anything but clearly overwhelming odds. Whetherthrough natural competence or their devotionto you, they’re treated as Martial Humans fromthe Xenobestiary section. You can make faithfulhenchmen out of skilled and highly-capable NPCs,but this requires that you actually have done themsome favor or help that would reasonably earnsuch fierce loyalty",
        descriptionSchema: [
          "Your henchmen are remarkably loyal anddetermined, and will fight for you against anything but clearly overwhelming odds.",
          " Whetherthrough natural competence or their devotionto you, they’re treated as Martial Humans fromthe Xenobestiary section.",
          " You can make faithfulhenchmen out of skilled and highly-capable NPCs,but this requires that you actually have done themsome favor or help that would reasonably earnsuch fierce loyalty",
        ],
      },
    ],
  },
  {
    name: "ironhide",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "Whether through uncanny reflexes, remarkable luck, gengineered skin fibers, or subtle telekinetic shielding, you have natural defenses equivalent to high-quality combat armor. The benefits of this focus don’t stack with armor, though Dexterity or shield modifiers apply.",
    levels: [
      {
        level: 1,
        description:
          "You have an innate Armor Class of 15 plus halfyour character level, rounded upp",
        descriptionSchema: [
          "You have an innate Armor Class of 15 plus halfyour character level, rounded upp",
        ],
      },
      {
        level: 2,
        description:
          "Your abilities are so effective that they renderyou immune to unarmed attacks or primitiveweaponry as if you wore powered armor",
        descriptionSchema: [
          "Your abilities are so effective that they renderyou immune to unarmed attacks or primitiveweaponry as if you wore powered armor",
        ],
      },
    ],
  },
  {
    name: "savage Fray",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are a whirlwind of bloody havoc in melee combat, and can survive being surrounded far better than most combatants.",
    levels: [
      {
        level: 1,
        description:
          "Gain Stab as a bonus skill. All enemies adjacentto you at the end of your turn whom you have notattacked suffer the Shock damage of your weaponif their Armor Class is not too high to be affected.",
        descriptionSchema: [
          "Gain Stab as a bonus skill.",
          " All enemies adjacentto you at the end of your turn whom you have notattacked suffer the Shock damage of your weaponif their Armor Class is not too high to be affected.",
        ],
        skillBenefitOptionList: ["stab"],
      },
      {
        level: 2,
        description:
          "After suffering your first melee hit in a round,any further melee attacks from other assailants automatically miss you. If the attacker who hits youhas multiple attacks, they may attempt all of them,but other foes around you simply miss.",
        descriptionSchema: [
          "After suffering your first melee hit in a round,any further melee attacks from other assailants automatically miss you.",
          " If the attacker who hits youhas multiple attacks, they may attempt all of them,but other foes around you simply miss.",
        ],
      },
    ],
  },
  {
    name: "shocking Assault",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You’re extremely dangerous to enemies around you. The ferocity of your melee attacks stresses and distracts enemies even when your blows don’t draw blood.",
    levels: [
      {
        level: 1,
        description:
          "Gain Punch or Stab as a bonus skill. The Shockdamage of your weapon treats all targets as if theywere AC 10, assuming your weapon is capable ofharming the target in the first place.",
        descriptionSchema: [
          "Gain Punch or Stab as a bonus skill.",
          " The Shockdamage of your weapon treats all targets as if theywere AC 10, assuming your weapon is capable ofharming the target in the first place.",
        ],
        skillBenefitOptionList: ["punch", "stab"],
      },
      {
        level: 2,
        description:
          "In addition, you gain a +2 bonus to the Shockdamage rating of all melee weapons and unarmedattacks. Regular hits never do less damage thanthis Shock would do on a miss.",
        descriptionSchema: [
          "In addition, you gain a +2 bonus to the Shockdamage rating of all melee weapons and unarmedattacks.",
          " Regular hits never do less damage thanthis Shock would do on a miss.",
        ],
      },
    ],
  },
  {
    name: "sniper",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are an expert at placing a bullet or beam on an unsuspecting target. These special benefits only apply when making an Execution Attack with a firearm or bow, as described on page 52",
    levels: [
      {
        level: 1,
        description:
          "Gain Shoot as a bonus skill. When makinga skill check for an Execution Attack or targetshooting, roll 3d6 and drop the lowest die.",
        descriptionSchema: [
          "Gain Shoot as a bonus skill.",
          " When makinga skill check for an Execution Attack or targetshooting, roll 3d6 and drop the lowest die.",
        ],
        skillBenefitOptionList: ["shoot"],
      },
      {
        level: 2,
        description:
          "A target hit by your Execution Attack takes a-4 penalty on the Physical saving throw to avoidimmediate mortal injury. Even if the save is successful, the target takes double the normal damageinflicted by the attack.",
        descriptionSchema: [
          "A target hit by your Execution Attack takes a-4 penalty on the Physical saving throw to avoidimmediate mortal injury.",
          " Even if the save is successful, the target takes double the normal damageinflicted by the attack.",
        ],
      },
    ],
  },
  {
    name: "specialist",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are remarkably talented at a particular skill. Whether a marvelous cat burglar, a world-famous athlete, a brilliant engineer, or some other savant, your expertise is extremely reliable. You may take this focus more than once for different skills.",
    levels: [
      {
        level: 1,
        description:
          "Gain a non-combat, non-psychic skill as a bonus.Roll 3d6 and drop the lowest die for all skill checksin this skill.",
        descriptionSchema: [
          "Gain a non-combat, non-psychic skill as a bonus.",
          "Roll 3d6 and drop the lowest die for all skill checksin this skill.",
        ],
        skillBenefitOptionList: ["non combat"],
      },
      {
        level: 2,
        description:
          "Roll 4d6 and drop the two lowest dice for allskill checks in this skill.",
        descriptionSchema: [
          "Roll 4d6 and drop the two lowest dice for allskill checks in this skill.",
        ],
      },
    ],
  },
  {
    name: "star Captain",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have a tremendous natural talent for ship combat, and can make any starship you captain a significantly more fearsome opponent. You must take the captain’s role during a fight as described on page 117 of the Ship Combat rules in order to benefit from this focus.",
    levels: [
      {
        level: 1,
        description:
          "Gain Lead as a bonus skill. Your ship gains 2extra Command Points at the start of each turn.",
        descriptionSchema: [
          "Gain Lead as a bonus skill.",
          " Your ship gains 2extra Command Points at the start of each turn.",
        ],
        skillBenefitOptionList: ["lead"],
      },
      {
        level: 2,
        description:
          "A ship you captain gains bonus hit points equalto 20% of its maximum at the start of each combat. Damage is taken from these bonus points first,and they vanish at the end of the fight and do notrequire repairs to replenish before the next. In addition, once per engagement, you may resolve aCrisis as an Instant action by explaining how yourleadership resolves the problem.",
        descriptionSchema: [
          "A ship you captain gains bonus hit points equalto 20% of its maximum at the start of each combat.",
          " Damage is taken from these bonus points first,and they vanish at the end of the fight and do notrequire repairs to replenish before the next.",
          " In addition, once per engagement, you may resolve aCrisis as an Instant action by explaining how yourleadership resolves the problem.",
        ],
      },
    ],
  },
  {
    name: "starfarer",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You are an expert in the plotting and execution of interstellar spike drills. While most experienced pilots can manage conventional drills along well-charted spike routes, you have the knack for forging new drill paths and cutting courses too dangerous for lesser navigators.",
    levels: [
      {
        level: 1,
        description:
          "Gain Pilot as a bonus skill. You automaticallysucceed at all spike drill-related skill checks of difficulty 10 or less.",
        descriptionSchema: [
          "Gain Pilot as a bonus skill.",
          " You automaticallysucceed at all spike drill-related skill checks of difficulty 10 or less.",
        ],
        skillBenefitOptionList: ["pilot"],
      },
      {
        level: 2,
        description:
          "Double your Pilot skill for all spike drill-related skill checks. Spike drives of ships you navigateare treated as one level higher; thus, a drive-1 istreated as a drive-2, up to a maximum of drive-7.Spike drills you personally oversee take only halfthe time they would otherwise require.",
        descriptionSchema: [
          "Double your Pilot skill for all spike drill-related skill checks.",
          " Spike drives of ships you navigateare treated as one level higher; thus, a drive-1 istreated as a drive-2, up to a maximum of drive-7.",
          "Spike drills you personally oversee take only halfthe time they would otherwise require.",
        ],
      },
    ],
  },
  {
    name: "tinker",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "You have a natural knack for modifying and improving equipment, as given in the rules on page 100.",
    levels: [
      {
        level: 1,
        description:
          "Gain Fix as a bonus skill. Your Maintenancescore is doubled, allowing you to maintain twiceas many mods. Both ship and gear mods cost onlyhalf their usual price in credits, though pretechsalvage requirements remain the same.",
        descriptionSchema: [
          "Gain Fix as a bonus skill.",
          " Your Maintenancescore is doubled, allowing you to maintain twiceas many mods.",
          " Both ship and gear mods cost onlyhalf their usual price in credits, though pretechsalvage requirements remain the same.",
        ],
        skillBenefitOptionList: ["fix"],
      },
      {
        level: 2,
        description:
          "Your Fix skill is treated as one level higher forpurposes of building and maintaining mods andcalculating your Maintenance score. Advancedmods require one fewer pretech salvage part tomake, down to a minimum of zero.",
        descriptionSchema: [
          "Your Fix skill is treated as one level higher forpurposes of building and maintaining mods andcalculating your Maintenance score.",
          " Advancedmods require one fewer pretech salvage part tomake, down to a minimum of zero.",
        ],
      },
    ],
  },
  {
    name: "unarmed Combatant",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "Your empty hands are more dangerous than knives and guns in the grip of the less gifted. Your unarmed attacks are counted as melee weapons when it comes to binding up opponents wielding rifles and similar long arms, though you need at least one hand free to do so.",
    levels: [
      {
        level: 1,
        description:
          "Gain Punch as a bonus skill. Your unarmedattacks become more dangerous as your Punchskill increases. At level-0, they do 1d6 damage. Atlevel-1, they do 1d8 damage. At level-2 they do1d10, level-3 does 1d12, and level-4 does 1d12+1.At Punch-1 or better, they have the Shock qualityequal to your Punch skill against AC 15 or less.While you normally add your Punch skill level toany unarmed damage, don’t add it twice to thisShock damage.",
        descriptionSchema: [
          "Gain Punch as a bonus skill.",
          " Your unarmedattacks become more dangerous as your Punchskill increases.",
          " At level-0, they do 1d6 damage.",
          " Atlevel-1, they do 1d8 damage.",
          " At level-2 they do1d10, level-3 does 1d12, and level-4 does 1d12+1.",
          "At Punch-1 or better, they have the Shock qualityequal to your Punch skill against AC 15 or less.",
          "While you normally add your Punch skill level toany unarmed damage, don’t add it twice to thisShock damage.",
        ],
        skillBenefitOptionList: ["punch"],
      },
      {
        level: 2,
        description:
          "You know locks and twists that use poweredservos against their wearer. Your unarmed attackscount as TL4 weapons for the purpose of overcoming advanced armors. Even on a miss with aPunch attack, you do an unmodified 1d6 damage.",
        descriptionSchema: [
          "You know locks and twists that use poweredservos against their wearer.",
          " Your unarmed attackscount as TL4 weapons for the purpose of overcoming advanced armors.",
          " Even on a miss with aPunch attack, you do an unmodified 1d6 damage.",
        ],
      },
    ],
  },
  {
    name: "wanderer",
    type: FocusType.NON_COMBAT_FOCUS,
    description:
      "Your hero gets around. As part of a life on the road, they’ve mastered a number of tricks for ensuring their mobility and surviving the inevitable difficulties of a vagabond existence.",
    levels: [
      {
        level: 1,
        description:
          "Gain Survive as a bonus skill. You can conveybasic ideas in all the common languages of thesector. You can always find free transport to a desired destination for yourself and a small group ofyour friends provided any traffic goes to the place.Finding this transport takes no more than an hour,but it may not be a strictly legitimate means oftravel and may require working passage.",
        descriptionSchema: [
          "Gain Survive as a bonus skill.",
          " You can conveybasic ideas in all the common languages of thesector.",
          " You can always find free transport to a desired destination for yourself and a small group ofyour friends provided any traffic goes to the place.",
          "Finding this transport takes no more than an hour,but it may not be a strictly legitimate means oftravel and may require working passage.",
        ],
        skillBenefitOptionList: ["survive"],
      },
      {
        level: 2,
        description:
          "You can forge, scrounge, or snag travel papersand identification for the party with 1d6 hoursof work. These papers and permits will stand upto ordinary scrutiny, but require an opposed Int/Administer versus Wis/Notice check if examinedby an official while the PC is actually wanted bythe state for some crime. When finding transportfor the party, the transportation always makes thetrip at least as fast as a dedicated charter would.",
        descriptionSchema: [
          "You can forge, scrounge, or snag travel papersand identification for the party with 1d6 hoursof work.",
          " These papers and permits will stand upto ordinary scrutiny, but require an opposed Int/Administer versus Wis/Notice check if examinedby an official while the PC is actually wanted bythe state for some crime.",
          " When finding transportfor the party, the transportation always makes thetrip at least as fast as a dedicated charter would.",
        ],
      },
    ],
  },
]
