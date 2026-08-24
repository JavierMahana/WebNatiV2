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
    site: 'https://nataliamahana.com',
});


