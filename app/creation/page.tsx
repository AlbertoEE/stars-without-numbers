"use client";

import { Character } from "@/models/Chatacter";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Button
        onPress={() => {
          const randomUUID = crypto.randomUUID();
          const character = new Character(randomUUID);

          const charactersString = localStorage.getItem("characters");
          const characters = charactersString
            ? JSON.parse(charactersString)
            : [];
          characters.push(character);

          localStorage.setItem("characters", JSON.stringify(characters));
          router.push(`/creation/character/${randomUUID}`);
        }}
      >
        Create Character
      </Button>
    </div>
  );
}
