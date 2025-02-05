"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Parent } from "@/app/(dashboard)/dashboard/parents/columns"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, X } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "İsim en az 2 karakter olmalıdır.",
    }),
    email: z.string().email({
        message: "Geçerli bir e-posta adresi giriniz.",
    }),
    phone: z.string().min(10, {
        message: "Geçerli bir telefon numarası giriniz.",
    }),
    children: z.array(z.string()).min(1, {
        message: "En az bir çocuk seçilmelidir.",
    }),
    status: z.enum(["active", "inactive"], {
        required_error: "Lütfen bir durum seçiniz.",
    }),
})

interface ParentFormProps {
    initialData?: Parent
    onSubmit: (data: z.infer<typeof formSchema>) => void
}

// Örnek oyuncu listesi - Bu liste API'den gelecek
const players = [
    { label: "Ali Yılmaz", value: "Ali Yılmaz" },
    { label: "Ayşe Demir", value: "Ayşe Demir" },
    { label: "Mehmet Kaya", value: "Mehmet Kaya" },
    { label: "Zeynep Şahin", value: "Zeynep Şahin" },
    { label: "Can Öztürk", value: "Can Öztürk" },
    { label: "Elif Yıldız", value: "Elif Yıldız" },
    { label: "Burak Aydın", value: "Burak Aydın" },
    { label: "Selin Çelik", value: "Selin Çelik" },
]

const ITEMS_PER_PAGE = 5

export function ParentForm({ initialData, onSubmit }: ParentFormProps) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name || "",
            email: initialData?.email || "",
            phone: initialData?.phone || "",
            children: initialData?.children || [],
            status: initialData?.status || "active",
        },
    })

    // Arama ve sayfalama işlemleri
    const filteredPlayers = players.filter(player =>
        player.label.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const totalPages = Math.ceil(filteredPlayers.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedPlayers = filteredPlayers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>İsim</FormLabel>
                            <FormControl>
                                <Input placeholder="Ahmet Yılmaz" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-posta</FormLabel>
                            <FormControl>
                                <Input placeholder="ornek@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                                <Input placeholder="+90 555 123 4567" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Çocuklar</FormLabel>
                            <Card className="p-4">
                                {/* Seçili çocukların gösterimi */}
                                {Array.isArray(field.value) && field.value.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {field.value.map((child) => (
                                            <Badge
                                                key={child}
                                                variant="secondary"
                                                className="flex items-center gap-1"
                                            >
                                                {child}
                                                <X
                                                    className="h-3 w-3 cursor-pointer"
                                                    onClick={() => {
                                                        form.setValue(
                                                            "children",
                                                            field.value.filter((value) => value !== child),
                                                            { shouldValidate: true }
                                                        )
                                                    }}
                                                />
                                            </Badge>
                                        ))}
                                    </div>
                                )}

                                {/* Arama kutusu */}
                                <div className="relative mb-4">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Oyuncu ara..."
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value)
                                            setCurrentPage(1)
                                        }}
                                        className="pl-8"
                                    />
                                </div>

                                {/* Oyuncu listesi */}
                                <ScrollArea className="h-[200px]">
                                    <div className="space-y-2">
                                        {paginatedPlayers.map((player) => (
                                            <div
                                                key={player.value}
                                                className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer"
                                                onClick={() => {
                                                    const currentValue = Array.isArray(field.value) ? field.value : []
                                                    const isSelected = currentValue.includes(player.value)
                                                    const newValue = isSelected
                                                        ? currentValue.filter((value) => value !== player.value)
                                                        : [...currentValue, player.value]
                                                    form.setValue("children", newValue, { shouldValidate: true })
                                                }}
                                            >
                                                <span>{player.label}</span>
                                                {field.value?.includes(player.value) && (
                                                    <Badge>Seçili</Badge>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>

                                {/* Sayfalama */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center gap-2 mt-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                        >
                                            Önceki
                                        </Button>
                                        <span className="flex items-center">
                                            {currentPage} / {totalPages}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                        >
                                            Sonraki
                                        </Button>
                                    </div>
                                )}
                            </Card>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Durum</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Durum seçin" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="active">Aktif</SelectItem>
                                    <SelectItem value="inactive">Pasif</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-4">
                    <Button type="submit">Kaydet</Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        İptal
                    </Button>
                </div>
            </form>
        </Form>
    )
} 