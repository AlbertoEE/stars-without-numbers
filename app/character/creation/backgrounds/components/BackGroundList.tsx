"use client";

import React from "react";
import { backgrounds, skills } from "@/data/data";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/react";

export default function App() {
    const [values, setValues] = React.useState([]);

    const [filter, setFilter] = useState({
        choose: ""
    })

    const columns = [
        { name: "NAME", uid: "name" },
    ];

    let items = React.useMemo(() => {
        let filteredValues = [...backgrounds]
        return filteredValues
    }, [backgrounds])

    const renderCell = React.useCallback((background: any, columnKey: React.Key) => {
        return (
            <Card>
                <CardBody className="text-center">
                    {background[columnKey].toUpperCase()}
                </CardBody>
            </Card>
        )
    }, [])

    // <p className="text-small text-default-500">Selected: {Array.from(values).join(", ")}</p>

    return (
        <div className="max-h-full">
            <div className="flex flex-row py-5 justify-center space-between gap-3 sticky top-0 z-50">
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    className="max-w-[30%]"
                    value={values}
                    onValueChange={setValues}
                />
                <Select
                    label="Choose filter"
                    placeholder="Select skills"
                    selectionMode="multiple"
                    selectedKeys={values}
                    className="max-w-[30%]"
                    onSelectionChange={setValues}
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
                    selectedKeys={values}
                    className="max-w-[30%]"
                    onSelectionChange={setValues}
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
                            <TableRow key={item.name}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
