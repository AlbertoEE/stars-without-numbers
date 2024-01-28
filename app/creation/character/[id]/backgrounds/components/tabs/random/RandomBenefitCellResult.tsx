import {
  BackgroundBenefit,
  BackgroundBenefitType,
} from "@/models/BackgroundDefinitionModels";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import BenefitImage from "../commons/BenefitImage";
import { useState } from "react";
import { useStore } from "../../../state";

export default function RandomBenefitCellResult(props: {
  benefit: BackgroundBenefit;
}) {
  const {
    chosenAttributesMap: chosenAttributes,
    setChosenAttributesMap: setChosenAttributes,
    chosenSkillsMap: chosenSkills,
    setChosenSkillsMap: setChosenSkills,
  } = useStore();
  const [selectedKeys, setSelectedKeys] = useState();
  const [selectedKeys2, setSelectedKeys2] = useState();
  const [selectedKeys3, setSelectedKeys3] = useState();

  function handleOnDropdownChangeStat(
    keys: Selection,
    selectedKeys: any,
    setSelectedKeys: any
  ) {
    let newChosenAttributes = new Map(chosenAttributes);
    if (props.benefit.type === BackgroundBenefitType.stat) {
      if (selectedKeys) {
        if (newChosenAttributes.get(selectedKeys.currentKey) == 1) {
          newChosenAttributes.delete(selectedKeys.currentKey);
        } else {
          newChosenAttributes.set(
            selectedKeys.currentKey,
            newChosenAttributes.get(selectedKeys.currentKey) - 1
          );
        }
      }

      if (newChosenAttributes.has(keys.currentKey)) {
        newChosenAttributes.set(
          keys.currentKey,
          newChosenAttributes.get(keys.currentKey) + 1
        );
      } else {
        newChosenAttributes.set(keys.currentKey, 1);
      }

      setSelectedKeys(keys);
      setChosenAttributes(newChosenAttributes);
    }
  }

  function handleOnDropdownChangeSkill(
    keys: Selection,
    selectedKeys: any,
    setSelectedKeys: any
  ) {
    let newChosenSkills = new Map(chosenSkills);
    if (selectedKeys) {
      if (newChosenSkills.get(selectedKeys.currentKey) == 0) {
        newChosenSkills.delete(selectedKeys.currentKey);
      } else {
        newChosenSkills.set(
          selectedKeys.currentKey,
          newChosenSkills.get(selectedKeys.currentKey) - 1
        );
      }
    }

    if (newChosenSkills.has(keys.currentKey)) {
      newChosenSkills.set(
        keys.currentKey,
        newChosenSkills.get(keys.currentKey) + 1
      );
    } else {
      newChosenSkills.set(keys.currentKey, 0);
    }

    setSelectedKeys(keys);
    setChosenSkills(newChosenSkills);
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
                handleOnDropdownChangeStat(keys, selectedKeys, setSelectedKeys)
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
                  handleOnDropdownChangeStat(
                    keys,
                    selectedKeys,
                    setSelectedKeys
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
                  handleOnDropdownChangeStat(
                    keys,
                    selectedKeys2,
                    setSelectedKeys2
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
              handleOnDropdownChangeSkill(keys, selectedKeys3, setSelectedKeys3)
            }
          />
        )}
      </div>
    );
  }

  return render();
}
