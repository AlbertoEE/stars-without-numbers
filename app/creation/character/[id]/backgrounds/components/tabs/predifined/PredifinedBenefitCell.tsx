import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import BenefitImage from "../commons/BenefitImage";
import { Key, Selection } from "@react-types/shared";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import { useEffect, useState } from "react";
import { useStore } from "../../../state";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenSkills, setChosenSkills } = useStore();
  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key> | undefined>(
    undefined
  );

  function handleOnDropdownChange(keys: Selection) {
      const newChosenSkills = new Map(chosenSkills);
      newChosenSkills.delete(selectedKeys?.currentKey);
      newChosenSkills.set(keys.currentKey, 0);
      setSelectedKeys(keys);
      setChosenSkills(newChosenSkills);
  }

  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
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
