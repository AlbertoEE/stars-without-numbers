import SwnCard from "@/app/components/SwnCard"
import {
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react"
import { type ReactElement } from "react"

export default function List<T>(props: {
  items: T[]
  focusedItemName?: string
  handleOnItemPress: (item: T) => void
  imageFolder: string
  header?: (item: T) => ReactElement
  body?: (item: T) => ReactElement
  footer?: (item: T) => ReactElement
}): ReactElement {
  return (
    <div className="overflow-y-auto h-90% w-full flex flex-wrap justify-evenly gap-3 p-4">
      {props.items.map(
        (item): ReactElement => (
          <SwnCard
            cardInCard
            className={`w-full ${item.name === props.focusedItemName && "bg-secondary"}`}
            isPressable={item.name !== props.focusedItemName}
            onPress={(): void => {
              props.handleOnItemPress(item)
            }}
          >
            <CardHeader className={props.header === undefined ? "hidden" : ""}>
              {props.header?.(item)}
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-start w-full">
                <Image
                  className="mx-4 my-0"
                  src={`${props.imageFolder}/${item.name.replace(" ", "-")}.svg`}
                  alt="me"
                  width="24"
                  height="24"
                />
                <div>{item.name.toUpperCase()}</div>
                {props.body?.(item)}
              </div>
            </CardBody>
            <CardFooter className={props.footer === undefined ? "hidden" : ""}>
              {props.footer?.(item)}
            </CardFooter>
          </SwnCard>
        ),
      )}
    </div>
  )
}
