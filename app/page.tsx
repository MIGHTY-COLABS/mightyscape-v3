import HeroSection from "@/components/sections/hero-section";
import ProductsPreview from "@/components/sections/products-preview";
import ServicesPreview from "@/components/sections/services-preview";
import AboutPreview from "@/components/sections/about-preview";
import TeamPreview from "@/components/sections/team-preview";
import TechStack from "@/components/sections/tech-stack";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <ProductsPreview />
      <ServicesPreview />
      <AboutPreview />
      <TechStack />
      <TeamPreview />
      <CtaSection />
    </div>
  );
}
