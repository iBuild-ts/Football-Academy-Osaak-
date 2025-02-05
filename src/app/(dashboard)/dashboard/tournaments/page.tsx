"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { columns, Tournament } from "./columns"
import { DataTable } from "@/components/datatable/data-table"
import { useRouter } from "next/navigation"

// Örnek turnuva verileri - Bu veriler API'den gelecek
const tournaments: Tournament[] = [
    {
        id: "1",
        name: "U15 Yaz Turnuvası",
        startDate: "2024-06-01",
        endDate: "2024-06-15",
        location: "İstanbul",
        teams: ["U15 Takımı", "U17 Takımı"],
        status: "active",
    },
    {
        id: "2",
        name: "U17 Kış Turnuvası",
        startDate: "2024-12-01",
        endDate: "2024-12-15",
        location: "Ankara",
        teams: ["U15 Takımı", "U17 Takımı", "U19 Takımı"],
        status: "inactive",
    },
    {
        id: "3",
        name: "U19 Bahar Turnuvası",
        startDate: "2024-03-01",
        endDate: "2024-03-15",
        location: "İzmir",
        teams: ["U17 Takımı", "U19 Takımı"],
        status: "completed",
    },
]

export default function TournamentsPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Turnuvalar</h1>
                <Button onClick={() => router.push("/dashboard/tournaments/new")}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Yeni Turnuva
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tüm Turnuvalar</CardTitle>
                    <CardDescription>
                        Akademideki tüm turnuvaların listesi.
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