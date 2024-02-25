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
import ModalWarning from "@/app/creation/components/ModalWarning";
import { useStoreDefinitionDataState, useStoreFociState } from "../state";
import { FocusDefinition } from "@/models/FocusDefinitionModels";

export default function App() {
  const {
    filterFocus,
    filterBenefitSkill,
    focusedFocus,
    setFilterFocus,
    setFilterBenefitSkill,
    setFocusedFocus,
  } = useStoreFociState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [proposedBackground, setProposedBackground] = useState<FocusDefinition>();

  const {
    focusDefinitionList
  } = useStoreDefinitionDataState()

  let items = React.useMemo(() => {
    if (!focusDefinitionList) return [];
    let filteredValues = [...focusDefinitionList];

    if (filterFocus != "") {
      filteredValues = filteredValues.filter((background) =>
        background.name.startsWith(filterFocus.toLowerCase())
      );
    }

    if (filterBenefitSkill.length > 0) {
      filteredValues = filteredValues
        .filter((focus: FocusDefinition) =>
          filterBenefitSkill
            .every((filter: string) =>
              focus.levels
                .filter(focusLevel => focusLevel.skillBenefitOptionList)
                .map(focusLevel => focusLevel.skillBenefitOptionList)
                .flat()
                .includes(filter)
            )
        );
    }

    return filteredValues;
  }, [filterFocus, filterBenefitSkill, focusDefinitionList]);

  if (!focusDefinitionList) return <></>;

  return (
    <div className="h-full w-full flex flex-col"> 

      <div className="flex flex-row justify-center space-between gap-3 p-5">
        <Input
          label="Background"
          placeholder="Filter by background"
          className="max-w-[50%]"
          value={filterFocus}
          onValueChange={setFilterFocus}
        />
        <Select
          label="Choose filter"
          placeholder="Select skills"
          selectionMode="multiple"
          selectedKeys={filterBenefitSkill}
          className="max-w-[50%]"
          onSelectionChange={(keys: Selection) =>
            setfilterBenefitSkill(Array.from(keys).map((key) => key.toString()))
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
