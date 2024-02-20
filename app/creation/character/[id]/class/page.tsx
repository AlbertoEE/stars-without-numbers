"use client";

import { Card, Tab, Tabs, Tooltip } from "@nextui-org/react";
import SplitDesign from "../../../components/SplitDesign";
import { useState } from "react";
import BenefitImage from "../background/components/tabs/commons/BenefitImage";
import { backgroundDefinitions } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";

export default function Page({ params }: { params: { id: string } }) {
    const [tab, setTab] = useState();
    const [tab2, setTab2] = useState();

    return (
        <SplitDesign
            leftChild={
                <div className="w-full h-full"><Tabs
                    key="a"
                    aria-label="Options"
                    className="bottom-64"
                    classNames={{
                        base: "w-full h-[5%]",
                        tabList: "w-full gap-6 relative rounded-none p-0 border-b border-divider",
                        panel: "p-0 h-[95%]"
                    }}
                    selectedKey={tab}
                    onSelectionChange={setTab}
                >
                    <Tab key="standard" title="Psyonic">

                    </Tab>
                    <Tab key="random" title="Warrior">
                        <div></div>
                    </Tab>
                    <Tab key="randosm" title="Expert">
                        <div></div>
                    </Tab>
                </Tabs></div>
            }
            rightChild={
                <div className="w-full h-full"><Tabs
                    key="a"
                    aria-label="Options"
                    classNames={{
                        base: "w-full h-[5%]",
                        tabList: "w-full gap-6 relative rounded-none p-0 border-b border-divider",
                        panel: "p-0 h-[95%]"
                    }}
                    selectedKey={tab2}
                    onSelectionChange={setTab2}
                >
                    <Tab key="standard" title="Psyonic">
                        <div className="w-full h-full flex flex-col items-center justify-evenly">
                            <Card className="flex flex-row items-center w-[90%] justify-around h-[15%]">
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        0
                                    </Card>
                                </Tooltip><Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        0
                                    </Card>
                                </Tooltip><Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        0
                                    </Card>
                                </Tooltip><Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        0
                                    </Card>
                                </Tooltip><Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Super Technique</div>
                                            <div className="text-tiny">The biopsion has mastered techniques of emergency
                                                tissue reinforcement and system stabilization. As an
                                                Instant action, they can Commit Effort for the scene to
                                                keep themself or a target they can touch active even at
                                                zero hit points. This technique must be used once every
                                                round on the target or they collapse at the end of the
                                                round.
                                            </div>
                                            <br />
                                            <div>
                                                If the target suffers hit point damage, the biopsion must Instantly Commit Effort for the scene or the
                                                target goes down immediately with a mortal wound. A
                                                Heavy weapon hit on a subject of this power or similar
                                                physical dismemberment will always kill a target, regardless of this technique.
                                            </div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        0
                                    </Card>
                                </Tooltip>
                            </Card>
                            <Card className="flex flex-row items-center w-[90%] justify-around h-[15%]">
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                            </Card>
                            <Card className="flex flex-row items-center w-[90%] justify-around h-[15%]">

                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                            </Card>
                            <Card className="flex flex-row items-center w-[90%] justify-around h-[15%]">

                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                            </Card>
                            <Card className="flex flex-row items-center w-[90%] justify-around h-[15%]">

                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                                <Tooltip
                                    delay={0}
                                    closeDelay={0}
                                    content={
                                        <div className="px-1 py-2 bg-black text-white w-64">
                                            <div className="text-small font-bold">Custom Content</div>
                                            <div className="text-tiny">This is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip contentThis is a custom tooltip content</div>
                                            <br />

                                        </div>
                                    }
                                >
                                    <Card className="flex flex-row items-center justify-center h-16 w-16" >
                                        <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
                                    </Card>
                                </Tooltip>
                            </Card>
                        </div>
                    </Tab>
                    <Tab key="random" title="Warrior">
                        <div></div>
                    </Tab>
                    <Tab key="randosm" title="Expert">
                        <div></div>
                    </Tab>
                    <Tab key="standardd" title="Psyonic">
                        <div></div>
                    </Tab>
                    <Tab key="randoma" title="Warrior">
                        <div></div>
                    </Tab>
                    <Tab key="randosmaa" title="Expert">
                        <div></div>
                    </Tab>
                </Tabs></div>
            }
        />
    );
}
