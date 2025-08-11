import { Metadata } from "next";
import TeamHero from "@/components/team/team-hero";
import TeamMembers from "@/components/team/team-members";
import TeamCulture from "@/components/team/team-culture";
import NinjasX from "@/components/team/ninjas-x";

export const metadata: Metadata = {
  title: "Our Expert Development Team | Software Engineers & Designers - MIGHTYSCAPE Kerala",
  description: "Meet the talented team behind MIGHTYSCAPE, a leading software development company in Kerala. Our expert developers, designers, and engineers specialize in IPTV and OTT platform solutions, mobile and web app development, and custom software development.",
  keywords: "software development team Kerala, expert developers India, IPTV platform developers, mobile app development team, web development experts Kerala, software engineers Ernakulam, tech team MIGHTYSCAPE",
  openGraph: {
    title: "Our Expert Development Team - MIGHTYSCAPE Kerala",
    description: "Meet the talented team of developers, designers, and engineers behind MIGHTYSCAPE's innovative software solutions.",
    url: "https://mightyscape.com/team",
  },
  alternates: {
    canonical: "https://mightyscape.com/team",
  },
};

export default function TeamPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MIGHTYSCAPE PRIVATE LIMITED',
    employee: [
      {
        '@type': 'Person',
        name: 'Nikhil C Gopi',
        jobTitle: 'Solution Architect | Founder',
        worksFor: {
          '@type': 'Organization',
          name: 'MIGHTYSCAPE PRIVATE LIMITED'
        }
      },
      {
        '@type': 'Person',
        name: 'Minu Theresia',
        jobTitle: 'Project Manager | Founder',
        worksFor: {
          '@type': 'Organization',
          name: 'MIGHTYSCAPE PRIVATE LIMITED'
        }
      },
      {
        '@type': 'Person',
        name: 'Paul Cheriyan',
        jobTitle: 'Full Stack Developer | Founder',
        worksFor: {
          '@type': 'Organization',
          name: 'MIGHTYSCAPE PRIVATE LIMITED'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <TeamHero />
        <TeamMembers />
        <NinjasX />
        <TeamCulture />
      </div>
    </>
  );
}