import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../state";
import { useStore as useGlobalStore } from "../../../../../[id]/state";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@nextui-org/react";
import { BackgroundBenefit, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import { AttributeDefinitionType, AttributeDefinition } from "@/models/AttributeDefinitionModels";
import { SkillDefinitionType, SkillDefinition } from "@/models/SkillDefinitionModels";

export default function ChooseBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  let folderPath = props.benefit.type == BackgroundBenefitType.stat ? "/imgs/attributes/" : "/imgs/skills/";

  const { chosenSkills, setChosenSkills } = useStore()
  const [selectedKeys, setSelectedKeys] = useState(undefined);

  const { skillDefinitions, attributeDefinitions } = useGlobalStore();

  function handleChooseSkill(sign: "minus" | "plus") {
    let benefitName = props.benefit.subtype == "specific" ? props.benefit.name : selectedKeys.currentKey
    
    const newChosenSkills = new Map(chosenSkills);
    const benefitLvL = newChosenSkills.get(benefitName);

    switch (sign) {
      case "plus":
        let skillPoints = 0;
        newChosenSkills.forEach((value, key) => {
          if (value == 0) {
            skillPoints += 1;
          } else {
            skillPoints += value + 1;
          }
        });

        if (skillPoints == 2) return;

        newChosenSkills.set(
          benefitName,
          benefitLvL !== undefined ? benefitLvL + 1 : 0
        );
        break;
      case "minus":
        if (benefitLvL == undefined) return;

        if (benefitLvL == 0) {
          newChosenSkills.delete(benefitName);
        } else {
          newChosenSkills.set(
            benefitName,
            benefitLvL !== undefined ? benefitLvL - 1 : 0
          );
        }

        break;
    }

    setChosenSkills(newChosenSkills);
  }

  function render() {
    if (props.benefit.subtype == "specific")
      return <>
        <Button isIconOnly className="h-4" onPress={() => handleChooseSkill("minus")}>
          -
        </Button>
        <div className="min-w-unit-6 text-right">
          {chosenSkills.get(props.benefit.name) == undefined ? "❌" : `${chosenSkills.get(props.benefit.name)}`}
        </div>
        <div>
          LvL
        </div>
        <Button isIconOnly className="h-4" onPress={() => handleChooseSkill("plus")}>
          +
        </Button>
        <div className="">
          {props.benefit.name}
        </div>
      </>;

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
      <>
        <Button isDisabled={!selectedKeys} isIconOnly className="h-4" onPress={() => handleChooseSkill("minus")}>
          -
        </Button>
        <div className="min-w-unit-6 text-right">
          {chosenSkills.get(selectedKeys?.currentKey) == undefined ? "❌" : `${chosenSkills.get(selectedKeys?.currentKey)}`}
        </div>
        <div>
          LvL
        </div>
        <Button isDisabled={!selectedKeys} isIconOnly className="h-4" onPress={() => handleChooseSkill("plus")}>
          +
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <div className="cursor-pointer font-thin antialiased">
              {selectedKeys ? `${selectedKeys.currentKey} ⚙️` : `${props.benefit.name} ⚙️ `}
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
      </>
    );
  }

  return <div className="flex flex-row items-center gap-2">
    <Image
      loading="eager"
      className="mx-4 my-0 flex-1"
      src={folderPath + props.benefit.name + ".svg"}
      alt="me"
      width="24"
      height="24"
    />
    {render()}
  </div>;
}
