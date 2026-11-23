"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = (usePathname() ?? "/").replace(/\/$/, "") || "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="container header-layout">
        <Link href="/" className="brand-link" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/image/mightyscape-dark-wordmark.png" alt="MIGHTYSCAPE" width={1920} height={320} className="brand-image" priority />
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={mobileMenuOpen ? "site-nav is-open" : "site-nav"}
        >
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={href === "/contact" ? "nav-contact" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
