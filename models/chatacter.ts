export class Character {
  id: string;
  name: string = "";
  level: number = 0;
  attackBonus: number = 0;
  xp: number = 0;
  standardSkillPoints = 0;
  classSkillPoints = 0;
  mana: Mana;
  hitPoints: HitPoints = new HitPoints();
  stats: Stats = new Stats();
  standardSkills: Skill[] = [];
  class: Class[]
  savingThrows: SavingThrow[];
  foci: Focus[] = [];
  isCharacterCompleted: boolean = false;

  constructor(id: string) {
    this.id = id;
    this.name = "";
    this.hitPoints = new HitPoints();
    this.stats = new Stats();
    this.standardSkills = [];
    this.level = 0;
    this.savingThrows = [
      new SavingThrow(
        "physical",
        ["strength", "constitution"]
      ),
      new SavingThrow(
        "evasion",
        ["dexterity", "intelligence"]
      ),
      new SavingThrow(
        "evasion",
        ["charisma", "wisdom"]
      ),
    ]
    this.foci = [];
  }
}

export class Mana {
  name: string;
  max: number;
  current: number;
  temp: number;
}

export class HitPoints {
  current: number;
  max: number;
  temp: number;

  constructor() {
    this.current = 0;
    this.max = 0;
    this.temp = 0;
  }
}

export class Focus {
  name: string;
  level: number;
}

type AttributeName = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma"
export class SavingThrow {
  name: string;
  cd: number = 15;
  attributes: AttributeName[];

  constructor(name: string, attribute: AttributeName[], cd?: number) {
    this.name = name;
    if(cd) { this.cd = cd; }
    this.attributes = attribute;
  }
}

export interface Class {
  name: string;
  domain: Domain[]
}

export interface Domain {
  name: string;
  coreSkill: Skill;
  techniques: Technique[];
}

export interface Technique{
  name: string;
}

export class Skill {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

export class Stats {
  strength: Stat;
  dexterity: Stat;
  constitution: Stat;
  intelligence: Stat;
  wisdom: Stat;
  charisma: Stat;

  constructor() {
    this.strength = new Stat(0);
    this.dexterity = new Stat(0);
    this.constitution = new Stat(0);
    this.intelligence = new Stat(0);
    this.wisdom = new Stat(0);
    this.charisma = new Stat(0);
  }
}

export class Stat {
  value: number;
  modifier: number;

  constructor(value: number) {
    this.value = value;
    this.modifier = this.calculateModifier();
  }

  calculateModifier(): number {
    if (this.value < 3) {
      return -2;
    }
    else if (this.value == 3) {
      return -2;
    }
    else if (this.value <= 7) {
      return -1;
    }
    else if (this.value <= 13) {
      return 0;
    }
    else if (this.value <= 17) {
      return 1;
    }
    else if (this.value == 18) {
      return 2;
    }
    else if (this.value > 18) {
      return 2;
    }

    return -999;
  }
}
