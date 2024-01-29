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
  const { setAttributeDefinitions, setSkillDefinitions } = useGlobalStore();
  const { data: skillDefinitions } = useSWR<SkillDefinition[]>(
    "GlobalSkillDefinition",
    skillsDefinitionRepository.getSkills
  );
  const { data: attributeDefinitions } = useSWR<AttributeDefinition[]>(
    "GlobalAttributeDefinition",
    attributeDefinitionRepository.getAttributes
  );

  const { data: backgrounds } = useSWR<BackgroundDefinition[]>(
    "testBackgroundDefinition",
    backgroundDefinitionRepository.getBackgrounds
  );

  useEffect(() => {
    if (attributeDefinitions && skillDefinitions) {
      setSkillDefinitions(skillDefinitions);
      setAttributeDefinitions(attributeDefinitions);
    }
  }, [
    skillDefinitions,
    attributeDefinitions,
    setSkillDefinitions,
    setAttributeDefinitions,
  ]);

  return props.children;
}
