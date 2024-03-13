"use client"

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react"
import { type Key } from "@react-types/shared"
import { type ReactElement, useEffect, useState } from "react"
import { useStoreBasicAttributesState } from "../../state"
import AttributeCreation from "./AttributeCreation"

export default function AttributeTabs(props: {
  characterId: string
}): ReactElement {
  const [proposedTab, setProposedTab] = useState<Key>("")
  const {
    chosenAttributes,
    setInitialValues,
    setChosenAttributes,
    attributeTab,
    setAttributeTab,
  } = useStoreBasicAttributesState()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect((): void => {
    if (
      JSON.stringify(chosenAttributes) !==
      JSON.stringify({
        Strength: "0",
        Dexterity: "0",
        Constitution: "0",
        Intelligence: "0",
        Wisdom: "0",
        Charisma: "0",
      })
    )
      return
    setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7" })
  })

  function handleAttributeTabChange(key: Key): void {
    if (key === attributeTab) return

    setProposedTab(key)
    onOpen()
  }

  function changeTabButClean(): void {
    switch (proposedTab) {
      case "standard":
        setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7" })
        break
      case "random":
        setInitialValues({
          A: "🎲",
          B: "🎲",
          C: "🎲",
          D: "🎲",
          E: "🎲",
          F: "🎲",
          G: "14",
        })
        break
    }
    setChosenAttributes({
      strength: "0",
      dexterity: "0",
      constitution: "0",
      intelligence: "0",
      wisdom: "0",
      charisma: "0",
    })
    setAttributeTab(proposedTab)
    onClose()
  }

  return (
    <div className="h-full w-full">
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose): ReactElement => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ⚠️ Progress Could be lost!
              </ModalHeader>
              <ModalBody>
                <p>
                  If you change the attribute selection method you will lose the
                  progress you have made so far. Are you sure you want to select
                  a new method?{" "}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={changeTabButClean}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Tabs
        key="a"
        aria-label="Options"
        classNames={{
          base: "w-full h-[5%]",
          tabList:
            "w-full gap-6 relative rounded-none p-0 border-b border-divider",
          panel: "p-0 h-[95%]",
        }}
        selectedKey={attributeTab}
        onSelectionChange={handleAttributeTabChange}
      >
        <Tab key="standard" title="Standard Array">
          <AttributeCreation />
        </Tab>
        <Tab key="random" title="Roll Dice">
          <AttributeCreation random />
        </Tab>
      </Tabs>
    </div>
  )
}
