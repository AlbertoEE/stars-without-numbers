"use client";

import SplitDesign from "../../../components/SplitDesign";
import { useStoreFociState } from "../state";
import FocusDetail from "./FocusDetail";
import FocusList from "./FocusList";

export default function Page({ params }: { params: { id: string } }) {
  const { focusedFocus } = useStoreFociState();

  return (
    <SplitDesign
      leftChild={<FocusList />}
      rightChild={focusedFocus && <FocusDetail />}
    />
  );
}
