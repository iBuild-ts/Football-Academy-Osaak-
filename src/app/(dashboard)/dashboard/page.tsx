import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { Users, CalendarDays, Trophy, TrendingUp } from "lucide-react"

const stats = [
    {
        title: "Toplam Oyuncu",
        value: "127",
        description: "+5 yeni kayıt bu hafta",
        icon: Users,
    },
    {
        title: "Aktif Antrenmanlar",
        value: "12",
        description: "3 antrenman bugün",
        icon: CalendarDays,
    },
    {
        title: "Yaklaşan Turnuvalar",
        value: "4",
        description: "2 turnuva bu ay",
        icon: Trophy,
    },
    {
        title: "Ortalama Performans",
        value: "76%",
        description: "+2% geçen aya göre",
        icon: TrendingUp,
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle className="text-muted-foreground">Genel Bakış</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Overview />
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle className="text-muted-foreground">Son Aktiviteler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RecentActivities />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 