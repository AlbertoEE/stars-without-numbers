import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { type ReactElement } from "react";

export default function InventorySection(props: {
    id: string,
    title: string,
    children: ReactElement[],
}): ReactElement {
    return (
        <Card radius="none" id={props.id} className="inventory-section mt-7 scroll-mt-7">
            <CardHeader className="justify-center"><h1>{props.title.toUpperCase()}</h1></CardHeader>
            <Divider />
            <CardBody>
                <div className="flex flex-wrap justify-evenly gap-1">
                    { props.children }
                </div>
            </CardBody>
        </Card>
    )
}