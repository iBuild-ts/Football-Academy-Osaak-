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
        group: "General",
        items: [
            {
                label: "Dashboard",
                icon: LayoutDashboard,
                href: "/dashboard",
            },
        ]
    },
    {
        group: "Members",
        items: [
            {
                label: "Players",
                icon: Users,
                href: "/dashboard/players",
            },
            {
                label: "Coaches",
                icon: GraduationCap,
                href: "/dashboard/coaches",
            },
            {
                label: "Parents",
                icon: Heart,
                href: "/dashboard/parents",
            },
        ]
    },
    {
        group: "Organization",
        items: [
            {
                label: "Teams",
                icon: UserPlus,
                href: "/dashboard/teams",
            },
            {
                label: "Schedule",
                icon: CalendarDays,
                href: "/dashboard/calendar",
            },
            {
                label: "Tournaments",
                icon: Trophy,
                href: "/dashboard/tournaments",
            },
        ]
    },
    {
        group: "System",
        items: [
            {
                label: "Analytics",
                icon: BarChart3,
                href: "/dashboard/analytics",
            },
            {
                label: "Settings",
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
                    href="/"
                    className={cn(
                        "flex items-center gap-2 font-semibold text-foreground",
                        isCollapsed ? "justify-center" : "justify-start w-full"
                    )}
                >
                    <div className="w-6 h-6 bg-green-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">O</span>
                    </div>
                    {!isCollapsed && "OSAAK FC"}
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