"use client"

import { ParentForm } from "@/components/parents/parent-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"
import { Parent } from "../../columns"
import { use } from "react"

interface EditParentPageProps {
    params: Promise<{
        id: string
    }>
}

export default function EditParentPage({ params }: EditParentPageProps) {
    const router = useRouter()
    const { id } = use(params)

    // Burada API'den veli verisi çekilecek
    const parent: Parent = {
        id: id,
        name: "Ahmet Yılmaz",
        email: "ahmet@example.com",
        phone: "+90 555 123 4567",
        children: ["Ali Yılmaz", "Ayşe Yılmaz"],
        status: "active"
    }

    const onSubmit = async (data: any) => {
        try {
            // Burada API çağrısı yapılacak
            console.log("Güncellenecek veli verileri:", data)
            toast({
                title: "Başarılı!",
                description: "Veli başarıyla güncellendi.",
            })
            router.push("/dashboard/parents")
            router.refresh()
        } catch (error) {
            toast({
                title: "Hata!",
                description: "Veli güncellenirken bir hata oluştu.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Veli Düzenle</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Veli Bilgileri</CardTitle>
                    <CardDescription>
                        Veli bilgilerini güncellemek için formu düzenleyin.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ParentForm initialData={parent} onSubmit={onSubmit} />
                </CardContent>
            </Card>
        </div>
    )
} 