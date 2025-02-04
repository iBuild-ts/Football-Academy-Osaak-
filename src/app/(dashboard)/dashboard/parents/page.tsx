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

const parents = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        children: "Mehmet Yılmaz",
        phone: "+90 555 111 2233",
        email: "ahmet@example.com",
        occupation: "Mühendis",
    },
    {
        id: 2,
        name: "Fatma Demir",
        children: "Ali Demir",
        phone: "+90 555 222 3344",
        email: "fatma@example.com",
        occupation: "Doktor",
    },
    {
        id: 3,
        name: "Mustafa Kaya",
        children: "Ayşe Kaya",
        phone: "+90 555 333 4455",
        email: "mustafa@example.com",
        occupation: "Öğretmen",
    },
]

export default function ParentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Veliler</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Yeni Veli
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Tüm Veliler</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>İsim</TableHead>
                                <TableHead>Çocuk</TableHead>
                                <TableHead>Telefon</TableHead>
                                <TableHead>E-posta</TableHead>
                                <TableHead>Meslek</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {parents.map((parent) => (
                                <TableRow key={parent.id}>
                                    <TableCell className="font-medium">{parent.name}</TableCell>
                                    <TableCell>{parent.children}</TableCell>
                                    <TableCell>{parent.phone}</TableCell>
                                    <TableCell>{parent.email}</TableCell>
                                    <TableCell>{parent.occupation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
} 