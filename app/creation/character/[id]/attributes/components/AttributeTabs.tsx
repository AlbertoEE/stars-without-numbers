"use client";

import { Stat, Stats, Character } from "@/models/chatacter";
import { Tab, Tabs } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useEffect, useState } from "react";
import { useStore } from "../state";
import AttributeCreation from "./AttributeCreation";

export default function AttributeTabs(props: { characterId: string }) {
  const [tab, setTab] = useState<Key>("standard");
  const { attributes, setInitialValues, setAttributes } = useStore();

  useEffect(() => {
    switch (true) {
      case tab == "standard":
        setInitialValues({
          A: "14",
          B: "12",
          C: "11",
          D: "10",
          E: "9",
          F: "7",
        });
        break;
      case tab == "random":
        setInitialValues({
          A: "🎲",
          B: "🎲",
          C: "🎲",
          D: "🎲",
          E: "🎲",
          F: "🎲",
          G: "14",
        });
        break;
    }
    setAttributes({
      strength: "0",
      dexterity: "0",
      constitution: "0",
      intelligence: "0",
      wisdom: "0",
      charisma: "0",
    });
  }, [tab, setAttributes, setInitialValues]);

  useEffect(() => {
    const charactersString: string | null =
      localStorage.getItem("characters");
    if (charactersString) {
      const characters: Character[] = JSON.parse(charactersString);
      const characterIndex: number = characters.findIndex( (e) => e.id == props.characterId );
      if (characterIndex !== -1) {
        const attributesStorage: Stats = {
          strength: new Stat(parseInt(attributes["strength"])),
          dexterity: new Stat( parseInt(attributes["dexterity"]) ),
          constitution: new Stat( parseInt(attributes["constitution"]) ),
          wisdom: new Stat( parseInt(attributes["wisdom"])),
          intelligence: new Stat( parseInt(attributes["intelligence"]) ),
          charisma: new Stat( parseInt(attributes["charisma"]) ),
        }
        characters[characterIndex] = { ...characters[characterIndex], stats: attributesStorage };
        localStorage.setItem("characters", JSON.stringify(characters));
      }
    }
  }, [attributes]);

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
      <Tab key="standard" title="Standard Array">
        <AttributeCreation />
      </Tab>
      <Tab key="random" title="Roll Dice">
        <AttributeCreation random />
      </Tab>
    </Tabs>
  );
}
