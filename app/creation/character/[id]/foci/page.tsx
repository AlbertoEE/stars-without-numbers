"use client"

import { type ReactElement } from "react"
import SplitDesign from "../../../components/SplitDesign"
import { useStoreFociState } from "../state"
import FocusDetail from "./FocusDetail/FocusDetail"
import FocusList from "./FocusList"

export default function Page({
  params,
}: {
  params: { id: string }
}): ReactElement {
  const { focusedFocus } = useStoreFociState()

  return (
    <SplitDesign
      leftChild={<FocusList />}
      rightChild={focusedFocus != null && <FocusDetail />}
    />
  )
}
