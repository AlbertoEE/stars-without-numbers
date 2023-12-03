import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { Key } from "@react-types/shared";
import ChooseSkill from "./ChooseSkill";

export default function SkillSelection() {
    const [tab, setTab] = useState<Key>("skillsChoose")

    return (
        <Tabs
            key="a"
            aria-label="Options"
            classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider" }}
            selectedKey={tab}
            onSelectionChange={setTab}
        >
            <Tab key="skillsChoose" title="Choose">
                <ChooseSkill />
            </Tab>
            <Tab key="skillsRandom" title="Random">
            </Tab>
        </Tabs>
    )
}