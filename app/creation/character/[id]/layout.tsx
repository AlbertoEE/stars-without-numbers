"use client";

import {
  attributeDefinitionRepository,
  backgroundDefinitionRepository,
  skillsDefinitionRepository,
} from "@/injection/injection";
import { AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import useSWR from "swr";
import SectionButton from "./components/SectionButton";
import { useDefinitionData } from "./state"; // Adjust the import path as needed

export default function Layout(props: { children: ReactNode }) {

  const router = useRouter();
  const pathName = usePathname();

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

  useEffect(() => {
    // Solo añadir el listener si `window` está definido (lado del cliente)
    if (typeof window !== 'undefined') {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = ''; // Algunos navegadores requieren que `returnValue` se establezca.
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  const handleNavigate = (end: string) => {
    const currentPath = pathName;

    if (!currentPath.endsWith(`/${end}`)) {
      router.push(`${currentPath}/${end}`);
    }
  };

  return (<>
    <div className="fixed translate-y-[-50%] left-0 top-[50%] flex flex-col items-start p-1 rounded-r-lg">
      <SectionButton desiredPath={"attributes"} />
      <SectionButton desiredPath={"background"} />
      <SectionButton desiredPath={"foci"} />
      <SectionButton desiredPath={"free-skill"} name="free skill" />
      <SectionButton desiredPath={"class"} />
      <SectionButton desiredPath={"equipment"} />
      <SectionButton desiredPath={"hit Points"} />
      <SectionButton desiredPath={"other Stats"} />
      <SectionButton desiredPath={"name and Story"} />
    </div>
    {props.children}
  </>)
}
