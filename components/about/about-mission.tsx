"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  {
    year: "2022",
    title: "Born from Passion",
    description: "MIGHTYSCAPE began as a pursuit by engineers who believed technology should be more human. Fueled by late nights, bold ideas, and the belief that something meaningful was missing — we started building with love, not just logic."
  },
  {
    year: "2023",
    title: "Crafting the Core",
    description: "We weren't chasing trends — we were crafting tools we wished existed. This year was about shaping our identity, growing our team of passionate builders, and laying the foundation for products that solve real-world challenges with soul."
  },
  {
    year: "2024",
    title: "Official Foundation",
    description: "MIGHTYSCAPE PRIVATE LIMITED was officially founded. Not just a company — a collective of creators who care deeply about clients, users, and teammates. We made it official, but the heart remained the same."
  },
  {
    year: "2025",
    title: "Driven by Purpose",
    description: "With products like LIVELINK IPTV, HostLink, and Digital Signage evolving fast, our mission became clearer: to build with purpose, to serve with integrity, and to always put people — clients and teammates — at the center of every line of code."
  }
];

export default function AboutMission() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            We're on a mission to transform businesses through innovative technology solutions.
            Our vision is to be the partner of choice for companies looking to thrive in the digital age.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-primary/20 bg-primary/5 h-full">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses with technology solutions that are scalable, 
                  secure, and future-ready. We're committed to solving real-world 
                  challenges through innovative software that makes a tangible difference 
                  for our clients and their customers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-secondary/20 bg-secondary/5 h-full">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be recognized globally as a leader in technology innovation, 
                  known for our exceptional products, services, and the positive 
                  impact we create. We envision a world where technology enhances 
                  human experiences and drives sustainable growth for businesses of all sizes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8 text-center"
        >
          Our Journey
        </motion.h3>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-border" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              <div className="flex md:w-1/2 md:max-w-xs">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start"} items-center`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="bg-card border rounded-lg p-4 shadow-sm relative">
                    <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}