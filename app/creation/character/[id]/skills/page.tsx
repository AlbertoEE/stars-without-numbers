"use client";

import SplitDesign from "../../../components/SplitDesign";
import SkillDetail from "./components/SkillDetail";
import SkillSelection from "./components/SkillSelection";

export default function Page() {

  return (
    <SplitDesign
      leftChild={<SkillSelection />}
      rightChild={<SkillDetail />} />
  );
}
