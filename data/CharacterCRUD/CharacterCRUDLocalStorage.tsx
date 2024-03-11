import { type Character } from "@/models/Chatacter"

export function getCharacter(characterId: string): Character | undefined {
  const storedData = localStorage.getItem("characters")
  const characters: Character[] = storedData ? JSON.parse(storedData) : []
  return characters.find((c): boolean => c.id === characterId)
}

export function updateCharacter(character: Character): void {
  const storedData = localStorage.getItem("characters")
  const characters: Character[] = storedData ? JSON.parse(storedData) : []
  const characterIndex = characters.findIndex(
    (c): boolean => c.id === character.id,
  )

  if (characterIndex !== -1) {
    characters[characterIndex] = character

    localStorage.setItem("characters", JSON.stringify(characters))
  }
}
