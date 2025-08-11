"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, FileText } from "lucide-react";

export default function ProductCta() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-muted/50 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Our products are designed to solve real challenges and drive meaningful results.
            Let's discuss how they can work for your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="mailto:hello@mightyscape.com">
                <FileText className="mr-2 h-4 w-4" />
                Download Brochure
              </a>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-card border rounded-lg max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Need a Ready-Made Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Explore our suite of products designed to address common challenges in IPTV, 
              hospitality, and digital signage.
            </p>
            <Button asChild variant="link" className="group">
              <Link href="/products">
                View our product offerings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}