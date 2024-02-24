import { ClassBenefitDefinition, ClassBenefitDefinitionType } from "@/models/ClassBenefitDefinitionModels";

export const gameClasses: ClassBenefitDefinition[] = [
    {
      name: "Psychic Succor - 0",
      description: "The psychic’s touch can automatically stabilizea mortally-wounded target as a Main Action. Thispower must be used on a target within six roundsof their collapse, and does not function on targets that have been decapitated or killed by Heavyweapons. It’s the GM’s decision as to whether atarget is intact enough for this power to work.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Biopsionics",
      level: 0,
      cost: 1
    },
    {
      name: "Psychic Succor - 1",
      description: "The psychic’s touch can automatically stabilizea mortally-wounded target as a Main Action. Thispower must be used on a target within six roundsof their collapse, and does not function on targets that have been decapitated or killed by Heavyweapons. It’s the GM’s decision as to whether atarget is intact enough for this power to work.And heal 1d6+1 hit points of damage.If used on a mortally-wounded target, they revivewith the rolled hit points and can act normally onthe next round.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Biopsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Psychic Succor - 2",
      description: "The psychic’s touch can automatically stabilizea mortally-wounded target as a Main Action. Thispower must be used on a target within six roundsof their collapse, and does not function on targets that have been decapitated or killed by Heavyweapons. It’s the GM’s decision as to whether atarget is intact enough for this power to work.And heal 2d6+2 hit points of damage.If used on a mortally-wounded target, they revivewith the rolled hit points and can act normally onthe next round.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Biopsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Psychic Succor - 3",
      description: "The psychic’s touch can automatically stabilizea mortally-wounded target as a Main Action. Thispower must be used on a target within six roundsof their collapse, and does not function on targets that have been decapitated or killed by Heavyweapons. It’s the GM’s decision as to whether atarget is intact enough for this power to work.And heal 2d6+6 hit points of damage.If used on a mortally-wounded target, they revivewith the rolled hit points and can act normally onthe next round.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Biopsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Psychic Succor - 4",
      description: "The psychic’s touch can automatically stabilizea mortally-wounded target as a Main Action. Thispower must be used on a target within six roundsof their collapse, and does not function on targets that have been decapitated or killed by Heavyweapons. It’s the GM’s decision as to whether atarget is intact enough for this power to work.And heal 3d6+8 hit points of damage.If used on a mortally-wounded target, they revivewith the rolled hit points and can act normally onthe next round.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Biopsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Tissue Integrity Field",
      description: "The biopsion’s Psychic Succor may now also affect allallies within ten meters of the target. Allies can declinethe healing if they don’t require it or don’t want to takethe additional System Strain. Each use of this techniquerequires that the biopsion Commit Effort for the day inaddition to the cost of the Psychic Succor.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Mastered Succor",
      description: "The biopsion has developed a sophisticated mastery oftheir core ability, and they no longer need to CommitEffort to activate it, and may use it whenever they wish.The use of additional techniques that augment PsychicSuccor might still require Effort to be Committed.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Organic Purification Protocols",
      description: "The biopsion’s Psychic Succor now cures any poisons ordiseases the subject may be suffering, albeit it requiresCommitting Effort for the day as an additional surcharge. Biowarfare organisms, exceptionally virulentdiseases, or TL5 toxins may resist this curing, requiringa Wis/Biopsionics skill check at a difficulty of at least10. Failure means that the adept cannot cure the target’sdisease. This technique cannot cure congenital illnesses.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Remote Repair",
      description: "Psychic Succor and other biopsionic techniques that normally require touch contact can now be applied at adistance up to 100 meters, provided the biopsion cansee the target with their unaided vision. Hostile powersthat normally require a hit roll will hit automatically.Each time this technique is used, Effort must be Committed for the scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Invincible Stand",
      description: "The biopsion has mastered techniques of emergencytissue reinforcement and system stabilization. As anInstant action, they can Commit Effort for the scene tokeep themself or a target they can touch active even atzero hit points. This technique must be used once everyround on the target or they collapse at the end of theround. If the target suffers hit point damage, the biopsion must Instantly Commit Effort for the scene or thetarget goes down immediately with a mortal wound. AHeavy weapon hit on a subject of this power or similarphysical dismemberment will always kill a target, regardless of this technique.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Major Organ Restoration",
      description: "The biopsion’s Psychic Succor can now cure congenital birth defects and regrow missing limbs and organs.It can even be used to stabilize targets that have beendropped by Heavy weapons, decapitated, or otherwisedramatically dismembered, provided it’s used withinone round per level of Biopsionic skill. The best thatcan be done for such badly-mangled targets is stabilization, after which they must rest for 24 hours before anyfurther hit points can be healed by Biopsionics, stims,or natural rest.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Accelerated Succor",
      description: "The biopsion’s Psychic Succor now can be used as an OnTurn power, albeit only once per round. By Committing an additional Effort for the day with each use, itcan even be used as an Instant power, though it stillcan only be used once per round. Any surcharges foraugmenting the succor apply normally, such as withTissue Integrity Field.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Metamorph",
      description: "The biopsion can now shape their own or another willing target’s physical form as a Main Action, transforming a touched target into any humanoid form within50% of their own mass. Claws and other body armaments can be fashioned equivalent to Light or Mediummelee weapons and innate armor equivalent to AC 13.Gills and other environmental-survival alterations arealso viable at the GM’s discretion, but flight is a bridgetoo far for this power.A person can be impersonated down to the DNAlevel, provided a blood or hair sample is available. Theuse of this adds one System Strain point to the targetthat does not recover so long as the change is in effect.Applying Metamorph requires that the biopsion CommitEffort for as long as the change is to be maintained. Ifapplied to a target other than the psychic, the powerautomatically ends if the psychic gets more than onehundred kilometers away.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Teratic Overload",
      description: "This use of biopsionics inflicts potentially-lethal damage on a touched target as a Main Action, and requiresthat the biopsion Commit Effort for the scene. Thetarget suffers 1d6 damage per level of the psychic’s Biopsionics skill and must make a Physical saving throw.On a failure, the damage is tripled and the target is nowaffected by an obvious, lethal cancer that will kill themin 1d6 months. The cancer can be treated by a TL4hospital or ship’s sick bay if managed within a month’stime. If the biopsion Commits Effort for the day insteadof the scene, they can control the power sufficiently todo no hit point damage and create very subtle tumors,leaving the cancer undetectable without a TL4 medicalexamination. Such victims probably won’t even knowthey’ve been attacked by this power. Whether a successor failure, this power cannot be used on the same targetmore than once per scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Holistic Optimization Patterning",
      description: "The biopsion gains the ability to drastically augmenttheir own or a touched ally’s physical abilities as anOn Turn action. This boost lasts for the rest of thescene, adds two points of System Strain to the targetand gives them a +2 bonus to all Strength or Dexterityskill checks, hit rolls, and damage rolls along with 20extra hit points. Any damage is taken off these temporary hit points first, and both the bonuses and anyhit points in excess of the target’s maximum are lost atthe end of the scene. Each invocation of this techniquerequires the biopsion to Commit Effort for the day, andthis power cannot be used on a given target more thanonce per scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Quintessential Reconstruction",
      description: "The biopsion becomes extremely difficult to kill, encoding their mind in a coherent pattern of MES energycoterminous with their realspace coordinates. If killed,the psychic will regenerate from the largest remaining fragment of their body over 24 hours. This process maximizes their System Strain for one week. Ifbrought to zero hit points during this week, they dieinstantly and permanently. The psychic retains a vagueawareness of their surroundings while “dead” and canpostpone their regeneration for up to a week in orderto avoid notice, but burial or entombment may result ina very short second life. Each use of this power inflictsone point of permanent attribute loss in an attributeof the biopsion’s choice.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Biopsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Psychic Refinement - 0",
      description: "The adept can visually and audibly detect theuse of psychic powers. If both the source and target are visible to the metapsion, they can tell who’susing the power, even if it’s normally imperceptible. They gain a +2 bonus on any saving throwversus a psionic power",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Metapsionics",
      level: 0,
      cost: 1
    },
    {
      name: "Psychic Refinement - 1",
      description: "The metapsion’s maximum Effort increases byan additional point.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Metapsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Psychic Refinement - 2",
      description: "The adept can determine whether or not aperson is a psychic or has latent psionic abilitiesthrough one round of visual inspection. Their saving throw bonus against psionic powers increasesto +3.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Metapsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Psychic Refinement - 3",
      description: "The metapsion’s maximum Effort increases byan additional point.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Metapsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Psychic Refinement - 4",
      description: "The metapsion can perform a slightly saferversion of torching. Instead of rolling the torching damage die, they simply suffer 10 hit points ofdamage after torching is used. The damage occursafter the fueled power activates, allowing a psychicat low hit points to trigger a power before fallingunconscious. This damage cannot be healed byanything but natural bed rest, though a psychiccan be stabilized if this technique drops her to zerohit points.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Metapsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Cloak Powers",
      description: "The metapsion can conceal their own psychic abilitiesfrom metapsionic senses. They must Commit Effortfor as long as they wish to cloak their powers. Whilehidden, only a metapsion with equal or higher skill inMetapsionics can detect their abilities with their level-0or level-2 Psychic Refinement abilities. In such cases, anopposed Wis/Metapsionics roll is made between themetapsion and the investigator. If the investigator wins,the cloak is pierced, while if the metapsion wins, theinvestigator’s Psychic Refinement remains oblivious.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Mindtracing",
      description: "The metapsion can trace back the use of psionic powersthey’ve noticed in their presence. By Committing Effort for the scene as an Instant action, they can see andhear through the senses of a user of a psychic power,gaining an intuitive awareness of their location andtreating them as a visible target for purposes of theirown abilities. Thus, if they see someone being affectedby a telepathy power with no visible source, they canuse this ability to briefly share the hidden telepath’ssenses. If used on a target that is teleporting, they canperceive the teleporter’s view of their destination. Useon a metamorphically-shaped impostor would revealthe biopsion responsible for the change, and so forth.These shared senses last for only one round and do notinterfere with the adept’s other actions.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Synthetic Adaptation",
      description: "This is a particularly esoteric technique, one that requires the adept to have at least Program-0 or Fix-0skill in order to master. With it, however, the metapsion has learned how to synergize with the quantumintelligence of a VI or True AI in order to apply Telepathy or Biopsion powers to their inanimate corpus. Onlyintelligent machines can be affected, as the techniquerequires a sentient mind to catalyze the effect.This synergy takes much of its force from the adept. Any System Strain the powers might inflict mustbe paid by the adept rather than the target.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 1,
      cost: 2
    },
    {
      name: "Neural Trap",
      description: "The metapsion allows a hostile psychic into their mental sanctum in order to gain a later advantage. Whentargeted by a hostile psionic power that allows a save,the metapsion may Commit Effort as an Instant actionand voluntarily fail the saving throw, accepting the effect. The next psychic power the user targets at thatassailant then allows the victim no saving throw. Thistechnique lasts until the metapsion makes their psychicattack or reclaims their Committed Effort. A hostilepsychic may be affected by only one Neural Trap froma given psychic at a time.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Psychic Static",
      description: "As an Instant action, the metapsion may Commit Effort for the day to negate a perceived psychic power.The psychic responsible for the effect must CommitEffort for the day as an Instant action to resist this negation, otherwise the power ends and any action usedto trigger it is wasted. The PC may then Commit Effort for the day again, with each spending and counter-spending until one runs out of Effort or chooses tostop. Psychic Static can be applied only once per roundto any particular power. The target of the Psychic Static automatically knows the position of the interferingmetapsion, though other onlookers do not have anyobvious way of identifying the metapsion.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Suspended Manifestation",
      description: "The metapsion is capable of “hanging” a psychic powerin their brain, forming the energy patterns and thensuspending them in a self-sustaining loop until it’s timeto trigger their release. The psychic must Commit Effort for the day to hang a power, along with the Effortnormally necessary to trigger it. None of this Effort canbe recovered until the power is expended, after whichit recovers at its usual speed. Activating the power isan Instant action, or an On Turn action if it allows thetarget a saving throw of some kind. Only one abilitycan be held suspended at any one time.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 2,
      cost: 3
    },
    {
      name: "Concert of Minds",
      description: "As an On Turn action, the metapsion may CommitEffort and form a psychic gestalt with one or morewilling psychics within three meters, including up toone other psychic per Metapsion skill level. This gestalt persists as long as the Effort remains committed,regardless of the subsequent distance between psychics.On their own turn, any member of the gestalt may useany power or technique known by any other member,using the other member’s skill levels as necessary andpaying any Effort cost from their own pool. This gestaltshares only psychic power, not thoughts or senses. Atthe end of each round in which one or more membershave used some other member’s powers or abilities ontheir turn of action, the metapsion must Commit Effortfor the scene or the gestalt drops and cannot be re-established for the rest of the scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Metadimensional Friction",
      description: "As a Main Action, the metapsion Commits Effort forthe scene to create localized MES turbulence around avisible target psychic within 200 meters. Each time thetarget Commits Effort or an NPC initiates a psychicpower, they suffer 1d8 damage per Metapsionics skilllevel of the adept. Each time the target suffers the damage they can attempt a Mental saving throw to throwoff the effect. It lasts no longer than the rest of the sceneat most. Only one application of this friction can affecta target at once.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Psychic Tutelage",
      description: "An expert metapsion can modulate and temper themetadimensional energy that surges through an untrained psychic’s mind. This “safety buffer” allows thenovice to experiment with their abilities and graduallydevelop the control they need to channel their powerswithout causing permanent brain damage. Withoutthis technique, it is virtually impossible to turn a normal with untapped potential into a trained psychic.An adept with Metapsionics-3 skill can train up toten pupils at once. One with Metapsionics-4 can trainup to one hundred. It requires only a week to train apotential in ways to avoid accidentally triggering theirpowers and suffering the damage that follows, but actually teaching them to use their powers effectively takesanywhere from one to four years depending on theirnatural aptitude and the availability of other psychicswilling to assist the metapsion in the training process.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Surge Momentum",
      description: "The metapsion’s abilities can be reinforced with a degree of metadimensional energy that would cause substantial damage to a less adept mind. Particularly weakor unprepared minds might be completely crushed bythe force of the adept’s augmented will.The adept must Commit Effort for the day whenusing a power that normally grants its target a savingthrow. The target then suffers a penalty equal to theadept’s Metapsionics skill on any saving throw normally granted by the power. If the target’s hit die total orcharacter level is less than half the adept’s level, rounded up, they automatically fail their saving throw.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 3,
      cost: 4
    },
    {
      name: "Flawless Mastery",
      description: "When this technique is learned, the adept may chooseone technique from any discipline they know. Thattechnique no longer requires Effort to be Committed inany way, though other techniques that augment it maystill exact a cost. Mastered Psychic Static, for example,can expend an effectively unlimited amount of effort.If the technique has a duration based on CommittedEffort then it lasts until the metapsion chooses to end itor is killed. This technique may only be mastered once,though the perfected technique may be changed witha month of meditation and practice.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Impervious Pavis of Will",
      description: "When this technique is learned, the metapsion mustchoose a discipline. They then become entirely immune to unwanted powers from that discipline; theyand their abilities are simply not valid targets for purposes of that discipline’s powers unless the adept chooses to be affected. By Committing Effort for the day asan Instant action, they can extend this immunity for ascene to all allies within 50 meters. This technique maybe learned more than once, and any shared protectionapplies to all disciplines negated by the adept.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Metapsionics",
      level: 4,
      cost: 5
    },
    {
      name: "Oracle - 0",
      description: "The precog gains a progressively-greater intuitive understanding of their own future. Each invocation ofthe Oracle technique requires a Main Action and thatthe user Commit Effort for the day. Once triggered,the adept gets a single brief vision related to the question about the future that they’re asking. This visionis always from their own personal vantage point andnever reveals more than a minute of insight, thoughthe psychic processes it almost instantly as part of thepower’s use.The GM should answer the question as if thePC were about to perform the act or engage in theinvestigation pertinent to the question. Thus, if theadept wanted to know what pressing a button woulddo and the GM knows that it’s connected to a bomb,the psychic might get a vision of sudden death. If thebomb were on a time delay that extended past the timehorizon of the oracle, however, the psychic might justsee a vision of herself waiting patiently, with nothinghappening.Visions should relate to actions and events, notabstract facts. Oracle couldn’t tell a psychic who thecrime boss of a slum neighborhood is, for example, butit could give a vision of the psychic caught in the nextbloody riot and the gang boss who’s directing the myriad thugs. It couldn’t reveal the name of a security guard,but it could show the seer the impending moment thatthe next guard patrol will enter the area the psychicplans to infiltrate. Only the most important or significant information is conveyed by the technique, even ifmultiple events of interest might transpire during thetime horizon.Oracle can only be used on a given question or topiconce until the situation changes substantially or a weekgoes by. The maximum time horizon of the Oracle increases as the adept’s Precognition skill improves.At level 0 the Psycic can see 1 minute into the future.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Precognition",
      level: 0,
      cost: 1
    },
    {
      name: "Oracle - 1",
      description: "The precog gains a progressively-greater intuitive understanding of their own future. Each invocation ofthe Oracle technique requires a Main Action and thatthe user Commit Effort for the day. Once triggered,the adept gets a single brief vision related to the question about the future that they’re asking. This visionis always from their own personal vantage point andnever reveals more than a minute of insight, thoughthe psychic processes it almost instantly as part of thepower’s use.The GM should answer the question as if thePC were about to perform the act or engage in theinvestigation pertinent to the question. Thus, if theadept wanted to know what pressing a button woulddo and the GM knows that it’s connected to a bomb,the psychic might get a vision of sudden death. If thebomb were on a time delay that extended past the timehorizon of the oracle, however, the psychic might justsee a vision of herself waiting patiently, with nothinghappening.Visions should relate to actions and events, notabstract facts. Oracle couldn’t tell a psychic who thecrime boss of a slum neighborhood is, for example, butit could give a vision of the psychic caught in the nextbloody riot and the gang boss who’s directing the myriad thugs. It couldn’t reveal the name of a security guard,but it could show the seer the impending moment thatthe next guard patrol will enter the area the psychicplans to infiltrate. Only the most important or significant information is conveyed by the technique, even ifmultiple events of interest might transpire during thetime horizon.Oracle can only be used on a given question or topiconce until the situation changes substantially or a weekgoes by. The maximum time horizon of the Oracle increases as the adept’s Precognition skill improves.At level 0 the Psycic can see 1 hour into the future.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Precognition",
      level: 1,
      cost: 2
    },
    {
      name: "Oracle - 2",
      description: "The precog gains a progressively-greater intuitive understanding of their own future. Each invocation ofthe Oracle technique requires a Main Action and thatthe user Commit Effort for the day. Once triggered,the adept gets a single brief vision related to the question about the future that they’re asking. This visionis always from their own personal vantage point andnever reveals more than a minute of insight, thoughthe psychic processes it almost instantly as part of thepower’s use.The GM should answer the question as if thePC were about to perform the act or engage in theinvestigation pertinent to the question. Thus, if theadept wanted to know what pressing a button woulddo and the GM knows that it’s connected to a bomb,the psychic might get a vision of sudden death. If thebomb were on a time delay that extended past the timehorizon of the oracle, however, the psychic might justsee a vision of herself waiting patiently, with nothinghappening.Visions should relate to actions and events, notabstract facts. Oracle couldn’t tell a psychic who thecrime boss of a slum neighborhood is, for example, butit could give a vision of the psychic caught in the nextbloody riot and the gang boss who’s directing the myriad thugs. It couldn’t reveal the name of a security guard,but it could show the seer the impending moment thatthe next guard patrol will enter the area the psychicplans to infiltrate. Only the most important or significant information is conveyed by the technique, even ifmultiple events of interest might transpire during thetime horizon.Oracle can only be used on a given question or topiconce until the situation changes substantially or a weekgoes by. The maximum time horizon of the Oracle increases as the adept’s Precognition skill improves.At level 0 the Psycic can see 1 day into the future.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Precognition",
      level: 2,
      cost: 3
    },
    {
      name: "Oracle - 3",
      description: "The precog gains a progressively-greater intuitive understanding of their own future. Each invocation ofthe Oracle technique requires a Main Action and thatthe user Commit Effort for the day. Once triggered,the adept gets a single brief vision related to the question about the future that they’re asking. This visionis always from their own personal vantage point andnever reveals more than a minute of insight, thoughthe psychic processes it almost instantly as part of thepower’s use.The GM should answer the question as if thePC were about to perform the act or engage in theinvestigation pertinent to the question. Thus, if theadept wanted to know what pressing a button woulddo and the GM knows that it’s connected to a bomb,the psychic might get a vision of sudden death. If thebomb were on a time delay that extended past the timehorizon of the oracle, however, the psychic might justsee a vision of herself waiting patiently, with nothinghappening.Visions should relate to actions and events, notabstract facts. Oracle couldn’t tell a psychic who thecrime boss of a slum neighborhood is, for example, butit could give a vision of the psychic caught in the nextbloody riot and the gang boss who’s directing the myriad thugs. It couldn’t reveal the name of a security guard,but it could show the seer the impending moment thatthe next guard patrol will enter the area the psychicplans to infiltrate. Only the most important or significant information is conveyed by the technique, even ifmultiple events of interest might transpire during thetime horizon.Oracle can only be used on a given question or topiconce until the situation changes substantially or a weekgoes by. The maximum time horizon of the Oracle increases as the adept’s Precognition skill improves.At level 0 the Psycic can see 1 minute into the future.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Precognition",
      level: 3,
      cost: 4
    },
    {
      name: "Oracle - 4",
      description: "The precog gains a progressively-greater intuitive understanding of their own future. Each invocation ofthe Oracle technique requires a Main Action and thatthe user Commit Effort for the day. Once triggered,the adept gets a single brief vision related to the question about the future that they’re asking. This visionis always from their own personal vantage point andnever reveals more than a minute of insight, thoughthe psychic processes it almost instantly as part of thepower’s use.The GM should answer the question as if thePC were about to perform the act or engage in theinvestigation pertinent to the question. Thus, if theadept wanted to know what pressing a button woulddo and the GM knows that it’s connected to a bomb,the psychic might get a vision of sudden death. If thebomb were on a time delay that extended past the timehorizon of the oracle, however, the psychic might justsee a vision of herself waiting patiently, with nothinghappening.Visions should relate to actions and events, notabstract facts. Oracle couldn’t tell a psychic who thecrime boss of a slum neighborhood is, for example, butit could give a vision of the psychic caught in the nextbloody riot and the gang boss who’s directing the myriad thugs. It couldn’t reveal the name of a security guard,but it could show the seer the impending moment thatthe next guard patrol will enter the area the psychicplans to infiltrate. Only the most important or significant information is conveyed by the technique, even ifmultiple events of interest might transpire during thetime horizon.Oracle can only be used on a given question or topiconce until the situation changes substantially or a weekgoes by. The maximum time horizon of the Oracle increases as the adept’s Precognition skill improves.At level 0 the Psycic can see 1 week into the future.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Precognition",
      level: 4,
      cost: 5
    },
    {
      name: "Intuitive Response",
      description: "As an Instant action, the precog can Commit Effort forthe scene just before they roll initiative. Their initiative score is treated as one better than anyone else’sinvolved in the scene. If another participant has thispower or some other ability that grants automatic initiative success, roll initiative normally to determinewhich of them goes first, and then the rest of the combatants act. This ability cannot be used if the precoghas been surprised.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 1,
      cost: 2
    },
    {
      name: "Sense the Need",
      description: "At some point in the recent past, the psychic had avague but intense premonition that a particular objectwould be needed. By triggering this power as an Instantaction and Committing Effort for the day, the psychiccan retroactively declare that they brought along anyone object that they could have reasonably acquiredand carried to this point. This object must be plausiblegiven recent events; if the psychic has just been stripsearched, very few objects could reasonably have beenkept, while a psychic who’s just passed through a weapons check couldn’t still have a loaded laser pistol.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 1,
      cost: 2
    },
    {
      name: "Terminal Reflection",
      description: "The psychic’s Oracle power automatically triggers as anInstant action moments before some unexpected danger or ambush, giving the precog a brief vision of theimpending hazard. This warning comes just in time toavoid springing a trap or to negate combat surprise forthe precog and their companions. If the psychic doesnot immediately Commit Effort for the day, this sensegoes numb and this technique cannot be used for therest of the day",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 1,
      cost: 2
    },
    {
      name: "Alternate Outcome",
      description: "The precog can sense impending failure and attemptto salvage the action. As an Instant action, the precogcan target a visible ally or their own self and CommitEffort for the day to allow the target to reroll a failedhit roll, saving throw, or skill check, taking the betterof the two rolls. This power disrupts delicate lines ofprobability, however, and cannot be used on any giventarget more than once a day",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 2,
      cost: 3
    },
    {
      name: "Destiny’s Shield",
      description: "The precog observes an incoming injury and tries tofind an alternate future in which the attack misses. Asan Instant action, the precog can Commit Effort forthe day to force an attacker to reroll a successful hitroll. This technique only works on attacks against thepsychic’s person, not against attacks aimed at a vehiclethey’re occupying or harm that doesn’t involve an attack roll. If the rerolled attack still hits, however, thedamage done is maximized. This technique can be usedonly once per incoming attack.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 2,
      cost: 3
    },
    {
      name: "Anguished Vision",
      description: "The adept’s precognition is sophisticated enough toclearly foresee several seconds into the future. As anInstant action, the psychic may Commit Effort for theday and declare that what they have just done or seenis a vision of the immediate future. Time rolls backto the start of the initiative count in a combat turn,or six seconds earlier if out of combat. Nothing thathappened during that round has really come to pass yet.This ability is tremendously draining, and can beused only once per day.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 3,
      cost: 4
    },
    {
      name: "Cursed Luck",
      description: "Negative probabilities are woven tightly around a visible animate target, including robots and animals butnot including vehicles. Triggering this technique requires a Main Action and Committing Effort for thescene. The target must roll any attack rolls, damagerolls, skill checks, and saving throws twice and take theworst result each time. Any attempts to hit the targetor damage dice rolled against it may be rolled twice andthe better result taken. Intelligent targets can make aMental saving throw at the end of each round to throwoff the effect; this save is not penalized by the power.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 3,
      cost: 4
    },
    {
      name: "Forced Outcome",
      description: "Through careful manipulation of probability, the adeptcan influence random physical events in their vicinity.Triggering this technique requires a Main Action andCommitting Effort for the scene. Any simple, randommechanical outcome can be completely controlled forthe scene, such as a roulette wheel or the order of adeck of shuffled cards. Any other physical event in thearea that seems not-entirely-implausible may be madeto occur by this technique, provided it doesn’t involvemore than a few objects and doesn’t require humaninvolvement. The GM decides what random events areand are not adequately possible. Anything more thanone unusual coincidence or chance per scene is likelyimpossible to produce.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 3,
      cost: 4
    },
    {
      name: "Not My Time",
      description: "The precog instinctively wrenches the lines of probability away from futures in which they are about to die.This technique triggers automatically when the precog is about to die, provided they can Commit Effortfor the day. On triggering, random events somehowconspire to leave the precog alive, even if outrageouscoincidences and ridiculous luck are required. Providedthe precog doesn’t intentionally thrust herself back intodanger, their life is secured for the next few minutes atleast, though there’s no guarantee the psychic will survive intact in mind or body. This technique can triggerno more often than once per week.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 4,
      cost: 5
    },
    {
      name: "Prophecy",
      description: "The power of the precog extends to dictating futureevents that directly involve them. As a Main Action,the precognitive PC may make one prediction involving their personal future or future condition withinthe next year. Provided they take reasonable measuresto enable this prediction, that no direct resistance ismounted by an enemy, and that the prediction doesn’tseem highly improbable to the GM, it will come to pass.The adept must Commit Effort when this power is used,and the Effort remains Committed until the prophecycomes to pass or is abandoned. This ability cannot beused more than once per month and only one prophecymay be active at a time.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Precognition",
      level: 4,
      cost: 5
    },
    {
      name: "Telekinetic Manipulation - 0",
      description: "The adept may Commit Effort for the scene as a MainAction to direct telekinetic force toward an object orperson within unaided visual range or with tactilecontact with the psychic. This force isn’t responsiveenough to be effective as a weapon without furtherrefinement of technique, and cannot cause damage toliving or mobile targets. If used to crush or harm immobile unliving objects, it does 1d6 damage per skilllevel of the psychic per round of focus. Objects move at20 meters per round when moved telekinetically.A telekinetic force can be maintained over multiple rounds without expending further actions, such asholding a metal platform in place under a group of allies, but the psychic cannot again activate this techniqueon a second object until they release the first.The psychic can exert force as if with one handand their own strength.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telekinesis",
      level: 0,
      cost: 1
    },
    {
      name: "Telekinetic Manipulation - 1",
      description: "The adept may Commit Effort for the scene as a MainAction to direct telekinetic force toward an object orperson within unaided visual range or with tactilecontact with the psychic. This force isn’t responsiveenough to be effective as a weapon without furtherrefinement of technique, and cannot cause damage toliving or mobile targets. If used to crush or harm immobile unliving objects, it does 1d6 damage per skilllevel of the psychic per round of focus. Objects move at20 meters per round when moved telekinetically.A telekinetic force can be maintained over multiple rounds without expending further actions, such asholding a metal platform in place under a group of allies, but the psychic cannot again activate this techniqueon a second object until they release the first.The psychic can exert force as if with one handand their own strength.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telekinesis",
      level: 1,
      cost: 2
    },
    {
      name: "Telekinetic Manipulation - 2",
      description: "The adept may Commit Effort for the scene as a MainAction to direct telekinetic force toward an object orperson within unaided visual range or with tactilecontact with the psychic. This force isn’t responsiveenough to be effective as a weapon without furtherrefinement of technique, and cannot cause damage toliving or mobile targets. If used to crush or harm immobile unliving objects, it does 1d6 damage per skilllevel of the psychic per round of focus. Objects move at20 meters per round when moved telekinetically.A telekinetic force can be maintained over multiple rounds without expending further actions, such asholding a metal platform in place under a group of allies, but the psychic cannot again activate this techniqueon a second object until they release the first.The psychic can lift or manipulate up to fourhundred kilograms and smash a human-sizedhole in structures of light wooden constructionor lighter as a Main Action.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telekinesis",
      level: 2,
      cost: 3
    },
    {
      name: "Telekinetic Manipulation - 3",
      description: "The adept may Commit Effort for the scene as a MainAction to direct telekinetic force toward an object orperson within unaided visual range or with tactilecontact with the psychic. This force isn’t responsiveenough to be effective as a weapon without furtherrefinement of technique, and cannot cause damage toliving or mobile targets. If used to crush or harm immobile unliving objects, it does 1d6 damage per skilllevel of the psychic per round of focus. Objects move at20 meters per round when moved telekinetically.A telekinetic force can be maintained over multiple rounds without expending further actions, such asholding a metal platform in place under a group of allies, but the psychic cannot again activate this techniqueon a second object until they release the first.The psychic can manipulate up to eight hundred kilograms and can affect as many individualobjects at once as they have Telekinesis skill levels.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telekinesis",
      level: 3,
      cost: 4
    },
    {
      name: "Telekinetic Manipulation - 4",
      description: "The adept may Commit Effort for the scene as a MainAction to direct telekinetic force toward an object orperson within unaided visual range or with tactilecontact with the psychic. This force isn’t responsiveenough to be effective as a weapon without furtherrefinement of technique, and cannot cause damage toliving or mobile targets. If used to crush or harm immobile unliving objects, it does 1d6 damage per skilllevel of the psychic per round of focus. Objects move at20 meters per round when moved telekinetically.A telekinetic force can be maintained over multiple rounds without expending further actions, such asholding a metal platform in place under a group of allies, but the psychic cannot again activate this techniqueon a second object until they release the first.The psychic can manipulate up to a metric tonand can smash human-sized holes in TL4-constructed exterior walls, light stone walls, or similarbarriers as a Main Action.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telekinesis",
      level: 4,
      cost: 5
    },
    {
      name: "Kinetic Transversal",
      description: "The adept may Commit Effort as an On Turn action tomove freely over vertical or overhanging surfaces as ifthey were flat ground, crossing any solid surface strongenough to bear five kilos of weight. They can also moveover liquids at their full movement rate. This movement ability lasts as long as the Effort is committed.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 1,
      cost: 2
    },
    {
      name: "Pressure Field",
      description: "As an Instant action, the adept can manifest a protectiveforce skin around their person equivalent to a vacc suit,maintaining pressure and temperature even in hardvacuum conditions. They can ignore temperatures ata range of plus or minus 100 degrees Celsius and automatically pressurize thin atmospheres for breathability,or filter particulates or airborne toxins. By CommittingEffort for the scene, they can shield up to six comrades.This lasts until the user reclaims the Effort.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 1,
      cost: 2
    },
    {
      name: "Telekinetic Armory",
      description: "The adept may Commit Effort as an On Turn action tocreate both weapons and armor out of telekinetic force.These weapons are treated as tech level 4 and act as arifle or any advanced melee weapon. Attack rolls canuse either Dexterity, Wisdom, or Constitution modifiers, and may use the Telekinesis skill as the combat skill.Armor may be created as part of this power, granting the psychic a base Armor class equal to 15 plus theirTelekinesis skill level. This armor does not stack withconventional armor, but Dexterity or shields modifyit as usual. The gear continues to exist as long as thepsychic chooses to leave the Effort committed, and theymay be invisible or visible at the psychic’s discretion.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 1,
      cost: 2
    },
    {
      name: "Impact Sump",
      description: "The adept may Commit Effort for the day as an Instantaction to negate a single instance of physical damage.This ability is too taxing to be used more than once perday, but as an Instant action, it can be triggered evenafter damage is rolled.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 2,
      cost: 3
    },
    {
      name: "Slip Field",
      description: "As a Main Action, the psychic Commits Effort for thescene and decreases the friction at a point in sight. Upto ten meters in diameter is affected, making it difficultfor enemies to move from their current position. Allchosen targets must make an Evasion saving throw orfall prone, becoming unable to stand up or move morethan a meter per Move action taken. If used against aground vehicle, the driver must make a Dex/Pilot skillcheck at a difficulty of 8 plus the adept’s Telekinesisskill or go out of control, driving directly forward fora round and crashing into any obstacles. Targets whosave are immune to this technique for the scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 2,
      cost: 3
    },
    {
      name: "Telekinetic Expertise",
      description: "The adept has become familiar enough with the manipulation of telekinetic force that they may now useTelekinetic Manipulation without Committing Effort.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 2,
      cost: 3
    },
    {
      name: "Thermokinesis",
      description: "Telekinetic power involves kinetic energy, but a sufficiently sophisticated grip on motion can be used toagitate the molecules of an inanimate object and causeit to melt or burst into flame. Similar focus can chill orfreeze such substances.Applying Thermokinesis to a target requires thatthe adept Commit Effort for the scene as a Main Action.Thermokinesis cannot affect objects larger than the adeptcould lift with their Telekinetic Manipulation.As with other telekinetic powers, this ability doesnot work on objects being held or used by intelligentcreatures. Non-sentient robots or other objects with hitpoints take 1d12 damage per level of Telekinesis skilleach time this technique is applied to them.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 2,
      cost: 3
    },
    {
      name: "Tangible Force Construct",
      description: "Once per turn, as an On Turn action, the psychic canCommit Effort for the scene to create a telekinetic forceconstruct at a visible point, provided it can fit withina three-meter cube. The force construct can be shapedin any way the psychic wishes, and can remain fixed inits location without external supports if desired. It isas sturdy as a TL4 construction and may be visible orinvisible at the adept’s choice. The construct lasts untilthe end of the scene, until the psychic dispels it, or untilit is smashed with 20 points of damage against AC 15.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 3,
      cost: 4
    },
    {
      name: "Telekinetic Ram",
      description: "As a Main Action, the psychic can Commit Effort forthe scene to target a tremendous, uncontrolled burst offorce at a single target within sight. This burst requiressome time to detonate, however, and will only go offat the end of the next round. Targets of this techniqueare aware of an oppressive, electrical tingling in the airand are apt to instinctively move; this technique is thusgenerally useless against any target that is not entirelyimmobile, as any movement of a chosen target disruptsthe ram. Once the ram detonates, however, it is sufficient to destroy any immobile civilian vehicle, create afive-meter hole in anything short of hardened militaryfortifications, or inflict 5d12 damage on anything elseas if it were struck by a Heavy weapon.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 3,
      cost: 4
    },
    {
      name: "Reactive Telekinesis",
      description: "As an Instant action, the psychic can Commit Effort forthe scene whenever an assailant misses them with aphysical attack. The attack is then reflected back againstthe assailant, who must reroll the attack against theirown person twice. If either roll hits, the assailant suffers damage from their own attack. If both rolls hit, thedamage is the maximum possible.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 3,
      cost: 4
    },
    {
      name: "Force Puppetry",
      description: "As a Main Action, the telekinetic can Commit Effort forthe day to suborn a visible target’s mobility, whetherrobotic, vehicular, or human, provided it’s no largerthan a ground car. A sapient victim can make a Mental saving throw to resist the psychic onslaught; on afailure, they lose control of their physical actions. If notpiloted by the telekinetic, the target remains motionlessor continues on its current direction of travel. If thetelekinetic spends a Main Action to control them, theycan be made to perform any physical action that is notdirectly suicidal, using the psychic’s skill levels and hitbonus for any attacks or skill checks they might make.The puppetry lasts until the end of the scene, until thetarget leaves the psychic’s sight, or until a sapient targetbelieves that their action or inaction is about to getthem killed. The psychic’s control is fine enough toachieve even very delicate physical motions, but it isnot good enough to control the target’s speech, thoughit can keep them silent.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 4,
      cost: 5
    },
    {
      name: "Telekinetic Flight",
      description: "As an Instant action, the telekinetic can Commit Effortto begin flying, and may extend this effect to up to ahalf-dozen unresisting, human-sized allies within 30meters. While flying, the psychic can move at twicetheir normal movement rate in any direction They canplunge earthward at up to terminal velocity withoutharm, and even orbital insertions are survivable withthis power if a vacc suit is available or the Pressure Fieldtechnique is used. Allies must end their turns within 30meters of the psychic to maintain this flight but controltheir own motion. As an Instant, this power may betriggered in time to negate falling damage. The flightlasts for as long as the Effort remains Committed.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telekinesis",
      level: 4,
      cost: 5
    },
    {
      name: "Telepathic Contact- 0",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.Observe emotional states in a target. Intenseemotions provide a single word or image relatedto the focus of the feelings.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telepathy",
      level: 0,
      cost: 1
    },
    {
      name: "Telepathic Contact- 1",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.A shallow gestalt with the target’s language centers allows the telepath to understand any form ofcommunication made by the target. If the psychichas the requisite body parts to speak the target’slanguage, they can communicate with it in turn.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telepathy",
      level: 1,
      cost: 2
    },
    {
      name: "Telepathic Contact- 2",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.The psychic’s awareness of the target’s surfacecognition is sophisticated enough to read theircurrent thoughts, though it can’t pick up memories or non-obvious connections. The target getsa Mental saving throw to resist this.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telepathy",
      level: 2,
      cost: 3
    },
    {
      name: "Telepathic Contact- 3",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.The psychic can drill down into the target’smemory to get a one or two-sentence answer toany single question they ask, or receive a singleanswering vision of the target’s recollections. Thetarget can attempt a Mental saving throw to resistthis power, and whether or not it succeeds thecontact is automatically ended. It can be re-established, but only by activating this technique again.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telepathy",
      level: 3,
      cost: 4
    },
    {
      name: "Telepathic Contact- 4",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.The psychic instantly gets a full and nuancedawareness of everything the target can rememberabout a particular topic. The target can attempta Mental saving throw to resist this power, andwhether or not it succeeds the contact is automatically ended afterwards. It can be re-established,but only by activating this technique again.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Telepathy",
      level: 4,
      cost: 5
    },
    {
      name: "Facile Mind",
      description: "The telepath is practiced at opening a Telepathic Contact,and need only Commit Effort for the scene to do so, instead of Committing Effort for the day. If contacting anally who has practiced the process with the psychic forat least a week, opening the contact normally requiresno Effort at all. In both cases, if the telepath chooses toCommit Effort for the day, they can open a TelepathicContact as an Instant action rather than a Main Action.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 1,
      cost: 2
    },
    {
      name: "Transmit Thought",
      description: "The telepath can send thoughts and images over a Telepathic Contact, allowing two-way communication witha willing target as an Instant action when desired.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 1,
      cost: 2
    },
    {
      name: "Far Thought",
      description: "Once a telepath has made a Telepathic Contact with atarget, they can thereafter activate the technique whenever that target is within 100 kilometers, whether ornot the psychic knows where they are. At Telepathy-3the range increases to 1,000 kilometers, and at Telepathy-4 it extends over an entire planet and up to orbitaldistances. This distant connection is tenuous, however,and the psychic cannot use any technique through itthat would allow the target a saving throw to resist.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 2,
      cost: 3
    },
    {
      name: "Suppress Cognition",
      description: "Through intense focus, the telepath can make the targetof a Telepathic Contact simply not think about something, whether that’s the presence of the telepath, thepossibility of committing violence, the absence of important documentation, or any other single potentialaction or one specific person. This technique requiresthe psychic to Commit Effort for the scene as a MainAction. The target gets a Mental saving throw to resistthis power and become immune to it for the scene. Iffailed, the thought remains unthinkable for the rest ofthe scene unless the target perceives physical danger ora traumatic threat to something they prize highly. Inthat case, the block instantly dissolves and cannot bere-established during the scene. Once the effect ends,the target will remain oblivious to their temporaryfugue unless it is brought to their attention somehow.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 2,
      cost: 3
    },
    {
      name: "Reflex Response",
      description: "As a Main Action, the telepath can Commit Effort forthe day to force a sudden, irrational impulse into thetarget of a Telepathic Contact. The target may make aMental saving throw to resist; on a failure, they willuse their next available action to carry out the impulseto the best of their ability. This impulse cannot beself-injurious or harmful to a loved one, but it can befoolish, reckless, or harmful to others. The target maynot understand why they have done the action, but willusually attempt to rationalize it as their choice.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 3,
      cost: 4
    },
    {
      name: "Telepathic Assault",
      description: "The telepath Commits Effort for the day as a MainAction to force a wave of metadimensional energythrough the brain of a Telepathic Contact target. Theassault does 6d6 damage, or 9d6 damage if the telepathhas Telepathy-4 skill. The target may make a Mentalsaving throw to halve the damage. This assault cannotkill a target, but can knock them unconscious for anhour if they’re reduced to zero hit points, after whichthey wake up with one hit point. A victim cannot betargeted by an assault more than once per scene.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 3,
      cost: 4
    },
    {
      name: "Memory Editing",
      description: "The telepath can make simple edits to the memory ofa target currently linked by a Telepathic Contact. Eventsof no more than 24 hours in duration can be erasedfrom memory, conversations can be created or changed,new events can be added to a day, or other similar alterations made. The psychic can make these changesas a Main Action by Committing Effort for the day. Ifthe psychic doesn’t have a good understanding of thememories they’re changing, such as might be grantedby the level-4 degree of Telepathic Contact, the edits theymake may not fit well. The target gets a Mental savingthrow to resist editing for the rest of the scene, but ona failure, they will not notice the changed memoriesuntil given a reason to recollect them.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 4,
      cost: 5
    },
    {
      name: "Unity of Thought",
      description: "The telepath becomes exceptionally skilled at weavingtogether multiple allied minds. When they establish aTelepathic Contact with a willing ally they may bind up tosix willing participants into the same contact withoutfurther Effort. This multi-person link is relatively shallow, and allows only the Instant exchange of thoughts,images, and sensory impressions. While under its effect, every participant knows the exact location andcondition of all others, and uses the best Initiative rollof any of them if combat commences. At the table, upto five minutes of discussion and coordination amongthe players can be arranged each round without incurring delays for the PCs. Every combat turn, one gestaltmember of the psychic’s choice gets an extra round ofaction to represent the benefits of the perfect coordination of the group. The psychic cannot gain this bonusround himself. The telepathic link lasts as long as thepsychic initiates no new Telepathic Contact, and it has arange that extends to any point within a solar system.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Telepathy",
      level: 4,
      cost: 5
    },
    {
      name: "Personal Apportation - 0",
      description: "The teleporter can translocate to another location theyhave either occupied before or can see with their unaided vision. Locations are fixed in reference to the nearestmajor gravity well. For example, it is not possible toteleport to the cockpit of a distant moving vehicle theyonce occupied, but they can teleport to another pointon a planet’s surface even though the planet has sincemoved far through the stellar void.The core technique allows the teleporter to movehimself and any mass he is able to carry with his ownnatural strength. Resisting targets cannot be carriedalong, and unresisting ones must be touched. A teleporter can leave any clothing, shackles, adhesions, orother matter behind when he teleports, but he cannotleave behind matter that has been inserted into hisbody, such as cybernetics or shrapnel. Matter cannotbe partially left behind.A teleporter will instinctively abort any apportation that would leave him embedded in a solid objector in an environment of imminent physical harm. AnyCommitted Effort on such aborted jumps is wasted, asis any action spent triggering the power.The maximum range of Personal Apportation depends on the teleporter’s skill level. Teleporting withPersonal Apportation counts as a Main Action and requires that the psychic Commit Effort for the scene.The psychic can teleport up to 10 meters.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Teleportation",
      level: 0,
      cost: 1
    },
    {
      name: "Personal Apportation - 1",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.Observe emotional states in a target. Intenseemotions provide a single word or image relatedto the focus of the feelings.The psychic can teleport up to 100 meters.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Teleportation",
      level: 1,
      cost: 2
    },
    {
      name: "Personal Apportation - 2",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.Observe emotional states in a target. Intenseemotions provide a single word or image relatedto the focus of the feelings.The psychic can teleport up to 10 kilometers.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Teleportation",
      level: 2,
      cost: 3
    },
    {
      name: "Personal Apportation - 3",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.Observe emotional states in a target. Intenseemotions provide a single word or image relatedto the focus of the feelings.The psychic can teleport up to 1,000 kilometers.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Teleportation",
      level: 3,
      cost: 4
    },
    {
      name: "Personal Apportation - 4",
      description: "The telepath can obtain a progressively-deeper understanding of a sentient target’s thoughts. The target mustbe visible or otherwise perceptible to the telepath’s unaided senses. Opening a contact requires the telepath toCommit Effort for the day as a Main Action, and thecontact lasts for a scene at most unless augmented byother techniques.The depth of contact that can be made depends onthe psychic’s Telepathy skill. A single contact can useany or all of the effects permitted to a telepath of theuser’s skill level. Basic forms of contact do not allow fora saving throw, though more advanced probes allowthe target to make a Mental saving throw to resist. Ona successful save, no form of this technique that allowsa save can be used on them for the rest of the scene.Observe emotional states in a target. Intenseemotions provide a single word or image relatedto the focus of the feelings.The psychic can teleport anywhere on a planet’s surface or near orbit.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.core,
      domain: "Teleportation",
      level: 4,
      cost: 5
    },
    {
      name: "Proficient Apportation",
      description: "Personal Apportation now counts as a Move action,though it still can be performed only once per round.Apportations of 10 meters or less no longer requireEffort to be Committed, though any augments to thetechnique must still be paid for normally.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 1,
      cost: 2
    },
    {
      name: "Spatial Awareness",
      description: "The psychic may Commit Effort as an On Turn action to gain an intuitive 360-degree awareness of theirphysical surroundings. The sense is roughly equivalentto sight out to 100 meters, though it cannot read textor distinguish colors. It is blocked by solid objects butis unimpeded by darkness, mist, blinding light, holograms, or optical illusions. The sense lasts as long as theEffort remains Committed to the technique.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 1,
      cost: 2
    },
    {
      name: "Burdened Apportation",
      description: "The psychic can carry willing companions with themwhen using Personal Apportation. Up to three human-sized companions and their man-portable gearmay be carried per skill level in Teleportation. Alliesmust be within 3 meters of the teleporter to be carriedalong. Ordinary inert matter cannot be carried alongunless the psychic is touching it or it’s being carried byan ally affected by this power. If carrying inert mass, upto two hundred kilos of objects can be carried per skilllevel. Using this technique increases the Effort cost ofPersonal Apportation, requiring that an extra point ofEffort be Committed for the day.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 2,
      cost: 3
    },
    {
      name: "Perceptive Dislocation",
      description: "Commit Effort for the day to sense any location thepsychic could teleport to. The psychic perceives thelocation as if there, lasting for fifteen minutes at most.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 2,
      cost: 3
    },
    {
      name: "Spatial Synchrony Mandala",
      description: "The psychic imprints a particular object or person ontheir psionic awareness. Provided the object is relatively intact and in range of their Personal Apportation, thepsychic always knows its exact location and can teleportto within three meters of it with Personal Apportationeven if it has moved from its original location. Imprinting an object requires an hour’s meditation withit, and only one object can be imprinted at a time. Ifimprinting on a person, the target must be willing andcooperative to make the imprint. Objects must be atleast one kilogram in mass to be effectively tracked.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 2,
      cost: 3
    },
    {
      name: "Effortless Apportation",
      description: "The psychic does not need to Commit Effort to usePersonal Apportation. If the technique is augmented byother techniques that come with their own extra or increased cost, however, this extra cost must still be paid.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 3,
      cost: 4
    },
    {
      name: "Stutterjump",
      description: "The psychic can instinctively micro-teleport away fromincoming danger. As an On Turn action they mayCommit Effort to begin shifting their spatial positionaway from attacks, gaining a base Armor class of 20so long as the Effort remains Committed. This Armorclass is not modified by armor, shields, or Dexteritymodifiers, and the micro-jumps do not significantlymove the psychic from their current location. WhileStutterjump is active, as an Instant action the adept mayCommit Effort for the day to negate a successful hit bya weapon attack, even after damage has been rolled.This reflexive defensive jump may be used only onceper day and leaves the psychic just outside the radiusof explosions or other area-effect attacks.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 3,
      cost: 4
    },
    {
      name: "Rift Reduplication",
      description: "Expert teleporters can be infuriatingly difficult to pindown. By Committing an additional Effort for the dayas an Instant action, the adept can use Personal Apportation as an On Turn action, even if they’ve already used itonce this round. Apporting itself costs whatever Effortit normally would, in addition to any techniques thataugment it. Rift Reduplication can only be triggered onceper round.If the adept uses their powers to teleport into alocation, perform an action, and then use Rift Reduplication to teleport back out, onlookers in the area willnot have time to react to their action or attack the adeptunless the onlookers have held their action explicitlyto counter the psychic. Enemies who hold their actionthis way waste it entirely if the psychic does not givethem a chance to attack or otherwise interfere. Such alightning strike may be surprising to onlookers, but itdoesn’t allow enough preparation time to count as anExecution Attack as described on page 52.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 3,
      cost: 4
    },
    {
      name: "Deep Intrusion",
      description: "The adept can use Personal Apportation to blind-teleportinto a building, structure, vehicle, or spaceship visibleto them, including spaceships close enough to engagein conventional ship-to-ship combat. They intuitivelyseek out a space large enough to hold them and withoutimmediate environmental hazards, but cannot controltheir precise destination. Using this technique in conjunction with Personal Apportation is very draining tothe psychic, and requires that they Commit an additional Effort point for the day",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 4,
      cost: 5
    },
    {
      name: "Offensive Apportation",
      description: "The psychic can use Personal Apportation as a Main Action to teleport an unwilling target, provided the usercan make physical contact with them. Contact with anunsuspecting or incapacitated target is automatic, whiletouching a resisting enemy requires a Punch hit rollwith a bonus equal to the psychic’s Teleportation skill.If the psychic does not use the Burdened Apportationtechnique then only the target is teleported; otherwisethe user may go along with them. The psychic cannotteleport a target to any location they could not teleport to, including locations of imminent environmental danger, such as high in the air, into a windowlesstomb, or into the middle of a sea. A conscious, resisting target can make a Mental saving throw to forciblyabort the teleportation, rolling at a penalty equal tothe psychic’s Teleportation skill. Use of this techniqueadds to the cost of Personal Apportation, requiring thepsychic Commit an additional point of Effort for theday whether the touch hits or not.",
      class: "Pyschic",
      type: ClassBenefitDefinitionType.technique,
      domain: "Teleportation",
      level: 4,
      cost: 5
    }
  ]