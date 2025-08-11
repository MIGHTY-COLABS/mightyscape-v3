import { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactDetails from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact MIGHTYSCAPE - Software Development Company in Kerala | Get Quote for IPTV & OTT Solutions",
  description: "Contact MIGHTYSCAPE, leading software development company in Kerala, India. Get in touch for IPTV and OTT platform solutions, mobile and web app development, digital signage solutions, and custom software development services. Located in Ernakulam, Kerala.",
  keywords: "contact MIGHTYSCAPE, software development company Kerala contact, IPTV platform development quote, mobile app development Kerala, custom software development India, Ernakulam software company",
  openGraph: {
    title: "Contact MIGHTYSCAPE - Software Development Company in Kerala",
    description: "Get in touch with MIGHTYSCAPE for expert software development services including IPTV and OTT solutions, mobile and web app development.",
    url: "https://mightyscape.com/contact",
  },
  alternates: {
    canonical: "https://mightyscape.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'MIGHTYSCAPE PRIVATE LIMITED',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Building No: XVIII/419, Ayathupady, Koovappady',
        addressLocality: 'Ernakulam',
        addressRegion: 'Kerala',
        postalCode: '683544',
        addressCountry: 'IN'
      },
      telephone: ['+91-830-1995-600', '+91-830-1995-700'],
      email: 'support@mightyscape.com',
      url: 'https://mightyscape.com'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <ContactHero />
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </div>
    </>
  );
}