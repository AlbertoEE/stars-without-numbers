import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { useStore } from "../../state";
import BackgroundSkillTypeSection from "../tabs/BackgroundSkillTypeSection";
import { Divider, Image, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import useSWR from "swr";
import { Key } from "@react-types/shared";
import RandomSkillTab from "../tabs/random/RandomSkillTab";
import PredefinedBenefitsTab from "../tabs/predifined/PredifinedBenefitsTab";
import ChooseBenefitsTab from "../tabs/choose/ChooseBenefitsTab";

export default function BackgroundDetail() {
  const { detailBackground } = useStore();

  const [tab, setTab] = useState<Key>("backgroundDescription");
  const [tabSkills, setTabSkills] = useState<Key>("predifined");

  const backgroundDefinitionRepository: BackgroundDefinitionRepository =
    new InMemoryBackgroundDefinitionRepository();
  const { data: backgrounds } = useSWR<BackgroundDefinition[]>(
    "testBackgroundDefinitionDetail",
    backgroundDefinitionRepository.getBackgrounds
  );

  if (!backgrounds) return;

  let background: BackgroundDefinition | undefined = backgrounds.find(
    (background) => background.name == detailBackground
  );

  if (background == undefined) return;

  return (
    <Tabs
      key="a"
      aria-label="Options"
      classNames={{
        tabList:
          "gap-6 w-full relative rounded-none p-0 border-b border-divider",
      }}
      selectedKey={tab}
      onSelectionChange={setTab}
    >
      <Tab key="backgroundDescription" title="Description">
        <div className="p-5">
          <div className="flex flex-row">
            <Image
              className="ml-4 mb-4"
              src={`/imgs/backgrounds/${background.name}.svg`}
              alt="me"
              width="64"
              height="64"
            />
            <h1 className="font-orbitron font-bold uppercase tracking-widest text-xs p-4">
              {background.name}
            </h1>
          </div>
          <div className="px-3 py-4 whitespace-pre-line">
            {background.description}
          </div>
        </div>
      </Tab>
      <Tab key="skills" title="Skills">
        <div className="w-full">
          <Tabs
            key="underlined"
            variant="underlined"
            aria-label="Options"
            fullWidth
            selectedKey={tabSkills}
            onSelectionChange={setTabSkills}
          >
            <Tab key="predifined" title="Predefined">
              <PredefinedBenefitsTab background={background}/>
            </Tab>
            <Tab key="choose" title="Choose">
              <ChooseBenefitsTab background={background}/>
            </Tab>
            <Tab key="random" title="Random">
              <RandomSkillTab background={background}/>
            </Tab>
          </Tabs>
        </div>
      </Tab>
    </Tabs>
  );
}
