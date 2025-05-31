import type React from "react"
import Link from "next/link"
import { Twitter, Instagram, Youtube, Facebook, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#10131A] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">Decifra Aí!</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              O hub definitivo de inteligência artificial, reunindo as últimas tendências, ferramentas e recursos para
              transformar sua experiência digital.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialIcon href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialIcon href="https://youtube.com" icon={<Youtube size={18} />} />
              <SocialIcon href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/social">Social</FooterLink>
              <FooterLink href="/sobre">Sobre</FooterLink>
              <FooterLink href="/portal">Portal IA</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-2">
              <FooterLink href="/recursos/chatbots">Chatbots</FooterLink>
              <FooterLink href="/recursos/geradores">Geradores de Conteúdo</FooterLink>
              <FooterLink href="/recursos/prompts">Biblioteca de Prompts</FooterLink>
              <FooterLink href="/recursos/tutoriais">Tutoriais</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Decifra Aí! Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/termos" className="text-gray-500 hover:text-gray-300 text-sm">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-gray-500 hover:text-gray-300 text-sm">
              Política de Privacidade
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gradient-to-r hover:from-[#00FFFF] hover:to-[#C724B1] hover:text-white transition-all duration-300"
      aria-label="Siga-nos nas redes sociais"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-cyan-400 transition-colors">
        {children}
      </Link>
    </li>
  )
}
