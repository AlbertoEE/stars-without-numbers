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

export default function RandomBenefitCellResult(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set<Key>());
  const [selectedKeys2, setSelectedKeys2] = useState<Set<Key>>(new Set<Key>());
  const [selectedKeys3, setSelectedKeys3] = useState<Set<Key>>(new Set<Key>());

  useEffect(() => {
    if (props.benefit.subtype != "specific") {
      if (props.benefit.selected) {
        if (props.benefit.selected[0])
          setSelectedKeys(prev => prev.add(props.benefit.selected[0].name));
        if (props.benefit.selected[1])
          setSelectedKeys2(prev => prev.add(props.benefit.selected[1].name));
      }
    }
  }, []);

  function handleOnDropdownChange(
    keys: Set<Key>,
    selectedKeys: any,
    setSelectedKeys: any,
    type: BackgroundBenefitType
  ) {
    let cloneChosenBenefits = [...chosenBenefits];

    let foundBenefitIndex = cloneChosenBenefits.findIndex(
      (benefit) => JSON.stringify(benefit) == JSON.stringify(props.benefit)
    );

    if (foundBenefitIndex !== -1) {
      let foundBenefit = cloneChosenBenefits[foundBenefitIndex];

      foundBenefit.selected = foundBenefit.selected || [];

      selectedKeys &&
        deleteBenefitByName(foundBenefit.selected, selectedKeys.currentKey);

      addBenefit(foundBenefit.selected, {
        name: keys.currentKey,
        type: type,
        subtype: "specific",
      });
    }

    setSelectedKeys(keys);
    setChosenBenefits(cloneChosenBenefits);
  }

  function render() {
    if (props.benefit.type == BackgroundBenefitType.stat) {
      if (props.benefit.amount === 1) {
        return (
          <div className="flex flex-row">
            <BenefitImage benefit={props.benefit} />
            <div className="mr-2">+1</div>
            <DropDownGenericBenefit
              benefit={props.benefit}
              selectedKeys={selectedKeys}
              handleOnDropdownChange={(keys: Selection) =>
                handleOnDropdownChange(
                  keys,
                  selectedKeys,
                  setSelectedKeys,
                  BackgroundBenefitType.stat
                )
              }
            />
          </div>
        );
      } else if (props.benefit.amount == 2) {
        return (
          <>
            <div className="flex flex-row">
              <BenefitImage benefit={props.benefit} />
              <div className="mr-2">+1</div>
              <DropDownGenericBenefit
                benefit={props.benefit}
                selectedKeys={selectedKeys}
                handleOnDropdownChange={(keys: Selection) =>
                  handleOnDropdownChange(
                    keys,
                    selectedKeys,
                    setSelectedKeys,
                    BackgroundBenefitType.stat
                  )
                }
              />
            </div>
            <div className="flex flex-row">
              <BenefitImage benefit={props.benefit} />
              <div className="mr-2">+1</div>
              <DropDownGenericBenefit
                benefit={props.benefit}
                selectedKeys={selectedKeys2}
                handleOnDropdownChange={(keys: Selection) =>
                  handleOnDropdownChange(
                    keys,
                    selectedKeys2,
                    setSelectedKeys2,
                    BackgroundBenefitType.stat
                  )
                }
              />
            </div>
          </>
        );
      }
    }

    return (
      <div className="flex flex-row">
        <BenefitImage benefit={props.benefit} />
        {props.benefit.subtype === "specific" ? (
          <div>{props.benefit.name}</div>
        ) : (
          <DropDownGenericBenefit
            benefit={props.benefit}
            selectedKeys={selectedKeys3}
            handleOnDropdownChange={(keys: Selection) =>
              handleOnDropdownChange(
                keys,
                selectedKeys3,
                setSelectedKeys3,
                BackgroundBenefitType.skill
              )
            }
          />
        )}
      </div>
    );
  }

  return render();
}
