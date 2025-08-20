import { ALL_SERVICES } from "../_lib/services";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                  <Image
                    src="/offshor_logo.png"
                    width={120}
                    height={120}
                    alt="Offshore Pirates Logo"
                    className="w-10 h-10 rounded-full ring-2 ring-white/50 group-hover:ring-white/80 transition-all duration-300"
                  />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                Offshore Pirates
              </span>
            </Link>
            <p className="text-white text-sm leading-relaxed">
              Your trusted partner for comprehensive BPO services. We deliver
              exceptional results with global talent and local expertise.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/offshorepirates"
                className="text-white hover:text-cyan-300 transition-colors"
              >
                <Facebook className="size-5" />
              </Link>
              <Link
                href="https://twitter.com/offshorepirates"
                className="text-white hover:text-cyan-300 transition-colors"
              >
                <Twitter className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/offshorepirates"
                className="text-white hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-white hover:text-cyan-300 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {ALL_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white hover:text-cyan-300 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="size-4 text-cyan-300" />
                <span className="text-white text-sm">
                  House-05, Road-03, Block-D, Banasree, Rampura, Dhaka-1219
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="size-4 text-cyan-300" />
                <span className="text-white text-sm">+8801810119575</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="size-4 text-cyan-300" />
                <span className="text-white text-sm">
                  info@offshorepirates.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            © 2024 Offshore Pirates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
