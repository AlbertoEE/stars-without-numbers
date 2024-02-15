import {
  BackgroundBenefit,
  BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import { useEffect, useState } from "react";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import {
  addBenefit,
  deleteBenefitByName,
  useStoreBackgroundState,
} from "../../../../state";
import { Key, Selection } from "@react-types/shared";

export default function GenericBenefitCellResult(props: {
  benefit: BackgroundBenefit;
  index: number;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();

  const [keysDropdownFirst, setKeysDropdownFirst] = useState<Set<Key>>(
    new Set<Key>()
  );
  const [keysDropdownSecond, setKeysDropdownSecond] = useState<Set<Key>>(
    new Set<Key>()
  );

  useEffect(() => {
    if (props.benefit.subtype != "specific") {
      props.benefit.selected?.get(0) &&
        setKeysDropdownFirst((prev) =>
        prev.add(props.benefit.selected!.get(0)!.name)
        );
      props.benefit.selected?.get(1) &&
        setKeysDropdownSecond((prev) =>
          prev.add(props.benefit.selected!.get(1)!.name)
        );
    }
  }, []);

  function handleOnDropdownChange(
    keys: Selection,
    setDropDownKeys: any,
    type: BackgroundBenefitType,
    option: number,
  ) {
    if (keys == "all") return;

    let cloneChosenBenefits = [...chosenBenefits];

    let foundBenefit = cloneChosenBenefits[props.index];

    foundBenefit.selected = foundBenefit.selected || new Map();

    foundBenefit.selected.set(option, {
      name: keys.currentKey,
      type: type,
      subtype: "specific",
    })

    setDropDownKeys(keys);
    setChosenBenefits(cloneChosenBenefits);
  }

  function renderGenericBenefitRow(
    selectedKeys: any,
    setSelectedKeys: any,
    option: number,
  ) {
    return (
      <div className="flex flex-row">
        <BenefitImage benefit={props.benefit} />
        <div className="mr-2">+1</div>
        <DropDownGenericBenefit
          dropDownName={props.benefit.selected?.get(option)?.name}
          benefit={props.benefit}
          selectedKeys={selectedKeys}
          handleOnDropdownChange={(keys: Selection) =>
            handleOnDropdownChange(
              keys,
              setSelectedKeys,
              props.benefit.type,
              option
            )
          }
        />
      </div>
    );
  }

  return (
    <>
      {renderGenericBenefitRow(keysDropdownFirst, setKeysDropdownFirst, 0)}
      {props.benefit.amount == 2 &&
        renderGenericBenefitRow(keysDropdownSecond, setKeysDropdownSecond, 1)}
    </>
  );
}
