import ModalWarning from "@/app/creation/components/ModalWarning"
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  useDisclosure,
} from "@nextui-org/react"
import { type Selection } from "@react-types/shared"
import { useEffect, useState } from "react"
import { useStoreBackgroundState } from "../../state"
import ChooseSelectionMethod from "./ChooseSelectionMethod"
import RandomSelectionMethod from "./RandomSelectionMethod"

export default function BackgroundDetail(props: { characterId: string }) {
  const [proposedBackgroundSelectionType, setProposedBackgroundSelectionType] =
    useState<string>("")

  const {
    focusedBackground,
    backgroundBenefitSelectionMethod,
    setBackgroundBenefitSelectionMethod: setBackgroundSelectionType,
    setRolledDice,
    setChosenBenefits,
  } = useStoreBackgroundState()

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(setFreeSkill, [
    focusedBackground,
    backgroundBenefitSelectionMethod,
    setChosenBenefits,
    setRolledDice,
  ])

  if (focusedBackground == undefined) return

  function setFreeSkill() {
    setChosenBenefits([focusedBackground?.benefits.free!])
    setRolledDice(false)
  }

  function onSelectionChange(selection: string) {
    if (selection == backgroundBenefitSelectionMethod) return
    setProposedBackgroundSelectionType(selection)
    onOpen()
  }

  function onAcceptModal() {
    setBackgroundSelectionType(proposedBackgroundSelectionType)
    onClose()
  }

  function renderBenefitSelectionType() {
    switch (backgroundBenefitSelectionMethod) {
      case "choose":
        return (
          <ChooseSelectionMethod backgroundDefinition={focusedBackground!} />
        )
      case "random":
        return (
          <RandomSelectionMethod backgroundDefinition={focusedBackground!} />
        )
    }
  }

  return (
    <>
      <ModalWarning
        isOpen={isOpen}
        onClose={onClose}
        onAccept={onAcceptModal}
        warning={
          "If you change the background you will lose your progress. Are you sure?"
        }
      />
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
            <BenefitSelectionTypeDropDown
              onSelectionChange={onSelectionChange}
              selectedKey={backgroundBenefitSelectionMethod}
            />
          </div>
        </div>
        <h1 className="text-xl my-4">Description</h1>
        <div className="overflow-y-auto px-3 whitespace-pre-line mb-4">
          {focusedBackground.description}
        </div>
        <Divider />
        <div className="w-full flex-1 my-4">{renderBenefitSelectionType()}</div>
      </div>
    </>
  )
}

export function BenefitSelectionTypeDropDown(props: {
  onSelectionChange: (key: string) => any
  selectedKey: string
}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="solid" className="capitalize w-44">
          Selection: {props.selectedKey}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color="primary"
        variant="solid"
        selectionMode="single"
        selectedKeys={props.selectedKey}
        onSelectionChange={(key: Selection) =>
          props.onSelectionChange(key.currentKey)
        }
      >
        <DropdownItem key="choose">Choose</DropdownItem>
        <DropdownItem key="random">Random</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
