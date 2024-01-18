import { BackgroundBenefit, BackgroundBenefitType, } from "@/models/BackgroundDefinitionModels";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, } from "@nextui-org/react";
import { useState } from "react";
import { useGlobalStore } from "../../../../state";
import BenefitImage from "../commons/BenefitImage";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const [selectedKeys, setSelectedKeys] = useState(undefined);
  const { skillDefinitions, attributeDefinitions } = useGlobalStore();

  let folderPath = props.benefit.type == BackgroundBenefitType.stat ? "/imgs/attributes/" : "/imgs/skills/";
  
  function generateList() {
    const definitions = props.benefit.type == BackgroundBenefitType.skill ? skillDefinitions : attributeDefinitions;
    return definitions
      .filter(def => def.type.includes(props.benefit.subtype))
      .map(def => <DropdownItem key={def.name}>{def.name}</DropdownItem>);
  }
  
  function renderDropdown() {
    const dropdownLabel = selectedKeys ? `${selectedKeys.currentKey} ⚙️` : `${props.benefit.name} ⚙️`;
  
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
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {generateList()}
        </DropdownMenu>
      </Dropdown>
    );
  }
  
  function render() {
    if (props.benefit.subtype === "specific") {
      return (
        <>
          <div>{props.benefit.name}</div>
        </>
      );
    } else {
      return (
        <>
          {renderDropdown()}
        </>
      );
    }
  }

  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      {render()}
    </div>
  );
}
