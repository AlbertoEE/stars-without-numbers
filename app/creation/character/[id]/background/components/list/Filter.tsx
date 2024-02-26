import { Select, SelectItem, Input } from "@nextui-org/react";

export default function Filter() {
    return <div className="h-[10%] flex flex-row justify-center space-between gap-3 pb-5">
        <Input
            label="Background"
            placeholder="Filter by background"
            className="max-w-[50%]"
            value={filterBackground}
            onValueChange={setFilterBackground}
        />
        <Select
            label="Choose filter"
            placeholder="Select skills"
            selectionMode="multiple"
            selectedKeys={filterChooseSkill}
            className="max-w-[50%]"
            onSelectionChange={(keys: Selection) =>
                setFilterChooseSkill(Array.from(keys).map((key) => key.toString()))
            }
        >
            {skillDefinitionList.map((skill) => (
                <SelectItem key={skill.name} textValue={skill.name}>
                    <div className="flex flex-row">
                        <Image
                            loading="eager"
                            className="mx-4 my-0 flex-1"
                            src={`/imgs/skills/${skill.name}.svg`}
                            alt="me"
                            width="24"
                            height="24"
                        />
                        <div className="flex-1">{skill.name}</div>
                    </div>
                </SelectItem>
            ))}
        </Select>
    </div>
}