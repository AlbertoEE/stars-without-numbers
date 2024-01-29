import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import {
  getCharacter,
  updateCharacter,
} from "@/data/CharacterCRUD/CharacterCRUDLocalStorage";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { Character, Skill, Stat } from "@/models/chatacter";
import { Button, Card, Image, Tab, Tabs } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState } from "react";
import { SimpleBenefit, useStore } from "../../state";
import useSWR from "swr";
import ChooseBenefitsTab from "../tabs/choose/ChooseBenefitsTab";
import PredefinedBenefitsTab from "../tabs/predifined/PredifinedBenefitsTab";
import RandomSkillTab from "../tabs/random/RandomSkillTab";
import { useGlobalStore } from "../../../state";

export default function BackgroundDetail(props: { characterId: string }) {
  const { detailBackground, chosenBenefits, setChosenBenefits } = useStore();

  const [tab, setTab] = useState<Key>("backgroundDescription");
  const [tabSkills, setTabSkills] = useState<Key>("predifined");
  const {} = useGlobalStore()

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

  function handleBenefitTabChange(key: Key) {
    setChosenBenefits(new Array());
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
                onSelectionChange={handleBenefitTabChange}
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
          // let character: Character | undefined = getCharacter(
          //   props.characterId
          // );

          // if (character == undefined) return;
          // character!.standardSkills = [];

          // function condenseList(arr: SimpleBenefit[]): Map<string, number> {
          //   let counts = new Map<string, number>();

          //   for (let item of arr) {
          //     counts.set(item.name, (counts.get(item.name) || 0) + 1);
          //   }

          //   return counts;
          // }

          // condenseList(chosenBenefits.filter((e) => e.type == "skill")).forEach(
          //   (value, key) => {
          //     character!.standardSkills.push(new Skill(key, value - 1));
          //   }
          // );

          // condenseList(chosenBenefits.filter((e) => e.type == "stat")).forEach(
          //   (value, key: string) => {
          //     character!.stats[key] = new Stat(
          //       character!.stats[key].value + value
          //     );
          //   }
          // );

          // updateCharacter(character);
        }}
      >
        DONE
      </Button>
    </>
  );
}
