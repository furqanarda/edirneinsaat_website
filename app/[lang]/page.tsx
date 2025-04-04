import { Mail, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import { getDictionary } from "./dictionaries"
import LanguageSwitcher from "@/components/language-switcher"
import SubscriptionModal from "@/components/subscription-modal"

export default async function UnderConstruction({
  params,
}: {
  params: { lang: string }
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-foreground">
      <div className="container mx-auto px-4 py-6 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} />
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Edirne Construction Limited Logo"
              width={200}
              height={200}
              className="h-auto"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{dict.underConstruction.title}</h1>

          <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>

          <p className="text-xl md:text-2xl mb-16 text-muted-foreground max-w-2xl mx-auto">
            {dict.underConstruction.message}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex flex-col items-center p-8 rounded-lg border bg-black/40 backdrop-blur-sm text-card-foreground shadow-xl">
              <Calendar className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{dict.underConstruction.launch}</h3>
              <p>{dict.underConstruction.launchDate}</p>
            </div>

            <a href="mailto:info@edirnegroup.com" className="flex flex-col items-center p-8 rounded-lg border bg-black/40 backdrop-blur-sm text-card-foreground shadow-xl hover:bg-black/60 transition-colors">
              <Mail className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{dict.underConstruction.email}</h3>
              <p>info@edirnegroup.com</p>
            </a>

            <a href="https://wa.me/902842255141" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 rounded-lg border bg-black/40 backdrop-blur-sm text-card-foreground shadow-xl hover:bg-black/60 transition-colors">
              <Phone className="h-12 w-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{dict.underConstruction.phone}</h3>
              <p>(284) 225-5141</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <SubscriptionModal 
              label={dict.underConstruction.notify}
              lang={lang}
            />
            <a 
              href="https://wa.me/902842255141" 
              target="_blank" 
              rel="noopener noreferrer"
              className="stylish-button secondary px-8 py-6 text-base font-medium"
            >
              {dict.underConstruction.contact}
            </a>
          </div>
        </div>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Edirne İnşaat Limited. {dict.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

