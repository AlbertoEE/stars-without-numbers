"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import Description from "./components/Description";
import { attributeDescription } from "@/data/data";
import { create } from 'zustand';
import { DraggedState } from "@/utilities/DragAndDrop";
import AttributeCreation from "./components/AttributeCreation";
import SplitDesign from "../components/SplitDesign";
import AttributeTabs from "./components/AttributeTabs";
import { useStore } from "./state";


export default function Home() {
  const { detail } = useStore(); 

  return (
    <SplitDesign 
      leftChild={<AttributeTabs />} 
      rightChild={<Description imgPath={`${detail}.svg`} title={detail} description={attributeDescription[detail]} />} />
  );
}
