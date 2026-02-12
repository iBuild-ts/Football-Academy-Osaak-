"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"
import { columns } from "./columns"
import { DataTable } from "@/components/datatable/data-table"
import { Player } from "./columns"
import { useRouter } from "next/navigation"

const players: Player[] = [
    {
        id: "1",
        name: "John Smith",
        email: "john@osaakfc.com",
        phone: "+1 555 123 4567",
        age: 15,
        position: "Forward",
        status: "active"
    },
    {
        id: "2",
        name: "Mike Johnson",
        email: "mike@osaakfc.com",
        phone: "+1 555 234 5678",
        age: 14,
        position: "Midfielder",
        status: "active"
    },
    {
        id: "3",
        name: "David Wilson",
        email: "david@osaakfc.com",
        phone: "+1 555 345 6789",
        age: 16,
        position: "Defender",
        status: "inactive"
    },
]

export default function PlayersPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Players</h1>
                <Button onClick={() => router.push("/dashboard/players/new")}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Player
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Players</CardTitle>
                    <CardDescription>
                        List of all players at OSAAK FC Academy.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={players}
                        searchableColumns={[
                            {
                                id: "name",
                                title: "Name"
                            }
                        ]}
                        filterableColumns={[
                            {
                                id: "status",
                                title: "Status",
                                options: [
                                    {
                                        label: "Active",
                                        value: "active",
                                    },
                                    {
                                        label: "Inactive",
                                        value: "inactive",
                                    },
                                ],
                            },
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
} 