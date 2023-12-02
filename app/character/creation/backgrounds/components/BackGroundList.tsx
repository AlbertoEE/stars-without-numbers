"use client";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image, Selection } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/react";
import { useStore } from "../state";
import { BackgroundDefinitionRepository } from "@/data/BackgroundDefinition/BackgroundDefinitionRepository";
import { InMemoryBackgroundDefinitionRepository } from "@/data/BackgroundDefinition/InMemoryBackgroundDefinitionRepository";
import useSWR from "swr";
import { BackgroundDefinition } from "@/models/BackgroundDefinitionModels";
import { SkillDefinitionRepository } from "@/data/SkillDefinition/SkillDefinitionRepository";
import { InMemorySkillDefinitionRepository } from "@/data/SkillDefinition/InMemorySkillDefinitionRepository";
import { SkillDefinition } from "@/models/SkillDefinitionModels";

export default function App() {
    const {
        filterBackground,
        filterChooseSkill,
        filterRandomSkill,
        detailBackground,
        setFilterBackground,
        setFilterChooseSkill,
        setFilterRandomSkill,
        setDetailBackground
    } = useStore();

    const skillsDefinitionRepository: SkillDefinitionRepository = new InMemorySkillDefinitionRepository()
    const { data: skills } = useSWR<SkillDefinition[]>("testSkillDefinition", skillsDefinitionRepository.getSkills)
    const backgroundDefinitionRepository: BackgroundDefinitionRepository = new InMemoryBackgroundDefinitionRepository()
    const { data: backgrounds } = useSWR<BackgroundDefinition[]>("testBackgroundDefinition", backgroundDefinitionRepository.getBackgrounds)

    const columns = [
        { name: "NAME", uid: "name" },
    ];

    let items = React.useMemo(() => {
        if (!backgrounds) return [];
        let filteredValues = [...backgrounds]
        console.log(filterBackground)

        if (filterBackground != "") {
            filteredValues = filteredValues
                .filter((background) => background.name.startsWith(filterBackground))
        }

        if (Array.from(filterChooseSkill).length > 0) {
            filteredValues = filteredValues.filter((background: BackgroundDefinition) =>
                Array
                    .from(filterChooseSkill)
                    .every((filter: string) =>
                        background.benefits.learning
                            .map(e => e.name)
                            .includes(filter)
                    )
            )
        }

        return filteredValues
    }, [filterBackground, filterChooseSkill, filterRandomSkill, backgrounds])

    const renderCell = React.useCallback((background: BackgroundDefinition, columnKey: React.Key) => {
        return (
            <Card>
                <CardBody className="text-center">
                    <div className="flex flex-row">
                        <Image className="mx-4 my-0" src={`/imgs/backgrounds/${background.name}.svg`} alt="me" width="24" height="24" />
                        <div>{background.name.toUpperCase()}</div>
                    </div>
                </CardBody>
            </Card>
        )
    }, [])

    if (!backgrounds || !skills) return <></>;

    return (
        <div className="max-h-full">
            <div className="flex flex-row py-5 justify-center space-between gap-3 sticky top-0 z-50">
                <Input
                    label="Background"
                    placeholder="Filter by background"
                    className="max-w-[30%]"
                    value={filterBackground}
                    onValueChange={setFilterBackground}
                />
                <Select
                    label="Choose filter"
                    placeholder="Select skills"
                    selectionMode="multiple"
                    selectedKeys={filterChooseSkill}
                    className="max-w-[30%]"
                    onSelectionChange={(keys: Selection) => setFilterChooseSkill(keys)}
                >
                    {skills.map(skill => (
                        <SelectItem key={skill.name} textValue={skill.name}>
                            <div className="flex flex-row">
                                <Image loading="eager" className="mx-4 my-0 flex-1" src={`/imgs/skills/${skill.name}.svg`} alt="me" width="24" height="24" />
                                <div className="flex-1">{skill.name}</div>
                            </div>
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Random filter"
                    placeholder="Select skills"
                    selectionMode="multiple"
                    selectedKeys={filterRandomSkill}
                    className="max-w-[30%]"
                    onSelectionChange={setFilterRandomSkill}
                >
                    {Object.entries(skills).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                            {key}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="h-[85%] overflow-y-auto">
                <Table hideHeader aria-label="Example static collection table">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn
                                key={column.uid}
                            >
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody emptyContent={"No users found"} items={items}>
                        {(item) => (
                            <TableRow onMouseOver={() => setDetailBackground(item.name)} key={item.name}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
