import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";
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

export default function PredifinedBenefitlDisplayCell(props: {
  benefit: BackgroundBenefit;
  imgPath: string;
}) {
  const [selectedKeys, setSelectedKeys] = useState(undefined);
  const skillsDefinitionRepository: SkillDefinitionRepository =
    new InMemorySkillDefinitionRepository();
  const { data: skills } = useSWR<SkillDefinition[]>(
    "testSkillDefinition",
    skillsDefinitionRepository.getSkills
  );

  if(!skills) return

  function render() {
    if (props.benefit.subtype == "specific")
      return <div className="flex-1">{props.benefit.name}</div>;

    if (props.benefit.subtype == SkillDefinitionType.combat)
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
            {
            skills!!
              .filter((skill: SkillDefinition) => skill.type.includes(SkillDefinitionType.combat))
              .map((skill: SkillDefinition) => <DropdownItem key={skill.name}>{skill.name}</DropdownItem>)
              }
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
