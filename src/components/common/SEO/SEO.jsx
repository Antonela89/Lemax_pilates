import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const siteName = "Le Max Centro de Pilates";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDesc = "Centro de Pilates en Rafaela especializado en Reformer y Pilates Clínico. Mejorá tu postura y bienestar con profesionales.";

    return (
        <Helmet>
            {/* Título básico */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || "pilates rafaela, reformer, pilates clínico, bienestar, salud"} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content="/og-image.jpg" /> {/* Foto de 1200x630px en carpeta public */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
            
            <link rel="canonical" href="https://lemaxpilates.com.ar" />
        </Helmet>
    );
};

export default SEO;