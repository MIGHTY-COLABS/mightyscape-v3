"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactDetails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          We'd love to hear from you! Here's how you can reach us, or feel free to use the form to send us a message.
        </p>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-primary/10 rounded-full p-3 mt-1">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Office</h3>
              <address className="not-italic text-muted-foreground">
                Building No: XVIII/419, Ayathupady,<br />
                Koovappady, Ernakulam,<br />
                Kunnathunad, Kerala, India, 683544
              </address>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-primary/10 rounded-full p-3 mt-1">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email Us</h3>
              <p className="text-muted-foreground">
                <a href="mailto:support@mightyscape.com" className="hover:text-primary transition-colors">
                  support@mightyscape.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-primary/10 rounded-full p-3 mt-1">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call Us</h3>
              <p className="text-muted-foreground">
                <a href="tel:+918301995600" className="hover:text-primary transition-colors block">
                  +91 830 1995 600
                </a>
                <a href="tel:+918301995700" className="hover:text-primary transition-colors block">
                  +91 830 1995 700
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 rounded-full p-3 mt-1">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9am - 6pm IST</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="rounded-xl overflow-hidden h-[400px] relative bg-muted">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4899.072949542855!2d76.47025757592553!3d10.144800789968148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e30022fe674b%3A0xb85c249fa8fcec45!2sMIGHTYSCAPE%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1787032140663!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </motion.div>
  );
}