export const rollDice = (quantity: number, type: number) => {
  let total = 0
  for (let index = 0; index < quantity; index++) {
    total += Math.floor(Math.random() * type) + 1
  }
  return total
}
