"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tournament } from "@/app/(dashboard)/dashboard/tournaments/columns"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, X } from "lucide-react"
import { useState } from "react"

// Örnek takım listesi - Bu veri API'den gelecek
const availableTeams = [
    "U13 Takımı",
    "U15 Takımı",
    "U17 Takımı",
    "U19 Takımı"
]

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Turnuva adı en az 2 karakter olmalıdır.",
    }),
    startDate: z.string({
        required_error: "Başlangıç tarihi seçiniz.",
    }),
    endDate: z.string({
        required_error: "Bitiş tarihi seçiniz.",
    }),
    location: z.string().min(2, {
        message: "Konum giriniz.",
    }),
    teams: z.array(z.string()).min(1, {
        message: "En az bir takım seçilmelidir.",
    }),
    status: z.enum(["active", "inactive", "completed"], {
        required_error: "Lütfen bir durum seçiniz.",
    }),
})

interface TournamentFormProps {
    initialData?: Tournament
    onSubmit: (data: z.infer<typeof formSchema>) => void
}

export function TournamentForm({ initialData, onSubmit }: TournamentFormProps) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name ?? "",
            startDate: initialData?.startDate ?? "",
            endDate: initialData?.endDate ?? "",
            location: initialData?.location ?? "",
            teams: initialData?.teams ?? [],
            status: initialData?.status ?? "active",
        },
    })

    const selectedTeams = form.watch("teams")

    const filteredTeams = availableTeams.filter(team =>
        team.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedTeams.includes(team)
    )

    const totalPages = Math.ceil(filteredTeams.length / itemsPerPage)
    const currentTeams = filteredTeams.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handleTeamSelect = (team: string) => {
        const currentTeams = form.getValues("teams")
        if (!currentTeams.includes(team)) {
            form.setValue("teams", [...currentTeams, team])
        }
    }

    const handleTeamRemove = (team: string) => {
        const currentTeams = form.getValues("teams")
        form.setValue("teams", currentTeams.filter(t => t !== team))
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Turnuva Adı</FormLabel>
                            <FormControl>
                                <Input placeholder="U15 Yaz Turnuvası" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Başlangıç Tarihi</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bitiş Tarihi</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Konum</FormLabel>
                            <FormControl>
                                <Input placeholder="İstanbul" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="teams"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Takımlar</FormLabel>
                            <Card className="p-4">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {field.value.map((team) => (
                                            <Badge
                                                key={team}
                                                variant="default"
                                                className="gap-1 pr-0.5"
                                            >
                                                <span className="text-xs">{team}</span>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-4 w-4 hover:bg-transparent"
                                                    onClick={() => handleTeamRemove(team)}
                                                >
                                                    <X className="h-3 w-3" />
                                                </Button>
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Search className="h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Takım ara..."
                                            value={searchQuery}
                                            onChange={(e) => {
                                                setSearchQuery(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                            className="h-8"
                                        />
                                    </div>
                                    <ScrollArea className="h-[120px]">
                                        <div className="space-y-2">
                                            {currentTeams.map((team) => (
                                                <Button
                                                    key={team}
                                                    variant="ghost"
                                                    className="w-full justify-start font-normal"
                                                    onClick={() => handleTeamSelect(team)}
                                                >
                                                    {team}
                                                </Button>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                    {totalPages > 1 && (
                                        <div className="flex items-center justify-center gap-2">
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
                                </div>
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
                                    <SelectItem value="completed">Tamamlandı</SelectItem>
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