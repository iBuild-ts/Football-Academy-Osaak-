"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Loader2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditProfilePage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Profil güncelleme işlemleri burada yapılacak
        setTimeout(() => {
            setIsLoading(false)
            router.push("/dashboard/profile")
        }, 1000)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Profili Düzenle</h2>
                <div className="flex items-center gap-4">
                    <Button variant="outline" onClick={() => router.back()}>
                        İptal
                    </Button>
                    <Button onClick={handleSubmit} disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Değişiklikleri Kaydet
                    </Button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Profil Fotoğrafı</CardTitle>
                        <CardDescription>
                            Profil fotoğrafınızı değiştirin
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-6">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/avatars/01.png" alt="Profil" />
                                <AvatarFallback>FT</AvatarFallback>
                            </Avatar>
                            <div className="space-y-4">
                                <div>
                                    <Button variant="outline" className="mr-4">
                                        <Camera className="mr-2 h-4 w-4" />
                                        Fotoğraf Yükle
                                    </Button>
                                    <Button variant="outline" className="text-destructive">
                                        Fotoğrafı Kaldır
                                    </Button>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    JPG, GIF veya PNG. Maksimum 2MB.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Kişisel Bilgiler</CardTitle>
                        <CardDescription>
                            Kişisel ve iletişim bilgilerinizi güncelleyin
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Ad Soyad</Label>
                                <Input id="name" defaultValue="Fatih Terim" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="title">Unvan</Label>
                                <Input id="title" defaultValue="Teknik Direktör" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-posta</Label>
                                <Input id="email" type="email" defaultValue="fatih@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefon</Label>
                                <Input id="phone" type="tel" defaultValue="+90 555 123 4567" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Konum</Label>
                                <Input id="location" defaultValue="İstanbul, Türkiye" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Departman</Label>
                                <Select defaultValue="technical">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Departman seçin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="technical">Teknik Ekip</SelectItem>
                                        <SelectItem value="management">Yönetim</SelectItem>
                                        <SelectItem value="medical">Sağlık Ekibi</SelectItem>
                                        <SelectItem value="scouting">Scoutluk</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Hakkında</CardTitle>
                        <CardDescription>
                            Kendiniz hakkında bilgi verin
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Biyografi</Label>
                            <Textarea
                                id="bio"
                                className="min-h-[150px]"
                                defaultValue="20 yılı aşkın teknik direktörlük deneyimiyle, genç yetenekleri keşfetme ve geliştirme konusunda uzman. Ulusal ve uluslararası düzeyde birçok başarıya imza atmış, futbol akademisinde yeni nesil futbolcuları yetiştirmeye odaklanmış bir teknik direktör."
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Başarılar ve Sertifikalar</CardTitle>
                        <CardDescription>
                            Önemli başarılarınızı ve sertifikalarınızı ekleyin
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>UEFA Pro Lisans</Label>
                                    <Input defaultValue="2010" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Yılın Teknik Direktörü</Label>
                                    <Input defaultValue="2015, 2018, 2020" />
                                </div>
                            </div>
                            <Button variant="outline" type="button">
                                Yeni Başarı Ekle
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
} 