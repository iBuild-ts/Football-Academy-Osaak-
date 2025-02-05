"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Activity, TrendingUp, Users, Calendar } from "lucide-react"

const performanceData = [
    { month: "Ocak", performans: 65 },
    { month: "Şubat", performans: 70 },
    { month: "Mart", performans: 75 },
    { month: "Nisan", performans: 72 },
    { month: "Mayıs", performans: 80 },
    { month: "Haziran", performans: 85 },
]

const detailedStats = [
    {
        title: "Antrenman İstatistikleri",
        icon: Activity,
        stats: [
            { label: "Toplam Antrenman", value: "156 saat" },
            { label: "Haftalık Ortalama", value: "12 saat" },
            { label: "Katılım Oranı", value: "%92" },
        ]
    },
    {
        title: "Performans Metrikleri",
        icon: TrendingUp,
        stats: [
            { label: "Fiziksel Gelişim", value: "%85" },
            { label: "Teknik Gelişim", value: "%78" },
            { label: "Taktiksel Anlayış", value: "%82" },
        ]
    },
    {
        title: "Takım İstatistikleri",
        icon: Users,
        stats: [
            { label: "Oyuncu Sayısı", value: "25" },
            { label: "Ortalama Yaş", value: "17.5" },
            { label: "Kadro Kullanımı", value: "%85" },
        ]
    },
]

const recentActivities = [
    {
        date: "2024-02-20",
        activity: "Taktik Antrenmanı",
        duration: "2 saat",
        attendance: "23/25",
        performance: "İyi"
    },
    {
        date: "2024-02-19",
        activity: "Kondisyon Çalışması",
        duration: "1.5 saat",
        attendance: "24/25",
        performance: "Çok İyi"
    },
    {
        date: "2024-02-18",
        activity: "Teknik Antrenman",
        duration: "2 saat",
        attendance: "22/25",
        performance: "Orta"
    },
    {
        date: "2024-02-17",
        activity: "Maç Analizi",
        duration: "1 saat",
        attendance: "25/25",
        performance: "İyi"
    },
    {
        date: "2024-02-16",
        activity: "Fiziksel Test",
        duration: "3 saat",
        attendance: "25/25",
        performance: "Çok İyi"
    },
]

export function Analytics() {
    return (
        <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                <TabsTrigger value="details">Detaylar</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Toplam Antrenman
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">156 Saat</div>
                            <p className="text-xs text-muted-foreground">
                                +2% geçen aya göre
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Ortalama Performans
                            </CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">%82</div>
                            <p className="text-xs text-muted-foreground">
                                +5% geçen aya göre
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Katılım Oranı
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">%92</div>
                            <p className="text-xs text-muted-foreground">
                                +1% geçen aya göre
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Gelişim Oranı
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">%78</div>
                            <p className="text-xs text-muted-foreground">
                                +2.5% geçen aya göre
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Performans Grafiği</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="performans" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {detailedStats.map((section, index) => (
                        <Card key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-lg font-medium">
                                    {section.title}
                                </CardTitle>
                                <section.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {section.stats.map((stat, statIndex) => (
                                        <div key={statIndex} className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                                            <span className="font-medium">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Son Aktiviteler</CardTitle>
                        <CardDescription>
                            Son 5 antrenman ve aktivite detayları
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tarih</TableHead>
                                    <TableHead>Aktivite</TableHead>
                                    <TableHead>Süre</TableHead>
                                    <TableHead>Katılım</TableHead>
                                    <TableHead>Performans</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentActivities.map((activity, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{activity.date}</TableCell>
                                        <TableCell>{activity.activity}</TableCell>
                                        <TableCell>{activity.duration}</TableCell>
                                        <TableCell>{activity.attendance}</TableCell>
                                        <TableCell>{activity.performance}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
} 