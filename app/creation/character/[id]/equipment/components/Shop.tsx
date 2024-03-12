import { Chip, Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useStoreDefinitionDataState } from "../../state"
import CoinIcon from "@/public/imgs/equipment/coin.svg"
import WeightIcon from "@/public/imgs/equipment/weight.svg"

export default function Shop() {
    
    const { equipmentDefinition } = useStoreDefinitionDataState()

    return (
        <div className="flex flex-wrap justify-evenly w-[95%] gap-1">
            {equipmentDefinition.armors.map((item) => (
                <Card className="w-full" isPressable={true}>
                    <CardHeader>
                        <div className="flex justify-between w-full">
                            <div className="flex align-middle gap-4">
                                <CoinIcon className="fill-white" width="32" height="32"/>
                                <span className="self-center">{item.name}</span>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Chip variant="bordered" endContent={
                                    <WeightIcon className="fill-current" height="14" width="14"/>
                                }>{item.encumbrance}</Chip>
                                <Chip variant="bordered"  endContent={
                                    <CoinIcon className="fill-current" height="19" width="19"/>
                                }>{item.cost}</Chip>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Chip>1d8</Chip>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}