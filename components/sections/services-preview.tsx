"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Code, Cloud, Palette, Shield, GitBranch } from "lucide-react";

const services = [
  {
    id: "custom-dev",
    title: "Custom Software Development",
    description: "Tailored web, mobile, and embedded applications that solve real business problems. Expert custom software development services in India.",
    icon: Code,
    href: "/services#custom-dev"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Consulting",
    description: "Infrastructure automation, CI/CD pipelines, AWS/Azure setups, and scaling strategy. Professional cloud consulting services in Kerala.",
    icon: Cloud,
    href: "/services#cloud-devops"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Services",
    description: "Human-centered design thinking for apps, dashboards, and user workflows. Expert UI/UX design services for mobile and web applications.",
    icon: Palette,
    href: "/services#ui-ux"
  },
  {
    id: "drm",
    title: "DRM & Secure Streaming Solutions",
    description: "Widevine, ClearKey, and advanced content protection systems for OTT/IPTV platforms. Professional DRM integration services.",
    icon: Shield,
    href: "/services#drm"
  },
  {
    id: "integration",
    title: "Enterprise Integration & APIs",
    description: "Middleware, microservices, and legacy system integrations for modern businesses. CDN solutions and enterprise API development.",
    icon: GitBranch,
    href: "/services#integration"
  }
];

export default function ServicesPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Our Software Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Expert software development services tailored to your unique business challenges.
            From custom software development to mobile and web app development, DRM solutions, and cloud consulting - 
            let's build something remarkable together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="group">
                    <Link href={service.href}>
                      Learn more about our services
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/services">Explore all our development services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}