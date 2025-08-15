import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OP</span>
              </div>
              <span className="font-bold text-xl">Offshore Pirates</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The global crew you&apos;ve been searching for. We deliver fearless
              voices and relentless results across customer support, finance,
              and operations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="size-4 text-indigo-400" />
                <span className="text-sm">hello@offshorepirates.co</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="size-4 text-indigo-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="size-4 text-indigo-400" />
                <span className="text-sm">Global Operations</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Customer Support",
                "Back Office Operations",
                "Accounting & Finance",
                "Technical Support",
                "Sales Development",
                "Content Moderation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/career" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest insights on scaling operations and industry best
              practices.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-indigo-400"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-4">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-white">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="size-10 bg-white/10 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <social.icon className="size-4 text-gray-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Offshore Pirates. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-indigo-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-indigo-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-indigo-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
