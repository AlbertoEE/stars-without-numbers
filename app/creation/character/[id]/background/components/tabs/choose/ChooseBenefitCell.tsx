import {
  BackgroundBenefit
} from "@/models/BackgroundDefinitionModels";
import { Key, Selection } from "@react-types/shared";
import { useState } from "react";
import { deleteBenefitByName, useStore } from "../../../state";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import ButtonLevelUpBenefit from "./ButtonLevelUpBenefit";

export default function ChooseBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStore();
  const [selectedKeys, setSelectedKeys] = useState<
    Iterable<Key> | undefined | "all"
  >(undefined);

  function handleOnDropdownChange(keys: Selection) {
    const cloneChosenBenefits = [...chosenBenefits];
    deleteBenefitByName(cloneChosenBenefits, selectedKeys?.currentKey)
    setSelectedKeys(keys);
    setChosenBenefits(cloneChosenBenefits);
  }

  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <BenefitImage benefit={props.benefit} />
      <ButtonLevelUpBenefit
        backgroundBenefit={props.benefit}
        dropdownChosenBenefit={selectedKeys?.currentKey}
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
