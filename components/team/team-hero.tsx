"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TeamHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Small but elite — we work like a family, deliver like a force.
            Meet the talented individuals who make MIGHTYSCAPE exceptional.
          </motion.p>
        </div>
      </div>
    </section>
  );
}