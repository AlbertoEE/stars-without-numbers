"use client";

import { BackgroundBenefitType, BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import {
  Card, CardBody,
  Image,
  Input,
  Selection,
  useDisclosure
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";
import { useStoreBackgroundState, useStoreDefinitionDataState } from "../../../state";
import ModalWarning from "@/app/creation/components/ModalWarning";

export default function App() {
  const {
    filterBackground,
    filterChooseSkill,
    focusedBackground,
    setChosenBenefits,
    setFilterBackground,
    setFilterChooseSkill,
    setFocusedBackground,
  } = useStoreBackgroundState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [proposedBackground, setProposedBackground] = useState<BackgroundDefinition>();

  const {
    skillDefinitionList,
    backgroundDefinitionList,
  } = useStoreDefinitionDataState()

  let items = React.useMemo(() => {
    if (!backgroundDefinitionList) return [];
    let filteredValues = [...backgroundDefinitionList];

    if (filterBackground != "") {
      filteredValues = filteredValues.filter((background) =>
        background.name.startsWith(filterBackground.toLowerCase())
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
  }, [filterBackground, filterChooseSkill, backgroundDefinitionList]);

  function handleOnBackgroundPress(backgroundDefinition: BackgroundDefinition) {
    setProposedBackground(backgroundDefinition)
    onOpen()
  }

  function onAcceptModal() {
    setChosenBenefits(
      [
        {
          name: proposedBackground!.benefits.free.name,
          type: BackgroundBenefitType.skill,
          subtype: "specific"
        }
      ]);
    setFocusedBackground(proposedBackground!)
    onClose()
  }

  if (!backgroundDefinitionList || !skillDefinitionList) return <></>;

  return (
    <div className="h-full w-full flex flex-col">
      <ModalWarning
        isOpen={isOpen}
        onClose={onClose}
        onAccept={onAcceptModal}
        warning={"If you change the background you will lose your progress. Are you sure?"}
      />
      <div className="flex flex-row justify-center space-between gap-3 p-5">
        <Input
          label="Background"
          placeholder="Filter by background"
          className="max-w-[50%]"
          value={filterBackground}
          onValueChange={setFilterBackground}
        />
        <Select
          label="Choose filter"
          placeholder="Select skills"
          selectionMode="multiple"
          selectedKeys={filterChooseSkill}
          className="max-w-[50%]"
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
      </div>
      <div className="overflow-y-auto px-5 pb-5 flex-1">
        {items.map((item) => (
          <Card
            className={`mb-2 w-full ${item.name == focusedBackground?.name && 'bg-blue-500'}`}
            isPressable={item.name != focusedBackground?.name}
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
