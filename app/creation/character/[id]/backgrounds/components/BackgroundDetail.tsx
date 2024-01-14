import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { useStore } from "../state";
import BackgroundSkillTypeSection from "./BackgroundSkillTypeSection";
import { Divider, Image, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import useSWR from "swr";
import { Key } from "@react-types/shared";
import RandomSkillTab from "./RandomSkillTab";

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
          </div>
          <Tabs
            key="underlined"
            variant="underlined"
            aria-label="Options"
            fullWidth
            selectedKey={tabSkills}
            onSelectionChange={setTabSkills}
          >
            <Tab key="predifined" title="Predefined">
              <div className="p-5">
                Here you can pick two other skills from the table below.
                <br />
                <br />
                You may pick the same skill twice if you wish, to improve its
                starting proficiency.
                <br />
                <br />
                No starting character can begin with a skill level higher than
                level-1.
              </div>
              <BackgroundSkillTypeSection
                rows={3}
                columns={1}
                skills={background.benefits.quick.map((e) => e.name)}
                skillBuyMethod="predifined"
              />
            </Tab>
            <Tab key="choose" title="Choose">
              <div className="p-5">
                Here you can pick two other skills from the table below.
                <br />
                <br />
                You may pick the same skill twice if you wish, to improve its
                starting proficiency.
                <br />
                <br />
                No starting character can begin with a skill level higher than
                level-1.
              </div>
              <BackgroundSkillTypeSection
                rows={3}
                columns={3}
                skills={background.benefits.learning.map((e) => e.name)}
                skillBuyMethod="choose"
              />
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
