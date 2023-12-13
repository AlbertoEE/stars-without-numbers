"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useStore } from "../state";
import AttributeCreation from "./AttributeCreation";
import { Key } from "@react-types/shared";
import { Attribute, Character } from "@/models/chatacter";

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
    const charactersSerialized: string | null =
      localStorage.getItem("characters");
    if (charactersSerialized) {
      const characters: Character[] = JSON.parse(charactersSerialized);
      const character: Character | undefined = characters.find(
        (e) => e.id == props.characterId
      );
      if (character) {
        character.attributes.strength = new Attribute(
          parseInt(attributes["strength"])
        );

        character.attributes.dexterity = new Attribute(
          parseInt(attributes["dexterity"])
        );

        character.attributes.constitution = new Attribute(
          parseInt(attributes["constitution"])
        );

        character.attributes.wisdom = new Attribute(
          parseInt(attributes["wisdom"])
        );

        character.attributes.intelligence = new Attribute(
          parseInt(attributes["intelligence"])
        );

        character.attributes.charisma = new Attribute(
          parseInt(attributes["charisma"])
        );
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
