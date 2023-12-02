import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { useStore } from "../state"
import BackgroundDetailSection from "./BackgroundDetailSection"
import { Divider, Image, Tab, Tabs } from "@nextui-org/react"
import { useState } from "react";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import useSWR from "swr";

export default function BackgroundDetail() {
    const { detailBackground } = useStore()

    const [tab, setTab] = useState("backgroundDescription")

    const backgroundDefinitionRepository: BackgroundDefinitionRepository = new InMemoryBackgroundDefinitionRepository()
    const { data: backgrounds } = useSWR<BackgroundDefinition[]>("testBackgroundDefinitionDetail", backgroundDefinitionRepository.getBackgrounds)

    if(!backgrounds) return;

    let background: BackgroundDefinition | undefined = backgrounds.find(background => background.name == detailBackground)

    if (background == undefined) return

    return (
        <Tabs
            key="a"
            aria-label="Options"
            classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider" }}
            selectedKey={tab}
            onSelectionChange={setTab}
        >
            <Tab key="backgroundDescription" title="Description">
                <div className="flex flex-row">
                    <Image className="ml-4 mb-4" src={`/imgs/backgrounds/${background.name}.svg`} alt="me" width="64" height="64" />
                    <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">{background.name}</h1>
                </div>
                <hr />
                <div className="px-3 py-4 whitespace-pre-line">{background.description}</div>
            </Tab>
            <Tab key="backgroundSkills" title="Skills">
                <div className="m-2">
                    <div className="flex flex-row">
                        <Image className="ml-4 mb-4" src={`/imgs/backgrounds/${background.name}.svg`} alt="me" width="64" height="64" />
                        <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">{background.name}</h1>
                    </div>
                    <div className="flex flex-row">
                        <div><BackgroundDetailSection rows={1} columns={3} skills={background.benefits.free.map(e => e.name)} title="Free Skill" /></div>
                        <div><BackgroundDetailSection rows={3} columns={1} skills={background.benefits.quick.map(e => e.name)} title="Predifined" /></div>
                    </div>
                    <BackgroundDetailSection rows={3} columns={3} skills={background.benefits.learning.map(e => e.name)} title="Choose" />
                    <div className="my-4">
                        <h1 className="font-orbitron font-bold uppercase tracking-widest text-1xl p-4">Random</h1>
                        <hr />
                        <BackgroundDetailSection rows={3} columns={3} skills={background.benefits.learning.map(e => e.name)} thead="Learning" />
                        <BackgroundDetailSection rows={2} columns={3} skills={background.benefits.growth.map(e => e.name)} thead="Growth" />
                    </div>
                </div>
            </Tab>
        </Tabs>

    )
}