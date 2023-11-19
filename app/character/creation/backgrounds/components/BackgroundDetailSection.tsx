import { skills } from "@/data/data";
import { PopoverTrigger, Tooltip } from "@nextui-org/react";

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
        <div className="my-4">

            {props.title && <><h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">{props.title}</h1><hr /></>}
            <div className="mt-4">
                <table>
                    {props.thead &&
                        <thead>
                            <tr>
                                <td colSpan={4} className="font-bold uppercase tracking-widest text-1xl py-1 px-3">{props.thead}</td>
                            </tr>

                        </thead>
                    }
                    <tbody>
                        {elements.map(elementList => <tr>{elementList.map(element => <td className="py-1 px-3">{element}</td>)}</tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}