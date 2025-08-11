import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/hero-section";
import ProductsPreview from "@/components/sections/products-preview";
import ServicesPreview from "@/components/sections/services-preview";
import AboutPreview from "@/components/sections/about-preview";
import TeamPreview from "@/components/sections/team-preview";
import TechStack from "@/components/sections/tech-stack";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      <ServicesPreview />
      <TechStack />
      <TeamPreview />
      <CtaSection />
    </div>
  );
}