import { Image } from "@nextui-org/react";

export default function SkillDisplayCell(props: {
    skillName: string;
    imgPath: string;
}) {
    return  <div
      className="flex flex-row"
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
        {props.skillName}
      </div>
    </div>;
}