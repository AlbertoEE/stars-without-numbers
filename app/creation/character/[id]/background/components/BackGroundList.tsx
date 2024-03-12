"use client"

import ModalWarning from "@/app/creation/components/ModalWarning"
import {
  BackgroundBenefitType,
  type BackgroundDefinition,
} from "@/models/BackgroundDefinitionModels"
import { useDisclosure } from "@nextui-org/react"
import React, { type ReactElement, useState } from "react"
import {
  useStoreBackgroundState,
  useStoreDefinitionDataState,
} from "../../state"
import Filter from "../../components/list/Filter"
import List from "../../components/list/List"

export default function BackgroundList(): ReactElement {
  const [filterBackground, setFilterBackground] = useState<string>("")
  const [filterChooseSkill, setFilterChooseSkill] = useState<string>("")
  const [proposedBackground, setProposedBackground] =
    useState<BackgroundDefinition>()

  const { focusedBackground, setChosenBenefits, setFocusedBackground } =
    useStoreBackgroundState()

  const { skillDefinitionList, backgroundDefinitionList } =
    useStoreDefinitionDataState()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const items = React.useMemo((): BackgroundDefinition[] => {
    let filteredValues = [...backgroundDefinitionList]

    if (filterBackground !== "") {
      filteredValues = filteredValues.filter((background): boolean =>
        background.name.startsWith(filterBackground.toLowerCase()),
      )
    }

    if (Array.from(filterChooseSkill).length > 0) {
      filteredValues = filteredValues.filter(
        (background: BackgroundDefinition): boolean =>
          Array.from(filterChooseSkill).every((filter: string): boolean =>
            background.benefits.learning
              .map((e): string => e.name)
              .includes(filter),
          ),
      )
    }

    return filteredValues
  }, [filterBackground, filterChooseSkill, backgroundDefinitionList])

  function handleOnBackgroundPress(
    backgroundDefinition: BackgroundDefinition,
  ): void {
    setProposedBackground(backgroundDefinition)
    onOpen()
  }

  function onAcceptModal(): void {
    if (proposedBackground == null) {
      console.log("Proposedbackground")
    }
    setChosenBenefits([
      {
        name: proposedBackground.benefits.free.name,
        type: BackgroundBenefitType.skill,
        subtype: "specific",
      },
    ])
    setFocusedBackground(proposedBackground)
    onClose()
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
        inputState={filterBackground}
        setInputState={setFilterBackground}
        selectKeysState={filterChooseSkill}
        setSelectKeysState={setFilterChooseSkill}
        selectOptionList={skillDefinitionList.map((e): string => e.name)}
        imageFolder={"/imgs/skills"}
      />
      <List
        items={items}
        focusedItemName={focusedBackground?.name}
        handleOnItemPress={handleOnBackgroundPress}
        imageFolder={"/imgs/backgrounds"}
      />
    </div>
  )
}
