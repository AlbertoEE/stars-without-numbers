export interface GameClassDefinition {
    name: string,
    abilities: Ability[],
    gameSubclasses?: GameSubClass[],
    atackBonusFormula: (level: number, gameSubClass?: GameSubClass) => number,
    hitPointsFormula: (constitutionModifier: number, gameSubClass?: GameSubClass) => number,
    gameClassMagicResource?: () => number | undefined,
}

export interface Ability {
    summary: string,
    details: string[],
}

export enum GameSubClass {
    PARTIAL_WARRIOR,
    PARTIAL_EXPERT,
    PARTIAL_PSYCHIC,
}