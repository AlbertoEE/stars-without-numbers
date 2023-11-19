import { Skill, skills } from "@/data/data";
import { Image, PopoverTrigger, Tooltip } from "@nextui-org/react";

export default function BackgroundDetailSection(props: {
    columns: number,
    rows: number,
    skills: string[],
    title?: string,
    thead?: string,
}) {

    let elements: string[][] = []
    let count = 0;

    for (let i = 0; i < props.rows; i++) {
        elements.push([])
        for (let j = 0; j < props.columns; j++) {
            elements[i].push(props.skills[count]);
            count++
        }
    }

    return (
        <div>

            {props.title && <><h1 className="font-orbitron font-bold uppercase tracking-widest text-1xl p-4">{props.title}</h1><hr className="mx-4" /></>}
            <div className="mt-4">
                <table>
                    {props.thead &&
                        <thead>
                            <tr>
                                <td colSpan={4} className="font-bold uppercase tracking-widest text-xs py-1 px-3">{props.thead}</td>
                            </tr>

                        </thead>
                    }
                    <tbody>
                        {elements.map((elementList: string[]) =>
                            <tr>{elementList.map((element: string) =>
                                <td className="py-1 px-3">
                                    <Tooltip content={skills.find((skill: Skill) => skill.name == element)?.shortDescription}>
                                        <div className="flex flex-row">
                                            <Image loading="eager" className="mx-4 my-0 flex-1" src={`/imgs/skills/${element}.svg`} alt="me" width="24" height="24" />
                                            <div className="flex-1">{element}</div>
                                        </div>
                                    </Tooltip>
                                </td>)}
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}