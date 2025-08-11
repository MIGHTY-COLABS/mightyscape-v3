"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Tv, Building, Layout } from "lucide-react";

const products = [
  {
    id: "livelink",
    title: "LIVELINK",
    subtitle: "IPTV & OTT Platform",
    description: "End-to-end IPTV platform with support for Android TV, Apple TV, iOS, LG, Roku, and Samsung Smart TVs. High performance, DRM-ready, and fully client-branded for a seamless viewing experience.",
    icon: Tv,
    color: "bg-chart-1/10",
    textColor: "text-chart-1",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Multi-platform support (Android TV, Apple TV, iOS, LG, Roku, Samsung)",
      "DRM integration (Widevine, PlayReady)",
      "White-label branding",
      "Advanced analytics and user insights",
      "Adaptive streaming optimization",
      "Cloud DVR capabilities",
      "Advertisement management system",
      "Multi-language support"
    ]
  },
  {
    id: "hostlink",
    title: "HostLink",
    subtitle: "Hospitality Management Suite",
    description: "Powerful, cloud-based software for hotels and resorts. Everything from front-desk operations to housekeeping management and comprehensive reporting.",
    icon: Building,
    color: "bg-chart-2/10",
    textColor: "text-chart-2",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Reservation and booking management",
      "Guest profile and preferences tracking",
      "Room inventory and management",
      "Housekeeping operations dashboard",
      "Point of sale integration",
      "Billing and invoicing automation",
      "Staff management and scheduling",
      "Comprehensive analytics and reporting"
    ]
  },
  {
    id: "signage",
    title: "Digital Signage",
    subtitle: "Remote Display Control",
    description: "Real-time remote signage controller for displays across industries — malls, hospitals, retail, and more. Manage content from anywhere with ease.",
    icon: Layout,
    color: "bg-chart-3/10",
    textColor: "text-chart-3",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Centralized content management",
      "Remote display control",
      "Scheduled content playback",
      "Multi-zone screen layouts",
      "Interactive touchscreen support",
      "Emergency alert system integration",
      "Audience analytics",
      "Hardware-agnostic deployment"
    ]
  }
];

export default function ProductDetails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-6">
        {products.map((product, index) => (
          <div 
            key={product.id}
            id={product.id}
            className={`mb-24 ${index !== products.length - 1 ? "border-b pb-24" : ""}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon className={`h-6 w-6 ${product.textColor}`} />
                </div>
                <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                <p className="text-lg text-muted-foreground mb-2">{product.subtitle}</p>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
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
                
                <Button>Request Demo</Button>
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
                    src={product.image}
                    alt={product.title}
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