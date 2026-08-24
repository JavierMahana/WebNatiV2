export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export type Locale = keyof typeof languages;
export const defaultLang: Locale = 'es';

export const ui = {
    es: {
        'site.title': 'Natalia Mahana Palomer | Psicóloga en Berlín y Online',
        'site.desc': 'Psicología y acompañamiento psicológico en español e inglés. Espacio queer-affirming, intercultural y neuroafirmativo.',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.services': 'Servicios',
        'nav.approach': 'Mi Enfoque',
        'nav.faq': 'Preguntas Frecuentes',
        'nav.contact': 'Contacto',
        'btn.book': 'Reservar una sesión',
        'btn.services': 'Conocer mis servicios',
        'btn.more': 'Conocer más',
        'btn.whatsapp': 'Escribir por WhatsApp',
        'footer.rights': 'Todos los derechos reservados.',
        'brand.sub': 'Psicóloga',
        'footer.description': 'Psicología y acompañamiento psicológico en español e inglés. Espacio queer-affirming, intercultural y neuroafirmativo.',
        'footer.nav': 'Navegación',
        'footer.contact': 'Consulta & Contacto',
        'footer.disclaimer': 'Este sitio web no recopila datos personales sin tu consentimiento.',
    },
    en: {
        'site.title': 'Natalia Mahana Palomer | Psychologist in Berlin & Online',
        'site.desc': 'Psychology and psychological support in English and Spanish. Queer-affirming, intercultural, and neuroaffirmative space.',
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.services': 'Services',
        'nav.approach': 'My Approach',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'btn.book': 'Book a session',
        'btn.services': 'Explore services',
        'btn.more': 'Learn more',
        'btn.whatsapp': 'Chat on WhatsApp',
        'footer.rights': 'All rights reserved.',
        'brand.sub': 'Psychologist',
        'footer.description': 'Psychology and therapeutic support in English and Spanish. Queer-affirming, intercultural, and neuroaffirming space.',
        'footer.nav': 'Navigation',
        'footer.contact': 'Location & Contact',
        'footer.disclaimer': 'This website does not collect personal data without your consent.',
    },
} as const;

export function useTranslations(lang: Locale) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
        return ui[lang]?.[key] || ui[defaultLang][key];
    };
}