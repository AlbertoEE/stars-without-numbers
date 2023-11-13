"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import AttributeScoreModifier from "./components/AttributeScoreModifier";
import AttributeAvailableValues from "./components/AttributeAvailableValues";
import Description from "./components/Description";
import { attributeDescription } from "@/data/data";
import { create } from 'zustand';

interface AttributeValue {
  [key: string]: string;
}

interface DraggedState {
  from: string;
  value: string;
  key: string;
}

interface DraggedState {
  from: string;
  value: string;
  key: string;
}

interface MyState {
  initialValues: AttributeValue,
  attributes: AttributeValue;
  dragged: DraggedState;
  draggedOver: DraggedState;
  detail: string;
  setInitialValues: (newAttributes: AttributeValue) => void;
  setAttributes: (newAttributes: AttributeValue) => void;
  setDragged: (newDraggedState: DraggedState) => void;
  setDraggedOver: (newDraggedState: DraggedState) => void;
  setDetail: (newDetail: string) => void;
}

export const useStore = create<MyState>(((set) => ({
  initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", },
  attributes: { Strength: "0", Dexterity: "0", Constitution: "0", Intelligence: "0", Wisdom: "0", Charisma: "0", },
  dragged: { from: "", value: "", key: "" },
  draggedOver: { from: "", value: "", key: "" },
  detail: "",
  setInitialValues: (newInitialValues) => set({ initialValues: newInitialValues }),
  setAttributes: (newAttributes) => set({ attributes: newAttributes }),
  setDragged: (newDragged) => set({ dragged: newDragged }),
  setDraggedOver: (newDraggedOver) => set({ draggedOver: newDraggedOver }),
  setDetail: (newDetail) => set({ detail: newDetail }),
})));

export default function Home() {
  const [tab, setTab] = useState("standard");
  const { initialValues, attributes, dragged, draggedOver, detail, setInitialValues, setAttributes, setDragged, setDraggedOver, setDetail } = useStore();

  const handleSort = () => {
    let initialValuesClone = { ...initialValues };
    let attributesClone = { ...attributes };

    switch (true) {
      case dragged.from === "initial" &&
        draggedOver.from === "initial":
        swapValues(initialValuesClone, dragged.key, draggedOver.key);
        setInitialValues(initialValuesClone);
        break;
      case dragged.from === "initial" &&
        draggedOver.from === "attributes":
        swapValuesBetweenObjects(
          initialValuesClone,
          attributesClone,
          dragged.key,
          draggedOver.key
        );
        setInitialValues(initialValuesClone);
        setAttributes(attributesClone);
        break;
      case dragged.from === "attributes" &&
        draggedOver.from === "attributes":
        swapValues(attributesClone, dragged.key, draggedOver.key);
        setAttributes(attributesClone);
        break;
      case dragged.from === "attributes" &&
        draggedOver.from === "initial":
        swapValuesBetweenObjects(
          attributesClone,
          initialValuesClone,
          dragged.key,
          draggedOver.key
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


  const rollAndApply = (key: string) => {
    if (Number.isNaN(parseInt(initialValues[key]))) {
      let result = roll(3, 6);
      let initialValuesClone = { ...initialValues };
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

  useEffect(() => {
    switch (true) {
      case (tab == "standard"):
        setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", });
        break;
      case (tab == "random"):
        setInitialValues({ A: "🎲", B: "🎲", C: "🎲", D: "🎲", E: "🎲", F: "🎲", G: "14", });
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
  }, [tab])

  return (
    <section className="flex flex-row items-center justify-center gap-4">
      <Card className="flex-1">
        <Tabs aria-label="Options" classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        }}
          selectedKey={tab}
          onSelectionChange={setTab}
        >
          <Tab key="standard"
            title="Standard Array">
            <CardBody>
              <div className="flex flex-row items-center justify-center gap-4 pb-4">
                {Object.entries(initialValues).map(([key, value]) => (
                  <AttributeAvailableValues value={value} keyValue={key} key={key} onDragEnd={handleSort} />

                ))}
              </div>
              <div>
                {Object.entries(attributes).map(([key, value]) => (
                  <AttributeScoreModifier score={value} keyValue={key} key={key} onDragEnd={handleSort} />
                ))}
              </div>
            </CardBody>
          </Tab>
          <Tab key="random" title="Roll Dice">
            <CardBody>
              <div className="flex flex-row items-center justify-center gap-4 pb-4">
                {Object.entries(initialValues).map(([key, value]) => (
                  <AttributeAvailableValues value={value} keyValue={key} key={key} onDragEnd={handleSort} onClick={() => (rollAndApply(key))} />
                ))}
              </div>
              <div>
                {Object.entries(attributes).map(([key, value]) => (
                  <AttributeScoreModifier score={value} keyValue={key} key={key} onDragEnd={handleSort} />
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
