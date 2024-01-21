import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { useStore } from "../../state";
import { Button, Card, Image, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import useSWR from "swr";
import { Key } from "@react-types/shared";
import RandomSkillTab from "../tabs/random/RandomSkillTab";
import PredefinedBenefitsTab from "../tabs/predifined/PredifinedBenefitsTab";
import ChooseBenefitsTab from "../tabs/choose/ChooseBenefitsTab";
import router from "next/router";
import path from "path";
import { Character, Skill } from "@/models/chatacter";

export default function BackgroundDetail(props: { characterId: string }) {
  const { detailBackground, setChosenSkills, chosenSkills } = useStore();

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

  function handleSkillTabChange(key: Key) {
    setChosenSkills(new Map<string, number>([]));
    setTabSkills(key);
  }

  return (
    <>
      <Card className="w-full h-[90%]">
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
                onSelectionChange={handleSkillTabChange}
              >
                <Tab key="predifined" title="Predefined">
                  <PredefinedBenefitsTab background={background} />
                </Tab>
                <Tab key="choose" title="Choose">
                  <ChooseBenefitsTab background={background} />
                </Tab>
                <Tab key="random" title="Random">
                  <RandomSkillTab background={background} />
                </Tab>
              </Tabs>
            </div>
          </Tab>
        </Tabs>
      </Card>
      <Button
        className="m-5"
        onPress={() => {
          const charactersString: string | null =
            localStorage.getItem("characters");
          if (charactersString) {
            const characters: Character[] = JSON.parse(charactersString);
            const character: Character = characters.find(
              (e) => e.id == props.characterId
            );
            chosenSkills.forEach((level, name) => {
              character.standardSkills.push(new Skill(name, level));
            })
            
            localStorage.setItem("characters", JSON.stringify(characters));
          }
        }}
      >
        DONE
      </Button>
    </>
  );
}
