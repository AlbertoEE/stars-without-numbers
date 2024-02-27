import { Card, CardBody, Image } from "@nextui-org/react"

export default function List<T>(props: {
    items: T[],
    focusedItemName?: string,
    handleOnItemPress: (item: T) => void,
    imageFolder: string,
}) {
    return <div className="overflow-y-auto h-90% w-ful flex flex-wrap justify-evenly gap-3">
        {props.items.map((item) => (
            <Card
                className={`w-[45%] h-fit ${item.name == props.focusedItemName && 'bg-blue-500'}`}
                isPressable={item.name != props.focusedItemName}
                onPress={() => props.handleOnItemPress(item)}
            >
                <CardBody className="text-center">
                    <div className="flex flex-row">
                        <Image
                            className="mx-4 my-0"
                            src={`${props.imageFolder}/${item.name}.svg`}
                            alt="me"
                            width="24"
                            height="24"
                        />
                        <div>{item.name.toUpperCase()}</div>
                    </div>
                </CardBody>
            </Card>
        ))}
    </div>
}