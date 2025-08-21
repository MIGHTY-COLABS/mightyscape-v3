"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Nikhil C Gopi",
    title: "Solution Architect | Founder",
    image: "https://mightyscape.com/image/nikhil_c.jpg",
    linkedin: "#"
  },
  {
    name: "Minu Theresia",
    title: "Project Manager | Founder",
    image: "https://mightyscape.com/image/minu.png",
    linkedin: "#"
  },
  {
    name: "Paul Cheriyan",
    title: "Full Stack Developer | Founder",
    image: "https://mightyscape.com/image/paul.jpg",
    linkedin: "#"
  },
  {
    name: "Nithin Thomas",
    title: "Backend Developer",
    image: "https://mightyscape.com/image/nithin.jpg",
    linkedin: "#"
  }
];

export default function TeamPreview() {
  const [mounted, setMounted] = useState(false);
  const [ninjasExpanded, setNinjasExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-muted/30" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Small but elite — we work like a family, deliver like a force.
            Get to know the faces behind MIGHTYSCAPE.
          </motion.p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-card hover:shadow-md transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                    </div>
                    <a 
                      href={member.linkedin}
                      className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div 
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/30 via-primary/20 to-background border shadow-md"
          >
            <div className="relative z-10 p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">🔥 And the rest of the magic?</h3>
                  <p className="text-lg max-w-xl">
                    That's handled by our amazing team of developers, designers, and specialists who make everything possible.
                  </p>
                </div>
                <Button 
                  onClick={() => setNinjasExpanded(!ninjasExpanded)}
                  variant="secondary"
                  className="min-w-36 self-start md:self-auto"
                >
                  {ninjasExpanded ? "Hide Details" : "Reveal Secrets"}
                </Button>
              </div>
              
              {ninjasExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-background/60 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Team Stats</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Engineers:</span>
                          <span className="font-medium">8+</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Designers:</span>
                          <span className="font-medium">2+</span>
                        </li>
                        <li className="flex justify-between">
                          <span>QA Specialists:</span>
                          <span className="font-medium">2+</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Years of Experience:</span>
                          <span className="font-medium">50+</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/60 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Culture Highlights</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Remote-first environment</li>
                        <li>Continuous learning mindset</li>
                        <li>Weekly tech knowledge sharing</li>
                        <li>Monthly team activities</li>
                        <li>Quarterly hackathons</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/60 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Tech Stack Mastery</h4>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {["React", "Next.js", "Node.js", "Spring Boot", "Android", "iOS", "Roku", "Samsung TV", "MongoDB", "PostgreSQL", "TypeScript", "Java"].map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/30 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <Link href="/team" className="group">
              Meet the full team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}