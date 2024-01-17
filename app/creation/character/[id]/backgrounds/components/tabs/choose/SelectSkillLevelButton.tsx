import { SyntheticEvent } from "react";
import { useStore } from "../../../state";
import { Image } from "@nextui-org/react";

export default function SelectSkillLevelButton(props: {
    skillName: string;
    imgPath: string;
}) {
    const {chosenSkills, setChosenSkills} = useStore()

    function handleChooseSkill(skillName: string, event: SyntheticEvent) {
        event.preventDefault();
    
        const newChosenSkills = new Map(chosenSkills);
        const skillValue = newChosenSkills.get(skillName);
    
        switch (event.type) {
          case "click":
            let skillPoints = 0;
            newChosenSkills.forEach((value, key) => {
              if(value == 0) {
                skillPoints += 1;
              } else {
                skillPoints += value + 1;
              }
            });

            if(skillPoints == 2) return;

            newChosenSkills.set(
              skillName,
              skillValue !== undefined ? skillValue + 1 : 0
            );
            break;
          case "contextmenu":
            if (skillValue == undefined) return;
    
            if (skillValue == 0) {
              newChosenSkills.delete(skillName);
            } else {
              newChosenSkills.set(
                skillName,
                skillValue !== undefined ? skillValue - 1 : 0
              );
            }
    
            break;
        }
    
        setChosenSkills(newChosenSkills);
      }

    return  <div
      className="flex flex-row cursor-pointer"
      onClick={(e) => handleChooseSkill(props.skillName, e)}
      onContextMenu={(e) => handleChooseSkill(props.skillName, e)}
    >
      <Image
        loading="eager"
        className="mx-4 my-0 flex-1"
        src={props.imgPath}
        alt="me"
        width="24"
        height="24"
      />
      <div className="flex-1">
        {props.skillName} {chosenSkills.get(props.skillName) && `- ${chosenSkills.get(props.skillName)}`}
      </div>
    </div>;
}