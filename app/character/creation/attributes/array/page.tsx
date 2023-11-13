"use client";

import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import AttributeScoreModifier from "./components/AttributeScoreModifier";
import AttributeStandardArray from "./components/AttributeStandardArray";
import AttributeDice from "./components/AttributeDice";
import Description from "./components/Description";

interface AttributeValue {
  [key: string]: string;
}

interface DraggedState {
  from: string;
  value: string;
  key: string;
}

const attributeScoreModifier = {
  0: -2,
  1: -2,
  3: -2,
  4: -1,
  5: -1,
  6: -1,
  7: -1,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 2,
  19: 2,
  20: 2,
};

const attributeDescription = {
  "Dexterity": "In the wasteland, a quick hand and a quicker mind are your best allies.\n\nDexterity isn't just about speed; it's your evasion, your manual finesse with tools and weapons, and the snap of your reflexes in a firefight.\n\nIt's what puts you first in the line of action, giving you the upper hand in combat before the dust even settles.",
  "Strength": "The raw power to bend the post-apocalyptic world to your will.\n\nStrength is your physical might, the brute force that turns a simple punch into a knock-out.\n\nIt's what lets you carry your burdens across the wasteland, stand firm in melee brawls, and smash through obstacles that would stop a weaker survivor dead in their tracks.",
  "Constitution": "Survival is for the hardy, the ones who can take a beating and keep going.\n\nConstitution is your grit, your resilience.\n\nIt's enduring injuries that would fell lesser souls, resisting the toxic hazards of the wasteland, and pushing on when there's no food or sleep to be had.\n\nThis is the attribute of those who refuse to yield, no matter the odds.",
  "Intelligence": "In a world ruled by rust and ruin, knowledge is power.\n\nIntelligence is your capacity for memory, the sharpness of your reasoning, and your aptitude for technical skills.\n\nIt's the breadth of your general education, allowing you to understand and manipulate the world around you.\n\nIntelligence is the light that cuts through the darkness of ignorance.",
  "Wisdom": "The wasteland is full of deceptions, and only the wise can discern truth from lies.\n\nWisdom is your eye for detail, your ability to judge situations accurately, and read the intentions of friends and foes alike.\n\nIt's the intuition that guides you when maps fail and the insight to see solutions where others see only rubble.",
  "Charisma": "In a land of solitude and desolation, the power to inspire and influence is invaluable.\n\nCharisma is your ability to command attention, to charm and persuade, to inspire loyalty or instill fear.\n\nIt's being taken seriously in negotiations, rallying others to your cause, and swaying the hearts and minds of those you encounter.\n\nCharisma is the unseen force that can turn the tide of any encounter."
}

export default function Home() {
  const [initialValues, setInitialValues] = useState<AttributeValue>({
    A: "14",
    B: "12",
    C: "11",
    D: "10",
    E: "9",
    F: "7",
  });

  const [attributes, setAttributes] = useState<AttributeValue>({
    Strength: "0",
    Dexterity: "0",
    Constitution: "0",
    Intelligence: "0",
    Wisdom: "0",
    Charisma: "0",
  });

  const [draggedValue, setDraggedValue] = useState<DraggedState>({
    from: "",
    value: "",
    key: "",
  });
  const [draggedOverValue, setDraggedOverValue] = useState<DraggedState>({
    from: "",
    value: "",
    key: "",
  });

  const [detail, setDetail] = useState("Strength");

  const handleSort = () => {
    let initialValuesClone = { ...initialValues };
    let attributesClone = { ...attributes };

    switch (true) {
      case draggedValue.from === "initial" &&
        draggedOverValue.from === "initial":
        swapValues(initialValuesClone, draggedValue.key, draggedOverValue.key);
        setInitialValues(initialValuesClone);
        break;
      case draggedValue.from === "initial" &&
        draggedOverValue.from === "attributes":
        swapValuesBetweenObjects(
          initialValuesClone,
          attributesClone,
          draggedValue.key,
          draggedOverValue.key
        );
        setInitialValues(initialValuesClone);
        setAttributes(attributesClone);
        break;
      case draggedValue.from === "attributes" &&
        draggedOverValue.from === "attributes":
        swapValues(attributesClone, draggedValue.key, draggedOverValue.key);
        setAttributes(attributesClone);
        break;
      case draggedValue.from === "attributes" &&
        draggedOverValue.from === "initial":
        swapValuesBetweenObjects(
          attributesClone,
          initialValuesClone,
          draggedValue.key,
          draggedOverValue.key
        );
        setInitialValues(initialValuesClone);
        setAttributes(attributesClone);
        break;
    }
  };

  const swapValues = (obj: AttributeValue, key1: string, key2: string) => {
    const temp = obj[key1];
    obj[key1] = obj[key2];
    obj[key2] = temp;
  };

  const swapValuesBetweenObjects = (
    obj1: AttributeValue,
    obj2: AttributeValue,
    key1: string,
    key2: string
  ) => {
    const temp = obj1[key1];
    obj1[key1] = obj2[key2];
    obj2[key2] = temp;
  };

  const onDragStart = (from: string, value: string, key: string) => {
    setDraggedValue({ from, value, key });
  };

  const onDragEnter = (from: string, value: string, key: string) => {
    setDraggedOverValue({ from, value, key });
  };

  const x = (key: React.Key) => {
    switch (true) {
      case (key == "standard"):
        setInitialValues({
          A: "14",
          B: "12",
          C: "11",
          D: "10",
          E: "9",
          F: "7",
        });
        break;
      case (key == "random"):
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
      Strength: "0",
      Dexterity: "0",
      Constitution: "0",
      Intelligence: "0",
      Wisdom: "0",
      Charisma: "0",
    });
  }

  const rollAndApply = (key: string) => {
    if(Number.isNaN(parseInt(initialValues[key]))) {  
      let result = roll(3, 6);
      let initialValuesClone = {...initialValues};
      initialValuesClone[key] = result;
      setInitialValues(initialValuesClone);
    }
  }

  const roll = (quantity: number, type: number) => {
    let total = 0;
    for (let index = 0; index < quantity; index++) {
      total += Math.floor(Math.random() * type) + 1;
    }
    return total;
  }

  return (
    <section className="flex flex-row items-center justify-center gap-4">
      <Card className="flex-1">
        <Tabs aria-label="Options" classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        }}
          onSelectionChange={(key: React.Key) => x(key)}
        >
          <Tab key="standard"
            title="Standard Array">
            <CardBody>
              <div className="flex flex-row items-center justify-center gap-4 pb-4">
                {Object.entries(initialValues).map(([key, value]) => (
                  <AttributeStandardArray
                    value={value}
                    key_value={key}
                    onDragStart={() => onDragStart("initial", value, key)}
                    onDragEnter={() => onDragEnter("initial", value, key)}
                    onDragEnd={handleSort}
                  />

                ))}
              </div>
              <div>
                {Object.entries(attributes).map(([key, value]) => (
                  <AttributeScoreModifier
                    score={value}
                    modifier={attributeScoreModifier[value]}
                    key_value={key}
                    onDragEnter={() => onDragEnter("attributes", value, key)}
                    onDragStart={() => onDragStart("attributes", value, key)}
                    onDragEnd={handleSort}
                    onMouseOver={() => setDetail(key)}
                  />
                ))}
              </div>
            </CardBody>
          </Tab>
          <Tab key="random" title="Roll Dice">

            <CardBody>
              <div className="flex flex-row items-center justify-center gap-4 pb-4">
                {Object.entries(initialValues).map(([key, value]) => (
                  <AttributeDice
                    value={value}
                    key_value={key}
                    onDragStart={() => onDragStart("initial", value, key)}
                    onDragEnter={() => onDragEnter("initial", value, key)}
                    onDragEnd={handleSort}
                    onClick={() => (rollAndApply(key))}
                  />

                ))}
              </div>
              <div>
                {Object.entries(attributes).map(([key, value]) => (
                  <AttributeScoreModifier
                    score={value}
                    modifier={attributeScoreModifier[value]}
                    key_value={key}
                    onDragEnter={() => onDragEnter("attributes", value, key)}
                    onDragStart={() => onDragStart("attributes", value, key)}
                    onDragEnd={handleSort}
                    onMouseOver={() => setDetail(key)}
                  />
                ))}
              </div>
            </CardBody>
          </Tab>
        </Tabs>
      </Card>
      <Description detail={detail} description={attributeDescription[detail]} />
    </section>
  );
}
