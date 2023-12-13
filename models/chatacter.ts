export interface Character {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  strength: Attribute;
  dexterity: Attribute;
  constitution: Attribute;
  intelligence: Attribute;
  wisdom: Attribute;
  charisma: Attribute;
}

export class Attribute {
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