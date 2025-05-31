export const defaultLocale = "en"
export const locales = ["en", "pt"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Header
    "header.features": "Features",
    "header.testimonials": "Testimonials",
    "header.pricing": "Pricing",
    "header.integrations": "Integrations",
    "header.dashboard": "Dashboard",
    "header.signIn": "Sign In",
    "header.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "🚀 New: AI-Powered Workflow Automation",
    "hero.title": "Streamline Your",
    "hero.titleHighlight": "Workflow",
    "hero.subtitle":
      "Boost productivity by 40% with our AI-powered project management platform. Collaborate seamlessly, automate tasks, and deliver results faster than ever.",
    "hero.startTrial": "Start Free Trial",
    "hero.watchDemo": "Watch Demo",
    "hero.disclaimer": "No credit card required • 14-day free trial • Cancel anytime",

    // AI Technology Section
    "ai.badge": "AI-Powered",
    "ai.title": "Cutting-Edge AI Technology",
    "ai.subtitle":
      "Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance productivity.",
    "ai.automation.title": "Smart Automation",
    "ai.automation.description": "Automate repetitive tasks and workflows with AI-powered intelligence",
    "ai.analytics.title": "AI Analytics",
    "ai.analytics.description": "Get deep insights with machine learning-powered analytics",
    "ai.assistant.title": "AI Assistant",
    "ai.assistant.description": "Your personal AI assistant for project management",

    // Features
    "features.prioritization": "Intelligent task prioritization",
    "features.triggers": "Automated workflow triggers",
    "features.allocation": "Predictive resource allocation",
    "features.metrics": "Predictive performance metrics",
    "features.detection": "Anomaly detection",
    "features.queries": "Natural language queries",
    "features.recommendations": "Intelligent recommendations",
    "features.updates": "Automated status updates",
    "features.scheduling": "Smart meeting scheduling",

    // Integrations
    "integrations.badge": "Professional Grade",
    "integrations.title": "Enterprise-Ready Integrations",
    "integrations.subtitle":
      "Connect with the tools your team already uses. Seamless integration with professional platforms.",
    "integrations.viewAll": "View All Integrations",

    // Contact Form
    "contact.title": "Get in Touch",
    "contact.description": "Send us a message and we'll respond as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company (Optional)",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Thank you for your message!",
    "contact.successDescription": "We'll get back to you within 24 hours.",
    "contact.sendAnother": "Send Another Message",

    // Footer
    "footer.description":
      "Empowering teams to work smarter, collaborate better, and achieve more with our comprehensive AI-powered project management platform.",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.integrations": "Integrations",
    "footer.api": "API",
    "footer.support": "Support",
    "footer.documentation": "Documentation",
    "footer.helpCenter": "Help Center",
    "footer.contactUs": "Contact Us",
    "footer.status": "Status",
    "footer.rights": "© 2024 StreamLine. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
  },
  pt: {
    // Header
    "header.features": "Recursos",
    "header.testimonials": "Depoimentos",
    "header.pricing": "Preços",
    "header.integrations": "Integrações",
    "header.dashboard": "Dashboard",
    "header.signIn": "Entrar",
    "header.getStarted": "Começar",

    // Hero Section
    "hero.badge": "🚀 Novo: Automação de Fluxo de Trabalho com IA",
    "hero.title": "Otimize Seu",
    "hero.titleHighlight": "Fluxo de Trabalho",
    "hero.subtitle":
      "Aumente a produtividade em 40% com nossa plataforma de gerenciamento de projetos alimentada por IA. Colabore perfeitamente, automatize tarefas e entregue resultados mais rápido do que nunca.",
    "hero.startTrial": "Iniciar Teste Grátis",
    "hero.watchDemo": "Ver Demonstração",
    "hero.disclaimer": "Sem cartão de crédito • Teste grátis de 14 dias • Cancele a qualquer momento",

    // AI Technology Section
    "ai.badge": "Alimentado por IA",
    "ai.title": "Tecnologia de IA de Ponta",
    "ai.subtitle":
      "Aproveite o poder da inteligência artificial para automatizar tarefas, obter insights e aumentar a produtividade.",
    "ai.automation.title": "Automação Inteligente",
    "ai.automation.description":
      "Automatize tarefas repetitivas e fluxos de trabalho com inteligência alimentada por IA",
    "ai.analytics.title": "Analytics de IA",
    "ai.analytics.description": "Obtenha insights profundos com analytics alimentados por aprendizado de máquina",
    "ai.assistant.title": "Assistente de IA",
    "ai.assistant.description": "Seu assistente pessoal de IA para gerenciamento de projetos",

    // Features
    "features.prioritization": "Priorização inteligente de tarefas",
    "features.triggers": "Gatilhos de fluxo de trabalho automatizados",
    "features.allocation": "Alocação preditiva de recursos",
    "features.metrics": "Métricas de desempenho preditivas",
    "features.detection": "Detecção de anomalias",
    "features.queries": "Consultas em linguagem natural",
    "features.recommendations": "Recomendações inteligentes",
    "features.updates": "Atualizações de status automatizadas",
    "features.scheduling": "Agendamento inteligente de reuniões",

    // Integrations
    "integrations.badge": "Nível Profissional",
    "integrations.title": "Integrações Prontas para Empresas",
    "integrations.subtitle":
      "Conecte-se com as ferramentas que sua equipe já usa. Integração perfeita com plataformas profissionais.",
    "integrations.viewAll": "Ver Todas as Integrações",

    // Contact Form
    "contact.title": "Entre em Contato",
    "contact.description": "Envie-nos uma mensagem e responderemos o mais rápido possível.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.company": "Empresa (Opcional)",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Obrigado pela sua mensagem!",
    "contact.successDescription": "Entraremos em contato em até 24 horas.",
    "contact.sendAnother": "Enviar Outra Mensagem",

    // Footer
    "footer.description":
      "Capacitando equipes a trabalhar de forma mais inteligente, colaborar melhor e alcançar mais com nossa plataforma abrangente de gerenciamento de projetos alimentada por IA.",
    "footer.product": "Produto",
    "footer.features": "Recursos",
    "footer.pricing": "Preços",
    "footer.integrations": "Integrações",
    "footer.api": "API",
    "footer.support": "Suporte",
    "footer.documentation": "Documentação",
    "footer.helpCenter": "Central de Ajuda",
    "footer.contactUs": "Fale Conosco",
    "footer.status": "Status",
    "footer.rights": "© 2024 StreamLine. Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.cookies": "Política de Cookies",
  },
} as const

export function getTranslation(locale: Locale, key: keyof typeof translations.en): string {
  return translations[locale][key] || translations.en[key]
}
