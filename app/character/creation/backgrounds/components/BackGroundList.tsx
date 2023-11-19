"use client";

import React from "react";
import { backgrounds, skills } from "@/data/data";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/react";
import { useStore } from "../state";

export default function App() {
    const { filterBackground, filterChooseSkill, filterRandomSkill, detailBackground, setFilterBackground, setFilterChooseSkill, setFilterRandomSkill, setDetailBackground } = useStore();

    const columns = [
        { name: "NAME", uid: "name" },
    ];

    let items = React.useMemo(() => {
        let filteredValues = [...backgrounds]
        console.log(filterBackground)

        if (filterBackground != "") {
            filteredValues = filteredValues
                .filter((background) => background.name.startsWith(filterBackground))
        }

        if (Array.from(filterChooseSkill).length > 0) {
            filteredValues = filteredValues.filter((background) => Array.from(filterChooseSkill).every(r => background.skills.learning.includes(r)))
        }

        return filteredValues
    }, [filterBackground, filterChooseSkill, filterRandomSkill])


    const renderCell = React.useCallback((background: any, columnKey: React.Key) => {
        return (
            <Card>
                <CardBody className="text-center">
                    <div className="flex flex-row">
                        <Image className="mx-4 my-0" src={`/imgs/backgrounds/${background.name}.svg`} alt="me" width="24" height="24" />
                        <div>{background[columnKey].toUpperCase()}</div>
                    </div>
                </CardBody>
            </Card>
        )
    }, [])

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
                    onSelectionChange={setFilterChooseSkill}
                >
                    {Object.entries(skills).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                            {key}
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
