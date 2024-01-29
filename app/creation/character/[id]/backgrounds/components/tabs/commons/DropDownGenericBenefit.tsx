import { AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { BackgroundBenefit, BackgroundBenefitType, } from "@/models/BackgroundDefinitionModels";
import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, } from "@nextui-org/react";
import { Key, Selection } from "@react-types/shared";
import { useGlobalStore } from "../../../../state";

export default function DropDownGenericBenefit(props: {
  benefit: BackgroundBenefit;
  selectedKeys: Iterable<Key> | undefined;
  handleOnDropdownChange: (keys: Selection) => any;
}) {
  const { skillDefinitionList: skillDefinitions, attributeDefinitionList: attributeDefinitions } = useGlobalStore();

  function generateList() {
    const definitions =
      props.benefit.type == BackgroundBenefitType.skill
        ? skillDefinitions
        : attributeDefinitions;
    return definitions
      .filter((def: SkillDefinition | AttributeDefinition) =>
        def.type.includes(props.benefit.subtype)
      )
      .map((def) => <DropdownItem key={def.name}>{def.name}</DropdownItem>);
  }

  function renderDropdown() {
    const dropdownLabel = props.selectedKeys
      ? `${props.selectedKeys.currentKey} ⚙️`
      : `${props.benefit.name} ⚙️`;

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
    );
  }

  return renderDropdown();
}
