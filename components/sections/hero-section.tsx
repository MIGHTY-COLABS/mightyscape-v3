"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      className="relative min-h-screen flex items-center pt-24"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://mightyscape.com/css/66741775b4fcc728ced7b3bf_hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0" />
      
      <div className="container relative z-10" style={{ paddingLeft: '2rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ paddingLeft: '20px'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                Leading Software Development Company in Kerala
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white"
              >
                We Build
                <span className="text-primary"> Future-Ready</span> IPTV & OTT Platform Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-200 max-w-lg"
              >
                Premier software development company in Kerala specializing in IPTV and OTT platform solutions, 
                mobile and web app development, digital signage solutions, DRM, CDN, and custom software development services.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Explore Our IPTV & OTT Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Link href="/contact">Get Custom Development Quote</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* <div className="aspect-video bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-lg relative overflow-hidden shadow-xl backdrop-blur-sm bg-white/10">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-md shadow-sm"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MIGHTYSCAPE</span>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}