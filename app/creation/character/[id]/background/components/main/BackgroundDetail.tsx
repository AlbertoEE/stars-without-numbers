import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState } from "react";
import { useStoreBackgroundState } from "../../../state";
import PredifinedMain from "../tabs/predifined/PredifinedMain";
import RandomMain from "../tabs/random/RandomMain";
import ChooseMain from "../tabs/choose/ChooseMain";

export default function BackgroundDetail(props: { characterId: string }) {
  const [selectedKey, setSelectedKey] = useState(new Set(["quick"]));
  const [proposedTab, setProposedTab] = useState<Key>("");

  const {
    focusedBackground,
    setChosenBenefits,
    backgroundBenefitTab,
    setBackgroundBenefitTab,
    setRolledDice,
  } = useStoreBackgroundState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (focusedBackground == undefined) return;

  function handleBenefitTabChange(key: Key) {
    if (key == backgroundBenefitTab) return;

    if (backgroundBenefitTab == "predifined") {
      setChosenBenefits([focusedBackground!.benefits.free]);
      setBackgroundBenefitTab(key);
      return;
    }

    setProposedTab(key);
    onOpen();
  }

  function changeTabButClean() {
    setRolledDice(false);
    setChosenBenefits([focusedBackground!.benefits.free]);
    setBackgroundBenefitTab(proposedTab);
    onClose();
  }

  function renderBenefitSelectionType() {
    switch (selectedKey.currentKey) {
      case "quick":
        return <PredifinedMain backgroundDefinition={focusedBackground!} />
      case "choose":
        return <ChooseMain backgroundDefinition={focusedBackground!} />
      case "random":
        return <RandomMain backgroundDefinition={focusedBackground!} />
      default:
        return <PredifinedMain backgroundDefinition={focusedBackground!} />
    }
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden p-5">
      <div className="flex flex-row items-center">
        <Image
          className=""
          src={`/imgs/backgrounds/${focusedBackground.name}.svg`}
          alt="me"
          width="64"
          height="64"
        />
        <h1 className="font-orbitron font-bold uppercase tracking-widest text-4xl ml-4">
          {focusedBackground.name}
        </h1>
        <div className="ml-auto">
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="primary"
                variant="solid"
                className="capitalize w-44"
              >
                Selection: {selectedKey}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown Variants"
              color="primary"
              variant="solid"
              selectionMode="single"
              selectedKeys={selectedKey}
              onSelectionChange={setSelectedKey}

            >
              <DropdownItem key="quick">Quick</DropdownItem>
              <DropdownItem key="choose">Choose</DropdownItem>
              <DropdownItem key="random">Random</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="overflow-y-auto px-3 py-4 whitespace-pre-line">
        {focusedBackground.description}
      </div>
      <div className="w-full flex-1">
        {renderBenefitSelectionType()}
      </div>
    </div>
  );
}
