"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Clock, Zap, Award } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication in our software development projects.",
    icon: Award
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to deliver cutting-edge IPTV and OTT platform solutions.",
    icon: Lightbulb
  },
  {
    title: "Reliability",
    description: "Our software solutions are built to be dependable and our development team is always there when you need us.",
    icon: ShieldCheck
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, becoming an extension of their team for custom software development projects.",
    icon: Users
  },
  {
    title: "Efficiency",
    description: "We value your time and resources, optimizing for maximum impact with minimal waste in our development process.",
    icon: Zap
  },
  {
    title: "Long-term thinking",
    description: "We build mobile and web applications not just for today, but for sustainable growth tomorrow.",
    icon: Clock
  }
];

export default function AboutValues() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Values as a Software Development Company</h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              At MIGHTYSCAPE, our values are the foundation of everything we do as a leading software development company in Kerala. 
              They guide our decisions, shape our culture, and define how we collaborate 
              with our clients and each other in delivering exceptional IPTV and OTT platform solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="mr-4 mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:ml-12"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MIGHTYSCAPE software development team collaboration in Kerala office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <blockquote className="text-lg font-medium text-foreground">
                  "Our mission is to empower businesses through innovative software development and technology solutions."
                </blockquote>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}