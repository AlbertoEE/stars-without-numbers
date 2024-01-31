"use client";

import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import {
  Card, CardBody,
  Image,
  Input,
  Selection
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { useStore } from "../../state";
import React from "react";
import { useGlobalStore } from "../../../state";

export default function App() {
  const {
    filterBackground,
    filterChooseSkill,
    filterRandomSkill,
    focusedBackground: detailBackground,
    setChosenBenefits,
    setFilterBackground,
    setFilterChooseSkill,
    setFilterRandomSkill,
    setFocusedBackground: setDetailBackground,
  } = useStore();

  const {
    skillDefinitionList,
    backgroundDefinitionList,
  } = useGlobalStore()

  let items = React.useMemo(() => {
    if (!backgroundDefinitionList) return [];
    let filteredValues = [...backgroundDefinitionList];
    console.log(filterBackground);

    if (filterBackground != "") {
      filteredValues = filteredValues.filter((background) =>
        background.name.startsWith(filterBackground)
      );
    }

    if (Array.from(filterChooseSkill).length > 0) {
      filteredValues = filteredValues.filter(
        (background: BackgroundDefinition) =>
          Array.from(filterChooseSkill).every((filter: string) =>
            background.benefits.learning.map((e) => e.name).includes(filter)
          )
      );
    }

    return filteredValues;
  }, [filterBackground, filterChooseSkill, filterRandomSkill, backgroundDefinitionList]);

  function handleOnBackgroundPress(backgroundDefinition: BackgroundDefinition) {
    setChosenBenefits([{name: backgroundDefinition.benefits.free.name, type: "skill"}]);
    setDetailBackground(backgroundDefinition)
  }

  if (!backgroundDefinitionList || !skillDefinitionList) return <></>;

  return (
    <div className="h-full">
      <div className="h-[13%] flex flex-row py-5 justify-center space-between gap-3 sticky top-0 z-50">
        <Input
          label="Background"
          placeholder="Filter by background"
          className="max-w-[30%]"
          value={filterBackground}
          onValueChange={setFilterBackground}
        />
        <Select
          label="Choose filter"
          placeholder="Select skills"
          selectionMode="multiple"
          selectedKeys={filterChooseSkill}
          className="max-w-[30%]"
          onSelectionChange={(keys: Selection) =>
            setFilterChooseSkill(Array.from(keys).map((key) => key.toString()))
          }
        >
          {skillDefinitionList.map((skill) => (
            <SelectItem key={skill.name} textValue={skill.name}>
              <div className="flex flex-row">
                <Image
                  loading="eager"
                  className="mx-4 my-0 flex-1"
                  src={`/imgs/skills/${skill.name}.svg`}
                  alt="me"
                  width="24"
                  height="24"
                />
                <div className="flex-1">{skill.name}</div>
              </div>
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Random filter"
          placeholder="Select skills"
          selectionMode="multiple"
          selectedKeys={filterRandomSkill}
          className="max-w-[30%]"
          onSelectionChange={(keys: Selection) =>
            setFilterRandomSkill(Array.from(keys).map((key) => key.toString()))
          }
        >
          {Object.entries(skillDefinitionList).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="h-[87%] overflow-y-auto px-5">
        {items.map((item) => (
          <Card
            className={`mb-2 w-full ${item.name == detailBackground?.name && 'bg-blue-500'}`}
            isPressable={item.name != detailBackground?.name}
            onPress={() => handleOnBackgroundPress(item)}
            key={item.name}
          >
            <CardBody className="text-center">
              <div className="flex flex-row">
                <Image
                  className="mx-4 my-0"
                  src={`/imgs/backgrounds/${item.name}.svg`}
                  alt="me"
                  width="24"
                  height="24"
                />
                <div>{item.name.toUpperCase()}</div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
