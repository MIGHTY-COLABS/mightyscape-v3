import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from '@/components/google-analytics';

export const metadata: Metadata = {
  title: 'MIGHTYSCAPE - Leading Software Development Company in Kerala | IPTV & OTT Solutions',
  description: 'MIGHTYSCAPE is a premier software development company in Kerala, India, specialising in IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, DRM, CDN, and custom software development services.',
  keywords: 'software development company in Kerala Kochi, IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, DRM, CDN, custom software development in India, hospitality management software, enterprise solutions Kerala',
  authors: [{ name: 'MIGHTYSCAPE PRIVATE LIMITED' }],
  creator: 'MIGHTYSCAPE PRIVATE LIMITED',
  publisher: 'MIGHTYSCAPE PRIVATE LIMITED',
  robots: 'index, follow',
  openGraph: {
    title: 'MIGHTYSCAPE - Leading Software Development Company in Kerala | IPTV & OTT Solutions',
    description: 'Premier software development company in Kerala specialising in IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, and custom software development services.',
    url: 'https://mightyscape.com',
    siteName: 'MIGHTYSCAPE',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mightyscape.com/image/Artboard%201.png',
        width: 1200,
        height: 630,
        alt: 'MIGHTYSCAPE - Software Development Company in Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIGHTYSCAPE - Leading Software Development Company in Kerala',
    description: 'Premier software development company in Kerala specializing in IPTV and OTT platform solutions, mobile and web app development, and digital signage solutions.',
    images: ['https://mightyscape.com/image/Artboard%201.png'],
  },
  alternates: {
    canonical: 'https://mightyscape.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MIGHTYSCAPE PRIVATE LIMITED',
    alternateName: 'MIGHTYSCAPE',
    url: 'https://mightyscape.com',
    logo: 'https://mightyscape.com/image/Artboard%201.png',
    description: 'Leading software development company in Kerala, India, specialising in IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, DRM, CDN, and custom software development services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Building No: XVIII/419, Ayathupady, Koovappady',
      addressLocality: 'Ernakulam',
      addressRegion: 'Kerala',
      postalCode: '683544',
      addressCountry: 'IN'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-830-1995-600',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      {
        '@type': 'ContactPoint',
        email: 'support@mightyscape.com',
        contactType: 'customer service'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/mightyscape',
      'https://github.com/mightyscape'
    ],
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Nikhil C Gopi'
      },
      {
        '@type': 'Person',
        name: 'Minu Theresia'
      },
      {
        '@type': 'Person',
        name: 'Paul Cheriyan'
      }
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    serviceType: [
      'Software Development',
      'IPTV Solutions',
      'OTT Platform Development',
      'Mobile App Development',
      'Web Application Development',
      'Digital Signage Solutions',
      'DRM Services',
      'CDN Solutions',
      'Custom Software Development'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ernakulam, Kerala" />
        <meta name="geo.position" content="10.297482992646234;76.43661631479055" />
        <meta name="ICBM" content="10.297482992646234, 76.43661631479055" />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}