import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";
import { SkillDefinition } from "@/models/SkillDefinitionModels";
import { Image, Tooltip } from "@nextui-org/react";
import useSWR from "swr";

export default function BackgroundSkillTypeSection(props: {
    columns: number,
    rows: number,
    skills: string[],
    thead?: string,
}) {

    const skillDefinitionRepository: SkillDefinitionRepository = new InMemorySkillDefinitionRepository();
    const { data: skillDefinitions } = useSWR<SkillDefinition[]>("testSkillDefinitionsDetailSection", skillDefinitionRepository.getSkills)

    if (!skillDefinitions) return;

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
            <div className="p-5">
                Here you can pick two other skills from the table below, if you pick skills, you can select exactly the
                talents you want for your hero. You may pick the same skill twice if you
                wish, to improve its starting proficiency. . No starting character can begin with a skill level higher than level-1.
            </div>
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
                        {elements.map((elementList: string[], index: number) =>
                            <tr key={index}>{elementList.map((element: string, index: number) =>
                                <td className="py-1 px-3" key={index}>
                                    <Tooltip content={skillDefinitions.find((skill: SkillDefinition) => skill.name == element)?.shortDescription}>
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