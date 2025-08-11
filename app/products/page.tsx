import { Metadata } from "next";
import ProductsHero from "@/components/products/products-hero";
import ProductDetails from "@/components/products/product-details";
import ProductCta from "@/components/products/product-cta";

export const metadata: Metadata = {
  title: "IPTV & OTT Platform Solutions | Digital Signage | Hospitality Software - MIGHTYSCAPE Products",
  description: "Explore MIGHTYSCAPE's comprehensive product suite: LiveLink IPTV and OTT platform solutions, HostLink hospitality management software, and advanced digital signage solutions. Leading software development company in Kerala, India.",
  keywords: "IPTV and OTT platform solutions, LiveLink IPTV software, hospitality management software, HostLink hotel software, digital signage solutions, DRM integration, multi-platform streaming, software development Kerala",
  openGraph: {
    title: "IPTV & OTT Platform Solutions | Digital Signage | Hospitality Software - MIGHTYSCAPE",
    description: "Discover MIGHTYSCAPE's innovative products: LiveLink IPTV and OTT platform solutions, HostLink hospitality management software, and digital signage solutions.",
    url: "https://mightyscape.com/products",
  },
  alternates: {
    canonical: "https://mightyscape.com/products",
  },
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'MIGHTYSCAPE Software Solutions',
    description: 'Comprehensive software product suite including IPTV and OTT platform solutions, hospitality management software, and digital signage solutions',
    brand: {
      '@type': 'Brand',
      name: 'MIGHTYSCAPE'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'MIGHTYSCAPE PRIVATE LIMITED'
    },
    category: 'Software Solutions',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <ProductsHero />
        <ProductDetails />
        <ProductCta />
      </div>
    </>
  );
}