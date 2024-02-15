import { BackgroundBenefit } from "@/models/BackgroundDefinitionModels";
import BenefitImage from "../commons/BenefitImage";
import DropDownGenericBenefit from "../commons/DropDownGenericBenefit";
import { useStoreBackgroundState } from "../../../../state";
import { Key, Selection } from "@react-types/shared";

export default function GenericBenefitCellResult(props: {
  benefit: BackgroundBenefit;
  index: number;
}) {
  const { chosenBenefits, setChosenBenefits } = useStoreBackgroundState();

  function handleOnDropdownChange(keys: Selection, option: number) {
    let cloneChosenBenefits = [...chosenBenefits];

    let foundBenefit = cloneChosenBenefits[props.index];

    foundBenefit.selected = foundBenefit.selected || new Map();

    foundBenefit.selected.set(option, {
      name: keys.currentKey,
      type: props.benefit.type,
      subtype: "specific",
    });

    setChosenBenefits(cloneChosenBenefits);
  }

  function renderGenericBenefitRow(option: number) {
    props.benefit;
    return (
      <div className="flex flex-row">
        <BenefitImage benefit={props.benefit} />
        <div className="mr-2">+1</div>
        <DropDownGenericBenefit
          dropDownName={props.benefit.selected?.get(option)?.name}
          benefit={props.benefit}
          selectedKeys={
            props.benefit.selected
              ? new Set<Key>(props.benefit.selected.get(option)?.name)
              : new Set<Key>()
          }
          handleOnDropdownChange={(keys: Selection) =>
            handleOnDropdownChange(keys, option)
          }
        />
      </div>
    );
  }

  function render() {
    let rows = [];
    for (let i = 0; i < props.benefit.amount!; i++) {
      rows.push(renderGenericBenefitRow(i));
    }
    return rows;
  }

  return render();
}
