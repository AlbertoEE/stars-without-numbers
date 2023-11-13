"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import Description from "./components/Description";
import { attributeDescription } from "@/data/data";
import { create } from 'zustand';
import { DraggedState } from "@/utilities/DragAndDrop";
import AttributeCreation from "./components/AttributeCreation";

interface AttributeValue {
  [key: string]: string;
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

  useEffect(() => {
    switch (true) {
      case (tab == "standard"):
        setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", });
        break;
      case (tab == "random"):
        setInitialValues({ A: "🎲", B: "🎲", C: "🎲", D: "🎲", E: "🎲", F: "🎲", G: "14", });
        break;
    }
    setAttributes({ Strength: "0", Dexterity: "0", Constitution: "0", Intelligence: "0", Wisdom: "0", Charisma: "0", });
  }, [tab])

  return (
    <section className="flex flex-row items-center justify-center gap-4">
      <Card className="flex-1">
        <Tabs aria-label="Options" classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider", }} selectedKey={tab} onSelectionChange={setTab} >
          <Tab key="standard" title="Standard Array">
            <AttributeCreation />
          </Tab>
          <Tab key="random" title="Roll Dice">
            <AttributeCreation random />
          </Tab>
        </Tabs>
      </Card>
      <Description detail={detail} description={attributeDescription[detail]} />
    </section>
  );
}
