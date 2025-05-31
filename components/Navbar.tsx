"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E12]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Decifra Aí!</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/social">Social</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>

            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                <span>Recursos</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#181B22] border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <NavLink href="/recursos/chatbots" className="block px-4 py-2">
                    Chatbots
                  </NavLink>
                  <NavLink href="/recursos/geradores" className="block px-4 py-2">
                    Geradores
                  </NavLink>
                  <NavLink href="/recursos/prompts" className="block px-4 py-2">
                    Prompts
                  </NavLink>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-[#00FFFF] to-[#0080FF] hover:opacity-90 text-black font-medium"
            >
              <Link href="/portal">
                <LogIn className="mr-2 h-4 w-4" />
                Acessar Portal
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0B0E12] border-t border-gray-800">
          <MobileNavLink href="/blog">Blog</MobileNavLink>
          <MobileNavLink href="/social">Social</MobileNavLink>
          <MobileNavLink href="/sobre">Sobre</MobileNavLink>
          <MobileNavLink href="/recursos/chatbots">Chatbots</MobileNavLink>
          <MobileNavLink href="/recursos/geradores">Geradores</MobileNavLink>
          <MobileNavLink href="/recursos/prompts">Prompts</MobileNavLink>
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#00FFFF] to-[#0080FF] hover:opacity-90 text-black font-medium"
            >
              <Link href="/portal">
                <LogIn className="mr-2 h-4 w-4" />
                Acessar Portal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-300 hover:text-white transition-colors hover:text-shadow-sm hover:text-shadow-cyan-400/50",
        className,
      )}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
    >
      {children}
    </Link>
  )
}
