import {
  BackgroundBenefit,
  BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import { Key, Selection } from "@react-types/shared";
import { useState } from "react";
import { addBenefit, deleteBenefitByName, useStore } from "../../../state";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStore();
  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key> | undefined>(
    undefined
  );

  function handleOnDropdownChange(keys: Selection) {
    const chosenBenefitsClone = [...chosenBenefits];
    deleteBenefitByName(chosenBenefitsClone, selectedKeys?.currentKey);
    addBenefit(chosenBenefitsClone, {
      name: keys.currentKey,
      type: BackgroundBenefitType.skill,
      subtype: "specific",
    });
    setSelectedKeys(keys);
    setChosenBenefits(chosenBenefitsClone);
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
