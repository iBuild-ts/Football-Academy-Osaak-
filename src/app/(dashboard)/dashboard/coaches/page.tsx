import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus } from "lucide-react"

const coaches = [
    {
        id: 1,
        name: "Mehmet Yılmaz",
        team: "U15 Takımı",
        license: "UEFA A",
        experience: "8 yıl",
        phone: "+90 555 111 2233",
    },
    {
        id: 2,
        name: "Ayşe Demir",
        team: "U16 Takımı",
        license: "UEFA B",
        experience: "5 yıl",
        phone: "+90 555 222 3344",
    },
    {
        id: 3,
        name: "Ali Kaya",
        team: "U17 Takımı",
        license: "UEFA Pro",
        experience: "12 yıl",
        phone: "+90 555 333 4455",
    },
]

export default function CoachesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Antrenörler</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni Antrenör
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Tüm Antrenörler</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>İsim</TableHead>
                                <TableHead>Takım</TableHead>
                                <TableHead>Lisans</TableHead>
                                <TableHead>Deneyim</TableHead>
                                <TableHead>Telefon</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {coaches.map((coach) => (
                                <TableRow key={coach.id}>
                                    <TableCell className="font-medium">{coach.name}</TableCell>
                                    <TableCell>{coach.team}</TableCell>
                                    <TableCell>{coach.license}</TableCell>
                                    <TableCell>{coach.experience}</TableCell>
                                    <TableCell>{coach.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
} 