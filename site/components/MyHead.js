import Head from 'next/head'

export default function MyHead({ title, description, image, url }) {
    const siteTitle = title ? `${title} | My Site` : "My Site | Premium Bio Link";
    const siteDescription = description || "Connect with me through my official links.";
    const siteImage = image || "/images/default-og.png"; // ควรมีภาพสำรองไว้

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            
            {/* Theme Color - ทำให้แถบ Browser ในมือถือเป็นสีเดียวกับธีมเรา (Indigo) */}
            <meta name="theme-color" content="#6366f1" /> 
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} key="title" />
            <meta property="og:description" content={siteDescription} key="description" />
            <meta property="og:image" content={siteImage} key="image" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />

            {/* Favicon & Assets */}
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
            
            {/* Font Preloading (Optional) - ช่วยให้เว็บโหลดฟอนต์สวยๆ ได้เร็วขึ้น */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
    )
}