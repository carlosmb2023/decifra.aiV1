"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  MessageSquare,
  FileText,
  ImageIcon,
  Video,
  Code,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-[#181B22] border-r border-gray-800 transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className,
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            {!collapsed && (
              <Link href="/portal/dashboard" className="flex items-center">
                <span className="text-xl font-bold gradient-text">Decifra Aí!</span>
              </Link>
            )}
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setCollapsed(!collapsed)}>
              <ChevronRight className={cn("h-4 w-4 transition-transform", collapsed ? "rotate-180" : "")} />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              <NavItem href="/portal/dashboard" icon={<Home />} label="Dashboard" collapsed={collapsed} />
              <NavItem href="/portal/chat" icon={<MessageSquare />} label="Chat IA" collapsed={collapsed} />
              <NavItem href="/portal/conteudo" icon={<FileText />} label="Gerador de Conteúdo" collapsed={collapsed} />
              <NavItem href="/portal/imagens" icon={<ImageIcon />} label="Gerador de Imagens" collapsed={collapsed} />
              <NavItem href="/portal/videos" icon={<Video />} label="Gerador de Vídeos" collapsed={collapsed} />
              <NavItem href="/portal/prompts" icon={<Code />} label="Biblioteca de Prompts" collapsed={collapsed} />
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <ul className="space-y-1">
              <NavItem href="/portal/configuracoes" icon={<Settings />} label="Configurações" collapsed={collapsed} />
              <NavItem href="/" icon={<LogOut />} label="Sair" collapsed={collapsed} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  collapsed: boolean
}

function NavItem({ href, icon, label, collapsed }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors",
          href === "/portal/chat" && "bg-gradient-to-r from-[#00FFFF]/20 to-[#0080FF]/20 text-cyan-400",
        )}
      >
        <span className="mr-3">{icon}</span>
        {!collapsed && <span>{label}</span>}
      </Link>
    </li>
  )
}
