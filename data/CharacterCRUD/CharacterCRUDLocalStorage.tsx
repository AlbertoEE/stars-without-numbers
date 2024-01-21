import { Character } from "@/models/chatacter";

export function getCharacter(characterId: string) {
    const storedData = localStorage.getItem("characters");
    let characters: Character[] = storedData ? JSON.parse(storedData) : [];
    return characters.find(c => c.id == characterId);
}

export function updateCharacter(character: Character) {
    const storedData = localStorage.getItem("characters");
    let characters: Character[] = storedData ? JSON.parse(storedData) : [];
    const characterIndex = characters.findIndex(c => c.id === character.id);

    if (characterIndex !== -1) {
      characters[characterIndex] = character;
  
      localStorage.setItem("characters", JSON.stringify(characters));
    }
}