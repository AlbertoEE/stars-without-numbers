import SelectSkillLevelButton from "./SelectSkillLevelButton";
import SkillDisplayCell from "./SkillDisplayCell";

export default function BackgroundSkillTypeSection(props: {
  columns: number;
  rows: number;
  skills: string[];
  thead?: string;
  skillBuyMethod: "predifined" | "random" | "choose";
}) {
  let elements: string[][] = [];
  let count = 0;

  for (let i = 0; i < props.rows; i++) {
    elements.push([]);
    for (let j = 0; j < props.columns; j++) {
      elements[i].push(props.skills[count]);
      count++;
    }
  }

  function renderSkillComponent(skillName: string, method: string) {
    switch (method) {
      case "predifined":
        return <SkillDisplayCell skillName={skillName} />;
      case "choose":
        return <SelectSkillLevelButton skillName={skillName} />;
      case "random":
        return <SkillDisplayCell skillName={skillName} />;
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
            {elements.map((elementList: string[], index: number) => (
              <tr key={index} className="select-none">
                {elementList
                  .filter((element) => element != undefined)
                  .map((element: string, index: number) => (
                    <td className="py-1 px-3" key={index}>
                      {renderSkillComponent(element, props.skillBuyMethod)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
