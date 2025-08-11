import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at MIGHTYSCAPE - Join Our Software Development Team in Kerala | Jobs in IPTV & OTT Development",
  description: "Join MIGHTYSCAPE, a leading software development company in Kerala. Explore career opportunities in IPTV and OTT platform development, mobile and web app development, DevOps, UI/UX design, and custom software development. Work with cutting-edge technologies in Ernakulam, Kerala.",
  keywords: "software developer jobs Kerala, IPTV platform developer careers, mobile app developer jobs India, web development careers Kerala, DevOps engineer jobs Ernakulam, UI UX designer jobs Kerala, software development careers India",
  openGraph: {
    title: "Careers at MIGHTYSCAPE - Software Development Jobs in Kerala",
    description: "Join our team of expert developers and designers. Explore exciting career opportunities in software development, IPTV solutions, and mobile app development.",
    url: "https://mightyscape.com/careers",
  },
  alternates: {
    canonical: "https://mightyscape.com/careers",
  },
};

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Ernakulam, Kerala (Hybrid)",
    experience: "5+ years",
    skills: ["Node.js", "React", "TypeScript", "PostgreSQL", "AWS"],
    description: "We're looking for a senior full-stack developer with strong experience in building scalable web applications. The ideal candidate will have a deep understanding of both frontend and backend technologies."
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Ernakulam, Kerala (Hybrid)",
    experience: "3+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
    description: "Seeking a DevOps engineer to help build and maintain our cloud infrastructure. Experience with containerization and automation is essential."
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Ernakulam, Kerala (Hybrid)",
    experience: "3+ years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "User Testing"],
    description: "Looking for a creative UI/UX designer who can create intuitive and beautiful user interfaces while maintaining a strong focus on user experience."
  }
];

export default function CareersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'MIGHTYSCAPE PRIVATE LIMITED',
      sameAs: 'https://mightyscape.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ernakulam',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      }
    },
    employmentType: 'FULL_TIME',
    industry: 'Software Development'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col w-full pt-24">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Join Our Software Development Team in Kerala</h1>
            <p className="text-xl text-muted-foreground">
              We're looking for passionate individuals who want to make a difference through technology.
              Join us in building innovative IPTV and OTT platform solutions, mobile and web applications, and custom software development projects that impact businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <Button asChild className="md:self-start">
                      <a href={`mailto:support@mightyscape.com?subject=Application for ${position.title}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals to join our software development team in Kerala. 
                  Send us your resume and let us know how you can contribute to MIGHTYSCAPE's innovative projects in IPTV and OTT platform solutions, mobile and web app development, and custom software development.
                </p>
                <Button asChild size="lg">
                  <a href="mailto:support@mightyscape.com?subject=General Application - MIGHTYSCAPE">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Your Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}