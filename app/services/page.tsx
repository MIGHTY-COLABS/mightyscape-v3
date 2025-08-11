import { Metadata } from "next";
import ServicesHero from "@/components/services/services-hero";
import ServicesList from "@/components/services/services-list";
import ServicesCta from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Mobile & Web App Development | DRM & CDN - MIGHTYSCAPE",
  description: "MIGHTYSCAPE offers comprehensive software development services in Kerala, India: custom software development, mobile and web app development, cloud & DevOps consulting, UI/UX design, DRM & secure streaming, CDN solutions, and enterprise integration services.",
  keywords: "custom software development in India, mobile and web app development, cloud DevOps consulting Kerala, UI UX design services, DRM secure streaming solutions, CDN services India, enterprise integration, software development company Kerala",
  openGraph: {
    title: "Custom Software Development Services | Mobile & Web App Development - MIGHTYSCAPE",
    description: "Comprehensive software development services including custom development, mobile and web apps, cloud consulting, DRM solutions, and enterprise integration.",
    url: "https://mightyscape.com/services",
  },
  alternates: {
    canonical: "https://mightyscape.com/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development Services',
    provider: {
      '@type': 'Organization',
      name: 'MIGHTYSCAPE PRIVATE LIMITED'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            description: 'Tailored web, mobile, and embedded applications that solve real business problems'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile and Web App Development',
            description: 'Native and cross-platform mobile apps, full-stack web applications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud & DevOps Consulting',
            description: 'Infrastructure automation, CI/CD pipelines, AWS/Azure setups, and scaling strategy'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DRM & Secure Streaming',
            description: 'Widevine, ClearKey, and advanced content protection systems for OTT/IPTV'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Integration & APIs',
            description: 'Middleware, microservices, and legacy system integrations'
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <ServicesHero />
        <ServicesList />
        <ServicesCta />
      </div>
    </>
  );
}