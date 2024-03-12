"use client"

import ModalWarning from "@/app/creation/components/ModalWarning"
import { type FocusDefinition } from "@/models/FocusDefinitionModels"
import { useDisclosure } from "@nextui-org/react"
import { type Key } from "@react-types/shared"
import React, { type ReactElement, useState } from "react"
import Filter from "../components/list/Filter"
import List from "../components/list/List"
import { useStoreDefinitionDataState, useStoreFociState } from "../state"
import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"

export default function App(): ReactElement {
  const { focusedFocus, setFocusedFocus } = useStoreFociState()

  const [filterFocus, setFilterFocus] = useState<string>("")
  const [filterBenefitSkill, setFilterBenefitSkill] = useState<Iterable<Key>>(
    [],
  )
  const [proposedBackground, setProposedBackground] =
    useState<FocusDefinition>()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { focusDefinitionList, skillDefinitionList } =
    useStoreDefinitionDataState()

  const items = React.useMemo((): FocusDefinition[] => {
    let filteredValues = [...focusDefinitionList]

    if (filterFocus !== "") {
      filteredValues = filteredValues.filter((background): boolean =>
        background.name.startsWith(filterFocus.toLowerCase()),
      )
    }

    filteredValues =
      filterBenefitSkill.length > 0 &&
      filteredValues.filter((focus: FocusDefinition): boolean =>
        filterBenefitSkill.every((filter: string): boolean =>
          focus.levels
            .filter((focusLevel): boolean => focusLevel.skillBenefitOptionList)
            .map(
              (focusLevel): string[] | undefined =>
                focusLevel.skillBenefitOptionList,
            )
            .flat()
            .includes(filter),
        ),
      )

    return filteredValues
  }, [filterFocus, filterBenefitSkill, focusDefinitionList])

  function onAcceptModal(): void {
    if (proposedBackground == null) {
      console.log("Proposed background was null.")
      return
    }
    setFocusedFocus(proposedBackground)
    onClose()
  }

  function handleOnFocusPress(backgroundDefinition: FocusDefinition): void {
    setProposedBackground(backgroundDefinition)
    onOpen()
  }

  return (
    <div className="h-full w-full flex flex-col p-5">
      <ModalWarning
        isOpen={isOpen}
        onClose={onClose}
        onAccept={onAcceptModal}
        warning={
          "If you change the background you will lose your progress. Are you sure?"
        }
      />
      <Filter
        inputState={filterFocus}
        setInputState={setFilterFocus}
        selectKeysState={filterBenefitSkill}
        setSelectKeysState={setFilterBenefitSkill}
        selectOptionList={skillDefinitionList.map(
          (e: StandardSkillDefinition): string => e.name,
        )}
        imageFolder={"/imgs/skills"}
      />
      <List
        items={items}
        focusedItemName={focusedFocus?.name}
        handleOnItemPress={handleOnFocusPress}
        imageFolder={"/imgs/foci"}
      ><h1>Pene</h1></List>
    </div>
  )
}
