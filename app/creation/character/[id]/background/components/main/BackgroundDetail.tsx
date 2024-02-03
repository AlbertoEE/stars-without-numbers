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
    setChosenBenefits([detailBackground!.benefits.free]);
    setTabSkills(key);
  }

  return (
    <div className="w-full h-full">
      <Tabs
        key="a"
        aria-label="Options" 
        classNames={{
          base: "w-full h-[5%]",
          tabList: "w-full gap-6 relative rounded-none p-0 border-b border-divider",
          panel: "p-0 h-[95%]"
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
    </div>
  );
}
