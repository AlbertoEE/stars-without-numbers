import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";
import { AttributeDefinitionType } from "@/models/AttributeDefinitionModels";
import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import {
  SkillDefinition,
  SkillDefinitionType,
} from "@/models/SkillDefinitionModels";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import useSWR from "swr";
import { useStore } from "../../state";

export default function PredifinedBenefitlDisplayCell(props: {
  benefit: BackgroundBenefit;
  imgPath: string;
}) {
  const [selectedKeys, setSelectedKeys] = useState(undefined);
  const { skillDefinitions, attributeDefinitions } = useStore()

  function render() {
    if (props.benefit.subtype == "specific")
      return <div className="flex-1">{props.benefit.name}</div>;

    let list;

    switch (props.benefit.subtype) {
      case SkillDefinitionType.combat:
        list = skillDefinitions!!
          .filter((skill: SkillDefinition) => skill.type.includes(SkillDefinitionType.combat))
          .map((skill: SkillDefinition) => <DropdownItem key={skill.name}>{skill.name}</DropdownItem>)
        break;
      case SkillDefinitionType.any:
        list = skillDefinitions!!
          .filter((skill: SkillDefinition) => skill.type.includes(SkillDefinitionType.any))
          .map((skill: SkillDefinition) => <DropdownItem key={skill.name}>{skill.name}</DropdownItem>)
        break;
      case AttributeDefinitionType.any:
        list = skillDefinitions!!
          .filter((skill: SkillDefinition) => skill.type.includes(SkillDefinitionType.any))
          .map((skill: SkillDefinition) => <DropdownItem key={skill.name}>{skill.name}</DropdownItem>)
        break;
      case AttributeDefinitionType.mental:
        return;
      case AttributeDefinitionType.physical:
        return;
    }

    return (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            {selectedKeys ? selectedKeys : `Choose ${props.benefit.name}`}
          </Button>
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
        src={props.imgPath}
        alt="me"
        width="24"
        height="24"
      />
      {render()}
    </div>
  );
}
