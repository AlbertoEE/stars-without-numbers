import { Image } from "@nextui-org/react";

export default function SkillDisplayCell(props: {
    skillName: string;
}) {
    return  <div
      className="flex flex-row"
    >
      <Image
        loading="eager"
        className="mx-4 my-0 flex-1"
        src={`/imgs/skills/${props.skillName}.svg`}
        alt="me"
        width="24"
        height="24"
      />
      <div className="flex-1">
        {props.skillName}
      </div>
    </div>;
}