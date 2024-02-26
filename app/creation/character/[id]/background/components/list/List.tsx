import { Card, CardBody } from "@nextui-org/react"

export default function List(props: {
    items: any[]
}) {
    return <div className="overflow-y-auto h-90% w-ful flex flex-wrap justify-evenly gap-3">
        {props.items.map((item) => (
            <Card
                className={`w-[45%] h-fit ${item.name == focusedBackground?.name && 'bg-blue-500'}`}
                isPressable={item.name != focusedBackground?.name}
                onPress={() => handleOnBackgroundPress(item)}
            >
                <CardBody className="text-center">
                    <div className="flex flex-row">
                        <Image
                            className="mx-4 my-0"
                            src={`/imgs/backgrounds/${item.name}.svg`}
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