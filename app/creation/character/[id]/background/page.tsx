"use client";

import SplitDesign from "../../../components/SplitDesign";
import { useStoreBackgroundState } from "../state";
import BackgroundList from "./components/main/BackGroundList";
import BackgroundDetail from "./components/main/BackgroundDetail";

export default function Page({ params }: { params: { id: string } }) {
  const {focusedBackground} = useStoreBackgroundState()

  return (
    <SplitDesign
      leftChild={<BackgroundList />}
      rightChild={focusedBackground && <BackgroundDetail characterId={params.id}/>} />
  );
}
