import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            Leading Software Development Company in Kerala
          </p>
          <h1>
            We Build <span>Future-Ready</span> IPTV &amp; OTT Platform Solutions
          </h1>
          <p className="hero-description">
            Premier software development company in Kerala specializing in IPTV and OTT platform solutions,
            mobile and web app development, digital signage solutions, DRM, CDN, and custom software development services.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <Link href="/products">Explore Our IPTV &amp; OTT Solutions</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Custom Development Quote</Link>
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <Image
              src="/css/66741775b4fcc728ced7b3bf_hero.webp"
              alt="Two colleagues working together on a laptop"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 94vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
