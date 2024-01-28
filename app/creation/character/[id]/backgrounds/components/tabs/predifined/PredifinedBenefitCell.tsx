import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import BenefitImage from "../commons/BenefitImage";
import { Key, Selection } from "@react-types/shared";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import { useEffect, useState } from "react";
import { addBenefit, deleteBenefit, useStore } from "../../../state";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStore();
  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key> | undefined>(
    undefined
  );

  function handleOnDropdownChange(keys: Selection) {
      const chosenBenefitsClone = [...chosenBenefits];
      deleteBenefit(chosenBenefitsClone, selectedKeys?.currentKey)
      addBenefit(chosenBenefitsClone, keys.currentKey, "skill");
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
