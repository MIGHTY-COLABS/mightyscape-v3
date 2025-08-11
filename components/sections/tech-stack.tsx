"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  {
    alt_text: "Android mobile app development platform",
    image_url: "https://mightyscape.com/image/logos/android.png"
  },
  {
    alt_text: "Android TV IPTV platform development",
    image_url: "https://mightyscape.com/image/logos/android_tv.png"
  },
  {
    alt_text: "iOS mobile app development",
    image_url: "https://mightyscape.com/image/logos/ios.png"
  },
  {
    alt_text: "Apple TV OTT platform development",
    image_url: "https://mightyscape.com/image/logos/iostv.png"
  },
  {
    alt_text: "Roku streaming platform development",
    image_url: "https://mightyscape.com/image/logos/roku.png"
  },
  {
    alt_text: "Samsung Tizen smart TV development",
    image_url: "https://mightyscape.com/image/logos/tizen.png"
  },
  {
    alt_text: "Java enterprise software development",
    image_url: "https://mightyscape.com/image/logos/java.png"
  },
  {
    alt_text: "Kotlin Android app development",
    image_url: "https://mightyscape.com/image/logos/kotlin.png"
  },
  {
    alt_text: "Swift iOS app development",
    image_url: "https://mightyscape.com/image/logos/swift.png"
  },
  {
    alt_text: "Node.js backend development",
    image_url: "https://mightyscape.com/image/logos/node.png"
  },
  {
    alt_text: "Google Cloud Platform services",
    image_url: "https://mightyscape.com/image/logos/google.png"
  },
  {
    alt_text: "AWS cloud infrastructure services",
    image_url: "https://mightyscape.com/image/logos/aws.png"
  },
  {
    alt_text: "Microsoft Azure cloud services",
    image_url: "https://mightyscape.com/image/logos/azure.png"
  },
  {
    alt_text: "Firebase mobile backend services",
    image_url: "https://mightyscape.com/image/logos/firebase.png"
  },
  {
    alt_text: "Nagra DRM content protection",
    image_url: "https://mightyscape.com/image/logos/nagra.png"
  },
  {
    alt_text: "LG webOS smart TV platform",
    image_url: "https://mightyscape.com/image/logos/lg.png"
  },
  {
    alt_text: "Flussonic streaming server technology",
    image_url: "https://mightyscape.com/image/logos/Artboard 41 copy 2.png"
  },
  {
    alt_text: "Cloudflare CDN and security services",
    image_url: "https://mightyscape.com/image/logos/Artboard 41.png"
  }
];

export default function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack for Software Development</h2>
          <p className="text-muted-foreground">
            We leverage cutting-edge technologies to deliver exceptional IPTV and OTT platform solutions, 
            mobile and web app development, and custom software development services across multiple platforms and devices.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center max-w-7xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.alt_text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={tech.image_url}
                  alt={tech.alt_text}
                  fill
                  className="object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}