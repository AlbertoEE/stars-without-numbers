"use client";

import { usePathname, useRouter } from "next/navigation";
import SplitDesign from "../../components/SplitDesign";
import SectionButton from "./components/SectionButton";

export default function Page() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <SplitDesign
      leftChild={
        <div className="p-5">
          <SectionButton path="attributes"/>

          <SectionButton path="backgrounds"/>

          <SectionButton path="skills"/>

          <SectionButton path="class"/>
        </div>
      }
      rightChild={<div>s</div>}
    />
  );
}
