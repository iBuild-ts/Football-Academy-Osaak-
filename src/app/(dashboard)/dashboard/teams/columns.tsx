"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header"
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions"

export type Team = {
    id: string
    name: string
    category: string
    coach: string
    players: number
    status: "active" | "inactive"
}

export const columns: ColumnDef<Team>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Takım Adı" />
        ),
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Kategori" />
        ),
    },
    {
        accessorKey: "coach",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Antrenör" />
        ),
    },
    {
        accessorKey: "players",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Oyuncu Sayısı" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Durum" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            return (
                <Badge
                    variant={status === "active" ? "default" : "secondary"}
                >
                    {status === "active" ? "Aktif" : "Pasif"}
                </Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
] 