"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useStore } from "../state";
import AttributeCreation from "./AttributeCreation";


export default function AttributeTabs() {
  const [tab, setTab] = useState("standard");
  const { detail, setInitialValues, setAttributes } = useStore();

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
      <Tabs key="a" aria-label="Options" classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider", }} selectedKey={tab} onSelectionChange={setTab} >
        <Tab key="standard" title="Standard Array">
          <AttributeCreation />
        </Tab>
        <Tab key="random" title="Roll Dice">
          <AttributeCreation random />
        </Tab>
      </Tabs>
  );
}
