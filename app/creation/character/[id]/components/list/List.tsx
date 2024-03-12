import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { type ReactElement } from "react"

export default function List<T>(props: {
  items: T[]
  focusedItemName?: string
  handleOnItemPress: (item: T) => void
  imageFolder: string
}): ReactElement {
  return (
    <div className="overflow-y-auto h-90% w-ful flex flex-wrap justify-evenly gap-3">
      {props.items.map(
        (item): ReactElement => (
          <Card
            className={`w-[45%] h-fit ${item.name === props.focusedItemName && "bg-blue-500"}`}
            isPressable={item.name !== props.focusedItemName}
            onPress={(): void => {
              props.handleOnItemPress(item)
            }}
          >
            <CardBody className="text-center">
              <div className="flex flex-row">
                <Image
                  className="mx-4 my-0"
                  src={`${props.imageFolder}/${item.name.replace(" ", "-")}.svg`}
                  alt="me"
                  width="24"
                  height="24"
                />
                <div>{item.name.toUpperCase()}</div>
              </div>
            </CardBody>
          </Card>
        ),
      )}
    </div>
  )
}
