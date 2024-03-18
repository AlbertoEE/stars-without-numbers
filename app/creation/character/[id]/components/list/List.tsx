import SwnButton from "@/app/components/SwnButton"
import { Button, Card, CardBody, Image } from "@nextui-org/react"
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
          <SwnButton
            className={`w-[45%] ${item.name === props.focusedItemName && "bg-secondary"}`}
            disabled={item.name === props.focusedItemName}
            onPress={(): void => {
              props.handleOnItemPress(item)
            }}
            
          >
            <div className="flex flex-row justify-start w-full">
              <Image
                className="mx-4 my-0"
                src={`${props.imageFolder}/${item.name.replace(" ", "-")}.svg`}
                alt="me"
                width="24"
                height="24"
              />
              <div>{item.name.toUpperCase()}</div>
            </div>
          </SwnButton>
        ),
      )}
    </div>
  )
}
