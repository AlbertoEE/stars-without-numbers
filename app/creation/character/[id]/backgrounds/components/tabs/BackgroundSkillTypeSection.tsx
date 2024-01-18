import { BackgroundBenefit, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import ChooseBenefitCell from "./choose/ChooseBenefitCell";
import PredifinedBenefitCell from "./predifined/PredifinedBenefitCell";

export default function BackgroundSkillTypeSection(props: {
  columns: number;
  rows: number;
  benefits: BackgroundBenefit[];
  thead?: string;
  skillBuyMethod: "predifined" | "random" | "choose";
}) {
  let benefitsAsTable: BackgroundBenefit[][] = [];
  let count = 0;

  for (let i = 0; i < props.rows; i++) {
    benefitsAsTable.push([]);
    for (let j = 0; j < props.columns; j++) {
      benefitsAsTable[i].push(props.benefits[count]);
      count++;
    }
  }

  function renderSkillComponent(benefit: BackgroundBenefit, method: string) {
    switch (method) {
      case "predifined":
        return <PredifinedBenefitCell benefit={benefit} />;
      case "choose":
        return <ChooseBenefitCell benefit={benefit}/>;
      case "random":
        return <PredifinedBenefitCell benefit={benefit} />;
    }
  }

  return (
    <div>
      {props.thead && (
        <div className="font-bold uppercase tracking-widest text-xs py-1 px-3">
          {props.thead}
        </div>
      )}
      <div className="flex flex-col">
        {benefitsAsTable.map((benefits, rowIndex) => (
          <div key={rowIndex} className="flex flex-1">
            {benefits
              .filter(benefit => benefit != undefined)
              .map((benefit, cellIndex) => (
                <div className="flex-1 py-1 px-3" key={cellIndex}>
                  {renderSkillComponent(benefit, props.skillBuyMethod)}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
