import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-4xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center">
          Football Academy Management System
        </h1>
        <p className="text-lg text-center text-muted-foreground">
          Modern ve kullanıcı dostu futbol akademisi yönetim sistemi
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/auth/login">Giriş Yap</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/auth/register">Kayıt Ol</Link>
          </Button>
        </div>
      </Card>
    </main>
  )
}
