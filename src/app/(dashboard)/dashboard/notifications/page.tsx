"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Trophy, Bell, MessageSquare, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const initialNotifications = [
    {
        id: 1,
        title: "Yeni Antrenman Programı",
        description: "U15 takımı için yeni antrenman programı eklendi. Program detaylarını görüntülemek için tıklayın.",
        time: "5 dakika önce",
        type: "training",
        unread: true,
        icon: Calendar,
    },
    {
        id: 2,
        title: "Performans Raporu Güncellendi",
        description: "Ahmet Yılmaz'ın performans raporu güncellendi. Son değerlendirmeleri incelemek için tıklayın.",
        time: "1 saat önce",
        type: "performance",
        unread: true,
        icon: CheckCircle2,
    },
    {
        id: 3,
        title: "Yaklaşan Turnuva",
        description: "U17 turnuvası yarın başlıyor. Turnuva programını ve detayları görüntüleyin.",
        time: "3 saat önce",
        type: "tournament",
        unread: false,
        icon: Trophy,
    },
    {
        id: 4,
        title: "Yeni Mesaj",
        description: "Veli toplantısı hakkında yeni mesajınız var. Mesajı okumak için tıklayın.",
        time: "5 saat önce",
        type: "message",
        unread: false,
        icon: MessageSquare,
    },
    {
        id: 5,
        title: "Sistem Güncellemesi",
        description: "Yeni özellikler eklendi. Değişiklikleri incelemek için tıklayın.",
        time: "1 gün önce",
        type: "system",
        unread: false,
        icon: Bell,
    },
]

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications)

    const handleMarkAllAsRead = () => {
        console.log("Tüm bildirimler okundu olarak işaretlendi")
        setNotifications(notifications.map(notification => ({
            ...notification,
            unread: false
        })))
    }

    const handleClearNotifications = () => {
        console.log("Tüm bildirimler temizlendi")
        setNotifications([])
    }

    const handleMarkAsRead = (id: number) => {
        console.log(`${id} numaralı bildirim okundu olarak işaretlendi`)
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, unread: false } : notification
        ))
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Bildirimler</h2>
                    <p className="text-muted-foreground">
                        Tüm bildirimlerinizi buradan yönetebilirsiniz
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" onClick={handleMarkAllAsRead}>
                        Tümünü Okundu İşaretle
                    </Button>
                    <Button variant="outline" onClick={handleClearNotifications}>
                        Bildirimleri Temizle
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Son Bildirimler</CardTitle>
                    <CardDescription>
                        Son 30 güne ait bildirimleriniz
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                        <div className="space-y-4">
                            {notifications.map((notification) => {
                                const Icon = notification.icon
                                return (
                                    <div
                                        key={notification.id}
                                        className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    >
                                        <div className="rounded-full bg-primary/10 p-2">
                                            <Icon className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.title}
                                                </p>
                                                {notification.unread && (
                                                    <Badge variant="default" className="h-5">Yeni</Badge>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {notification.description}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {notification.time}
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => handleMarkAsRead(notification.id)}
                                            disabled={!notification.unread}
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
} 