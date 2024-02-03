import { handleSwap } from "@/utilities/DragAndDrop";
import { rollDice } from "@/utilities/Roll";
import { CardBody } from "@nextui-org/react";
import { useStoreBasicAttributes } from "../state";
import AttributeAvailableValues from "./AttributeAvailableValues";
import AttributeScoreModifierRow from "./AttributeScoreModifier";

export default function AttributeCreation(props: {
    random?: boolean,
}) {
    const { initialValues, chosenAttributes: attributes, dragged, draggedOver, setInitialValues, setChosenAttributes: setAttributes } = useStoreBasicAttributes();

    const handleSwapBetweenInitialAndAttributes = () => {
        handleSwap(dragged, draggedOver, "initial", "attributes", initialValues, attributes, setInitialValues, setAttributes)
    }

    const rollAndApply = (key: string) => {
        if (Number.isNaN(parseInt(initialValues[key]))) {
            let result = rollDice(3, 6);
            let initialValuesClone = { ...initialValues };
            initialValuesClone[key] = result.toString();
            setInitialValues(initialValuesClone);
        }
    }

    return (
        <CardBody className="h-full flex flex-col">
            <div className="flex flex-row items-center justify-center gap-4 pb-4 h-full flex-1">
                {Object.entries(initialValues).map(([key, value]) => (
                    <AttributeAvailableValues
                        value={value}
                        keyValue={key}
                        onDragEnd={handleSwapBetweenInitialAndAttributes}
                        zoneName="initial"
                        {...(props.random ? { onClick: () => rollAndApply(key) } : null)} />

                ))}
            </div>
            {Object.entries(attributes).map(([statName, value]) => (
                <AttributeScoreModifierRow
                    score={value}
                    statName={statName.toLowerCase()}
                    onDragEnd={handleSwapBetweenInitialAndAttributes}
                    zoneName="attributes" />
            ))}
        </CardBody>
    )
}