"use client";

import {
  attributeDefinitionRepository,
  backgroundDefinitionRepository,
  skillsDefinitionRepository,
} from "@/injection/injection";
import { AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { ReactNode, useEffect } from "react";
import useSWR from "swr";
import { useDefinitionData } from "./state"; // Adjust the import path as needed

export default function Layout(props: { children: ReactNode }) {
  const { setAttributeDefinitions, setSkillDefinitions, setBackgroundDefinitionList } = useDefinitionData();
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
