import { BackgroundBenefit, BackgroundBenefitType, } from "@/models/BackgroundDefinitionModels";
import BenefitImage from "../commons/BenefitImage";
import { Key, Selection } from "@react-types/shared"
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import { useState } from "react";

export default function PredifinedBenefitCell(props: {
  benefit: BackgroundBenefit;
}) {

  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key> | undefined>(undefined);

  return (
    <div className="flex flex-row">
      <BenefitImage benefit={props.benefit} />
      {props.benefit.subtype === "specific"
        ? <div>{props.benefit.name}</div>
        : <DropDownGenericBenefit benefit={props.benefit} selectedKeys={selectedKeys} handleOnDropdownChange={setSelectedKeys} />}
    </div>
  );
}
