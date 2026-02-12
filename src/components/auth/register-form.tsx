"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, Loader2, User, Mail, Lock, Shield } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    role: z.enum(["ADMIN", "COACH", "PARENT", "PLAYER"], {
        required_error: "Please select a role.",
    }),
})

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        console.log("Registration attempt:", values)
        
        // For demo purposes, show success and redirect
        alert(`Welcome to OSAAK FC, ${values.name}! Registration successful!`)
        
        // Set loading to false before redirect
        setIsLoading(false)
        
        // Redirect to login page after successful registration
        window.location.href = "/auth/login"
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Full Name
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Enter your full name" 
                                    {...field}
                                    className="focus:border-green-800 focus:ring-green-800"
                                />
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
                            <FormLabel className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="player@osaakfc.com" 
                                    {...field}
                                    className="focus:border-green-800 focus:ring-green-800"
                                />
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
                            <FormLabel className="flex items-center gap-2">
                                <Lock className="w-4 h-4" />
                                Password
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="Create a strong password" 
                                        {...field}
                                        className="focus:border-green-800 focus:ring-green-800 pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
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
                            <FormLabel className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                I am joining as
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="focus:border-green-800 focus:ring-green-800">
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="PLAYER">🏃 Player</SelectItem>
                                    <SelectItem value="COACH">👨‍🏫 Coach</SelectItem>
                                    <SelectItem value="PARENT">👨‍👩‍👧‍👦 Parent</SelectItem>
                                    <SelectItem value="ADMIN">🔐 Administrator</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-4">
                    <Button 
                        type="submit" 
                        className="w-full bg-green-800 hover:bg-green-900 transition-all duration-300"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating your account...
                            </>
                        ) : (
                            "Join OSAAK FC Academy"
                        )}
                    </Button>
                    <div className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link 
                            href="/auth/login" 
                            className="text-green-800 hover:text-green-900 hover:underline font-medium transition-colors duration-200"
                        >
                            Sign In to OSAAK FC
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
} 