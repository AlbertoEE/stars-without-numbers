"use client";

import React from "react";
import { backgrounds } from "@/data/data";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Card, CardBody } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ChevronDownIcon } from "@/components/ChevronDownIcon";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";



export default function App() {
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

    return (
        <div>
            <Select
                label="Favorite Animal"
                placeholder="Select an animal"
                selectionMode="multiple"
                className="max-w-xs"
            >
                {["2"].map((animal) => (
                    <SelectItem key={animal} value={animal}>
                        {animal}
                    </SelectItem>
                ))}
            </Select>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        Open Menu
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
    );
}
