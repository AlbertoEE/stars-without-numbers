"use client";

import SplitDesign from "../../../components/SplitDesign";
import BackgroundList from "./components/main/BackGroundList";
import BackgroundDetail from "./components/main/BackgroundDetail";

export default function Page({ params }: { params: { id: string } }) {

  return (
    <SplitDesign
      leftChild={<BackgroundList />}
      rightChild={<BackgroundDetail characterId={params.id}/>} />
  );
}
