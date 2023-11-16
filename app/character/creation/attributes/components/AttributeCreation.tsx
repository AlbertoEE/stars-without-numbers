import { CardBody } from "@nextui-org/react";
import { handleSwap } from "@/utilities/DragAndDrop";
import AttributeAvailableValues from "./AttributeAvailableValues";
import AttributeScoreModifier from "./AttributeScoreModifier";
import { rollDice } from "@/utilities/Roll";
import { useStore } from "../state";

export default function AttributeCreation(props: {
    random?: boolean,
}) {
    const { initialValues, attributes, dragged, draggedOver, setInitialValues, setAttributes } = useStore();

    const handleSwapBetweenInitialAndAttributes = () => {
        handleSwap(dragged, draggedOver, "initial", "attributes", initialValues, attributes, setInitialValues, setAttributes)
    }

    const rollAndApply = (key: string) => {
        if (Number.isNaN(parseInt(initialValues[key]))) {
            let result = rollDice(3, 6);
            let initialValuesClone = { ...initialValues };
            initialValuesClone[key] = result;
            setInitialValues(initialValuesClone);
        }
    }

    return (
        <CardBody>
            <div className="flex flex-row items-center justify-center gap-4 pb-4">
                {Object.entries(initialValues).map(([key, value]) => (
                    <AttributeAvailableValues
                        value={value}
                        keyValue={key}
                        key={key}
                        onDragEnd={handleSwapBetweenInitialAndAttributes}
                        zoneName="initial"
                        {...(props.random ? { onClick: () => rollAndApply(key) } : null)} />

                ))}
            </div>
            <div>
                {Object.entries(attributes).map(([key, value]) => (
                    <AttributeScoreModifier
                        score={value}
                        keyValue={key}
                        key={key}
                        onDragEnd={handleSwapBetweenInitialAndAttributes}
                        zoneName="attributes" />
                ))}
            </div>
        </CardBody>
    )
}