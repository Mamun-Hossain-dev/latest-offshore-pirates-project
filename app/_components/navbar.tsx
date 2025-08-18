"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className=" rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">
          <Image
            src="/offshor_logo.png"
            width={120}
            height={120}
            alt="Offshore Pirates Logo"
            className="w-12 h-12 rounded-full ring-4 ring-cyan-600"
          />
        </div>
        <span className="font-extrabold text-lg">Offshore Pirates</span>
      </Link>
      <nav className="hidden md:flex ml-8 gap-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "text-sm hover:underline underline-offset-4 transition-colors",
              pathname.startsWith(l.href)
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Button
          asChild
          className="hidden sm:inline-flex bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
        >
          <Link href="/contact">Get Consultation</Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              size="icon"
              aria-label="Open menu"
              className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 pt-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-lg font-medium hover:text-primary transition-colors",
                    pathname.startsWith(l.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
