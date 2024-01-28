import {
    BackgroundBenefit
} from "@/models/BackgroundDefinitionModels";
import { Key, Selection } from "@react-types/shared";
import { useState } from "react";
import { useStore } from "../../../state";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import ButtonLevelUpBenefit from "./ButtonLevelUpBenefit";

export default function ChooseBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenSkillsMap: chosenSkills, setChosenSkillsMap: setChosenSkills } = useStore();
  const [selectedKeys, setSelectedKeys] = useState<
    Iterable<Key> | undefined | "all"
  >(undefined);

  function handleOnDropdownChange(keys: Selection) {
    const newChosenSkills = new Map(chosenSkills);
    newChosenSkills.delete(selectedKeys?.currentKey);
    setSelectedKeys(keys);
    setChosenSkills(newChosenSkills);
  }

  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <BenefitImage benefit={props.benefit} />
      <ButtonLevelUpBenefit
        benefit={props.benefit}
        chosenBenefit={selectedKeys?.currentKey}
      />
      {props.benefit.subtype === "specific" ? (
        <div>{props.benefit.name}</div>
      ) : (
        <DropDownGenericBenefit
          benefit={props.benefit}
          selectedKeys={selectedKeys}
          handleOnDropdownChange={handleOnDropdownChange}
        />
      )}
    </div>
  );
}
