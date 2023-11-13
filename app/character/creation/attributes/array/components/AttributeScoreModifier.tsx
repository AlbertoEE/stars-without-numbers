import { Card, CardBody } from "@nextui-org/card";

export default function AttributeScoreModifier(props: {
    score: string,
    modifier: string,
    key_value: string,
    onDragStart: () => void,
    onDragEnter: () => void,
    onDragEnd: () => void,
    onMouseOver: () => void,
}) {

    const color = () => {
        switch (true) {
            case (props.modifier == "-2"):
                return "bg-red-950"
            case (props.modifier == "-1"):
                return "bg-orange-950"
            case (props.modifier == "0"):
                return "bg-cyan-800"
            case (props.modifier == "1"):
                return "bg-green-800"
            case (props.modifier == "2"):
                return "bg-yellow-400"
        }
    }

    return (
        <Card
            onMouseOver={props.onMouseOver}
            className="mb-2"
            key={props.key_value}
            onDragEnter={() => props.onDragEnter()}
        >
            <CardBody className="flex flex-row items-center justify-center">
                <table className="flex-1">
                    <tr>
                        <td className="w-1/2">
                            <div>{props.key_value}</div>
                        </td>
                        <td className="w-1/2">
                            <div className="flex flex-row justify-around">
                                <Card
                                    className="w-16 h-16"
                                    draggable
                                    onDragStart={() =>
                                        props.onDragStart()
                                    }
                                    onDragEnter={() =>
                                        props.onDragEnter()
                                    }
                                    onDragEnd={props.onDragEnd}
                                >
                                    <CardBody className="flex items-center justify-center text-center px-3 py-1">
                                        {props.score}
                                    </CardBody>
                                </Card>
                            </div>
                        </td>
                        <td>
                            <div className="mr-6">MOD</div>
                        </td>
                        <td>
                            <Card className={`w-16 h-16 ${color()}`}>
                                <CardBody className="flex items-center justify-center text-center px-3 py-1">
                                    {props.modifier}
                                </CardBody>
                            </Card>
                        </td>
                    </tr>
                </table>
            </CardBody>
        </Card>
    )
}