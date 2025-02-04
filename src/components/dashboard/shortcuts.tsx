"use client"

import { useEffect, useState } from "react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {
    CalendarDays,
    GraduationCap,
    LayoutDashboard,
    Settings,
    Trophy,
    Users,
    UserPlus,
    Heart,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { DialogTitle } from "@/components/ui/dialog"

interface ShortcutsProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function Shortcuts({ open, onOpenChange }: ShortcutsProps) {
    const router = useRouter()

    const runCommand = (command: () => void) => {
        onOpenChange(false)
        command()
    }

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <DialogTitle className="sr-only">Kısayollar</DialogTitle>
            <CommandInput placeholder="Bir komut yazın veya arama yapın..." />
            <CommandList>
                <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
                <CommandGroup heading="Sayfalar">
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard"))}
                    >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/players"))}
                    >
                        <Users className="mr-2 h-4 w-4" />
                        Oyuncular
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/coaches"))}
                    >
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Antrenörler
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/parents"))}
                    >
                        <Heart className="mr-2 h-4 w-4" />
                        Veliler
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Takım">
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/teams"))}
                    >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Takımlar
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/tournaments"))}
                    >
                        <Trophy className="mr-2 h-4 w-4" />
                        Turnuvalar
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Ayarlar">
                    <CommandItem
                        onSelect={() => runCommand(() => router.push("/dashboard/settings"))}
                    >
                        <Settings className="mr-2 h-4 w-4" />
                        Ayarlar
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
} 