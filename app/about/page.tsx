import { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutValues from "@/components/about/about-values";
import AboutMission from "@/components/about/about-mission";

export const metadata: Metadata = {
  title: "About MIGHTYSCAPE - Premier Software Development Company in Kerala | Our Story",
  description: "Learn about MIGHTYSCAPE, a leading software development company in Kerala, India. Discover our journey, values, and mission in delivering scalable IPTV and OTT platform solutions, mobile and web app development, and custom software development services.",
  keywords: "about MIGHTYSCAPE, software development company Kerala, IPTV platform development company, OTT solutions provider India, mobile app development Kerala, web development company Ernakulam, custom software development India",
  openGraph: {
    title: "About MIGHTYSCAPE - Premier Software Development Company in Kerala",
    description: "Discover the story behind MIGHTYSCAPE, a leading software development company in Kerala specializing in IPTV and OTT platform solutions, mobile and web app development.",
    url: "https://mightyscape.com/about",
  },
  alternates: {
    canonical: "https://mightyscape.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'MIGHTYSCAPE PRIVATE LIMITED',
      description: 'Leading software development company in Kerala, India, passionate about delivering scalable, secure, and future-ready software solutions including IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, and custom software development services.',
      foundingDate: '2024',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ernakulam',
          addressRegion: 'Kerala',
          addressCountry: 'India'
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <AboutHero />
        <AboutValues />
        <AboutMission />
      </div>
    </>
  );
}