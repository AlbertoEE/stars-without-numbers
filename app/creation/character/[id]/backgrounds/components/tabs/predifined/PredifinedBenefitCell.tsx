import { BackgroundBenefit, BackgroundBenefitType, } from "@/models/BackgroundDefinitionModels";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, } from "@nextui-org/react";
import { useGlobalStore } from "../../../../state";
import BenefitImage from "../commons/BenefitImage";
import { Key, Selection } from "@react-types/shared"

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
  selectedKeys: Iterable<Key>;
  setSelectedKeys: (keys: Selection) => any;
}) {
  const { skillDefinitions, attributeDefinitions } = useGlobalStore();
  
  function generateList() {
    const definitions = props.benefit.type == BackgroundBenefitType.skill ? skillDefinitions : attributeDefinitions;
    return definitions
      .filter(def => def.type.includes(props.benefit.subtype))
      .map(def => <DropdownItem key={def.name}>{def.name}</DropdownItem>);
  }
  
  function renderDropdown() {
    const dropdownLabel = props.selectedKeys ? `${props.selectedKeys.currentKey} ⚙️` : `${props.benefit.name} ⚙️`;
  
    return (
      <Dropdown>
        <DropdownTrigger>
          <div className="cursor-pointer font-thin antialiased">{dropdownLabel}</div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={props.selectedKeys}
          onSelectionChange={props.setSelectedKeys}
        >
          {generateList()}
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      {props.benefit.subtype === "specific"? <div>{props.benefit.name}</div> : renderDropdown()}
    </div>
  );
}
