"use client";

import { Attribute, Attributes } from "@/models/chatacter";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useEffect, useState } from "react";
import { useStoreBasicAttributes } from "../state";
import AttributeCreation from "./AttributeCreation";

export default function AttributeTabs(props: { characterId: string }) {
  const [tab, setTab] = useState<Key>("standard");
  const [proposedTab, setProposedTab] = useState<Key>("");
  const { chosenAttributes, setInitialValues, setChosenAttributes } = useStoreBasicAttributes();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (JSON.stringify(chosenAttributes) != JSON.stringify({ Strength: "0", Dexterity: "0", Constitution: "0", Intelligence: "0", Wisdom: "0", Charisma: "0", })) return;
    setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", });
  }, []);


  function handleAttributeTabChange(key: Key) {
    if (key == tab) return;

    setProposedTab(key);
    onOpen();
  }

  function changeTabButClean() {
    switch (proposedTab) {
      case "standard":
        setInitialValues({ A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", });
        break;
      case "random":
        setInitialValues({ A: "🎲", B: "🎲", C: "🎲", D: "🎲", E: "🎲", F: "🎲", G: "14", });
        break;
    }
    setChosenAttributes({ strength: "0", dexterity: "0", constitution: "0", intelligence: "0", wisdom: "0", charisma: "0", });
    setTab(proposedTab);
    onClose()
  }

  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Test
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={changeTabButClean}>
                  Action
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
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        }}
        selectedKey={tab}
        onSelectionChange={handleAttributeTabChange}
      >
        <Tab key="standard" title="Standard Array" className="h-full">
          <AttributeCreation />
        </Tab>
        <Tab key="random" title="Roll Dice">
          <AttributeCreation random />
        </Tab>
      </Tabs>
    </>
  );
}