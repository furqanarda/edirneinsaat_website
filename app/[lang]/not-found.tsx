import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-foreground">
      <header className="w-full backdrop-blur-sm bg-black/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Edirne Construction Limited</div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Sayfa Bulunamadı</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Aradığınız sayfa mevcut değil veya taşınmış.
          </p>
          <Link href="/" className="stylish-button primary px-6 py-3 text-base font-medium">
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
      <footer className="py-8">
        <div className="container flex justify-center">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} Edirne Construction Limited. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  )
}

