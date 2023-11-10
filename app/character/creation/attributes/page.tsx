"use client";

import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";

interface AttributeValue {
  [key: string]: string;
}

interface DraggedState {
  from: string;
  value: string;
  key: string;
}

const attributeScoreModifier = {
  0: -2,
  1: -2,
  3: -2,
  4: -1,
  5: -1,
  6: -1,
  7: -1,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 2,
  19: 2,
  20: 2,
};

const attributeDescription = {
  Strength: "0",
  Dexterity: "0",
  Constitution: "0",
  Intelligence: "0",
  Wisdom: "0",
  Charisma: "0",
}

export default function Home() {
  const [initialValues, setInitialValues] = useState<AttributeValue>({
    A: "14",
    B: "12",
    C: "11",
    D: "10",
    E: "9",
    F: "7",
  });

  const [attributes, setAttributes] = useState<AttributeValue>({
    Strength: "0",
    Dexterity: "0",
    Constitution: "0",
    Intelligence: "0",
    Wisdom: "0",
    Charisma: "0",
  });

  const [draggedValue, setDraggedValue] = useState<DraggedState>({
    from: "",
    value: "",
    key: "",
  });
  const [draggedOverValue, setDraggedOverValue] = useState<DraggedState>({
    from: "",
    value: "",
    key: "",
  });

  const handleSort = () => {
    let initialValuesClone = { ...initialValues };
    let attributesClone = { ...attributes };

    switch (true) {
      case draggedValue.from === "initial" &&
        draggedOverValue.from === "initial":
        swapValues(initialValuesClone, draggedValue.key, draggedOverValue.key);
        setInitialValues(initialValuesClone);
        break;
      case draggedValue.from === "initial" &&
        draggedOverValue.from === "attributes":
        swapValuesBetweenObjects(
          initialValuesClone,
          attributesClone,
          draggedValue.key,
          draggedOverValue.key
        );
        setInitialValues(initialValuesClone);
        setAttributes(attributesClone);
        break;
      case draggedValue.from === "attributes" &&
        draggedOverValue.from === "attributes":
        swapValues(attributesClone, draggedValue.key, draggedOverValue.key);
        setAttributes(attributesClone);
        break;
      case draggedValue.from === "attributes" &&
        draggedOverValue.from === "initial":
        swapValuesBetweenObjects(
          attributesClone,
          initialValuesClone,
          draggedValue.key,
          draggedOverValue.key
        );
        setInitialValues(initialValuesClone);
        setAttributes(attributesClone);
        break;
    }
  };

  const swapValues = (obj: AttributeValue, key1: string, key2: string) => {
    const temp = obj[key1];
    obj[key1] = obj[key2];
    obj[key2] = temp;
  };

  const swapValuesBetweenObjects = (
    obj1: AttributeValue,
    obj2: AttributeValue,
    key1: string,
    key2: string
  ) => {
    const temp = obj1[key1];
    obj1[key1] = obj2[key2];
    obj2[key2] = temp;
  };

  const onDragStart = (from: string, value: string, key: string) => {
    setDraggedValue({ from, value, key });
  };

  const onDragEnter = (from: string, value: string, key: string) => {
    setDraggedOverValue({ from, value, key });
  };

  return (
    <section className="flex flex-row items-center justify-center gap-4">
      <Card className="flex-1">
        <CardBody>
          <div className="flex flex-row items-center justify-center gap-4 pb-4">
            {Object.entries(initialValues).map(([key, value]) => (
              <Card
                className="w-16 h-16"
                key={key}
                draggable
                onDragStart={() => onDragStart("initial", value, key)}
                onDragEnter={() => onDragEnter("initial", value, key)}
                onDragEnd={handleSort}
              >
                <CardBody className="text-center">{value}</CardBody>
              </Card>
            ))}
          </div>
          <div>
            {Object.entries(attributes).map(([key, value]) => (
              <Card
                onMouseOver={() => console.log("")}
                className="mb-2"
                key={key}
                onDragEnter={() => onDragEnter("attributes", value, key)}
              >
                <CardBody className="flex flex-row items-center justify-center">
                  <table className="flex-1">
                    <tr>
                      <td className="w-1/2">
                        <div>{key}</div>
                      </td>
                      <td className="w-1/2">
                        <div className="flex flex-row justify-around">
                          <Card
                            className="w-16 h-16"
                            draggable
                            onDragStart={() =>
                              onDragStart("attributes", value, key)
                            }
                            onDragEnter={() =>
                              onDragEnter("attributes", value, key)
                            }
                            onDragEnd={handleSort}
                          >
                            <CardBody className="flex items-center justify-center text-center px-3 py-1">
                              {value}
                            </CardBody>
                          </Card>
                          <Card className="w-16 h-16">
                            <CardBody className="flex items-center justify-center text-center px-3 py-1">
                              {attributeScoreModifier[value]}
                            </CardBody>
                          </Card>
                        </div>
                      </td>
                    </tr>
                  </table>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="flex-1">
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </section>
  );
}
