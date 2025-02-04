"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        activity: "U15 antrenmanına katıldı",
        time: "2 saat önce",
        image: "/avatars/01.png",
        initials: "AY",
    },
    {
        id: 2,
        name: "Mehmet Demir",
        activity: "Yeni bir drill ekledi",
        time: "3 saat önce",
        image: "/avatars/02.png",
        initials: "MD",
    },
    {
        id: 3,
        name: "Ayşe Kaya",
        activity: "Performans raporunu güncelledi",
        time: "5 saat önce",
        image: "/avatars/03.png",
        initials: "AK",
    },
    {
        id: 4,
        name: "Can Özdemir",
        activity: "Turnuva kaydı oluşturdu",
        time: "6 saat önce",
        image: "/avatars/04.png",
        initials: "CÖ",
    },
    {
        id: 5,
        name: "Zeynep Yıldız",
        activity: "Yeni oyuncu ekledi",
        time: "8 saat önce",
        image: "/avatars/05.png",
        initials: "ZY",
    },
]

export function RecentActivities() {
    return (
        <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-6">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-center">
                        <Avatar className="h-9 w-9 border border-muted">
                            <AvatarImage src={activity.image} alt={activity.name} />
                            <AvatarFallback className="bg-muted text-muted-foreground">
                                {activity.initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{activity.name}</p>
                            <p className="text-sm text-muted-foreground">{activity.activity}</p>
                        </div>
                        <div className="ml-auto text-sm text-muted-foreground">
                            {activity.time}
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
} 