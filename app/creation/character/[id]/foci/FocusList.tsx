"use client"

import ModalWarning from "@/app/creation/components/ModalWarning"
import { type FocusDefinition } from "@/models/FocusDefinitionModels"
import { Chip, useDisclosure } from "@nextui-org/react"
import { type Key } from "@react-types/shared"
import React, { type ReactElement, useState } from "react"
import Filter from "../components/list/Filter"
import List from "../components/list/List"
import { useStoreDefinitionDataState, useStoreFociState } from "../state"
import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"

export default function App(): ReactElement {
  const { focusedFocus, setFocusedFocus } = useStoreFociState()

  const [proposedBackground, setProposedBackground] =
    useState<FocusDefinition>()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { focusDefinitionList } = useStoreDefinitionDataState()

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
      <List
        items={focusDefinitionList}
        focusedItemName={focusedFocus?.name}
        handleOnItemPress={handleOnFocusPress}
        imageFolder={"/imgs/foci"}
        body={(item): ReactElement => (
          <div className="ml-auto mt-auto text-xs italic">
            <Chip size="sm">{item.type}</Chip>
          </div>
        )}
      />
    </div>
  )
}
