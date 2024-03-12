"use client"

import { Character } from "@/models/Character"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { type ReactElement } from "react"

export default function Page(): ReactElement {
  const router = useRouter()
  return (
    <div>
      <Button
        onPress={(): void => {
          const randomUUID = crypto.randomUUID()
          const character = new Character(randomUUID)

          const charactersString = localStorage.getItem("characters")
          const characters = JSON.parse(charactersString ?? "[]")
          characters.push(character)

          localStorage.setItem("characters", JSON.stringify(characters))
          router.push(`/creation/character/${randomUUID}`)
        }}
      >
        Create Character
      </Button>
    </div>
  )
}
