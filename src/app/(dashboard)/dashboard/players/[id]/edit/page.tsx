"use client"

import { PlayerForm } from "@/components/players/player-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { Player } from "../../columns"
import { use } from "react"

interface EditPlayerPageProps {
    params: Promise<{
        id: string
    }>
}

export default function EditPlayerPage({ params }: EditPlayerPageProps) {
    const router = useRouter()
    const { id } = use(params)

    // Burada API'den oyuncu verisi çekilecek
    const player: Player = {
        id: id,
        name: "Ahmet Yılmaz",
        email: "ahmet@example.com",
        phone: "+90 555 123 4567",
        age: 15,
        position: "Forvet",
        status: "active"
    }

    const onSubmit = async (data: any) => {
        try {
            // Burada API çağrısı yapılacak
            console.log("Güncellenecek oyuncu verileri:", data)
            toast({
                title: "Başarılı!",
                description: "Oyuncu başarıyla güncellendi.",
            })
            router.push("/dashboard/players")
            router.refresh()
        } catch (error) {
            toast({
                title: "Hata!",
                description: "Oyuncu güncellenirken bir hata oluştu.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Oyuncu Düzenle</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Oyuncu Bilgileri</CardTitle>
                    <CardDescription>
                        Oyuncu bilgilerini güncellemek için formu düzenleyin.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <PlayerForm initialData={player} onSubmit={onSubmit} />
                </CardContent>
            </Card>
        </div>
    )
} 