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
import { Parent } from "./columns"
import { useRouter } from "next/navigation"

const parents: Parent[] = [
    {
        id: "1",
        name: "Robert Johnson",
        email: "robert@osaakfc.com",
        phone: "+1 555 123 4567",
        children: ["Alex Johnson", "Emma Johnson"],
        status: "active"
    },
    {
        id: "2",
        name: "Sarah Williams",
        email: "sarah@osaakfc.com",
        phone: "+1 555 234 5678",
        children: ["Michael Williams"],
        status: "active"
    },
    {
        id: "3",
        name: "David Brown",
        email: "david@osaakfc.com",
        phone: "+1 555 345 6789",
        children: ["Olivia Brown", "Sophia Brown", "Lucas Brown"],
        status: "inactive"
    },
]

export default function ParentsPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Parents</h1>
                <Button onClick={() => router.push("/dashboard/parents/new")}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Parent
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Parents</CardTitle>
                    <CardDescription>
                        List of all parents at OSAAK FC Academy.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={parents}
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