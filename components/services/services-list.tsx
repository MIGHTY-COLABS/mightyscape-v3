"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Code, Cloud, Palette, Shield, GitBranch } from "lucide-react";

const services = [
  {
    id: "custom-dev",
    title: "Custom Software Development",
    description: "Tailored web, mobile, and embedded applications that solve real business problems. We create software that addresses your specific challenges and opportunities.",
    icon: Code,
    color: "bg-chart-1/10",
    textColor: "text-chart-1",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Full-stack web application development",
      "Native and cross-platform mobile apps",
      "Embedded software solutions",
      "Legacy system modernization",
      "Scalable architecture design",
      "Performance optimization",
      "Comprehensive testing strategy",
      "Ongoing maintenance and support"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Consulting",
    description: "Infrastructure automation, CI/CD pipelines, AWS/Azure setups, and scaling strategy. We help businesses leverage the full potential of cloud technology.",
    icon: Cloud,
    color: "bg-chart-2/10",
    textColor: "text-chart-2",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Cloud migration planning and execution",
      "Infrastructure as Code (IaC) implementation",
      "CI/CD pipeline automation",
      "Containerization and orchestration",
      "Cost optimization and resource management",
      "High-availability architecture design",
      "Security best practices implementation",
      "24/7 monitoring and alerting setup"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Human-centered design thinking for applications, dashboards, and user workflows. We create intuitive interfaces that users love to interact with.",
    icon: Palette,
    color: "bg-chart-3/10",
    textColor: "text-chart-3",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "User research and persona development",
      "Information architecture planning",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and analysis",
      "Accessibility compliance",
      "Design system creation",
      "Interactive prototypes"
    ]
  },
  {
    id: "drm",
    title: "DRM & Secure Streaming",
    description: "Widevine, ClearKey, and advanced content protection systems for OTT/IPTV. We ensure your valuable content remains secure while providing a seamless viewer experience.",
    icon: Shield,
    color: "bg-chart-4/10",
    textColor: "text-chart-4",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Multi-DRM implementation (Widevine, PlayReady, FairPlay)",
      "Token-based authentication",
      "Geo-restriction capabilities",
      "Watermarking solutions",
      "Secure key delivery",
      "Piracy monitoring and prevention",
      "License delivery optimization",
      "Content encryption best practices"
    ]
  },
  {
    id: "integration",
    title: "Enterprise Integration & APIs",
    description: "Middleware, microservices, and legacy system integrations for modern businesses. We connect disparate systems and enable seamless data flow across your organization.",
    icon: GitBranch,
    color: "bg-chart-5/10",
    textColor: "text-chart-5",
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "API design and development",
      "Microservices architecture",
      "Legacy system integration",
      "ESB and message queue implementation",
      "ETL process automation",
      "Data mapping and transformation",
      "Third-party system integration",
      "API security and governance"
    ]
  }
];

export default function ServicesList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16">
      <div className="container">
        {services.map((service, index) => (
          <div 
            key={service.id}
            id={service.id}
            className={`mb-24 ${index !== services.length - 1 ? "border-b pb-24" : ""}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.textColor}`} />
                </div>
                <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button>Contact Us</Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={index % 2 !== 0 ? "lg:mr-12" : "lg:ml-12"}
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full object-cover aspect-video"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}