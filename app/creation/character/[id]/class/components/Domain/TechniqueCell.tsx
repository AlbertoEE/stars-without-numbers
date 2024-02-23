import { backgroundDefinitions } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import { Tooltip, Card } from "@nextui-org/react";
import BenefitImage from "../../../background/components/tabs/commons/BenefitImage";

export default function TechniqueCell(props: {
    
}) {
    return (
        <Tooltip
            delay={0}
            closeDelay={0}
            content={"Super Technique"}
        >
            <Card className="flex flex-row items-center justify-center h-14 w-14" >
                <BenefitImage benefit={backgroundDefinitions[0].benefits.growth[0]} />
            </Card>
        </Tooltip>
    )
}