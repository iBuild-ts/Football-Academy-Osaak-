"use client"

import { TournamentForm } from "@/components/tournaments/tournament-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { use } from "react"

interface EditTournamentPageProps {
    params: Promise<{
        id: string
    }>
}

export default function EditTournamentPage({ params }: EditTournamentPageProps) {
    const router = useRouter()
    const { id } = use(params)

    // Örnek turnuva verisi - Bu veri API'den gelecek
    const mockTournament = {
        id: id,
        name: "U15 Yaz Turnuvası",
        startDate: "2024-06-01",
        endDate: "2024-06-15",
        location: "İstanbul",
        teams: ["U15 Takımı", "U17 Takımı"],
        status: "active" as const,
    }

    const onSubmit = async (data: any) => {
        try {
            // Burada API çağrısı yapılacak
            console.log("Güncellenecek turnuva verileri:", { id, ...data })
            toast({
                title: "Başarılı!",
                description: "Turnuva başarıyla güncellendi.",
            })
            router.push("/dashboard/tournaments")
            router.refresh()
        } catch (error) {
            toast({
                title: "Hata!",
                description: "Turnuva güncellenirken bir hata oluştu.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Turnuva Düzenle</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Turnuva Bilgileri</CardTitle>
                    <CardDescription>
                        Turnuva bilgilerini güncellemek için formu düzenleyin.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <TournamentForm
                        initialData={mockTournament}
                        onSubmit={onSubmit}
                    />
                </CardContent>
            </Card>
        </div>
    )
} 