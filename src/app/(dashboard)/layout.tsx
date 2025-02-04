"use client"

import { DashboardNav } from "@/components/dashboard/nav"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className="relative flex min-h-screen">
            <div className={cn(
                "hidden border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block transition-all duration-300",
                isCollapsed ? "lg:w-[70px]" : "lg:w-[240px]"
            )}>
                <Sidebar isCollapsed={isCollapsed} />
            </div>
            <div className="flex flex-1 flex-col">
                <DashboardNav isCollapsed={isCollapsed} onCollapsedChange={setIsCollapsed} />
                <main className="flex-1 overflow-y-auto">
                    <div className="p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
} 