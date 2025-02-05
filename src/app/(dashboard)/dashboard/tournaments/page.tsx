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
import { Tournament } from "./columns"

const tournaments: Tournament[] = [
    {
        id: "1",
        name: "U15 Yaz Turnuvası",
        startDate: "2024-06-01",
        endDate: "2024-06-15",
        location: "İstanbul",
        teams: 8,
        status: "active"
    },
    {
        id: "2",
        name: "U17 Kış Kupası",
        startDate: "2024-12-01",
        endDate: "2024-12-15",
        location: "Ankara",
        teams: 12,
        status: "inactive"
    },
    {
        id: "3",
        name: "U19 Bahar Turnuvası",
        startDate: "2024-03-01",
        endDate: "2024-03-15",
        location: "İzmir",
        teams: 16,
        status: "completed"
    },
]

export default function TournamentsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Turnuvalar</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni Turnuva
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tüm Turnuvalar</CardTitle>
                    <CardDescription>
                        Akademinin düzenlediği tüm turnuvaların listesi.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={tournaments}
                        searchableColumns={[
                            {
                                id: "name",
                                title: "Turnuva Adı"
                            }
                        ]}
                        filterableColumns={[
                            {
                                id: "status",
                                title: "Durum",
                                options: [
                                    {
                                        label: "Aktif",
                                        value: "active",
                                    },
                                    {
                                        label: "Pasif",
                                        value: "inactive",
                                    },
                                    {
                                        label: "Tamamlandı",
                                        value: "completed",
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