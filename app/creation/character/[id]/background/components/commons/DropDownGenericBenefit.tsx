import { type AttributeDefinition } from "@/models/AttributeDefinitionModels"
import {
  BackgroundBenefitType,
  type BackgroundBenefit,
} from "@/models/BackgroundDefinitionModels"
import { type StandardSkillDefinition } from "@/models/StandardSkillDefinitionModels"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { type Key, type Selection } from "@react-types/shared"
import { useStoreDefinitionDataState } from "../../../state"
import { type ReactElement } from "react"

export default function DropDownGenericBenefit(props: {
  benefit: BackgroundBenefit
  selectedKeys: Iterable<Key> | undefined
  dropDownName?: string
  handleOnDropdownChange: (keys: Selection) => any
}): ReactElement {
  const {
    skillDefinitionList: skillDefinitions,
    attributeDefinitionList: attributeDefinitions,
  } = useStoreDefinitionDataState()

  function generateList(): ReactElement[] {
    const definitions =
      props.benefit.type === BackgroundBenefitType.skill
        ? skillDefinitions
        : attributeDefinitions
    return definitions
      .filter((def: StandardSkillDefinition | AttributeDefinition): boolean =>
        def.type.includes(props.benefit.subtype),
      )
      .map(
        (def): ReactElement => (
          <DropdownItem key={def.name}>{def.name}</DropdownItem>
        ),
      )
  }

  function renderDropdown(): ReactElement {
    const dropdownLabel =
      props.dropDownName ??
      (props.selectedKeys?.size > 0
        ? `${props.selectedKeys.currentKey} ⚙️`
        : `${props.benefit.name} ⚙️`)

    return (
      <Dropdown>
        <DropdownTrigger>
          <div className="cursor-pointer font-thin antialiased">
            {dropdownLabel}
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={props.selectedKeys}
          onSelectionChange={props.handleOnDropdownChange}
          classNames={{
            list: "max-h-52 overflow-y-auto",
          }}
        >
          {generateList()}
        </DropdownMenu>
      </Dropdown>
    )
  }

  return renderDropdown()
}
