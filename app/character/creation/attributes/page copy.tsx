"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useState, useRef } from "react";
import AttributeCard from "./components/AttributeCard";
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))

export default function Home() {
  const [values, setValues] = useState([
    "Rodrigo",
    "Alberto",
    "Angeles",
    "Raquel",
    "Juan",
    "Juanma",
  ]);

  const dragValue = useRef<number>(0);
  const dragOverValue = useRef<number>(0);

  function handleSort() {
    const valuesClone = [...values];
    const temp = valuesClone[dragValue.current];
    valuesClone[dragValue.current] = valuesClone[dragOverValue.current];
    valuesClone[dragOverValue.current] = temp;
    setValues(valuesClone);
  }

  const bears = useBearStore((state) => state.bears)

  return (
    <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
      {bears.map((element) => )}
      <Card className="flex-1">
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </section>
  );
}

let attributes = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

function x() {
  return(
    <Card className="flex-1">
    {values.map((value, index) => (
      <div
        draggable
        onDragStart={() => (dragValue.current = index)}
        onDragEnter={() => (dragOverValue.current = index)}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault()}
        className="relative flex space-x-3 border rounded p-2"
      >
        <p>{value}</p>
      </div>
    ))}
    <AttributeCard name="Strength" value={2} />
  </Card>
  );
}
