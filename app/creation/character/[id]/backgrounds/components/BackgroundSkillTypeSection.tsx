import { BackgroundBenefit, BackgroundBenefitType } from "@/models/BackgroundDefinitionModels";
import SelectSkillLevelButton from "./SelectSkillLevelButton";
import PredifinedBenefitlDisplayCell from "./SkillDisplayCell";

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
        <table>
          {props.thead && (
            <thead>
              <tr>
                <td
                  colSpan={4}
                  className="font-bold uppercase tracking-widest text-xs py-1 px-3"
                >
                  {props.thead}
                </td>
              </tr>
            </thead>
          )}
          <tbody>
            {benefitsAsTable.map((benefits: BackgroundBenefit[], index: number) => (
              <tr key={index} className="select-none">
                {benefits
                  .filter((benefit: BackgroundBenefit) => benefit != undefined)
                  .map((benefit: BackgroundBenefit, index: number) => (
                    <td className="py-1 px-3" key={index}>
                      {renderSkillComponent(benefit, props.skillBuyMethod)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
