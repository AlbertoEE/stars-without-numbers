export interface GameClassDefinition {
    name: string,
    abilities: Ability[],
    atackBonusFormula: (level: number) => number,
    hitPointsFormula: (constitutionModifier: number) => number,
}

export interface Ability {
    summary: string,
    detail: string,
}