"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NinjasX() {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 bg-muted/30 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/30 via-primary/20 to-background border shadow-md"
        >
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-3">
                  🔥 The MIGHTYSCAPIANS
                </h2>
                <p className="text-xl max-w-2xl">
                  Our silent but unstoppable tech warriors who make the magic
                  happen behind the scenes.
                </p>
              </div>
              <Button
                onClick={() => setExpanded(!expanded)}
                variant="secondary"
                size="lg"
                className="min-w-36 self-start md:self-auto group"
              >
                {expanded ? (
                  <>
                    Hide Details
                    <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    Reveal Secrets
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </>
                )}
              </Button>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 pt-8 border-t"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Team Stats</h3>
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                          <span>Engineers:</span>
                          <span className="text-xl font-bold">15+</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Designers:</span>
                          <span className="text-xl font-bold">2+</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Product Specialists:</span>
                          <span className="text-xl font-bold">4+</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Years of Experience:</span>
                          <span className="text-xl font-bold">100+</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Happiness Counter:</span>
                          <span className="text-xl font-bold">Infinite</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Coffees per Week:</span>
                          <span className="text-xl font-bold">Counting</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Culture Highlights
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              01
                            </span>
                          </div>
                          <span>Remote-first environment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              02
                            </span>
                          </div>
                          <span>Continuous learning mindset</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              03
                            </span>
                          </div>
                          <span>Weekly tech knowledge sharing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              04
                            </span>
                          </div>
                          <span>Monthly team activities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              05
                            </span>
                          </div>
                          <span>Quarterly hackathons</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              06
                            </span>
                          </div>
                          <span>Flexible work arrangements</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Tech Stack Mastery
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Next.js",
                          "Node.js",
                          "Python",
                          "AWS",
                          "Azure",
                          "Docker",
                          "Kubernetes",
                          "MongoDB",
                          "PostgreSQL",
                          "TypeScript",
                          "Go",
                          "Flutter",
                          "React Native",
                          "GraphQL",
                          "Swift",
                          "Kotlin",
                          "TensorFlow",
                          "Kafka",
                          "Redis",
                          "ElasticSearch",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-background/60 backdrop-blur-sm rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      The MIGHTY Manifesto
                    </h3>
                    <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                      "We work in the shadows to serve the light. Our code is
                      our craft, our solutions our legacy. We build not just for
                      today, but for tomorrow's challenges. Quality is
                      non-negotiable, and the user experience is paramount. We
                      are The MIGHTYSCAPIANS  — silent, effective, unstoppable."
                    </blockquote>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
