"use client";

import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import ModalWarning from "@/app/creation/components/ModalWarning";
import { useStoreDefinitionDataState, useStoreFociState } from "../state";
import { FocusDefinition } from "@/models/FocusDefinitionModels";
import Filter from "../components/list/Filter";
import { Key } from "@react-types/shared";
import List from "../components/list/List";


export default function App() {
  const { focusedFocus, setFocusedFocus } = useStoreFociState();

  const [filterFocus, setFilterFocus] = useState<string>("")
  const [filterBenefitSkill, setFilterBenefitSkill] = useState<Iterable<Key>>([])
  const [proposedBackground, setProposedBackground] = useState<FocusDefinition>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    focusDefinitionList,
    skillDefinitionList
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

  function onAcceptModal() {
    setFocusedFocus(proposedBackground!)
    onClose()
  }

  function handleOnFocusPress(backgroundDefinition: FocusDefinition) {
    setProposedBackground(backgroundDefinition)
    onOpen()
  }

  return (
    <div className="h-full w-full flex flex-col p-5">
      <ModalWarning
        isOpen={isOpen}
        onClose={onClose}
        onAccept={onAcceptModal}
        warning={"If you change the background you will lose your progress. Are you sure?"}
      />
      <Filter
        inputState={filterFocus}
        setInputState={setFilterFocus}
        selectKeysState={filterBenefitSkill}
        setSelectKeysState={setFilterBenefitSkill}
        selectOptionList={skillDefinitionList.map(e => e.name)}
        imageFolder={"/imgs/skills"}
      />
      <List
        items={items}
        focusedItemName={focusedFocus?.name}
        handleOnItemPress={handleOnFocusPress}
        imageFolder={"/imgs/foci"}
      />
    </div>
  );
}
