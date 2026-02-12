import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-gradient-to-br from-green-800 to-green-900 p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-green-900/90" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-800 font-bold">O</span>
                    </div>
                    <span className="text-xl">OSAAK FC</span>
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &quot;Where young champions are born and dreams take flight.&quot;
                        </p>
                        <footer className="text-sm">Elite Coaching Staff - OSAAK FC</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Card className="border-0 shadow-none">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl text-center">Join OSAAK FC</CardTitle>
                            <CardDescription className="text-center">
                                Start your journey to football excellence
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
} 