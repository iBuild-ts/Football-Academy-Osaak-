"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "İsim en az 2 karakter olmalıdır.",
    }),
    email: z.string().email({
        message: "Geçerli bir e-posta adresi giriniz.",
    }),
    password: z.string().min(6, {
        message: "Şifre en az 6 karakter olmalıdır.",
    }),
    role: z.enum(["ADMIN", "COACH", "PARENT", "PLAYER"], {
        required_error: "Lütfen bir rol seçiniz.",
    }),
})

export function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>İsim</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-posta</FormLabel>
                            <FormControl>
                                <Input placeholder="ornek@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Şifre</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rol</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Rol seçiniz" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="ADMIN">Admin</SelectItem>
                                    <SelectItem value="COACH">Antrenör</SelectItem>
                                    <SelectItem value="PARENT">Veli</SelectItem>
                                    <SelectItem value="PLAYER">Oyuncu</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-4">
                    <Button type="submit" className="w-full">
                        Kayıt Ol
                    </Button>
                    <div className="text-sm text-center text-muted-foreground">
                        Zaten hesabınız var mı?{" "}
                        <Link href="/auth/login" className="text-primary hover:underline">
                            Giriş Yap
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
} 