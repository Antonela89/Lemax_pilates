import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
    const siteName = 'Le Max Centro de Pilates | Rafaela';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc =
        'Centro de Pilates en Rafaela especializado en Reformer y Pilates Clínico. Mejorá tu postura y bienestar con profesionales.';
    const siteUrl = 'https://lemaxpilates.com.ar';
    const ogImage = `${siteUrl}${image || '/seo/og-image.webp'}`;

    // Busqueda geografica en google maps:
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'HealthClub',
            name: 'Le Max Centro de Pilates - Sucursal José Gálvez',
            image: `${siteUrl}/logo.png`,
            url: siteUrl,
            telephone: '+543424774718',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'José Gálvez 136',
                addressLocality: 'Rafaela',
                addressRegion: 'Santa Fe',
                postalCode: '2300',
                addressCountry: 'AR',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: -31.248819522170123,
                longitude: -61.50725468413996,
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'HealthClub',
            name: 'Le Max Centro de Pilates - Sucursal Córdoba',
            image: `${siteUrl}/logo.png`,
            url: siteUrl,
            telephone: '+543492289600',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Córdoba 429',
                addressLocality: 'Rafaela',
                addressRegion: 'Santa Fe',
                postalCode: '2300',
                addressCountry: 'AR',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: -31.25832835786949,
                longitude: -61.4812458153404,
            },
        },
    ];

    return (
        <Helmet>
            {/* Título básico */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta
                name="keywords"
                content={
                    keywords ||
                    'pilates rafaela, reformer, pilates clínico, bienestar, salud, entrenamiento'
                }
            />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta
                property="og:description"
                content={description || defaultDesc}
            />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={siteUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta
                name="twitter:description"
                content={description || defaultDesc}
            />
            <meta name="twitter:image" content={ogImage} />

            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
};

export default SEO;
