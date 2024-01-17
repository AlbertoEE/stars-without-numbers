import { BackgroundBenefit, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import SelectSkillLevelButton from "./choose/SelectSkillLevelButton";
import PredifinedBenefitlDisplayCell from "./predifined/PredifinedBenefitlDisplayCell";

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
    let path = benefit.type == BackgroundBenefitType.stat ? "/imgs/attributes/" : "/imgs/skills/";
    
    switch (method) {
      case "predifined":
        return <PredifinedBenefitlDisplayCell benefit={benefit} imgPath={`${path}${benefit.name}.svg`}/>;
      case "choose":
        //return <SelectSkillLevelButton skillName={benefit} imgPath={`${path}${benefit}.svg`}/>;
      case "random":
        return <PredifinedBenefitlDisplayCell benefit={benefit} imgPath={`${path}${benefit.name}.svg`}/>;
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
