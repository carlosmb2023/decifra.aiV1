"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n"

interface LanguageToggleProps {
  currentLocale: Locale
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={currentLocale === "en" ? "bg-accent" : ""}>
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("pt")} className={currentLocale === "pt" ? "bg-accent" : ""}>
          🇧🇷 Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
