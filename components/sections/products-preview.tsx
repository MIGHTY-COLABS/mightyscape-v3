"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Tv, Building, Layout } from "lucide-react";

const products = [
  {
    id: "livelink",
    title: "LIVELINK",
    subtitle: "IPTV & OTT Platform Solutions",
    description: "End-to-end IPTV and OTT platform solutions for Android TV, Smart TVs, and more. High performance, DRM-ready, client-branded streaming solutions.",
    icon: Tv,
    color: "bg-chart-1/10",
    textColor: "text-chart-1",
    href: "/products#livelink"
  },
  {
    id: "hostlink",
    title: "HostLink",
    subtitle: "Hospitality Management Software Suite",
    description: "Powerful, cloud-based hospitality management software for hotels and resorts. Everything from front-desk operations to housekeeping and comprehensive reporting.",
    icon: Building,
    color: "bg-chart-2/10",
    textColor: "text-chart-2",
    href: "/products#hostlink"
  },
  {
    id: "signage",
    title: "Digital Signage Solutions",
    subtitle: "Remote Display Control System",
    description: "Real-time remote digital signage solutions for displays across industries — malls, hospitals, retail, and more. Advanced content management system.",
    icon: Layout,
    color: "bg-chart-3/10",
    textColor: "text-chart-3",
    href: "/products#signage"
  }
];

export default function ProductsPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Our Software Products & Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Powerful IPTV and OTT platform solutions, hospitality management software, and digital signage solutions designed for real-world challenges.
            Built with performance, security, and scalability in mind by our expert development team in Kerala.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                    <product.icon className={`h-6 w-6 ${product.textColor}`} />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group">
                    <Link href={product.href}>
                      Learn more about our solutions
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
            <Link href="/products">View all our software products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}