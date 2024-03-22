import { CardBody, CardHeader, Divider } from "@nextui-org/react"
import { type ReactElement } from "react"
import SwnCard from "../SwnCard"

export default function InventorySection(props: {
  id: string
  title: string
  children: ReactElement[]
}): ReactElement {
  return (
    <SwnCard
      cardInCard
      radius="none"
      id={props.id}
      className="inventory-section mt-7 scroll-mt-7"
    >
      <CardHeader className="justify-center">
        <h1>{props.title.toUpperCase()}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        {props.children.length > 0 ? (
          <div className="flex flex-wrap justify-evenly gap-1">
            {props.children}
          </div>
        ) : (
          <SwnCard className="h-[120px]"></SwnCard>
        )}
      </CardBody>
    </SwnCard>
  )
}
