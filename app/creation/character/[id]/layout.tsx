"use client"

import {
  attributeDefinitionRepository,
  backgroundDefinitionRepository,
  focusDefinitionRepository,
  gameClassDefinitionRepository,
  skillsDefinitionRepository,
  equipmentDefinitionRepository,
} from "@/injection/injection"
import { type AttributeDefinition } from "@/models/AttributeDefinitionModels"
import { type BackgroundDefinition } from "@/models/BackgroundDefinitionModels"
import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"
import { type ReactNode, useEffect, type ReactElement } from "react"
import useSWR from "swr"
import SectionButton from "./components/SectionButton"
import { useStoreDefinitionDataState } from "./state" // Adjust the import path as needed
import { type GameClassDefinition } from "@/models/GameClassDefinitionModels"
import { type FocusDefinition } from "@/models/FocusDefinitionModels"
import type Equipment from "@/models/equipment/EquipmentModels"

export default function Layout(props: { children: ReactNode }): ReactElement {
  const {
    setAttributeDefinitions,
    setSkillDefinitions,
    setBackgroundDefinitionList,
    setGameClassDefinitionList,
    setFocusDefinitionList,
    setEquipmentDefinition,
  } = useStoreDefinitionDataState()

  const { data: skillDefinitionList } = useSWR<StandardSkillDefinition[]>(
    "GlobalSkillDefinition",
    skillsDefinitionRepository.getSkills,
  )
  const { data: attributeDefinitionList } = useSWR<AttributeDefinition[]>(
    "GlobalAttributeDefinition",
    attributeDefinitionRepository.getAttributes,
  )

  const { data: backgroundDefinitionList } = useSWR<BackgroundDefinition[]>(
    "GlobalBackgroundDefinition",
    backgroundDefinitionRepository.getBackgrounds,
  )

  const { data: gameClassDefinitionList } = useSWR<GameClassDefinition[]>(
    "GlobalGameClassDefinition",
    gameClassDefinitionRepository.getGameClassDefinitionList,
  )

  const { data: focusDefinitionList } = useSWR<FocusDefinition[]>(
    "GlobalFocusDefinition",
    focusDefinitionRepository.getFoci,
  )

  const { data: equipmentDefinition } = useSWR<Equipment>(
    "GlobalEquipmentDefinition",
    equipmentDefinitionRepository.getEquipmentDefinition,
  )

  useEffect(() => {
    if (
      attributeDefinitionList != null &&
      skillDefinitionList != null &&
      backgroundDefinitionList != null &&
      gameClassDefinitionList != null &&
      focusDefinitionList != null &&
      equipmentDefinition != null
    ) {
      setSkillDefinitions(skillDefinitionList)
      setAttributeDefinitions(attributeDefinitionList)
      setBackgroundDefinitionList(backgroundDefinitionList)
      setGameClassDefinitionList(gameClassDefinitionList)
      setFocusDefinitionList(focusDefinitionList)
      setEquipmentDefinition(equipmentDefinition)
    }
  }, [
    skillDefinitionList,
    attributeDefinitionList,
    backgroundDefinitionList,
    gameClassDefinitionList,
    focusDefinitionList,
    equipmentDefinition,
    setSkillDefinitions,
    setAttributeDefinitions,
    setBackgroundDefinitionList,
    setGameClassDefinitionList,
    setFocusDefinitionList,
    setEquipmentDefinition,
  ])

  useEffect((): (() => void) | undefined => {
    // Solo añadir el listener si `window` está definido (lado del cliente)
    if (typeof window !== "undefined") {
      const handleBeforeUnload = (e: any): void => {
        e.preventDefault()
        e.returnValue = "" // Algunos navegadores requieren que `returnValue` se establezca.
      }

      window.addEventListener("beforeunload", handleBeforeUnload)

      return (): void => {
        window.removeEventListener("beforeunload", handleBeforeUnload)
      }
    }
  }, [])

  return (
    <>
      <div className="fixed translate-y-[-50%] left-0 top-[50%] flex flex-col items-start p-1 rounded-r-lg">
        <SectionButton desiredPath={"attributes"} />
        <SectionButton desiredPath={"background"} />
        <SectionButton desiredPath={"free-skill"} name="free skill" />
        <SectionButton desiredPath={"class"} />
        <SectionButton desiredPath={"foci"} />
        <SectionButton desiredPath={"equipment"} />
        <SectionButton desiredPath={"hit Points"} />
        <SectionButton desiredPath={"other Stats"} />
        <SectionButton desiredPath={"name and Story"} />
      </div>
      {props.children}
    </>
  )
}
