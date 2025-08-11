"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MIGHTYSCAPE</h1>
            <p className="text-xl text-muted-foreground mb-8">
              MIGHTYSCAPE PRIVATE LIMITED is a technology company passionate about delivering scalable, 
              secure, and future-ready software solutions. Our offerings span IPTV, hospitality tech, 
              digital signage, and custom digital transformation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Engineer-Founded</h3>
              <p className="text-muted-foreground text-sm">
                Built by developers who understand technical challenges from the inside out.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Client-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Committed to delivering solutions that exceed expectations and drive real value.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Product-Obsessed</h3>
              <p className="text-muted-foreground text-sm">
                Fanatical about crafting exceptional software that's robust, scalable, and delightful to use.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}