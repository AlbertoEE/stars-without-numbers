import {
    BackgroundBenefit,
    BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import { useState } from "react";
import { addBenefit, deleteBenefit, useStore } from "../../../state";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";

export default function RandomBenefitCellResult(props: {
  benefit: BackgroundBenefit;
}) {
  const { chosenBenefits, setChosenBenefits } = useStore();
  const [selectedKeys, setSelectedKeys] = useState();
  const [selectedKeys2, setSelectedKeys2] = useState();
  const [selectedKeys3, setSelectedKeys3] = useState();

  function handleOnDropdownChange(
    keys: Selection,
    selectedKeys: any,
    setSelectedKeys: any,
    type: "skill" | "stat"
  ) {
    let cloneChosenBenefits = [...chosenBenefits];
    if (selectedKeys) {
      deleteBenefit(cloneChosenBenefits, selectedKeys.currentKey);
    }

    addBenefit(cloneChosenBenefits, keys.currentKey, type);

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
                  "stat"
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
                    "stat"
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
                    "stat"
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
              handleOnDropdownChange(keys, selectedKeys3, setSelectedKeys3, "skill")
            }
          />
        )}
      </div>
    );
  }

  return render();
}
