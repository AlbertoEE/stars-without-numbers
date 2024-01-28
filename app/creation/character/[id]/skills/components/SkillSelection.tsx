import { Tab, Tabs } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState } from "react";
import ChooseSkill from "./ChooseSkill";
import RandomSKill from "./RandomSkill";

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
                <RandomSKill />
            </Tab>
        </Tabs>
    )
}