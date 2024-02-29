import {
  BackgroundBenefit
} from "@/models/BackgroundDefinitionModels";
import { Key, Selection } from "@react-types/shared";
import { useState } from "react";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import ButtonLevelUpBenefit from "./ButtonLevelUpBenefit";
import { deleteBenefitByName, useStoreBackgroundState } from "../../../../state";

export default function ChooseBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();
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
      <ButtonLevelUpBenefit
        backgroundBenefit={props.benefit}
        dropdownChosenBenefit={selectedKeys?.currentKey}
      />
      <BenefitImage benefit={props.benefit}/>
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
