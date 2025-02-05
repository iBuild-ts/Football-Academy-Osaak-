"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "İsim en az 2 karakter olmalıdır.",
    }),
    email: z.string().email({
        message: "Geçerli bir e-posta adresi giriniz.",
    }),
    phone: z.string().min(10, {
        message: "Geçerli bir telefon numarası giriniz.",
    }),
    title: z.string().min(2, {
        message: "Ünvan en az 2 karakter olmalıdır.",
    }),
    department: z.string({
        required_error: "Lütfen bir departman seçiniz.",
    }),
    location: z.string().min(2, {
        message: "Konum en az 2 karakter olmalıdır.",
    }),
    bio: z.string().max(500, {
        message: "Biyografi en fazla 500 karakter olabilir.",
    }),
    socialTwitter: z.string().optional(),
    socialLinkedin: z.string().optional(),
    socialInstagram: z.string().optional(),
})

export function ProfileSettings() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Ahmet Yılmaz",
            email: "ahmet@example.com",
            phone: "+90 555 123 4567",
            title: "Teknik Direktör",
            department: "U15",
            location: "İstanbul",
            bio: "Football Academy'de U15 takımı antrenörü olarak görev yapıyorum.",
            socialTwitter: "https://twitter.com/ahmetyilmaz",
            socialLinkedin: "https://linkedin.com/in/ahmetyilmaz",
            socialInstagram: "https://instagram.com/ahmetyilmaz",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="/avatars/01.png" alt="Profil fotoğrafı" />
                    <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Profil Fotoğrafı</h3>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            Değiştir
                        </Button>
                        <Button variant="outline" size="sm">
                            Kaldır
                        </Button>
                    </div>
                </div>
            </div>

            <Separator />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Kişisel Bilgiler</h3>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>İsim</FormLabel>
                                        <FormControl>
                                            <Input placeholder="İsminizi girin" {...field} />
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
                                            <Input placeholder="E-posta adresinizi girin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Telefon</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Telefon numaranızı girin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">İş Bilgileri</h3>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ünvan</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ünvanınızı girin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Departman</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Departman seçin" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="U13">U13 Takımı</SelectItem>
                                                <SelectItem value="U15">U15 Takımı</SelectItem>
                                                <SelectItem value="U17">U17 Takımı</SelectItem>
                                                <SelectItem value="U19">U19 Takımı</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Konum</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Konumunuzu girin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Hakkında</h3>
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Biyografi</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Kendinizden bahsedin"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        En fazla 500 karakter.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Sosyal Medya</h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <FormField
                                control={form.control}
                                name="socialTwitter"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Twitter</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Twitter profiliniz" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="socialLinkedin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LinkedIn</FormLabel>
                                        <FormControl>
                                            <Input placeholder="LinkedIn profiliniz" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="socialInstagram"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Instagram profiliniz" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">Değişiklikleri Kaydet</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
} 