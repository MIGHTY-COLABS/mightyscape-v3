import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const values = [
  "Engineer-founded",
  "Client-focused",
  "Product-obsessed",
  "Team-oriented",
  "Future-ready",
  "Quality-driven",
];

export default function AboutPreview() {
  return (
    <section className="py-20 about-preview">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="about-story">
              <h2 className="text-3xl font-bold mb-6">
                About MIGHTYSCAPE - Leading Software Development Company in
                Kerala
              </h2>
              <p className="text-muted-foreground mb-6">
                We are a premier software development company in Kerala, India,
                passionate about delivering scalable, secure, and future-ready
                software solutions. Our expertise spans IPTV and OTT platform
                solutions, mobile and web app development, digital signage
                solutions, DRM, CDN, and custom software development services.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="outline" className="group">
                <Link href="/about">
                  Learn more about our software development company
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-lg" />
          </div>

          <div className="approach-panel">
            <h3 className="text-2xl font-bold mb-6">
              Our Approach to Software Development
            </h3>
            <div className="space-y-6">
              <div className="approach-item">
                <h4 className="font-semibold mb-2">We care — deeply</h4>
                <p className="text-sm text-muted-foreground">
                  About both our clients and our employees. Our success is
                  measured by the success of those we work with and those who
                  work with us in delivering exceptional IPTV and OTT platform
                  solutions.
                </p>
              </div>

              <div className="approach-item">
                <h4 className="font-semibold mb-2">
                  Small but elite development team
                </h4>
                <p className="text-sm text-muted-foreground">
                  We work like a family, deliver like a force. Our compact team
                  of expert developers brings focused expertise to every mobile
                  and web app development project we undertake.
                </p>
              </div>

              <div className="approach-item">
                <h4 className="font-semibold mb-2">Beyond building software</h4>
                <p className="text-sm text-muted-foreground">
                  We don't just build — we solve, support, and scale. Every
                  custom software development solution is designed with
                  longevity and adaptability in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
