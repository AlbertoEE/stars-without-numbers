"use client";

import {
  attributeDefinitionRepository,
  backgroundDefinitionRepository,
  skillsDefinitionRepository,
} from "@/injection/injection";
import { AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { ReactNode, useEffect } from "react";
import { useGlobalStore } from "./state"; // Adjust the import path as needed
import useSWR from "swr";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";

export default function Layout(props: { children: ReactNode }) {
  const { setAttributeDefinitions, setSkillDefinitions, setBackgroundDefinitionList } = useGlobalStore();
  const { data: skillDefinitionList } = useSWR<SkillDefinition[]>(
    "GlobalSkillDefinition",
    skillsDefinitionRepository.getSkills
  );
  const { data: attributeDefinitionList } = useSWR<AttributeDefinition[]>(
    "GlobalAttributeDefinition",
    attributeDefinitionRepository.getAttributes
  );

  const { data: backgroundDefinitionList } = useSWR<BackgroundDefinition[]>(
    "GlobalBackgroundDefinition",
    backgroundDefinitionRepository.getBackgrounds
  );

  useEffect(() => {
    if (attributeDefinitionList && skillDefinitionList && backgroundDefinitionList) {
      setSkillDefinitions(skillDefinitionList);
      setAttributeDefinitions(attributeDefinitionList);
      setBackgroundDefinitionList(backgroundDefinitionList);
    }
  }, [
    skillDefinitionList,
    attributeDefinitionList,
    backgroundDefinitionList,
    setSkillDefinitions,
    setAttributeDefinitions,
    setBackgroundDefinitionList,
  ]);

  return props.children;
}
