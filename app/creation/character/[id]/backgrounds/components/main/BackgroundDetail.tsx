import { Button, Card, Image, Tab, Tabs } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState } from "react";
import { useStore } from "../../state";
import ChooseBenefitsTab from "../tabs/choose/ChooseBenefitsTab";
import PredefinedBenefitsTab from "../tabs/predifined/PredifinedBenefitsTab";
import RandomSkillTab from "../tabs/random/RandomSkillTab";

export default function BackgroundDetail(props: { characterId: string }) {
  const { focusedBackground: detailBackground, chosenBenefits, setChosenBenefits } = useStore();

  const [tab, setTab] = useState<Key>("backgroundDescription");
  const [tabSkills, setTabSkills] = useState<Key>("predifined");

  if (detailBackground == undefined) return;

  function handleBenefitTabChange(key: Key) {
    setChosenBenefits(
      [{ name: detailBackground!.benefits.free.name, type: "skill" }]);
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
                  src={`/imgs/backgrounds/${detailBackground.name}.svg`}
                  alt="me"
                  width="64"
                  height="64"
                />
                <h1 className="font-orbitron font-bold uppercase tracking-widest text-xs p-4">
                  {detailBackground.name}
                </h1>
              </div>
              <div className="px-3 py-4 whitespace-pre-line">
                {detailBackground.description}
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
                  <PredefinedBenefitsTab backgroundDefinition={detailBackground} />
                </Tab>
                <Tab key="choose" title="Choose">
                  <ChooseBenefitsTab background={detailBackground} />
                </Tab>
                <Tab key="random" title="Random">
                  <RandomSkillTab background={detailBackground} />
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
