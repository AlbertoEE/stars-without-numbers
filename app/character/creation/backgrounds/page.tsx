"use client";

import SplitDesign from "../components/SplitDesign";
import BackgroundList from "./components/BackGroundList";
import BackgroundDetail from "./components/BackgroundDetail";

export default function Home() {

  return (
    <SplitDesign
      leftChild={<BackgroundList />}
      rightChild={<BackgroundDetail />} />
  );
}
