import { backgroundDefinitions } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository"
import { Tab, Tabs, Divider, Card, Tooltip } from "@nextui-org/react"
import BenefitImage from "../../../../background/components/tabs/commons/BenefitImage"
import { useState } from "react"

export default function PsyquicBenefits(props: {}) {
  const [tab2, setTab2] = useState()

  return (
    <Tabs
      key="b"
      aria-label="Options"
      classNames={{
        base: "w-full h-[5%]",
        tabList:
          "w-full gap-6 relative rounded-none p-0 border-b border-divider",
        panel: "p-0 h-[95%]",
      }}
      selectedKey={tab2}
      onSelectionChange={setTab2}
    >
      <Tab key="standard" title="Psyonic">
        <div className="w-full h-full flex flex-col items-center justify-evenly p-5">
          <div className="self-start flex flex-row items-center w-full">
            <h1 className="mr-4">PSYCHIC SUCCOR</h1>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-row items-center w-[90%] justify-around h-[15%] gap-6">
            <div className="border-2 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              C
            </div>
            <Card className="flex flex-row items-center w-full justify-around h-full">
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  0
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  1
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  2
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  3
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={""}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  4
                </Card>
              </Tooltip>
            </Card>
          </div>
          <div className="self-start flex flex-row items-center w-full">
            <h1 className="mr-4">TECHNIQUES</h1>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-row items-center w-[90%] justify-around h-[15%] gap-6">
            <div className="border-2 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              1
            </div>
            <Card className="flex flex-row items-center w-full justify-around h-full">
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
            </Card>
          </div>
          <div className="flex flex-row items-center w-[90%] justify-around h-[15%] gap-6">
            <div className="border-2 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              2
            </div>
            <Card className="flex flex-row items-center w-full justify-around h-full">
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
            </Card>
          </div>
          <div className="flex flex-row items-center w-[90%] justify-around h-[15%] gap-6">
            <div className="border-2 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              3
            </div>
            <Card className="flex flex-row items-center w-full justify-around h-full">
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
            </Card>
          </div>
          <div className="flex flex-row items-center w-[90%] justify-around h-[15%] gap-6">
            <div className="border-2 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              4
            </div>
            <Card className="flex flex-row items-center w-full justify-around h-full">
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
              <Tooltip delay={0} closeDelay={0} content={"Super Technique"}>
                <Card className="flex flex-row items-center justify-center h-14 w-14">
                  <BenefitImage
                    benefit={backgroundDefinitions[0].benefits.growth[0]}
                  />
                </Card>
              </Tooltip>
            </Card>
          </div>
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
    </Tabs>
  )
}
