"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header"
import { DataTableRowActions } from "@/components/datatable/data-table-row-actions"

export type Tournament = {
    id: string
    name: string
    startDate: string
    endDate: string
    location: string
    teams: number
    status: "active" | "inactive" | "completed"
}

export const columns: ColumnDef<Tournament>[] = [
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
            <DataTableColumnHeader column={column} title="Turnuva Adı" />
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Başlangıç" />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("startDate"))
            const formatted = new Intl.DateTimeFormat("tr-TR", {
                dateStyle: "medium",
            }).format(date)
            return <div>{formatted}</div>
        },
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Bitiş" />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("endDate"))
            const formatted = new Intl.DateTimeFormat("tr-TR", {
                dateStyle: "medium",
            }).format(date)
            return <div>{formatted}</div>
        },
    },
    {
        accessorKey: "location",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Konum" />
        ),
    },
    {
        accessorKey: "teams",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Takım Sayısı" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Durum" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            const label = status === "active" ? "Aktif" : status === "inactive" ? "Pasif" : "Tamamlandı"
            const variant = status === "active" ? "default" : status === "inactive" ? "destructive" : "secondary"

            return (
                <Badge variant={variant}>
                    {label}
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