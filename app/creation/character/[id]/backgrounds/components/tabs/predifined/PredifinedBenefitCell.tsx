import { AttributeDefinition, AttributeDefinitionType } from "@/models/AttributeDefinitionModels";
import {
  BackgroundBenefit,
  BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import {
  SkillDefinition,
  SkillDefinitionType,
} from "@/models/SkillDefinitionModels";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { useStore } from "../../../../state";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const [selectedKeys, setSelectedKeys] = useState(undefined);
  const { skillDefinitions, attributeDefinitions } = useStore();

  let folderPath = props.benefit.type == BackgroundBenefitType.stat ? "/imgs/attributes/" : "/imgs/skills/";

  function render() {
    if (props.benefit.subtype == "specific")
      return <div className="flex-1">{props.benefit.name}</div>;

    let list;

    switch (props.benefit.subtype) {
      case SkillDefinitionType.combat:
        list = skillDefinitions!!
          .filter((skill: SkillDefinition) =>
            skill.type.includes(SkillDefinitionType.combat)
          )
          .map((skill: SkillDefinition) => (
            <DropdownItem key={skill.name}>{skill.name}</DropdownItem>
          ));
        break;
      case SkillDefinitionType.any:
        list = skillDefinitions!!
          .filter((skill: SkillDefinition) =>
            skill.type.includes(SkillDefinitionType.any)
          )
          .map((skill: SkillDefinition) => (
            <DropdownItem key={skill.name}>{skill.name}</DropdownItem>
          ));
        break;
      case AttributeDefinitionType.any:
        list = attributeDefinitions!!
          .filter((attribute: AttributeDefinition) =>
            attribute.type.includes(AttributeDefinitionType.any)
          )
          .map((attribute: AttributeDefinition) => (
            <DropdownItem key={attribute.name}>{attribute.name}</DropdownItem>
          ));
        break;
      case AttributeDefinitionType.mental:
        list = attributeDefinitions!!
          .filter((attribute: AttributeDefinition) =>
            attribute.type.includes(AttributeDefinitionType.mental)
          )
          .map((attribute: AttributeDefinition) => (
            <DropdownItem key={attribute.name}>{attribute.name}</DropdownItem>
          ));
        break;
      case AttributeDefinitionType.physical:
        list = attributeDefinitions!!
          .filter((attribute: AttributeDefinition) =>
            attribute.type.includes(AttributeDefinitionType.physical)
          )
          .map((attribute: AttributeDefinition) => (
            <DropdownItem key={attribute.name}>{attribute.name}</DropdownItem>
          ));
        break;
    }

    return (
      <Dropdown>
        <DropdownTrigger>
          <div className="cursor-pointer font-thin antialiased">
            {selectedKeys ? selectedKeys : `Choose ${props.benefit.name}`}
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {list}
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <div className="flex flex-row">
      <Image
        loading="eager"
        className="mx-4 my-0 flex-1"
        src={folderPath + (selectedKeys ? selectedKeys.currentKey : props.benefit.name) + ".svg"}
        alt="me"
        width="24"
        height="24"
      />
      {render()}
    </div>
  );
}
