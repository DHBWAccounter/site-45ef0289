"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Top */}
        <div className="text-center mb-8">
          <Link
            href="#"
            className="text-white text-xs uppercase tracking-wider hover:text-primary transition-colors"
          >
            Back to Top
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center justify-center space-x-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xs uppercase tracking-wider hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bitcoin Association Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
}