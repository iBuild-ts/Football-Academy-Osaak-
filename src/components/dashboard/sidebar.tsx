"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    BarChart3,
    CalendarDays,
    GraduationCap,
    LayoutDashboard,
    Settings,
    Trophy,
    Users,
    UserPlus,
    Heart,
} from "lucide-react"

interface SidebarProps {
    isCollapsed: boolean;
}

const routes = [
    {
        group: "Genel",
        items: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                href: "/dashboard",
            },
        ]
    },
    {
        group: "Üyeler",
        items: [
            {
                label: "Oyuncular",
                icon: Users,
                href: "/dashboard/players",
            },
            {
                label: "Antrenörler",
                icon: GraduationCap,
                href: "/dashboard/coaches",
            },
            {
                label: "Veliler",
                icon: Heart,
                href: "/dashboard/parents",
            },
        ]
    },
    {
        group: "Organizasyon",
        items: [
            {
                label: "Takımlar",
                icon: UserPlus,
                href: "/dashboard/teams",
            },
            {
                label: "Takvim",
                icon: CalendarDays,
                href: "/dashboard/calendar",
            },
            {
                label: "Turnuvalar",
                icon: Trophy,
                href: "/dashboard/tournaments",
            },
        ]
    },
    {
        group: "Sistem",
        items: [
            {
                label: "Analizler",
                icon: BarChart3,
                href: "/dashboard/analytics",
            },
            {
                label: "Ayarlar",
                icon: Settings,
                href: "/dashboard/settings",
            },
        ]
    },
]

export function Sidebar({ isCollapsed }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className="flex h-full flex-col gap-2">
            <div className="flex h-14 items-center justify-center border-b px-3">
                <Link
                    href="/dashboard"
                    className={cn(
                        "flex items-center gap-2 font-semibold text-foreground",
                        isCollapsed ? "justify-center" : "justify-start w-full"
                    )}
                >
                    <span className="text-base">⚽</span>
                    {!isCollapsed && "Football Academy"}
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start gap-2 px-2 text-xs font-medium">
                    {routes.map((group, i) => (
                        <div key={i} className="grid gap-1">
                            {!isCollapsed && (
                                <h4 className="text-xs font-semibold text-muted-foreground/70 px-2">
                                    {group.group}
                                </h4>
                            )}
                            {group.items.map((route) => (
                                <Button
                                    key={route.href}
                                    variant="ghost"
                                    className={cn(
                                        "relative flex h-8 items-center justify-start gap-2 px-2 text-muted-foreground hover:text-foreground hover:bg-muted/80",
                                        pathname === route.href && "bg-primary/10 text-primary font-medium hover:bg-primary/10 hover:text-primary",
                                        isCollapsed && "justify-center"
                                    )}
                                    asChild
                                >
                                    <Link href={route.href}>
                                        <route.icon className="h-3.5 w-3.5" />
                                        {!isCollapsed && route.label}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
} 