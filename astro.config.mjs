// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true, // Forces URLs to be /es/... and /en/...
            redirectToDefaultLocale: false, // We will handle custom language detection manually
        },
    },

    // 1. Reemplaza 'tu-usuario' con tu nombre de usuario exacto de GitHub
    site: 'https://JavierMahana.github.io',

    // 2. Si el nombre de tu repositorio es "natalia-mahana-web", pon '/natalia-mahana-web'.
    // NOTA: Si el repositorio se llama exactamente "tu-usuario.github.io" o usarás un dominio propio (.com, .de), NO pongas 'base' (puedes borrar esa línea).
    base: '/WebNatiV2',
});


