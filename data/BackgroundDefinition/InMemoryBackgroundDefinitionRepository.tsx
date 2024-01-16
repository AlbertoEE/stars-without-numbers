import { BackgroundDefinition, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import { BackgroundDefinitionRepository } from "./BackgroundDefinitionRepository";
import { SkillDefinitionType } from "@/models/SkillDefinitionModels";
import { AttributeDefinitionType } from "@/models/AttributeDefinitionModels";

export class InMemoryBackgroundDefinitionRepository implements BackgroundDefinitionRepository {
    getBackgrounds = () => backgroundDefinitions;
}

const backgroundDefinitions: BackgroundDefinition[] = [
    {
      name: "barbarian",
      description:
        "Standards of barbarism vary when many worlds are capable of interstellar spaceflight, but your hero comes from a savage world of low technology and high violence..\n\nTheir planet may have survived",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "survive", subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "punch" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
        ],
      },
    },
    {
      name: "clergy",
      description:
        "Faith is nigh-universal among human civilizations, and your hero is dedicated to one such belief..\n\nSome clergy are conventional priests or priestesses, while others might be cloistered monastics or nuns, or more martial warrior-monks..\n\nModern-day faiths such as Christianity, Islam, Judaism, Hinduism, Buddhism, and other creeds all exist in various sectors, often in altered form, while some worlds have developed entirely new deities or faiths..\n\nIf you'd like to create your own religion, you can work with the GM to define its characteristic beliefs.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "courtesan",
      description:
        "Your hero's career was one of proffered pleasure..\n\nSimple prostitution is one form of this background, perhaps as an ordinary streetwalker, a part-time amateur with bills to pay, or an expensive companion to the wealthy, but other forms of satisfaction exist among the many worlds..\n\nRefined artists of conversation and grace command high fees in some societies, while others pay well for the simple company of certain men and women with the right bloodlines, special appearance, or auspicious personal qualities esteemed by their culture.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "criminal",
      description:
        "Whether thief, murderer, forger, smuggler, spy, or some other variety of malefactor, your hero was a criminal.\n\nSome such rogues are guilty only of crossing some oppressive government or offending a planetary lord, while others have done things that no civilized society could tolerate.\n\nStill, their ability to deal with the most desperate and dangerous of contacts and navigate the perils of a less-than-legal adventure can make them attractive associates for a party of freebooters bent on profit and glory more than strict legality.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "dilettante",
      description:
        "Your hero never had a profession, strictly speaking, but spent their formative years in travel, socializing, and a series of engaging hobbies.\n\nThey might have been the scion of a wealthy industrialist, a planetary noble's younger offspring, or a hanger-on to someone with the money and influence they lacked.\n\nBy the time your hero's adventures start, they've run through the money that once fueled their lifestyle.\n\nExtreme measures may be necessary to acquire further funding.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "program" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "entertainer",
      description:
        "Singers, dancers, actors, poets, writers… the interstellar reaches teem with artists of unnumbered styles and mediums, some of which are only physically possible with advanced technological support.\n\nYour hero was a dedicated entertainer, one likely focused in a particular form of art.\n\nPatrons and talent scouts can be temperamental, however, and sometimes a budding artist needs to take steps to find their audience.\n\nOr at least, to find their audience's money.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "merchant",
      description:
        "Your hero was or is a trader.\n\nSome merchants are mere peddlers and shopkeepers on primitive, lowtech worlds, while others are daring far traders who venture to distant worlds to bring home their alien treasures.\n\nThe nature of trade varies widely among worlds.\n\nOn some of them, it's a business of soberly-dressed men and women ticking off trades on virtual terminals, while on others it is a more… active pursuit, requiring the judicious application of monoblades and deniable gunfire against competitors.\n\nSometimes a deal goes bad or capital needs to be raised, and a merchant's natural talents are turned toward the perils of adventure.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "noble",
      description:
        "Many planets are ruled by a class of nobles, and your hero was a member of one such exalted group.\n\nSuch planets are often worlds of exquisite courtesy alloyed with utterly remorseless violence, and a misplaced word at the morning levee can result in an executioner's monoblade at noon.\n\nYour hero has done something or been the victim of something to dislodge them from their comfortable place at court.\n\nWithout their familiar allies, wealth, or influence, they must take a new place in the world, however distasteful that claiming might be.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "official",
      description:
        "Most advanced worlds run on their bureaucracies, the legions of faceless men and women who fill unnumbered roles in keeping the government running as it should.\n\nYour hero was one such official.\n\nSome were law enforcement officers, others government office clerks or tax officials or trade inspectors.\n\nHowever necessary the work may be, it is often of unendurably tedious nature, and any man or woman with an adventurous spark to their blood will soon find themselves desperate for more exciting use of their talents.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "peasant",
      description:
        "A technologically-advanced world can usually produce all its necessary foodstuffs and basic resources with a handful of workers, the bulk of the labor being performed by agricultural bots.\n\nOn more primitive worlds, or those with a natural environment that requires close personal attention to crops, a class of peasants will emerge.\n\nThese men and women often become chattel, part and parcel of the land they occupy and traded among their betters like the farm equipment of richer worlds.\n\nYour hero was not satisfied with that life, and has done something to break free from their muddy and toilsome past.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "exert", subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "work" , subtype: "specific" },
        ],
      },
    },
    {
      name: "physician",
      description:
        "Bodies wear and break, even on worlds that possess the full resources of advanced postech medicine.\n\nYour hero was a physician, one trained to cure the maladies of the body or the afflictions of the mind.\n\nSome physicians are conventional health workers, while others are ship's surgeons, military medics, missionary healers of an expanding faith, or dubious slum doctors who'll graft over laser burns with no awkward questions asked.\n\nWherever men and women go into danger, however, the skills of a physician are eagerly sought.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "heal" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "heal" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "know" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "heal" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "know" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "pilot",
      description:
        "A pilot's role is a broad one in the far future.\n\nThe most glamorous and talented navigate starships through the metadimensional storms of interstellar space, while less admired figures fly the innumerable intra-system shuttles and atmosphere craft that serve in most advanced systems.\n\nOn other worlds, this career might reflect a long-haul trucker, or a horse-riding messenger, or an intrepid sailor on an alien sea.\n\nAs the Pilot skill covers all these modes of transport, any character whose role revolves around vehicles or riding beasts might justify their selection of this career.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "shoot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "shoot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "trade" , subtype: "specific" },
        ],
      },
    },
    {
      name: "politician",
      description:
        "The nature of a political career varies from world to world.\n\nOn some, it's much like one we'd recognize, with glad-handing voters, loud rallies, and quiet back room deals with supposed rivals in government.\n\nOn others, it might involve a great deal more ceremonial combat, appeals to councils of elders, and success at ritual trials.\n\nWhatever the details, your hero was a politician in their home culture.\n\nSomething went wrong, though, and the only way to fix it is to get clear of your constituents for a while and seek some alternative means of advancement.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "scholar",
      description:
        "Scientists, sages, and professors all qualify under this career.\n\nYour hero was one such, a man or woman with a life dedicated to knowledge and understanding.\n\nIt might have involved the technical expertise of a metadimensional structures engineer or the sacred memorization of the chronicles of some lostworlder sage-order, but your hero’s life was in learning.\n\nSometimes that learning cannot be found in familiar surroundings, however, and for one reason or another, willing or not, your hero must venture out into the wider world.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "program" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "soldier",
      description:
        "Whatever the technology or structure of their parent world, a soldier’s work is universal.\n\nYour hero was a professional fighter, whether that took the form of a barbarian noble’s thegn, a faceless conscript in a planetary army, or an elite soldier in the service of a megacorp’s private military.\n\nWhether it was because they were on the losing side, choosing to leave the service, or being forced to flee a cause they couldn’t fight for, they now find themselves navigating a world where their most salable skill is one that can cause them a great deal of trouble.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "lead" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
        ],
      },
    },
    {
      name: "spacer",
      description:
        "Almost every advanced world is highly dependent upon the resources that space flight brings them.\n\nSome of this work can be automated, but every really important task needs a flexible human operator to oversee the work.\n\nYour hero is one such spacer, either a worker who toils in the sky or a native voidborn man or woman who has spent their entire life outside of natural gravity.\n\nIt’s not uncommon for such workers to find better prospects in places where they can breathe without a vacc suit.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "program" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "program" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "technician",
      description:
        "Old things break and new things need to be made.\n\nWhether a humble lostworlder blacksmith or an erudite astronautic engineer, your hero made a career out of building and mending the fruits of technology.\n\nWhile almost every society has a need for such services, not all of them treat their providers as generously as a technician might wish.\n\nSometimes, these same talents can be turned toward less licit ends, and a skilled technician’s expertise is always useful to an adventuring group that plans to rely on anything more sophisticated than a sharpened stick.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
        ],
      },
    },
    {
      name: "thug",
      description:
        "Your hero was a bruiser.\n\nThey might have had a notional allegiance to some so-called “army”, or have been part of some crime boss’ strong-arm crew, or simply been a private contractor of misfortune for those who failed to pay up.\n\nThey might have even been a fist in a righteous cause, defending their neighborhood from hostile outsiders or serving as informal muscle for a local leader in need of protection.\n\nWhatever the details, they’ve had to move on from their old life, and their new one is likely to involve a similar application of directed force.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "talk" , subtype: "specific" },
        ],
      },
    },
    {
      name: "vagabond",
      description:
        "A dilettante has money and friends; your hero simply has the road.\n\nWhether they were knocked loose from polite society at a young age or have recently found themselves cast out of a familiar life, they now roam the ways of the world and the spaces between.\n\nSome heroes find this life satisfying, with its constant novelty and the regular excitement of bare survival.\n\nOthers long for a more stable arrangement, and are willing to lend their pragmatic talents to a group that offers some prospect of profit.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "survive", subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "physical stat", amount: 2, subtype: AttributeDefinitionType.physical },
          { type: BackgroundBenefitType.stat, name: "mental stat", amount: 2, subtype: AttributeDefinitionType.mental },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "combat skill", subtype: SkillDefinitionType.combat },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "notice" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "perform" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "sneak" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "survive" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "work" , subtype: "specific" },
        ],
      },
    },
    {
      name: "worker",
      description:
        "Countless in number, every industrialized world has swarms of workers to operate the machines and perform the labor that keeps society functioning.\n\nCooks, factory laborers, mine workers, personal servants, lawyers, clerks, and innumerable other roles are covered under this career.\n\nIf your hero rolls or picks Work as a skill but has a career that would better fit another existing skill, they may substitute it accordingly.\n\nThus, a wage-slave programmer might take Program instead of Work, while a lawyer would use Administer instead as a reflection of their litigious talent.",
      benefits: {
        free: [{ type: BackgroundBenefitType.skill, name: "work" , subtype: "specific" }],
        predifined: [
          { type: BackgroundBenefitType.skill, name: "work" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
        ],
        growth: [
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.stat, name: "any stat", amount: 1, subtype: AttributeDefinitionType.any },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
        ],
        learning: [
          { type: BackgroundBenefitType.skill, name: "administer" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "any skill", subtype: SkillDefinitionType.any },
          { type: BackgroundBenefitType.skill, name: "connect" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "exert" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "fix" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "pilot" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "program" , subtype: "specific" },
          { type: BackgroundBenefitType.skill, name: "work" , subtype: "specific" },
        ],
      },
    },
];