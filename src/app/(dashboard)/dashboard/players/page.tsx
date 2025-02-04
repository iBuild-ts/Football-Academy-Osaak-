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

const players = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        age: 15,
        team: "U15 Takımı",
        position: "Forvet",
        joinDate: "01.01.2023",
    },
    {
        id: 2,
        name: "Mehmet Demir",
        age: 14,
        team: "U15 Takımı",
        position: "Orta Saha",
        joinDate: "15.02.2023",
    },
    {
        id: 3,
        name: "Ali Kaya",
        age: 16,
        team: "U16 Takımı",
        position: "Defans",
        joinDate: "10.03.2023",
    },
]

export default function PlayersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Oyuncular</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni Oyuncu
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Tüm Oyuncular</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>İsim</TableHead>
                                <TableHead>Yaş</TableHead>
                                <TableHead>Takım</TableHead>
                                <TableHead>Pozisyon</TableHead>
                                <TableHead>Katılım Tarihi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {players.map((player) => (
                                <TableRow key={player.id}>
                                    <TableCell className="font-medium">{player.name}</TableCell>
                                    <TableCell>{player.age}</TableCell>
                                    <TableCell>{player.team}</TableCell>
                                    <TableCell>{player.position}</TableCell>
                                    <TableCell>{player.joinDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
} 