import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold text-foreground mb-4">{children}</h3>
);

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img 
                src="https://mightyscape.com/image/Artboard%201.png" 
                alt="MIGHTYSCAPE - Leading Software Development Company in Kerala" 
                className="h-8"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading software development company in Kerala, India, passionate about delivering scalable IPTV and OTT platform solutions, 
              mobile and web app development, digital signage solutions, and custom software development services for businesses worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="MIGHTYSCAPE Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="MIGHTYSCAPE Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="MIGHTYSCAPE LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="MIGHTYSCAPE GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <FooterHeading>Software Products</FooterHeading>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/products#livelink">LiveLink IPTV & OTT Platform Solutions</FooterLink></li>
              <li><FooterLink href="/products#hostlink">HostLink Hospitality Management Software</FooterLink></li>
              <li><FooterLink href="/products#signage">Digital Signage Solutions</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <FooterHeading>Development Services</FooterHeading>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/services#custom-dev">Custom Software Development</FooterLink></li>
              <li><FooterLink href="/services#cloud-devops">Cloud & DevOps Consulting</FooterLink></li>
              <li><FooterLink href="/services#ui-ux">UI/UX Design Services</FooterLink></li>
              <li><FooterLink href="/services#drm">DRM & Secure Streaming</FooterLink></li>
              <li><FooterLink href="/services#integration">Enterprise Integration & CDN</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <FooterHeading>Contact Our Kerala Office</FooterHeading>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>support@mightyscape.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <div className="flex flex-col">
                  <span>+91 830 1995 600</span>
                  <span>+91 830 1995 700</span>
                </div>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>Building No: XVIII/419, Ayathupady, Koovappady, Ernakulam, Kunnathunad, Kerala, India, 683544</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MIGHTYSCAPE PRIVATE LIMITED. All rights reserved. Leading Software Development Company in Kerala, India.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}