import { Calendar } from "@/components/calendar/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CalendarPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Takvim</h2>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Etkinlikler, Antrenmanlar ve Turnuvalar</CardTitle>
                </CardHeader>
                <CardContent>
                    <Calendar />
                </CardContent>
            </Card>
        </div>
    )
} 