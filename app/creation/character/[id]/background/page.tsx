"use client"

import SplitDesign from "../../../components/SplitDesign"
import { useStoreBackgroundState } from "../state"
import BackgroundDetail from "./components/BackgroundDetail"
import BackgroundList from "./components/BackGroundList"

export default function Page({ params }: { params: { id: string } }) {
  const { focusedBackground } = useStoreBackgroundState()

  return (
    <SplitDesign
      leftChild={<BackgroundList />}
      rightChild={
        focusedBackground && <BackgroundDetail characterId={params.id} />
      }
    />
  )
}
