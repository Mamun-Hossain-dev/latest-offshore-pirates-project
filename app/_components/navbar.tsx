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
  { href: "/careers", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-200/20 bg-gradient-to-r from-white/95 via-cyan-50/95 to-blue-50/95 backdrop-blur-md dark:from-gray-950/95 dark:via-cyan-950/95 dark:to-blue-950/95 dark:border-cyan-800/20">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center">
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
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
            Offshore Pirates
          </span>
        </Link>

        <nav className="hidden md:flex ml-10 gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm font-medium transition-all duration-300 hover:text-cyan-600 dark:hover:text-cyan-400",
                "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full",
                pathname === l.href ||
                  (l.href !== "/" && pathname.startsWith(l.href))
                  ? "text-cyan-600 dark:text-cyan-400 before:w-full"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/contact">Get Consultation</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                size="icon"
                aria-label="Open menu"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-gradient-to-b from-white to-cyan-50/50 dark:from-gray-950 dark:to-cyan-950/50 border-l border-cyan-200/20 dark:border-cyan-800/20"
            >
              <div className="flex items-center gap-3 pt-4 pb-8 border-b border-cyan-200/20 dark:border-cyan-800/20">
                <div className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                  <Image
                    src="/offshor_logo.png"
                    width={32}
                    height={32}
                    alt="Offshore Pirates Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Offshore Pirates
                </span>
              </div>
              <nav className="flex flex-col gap-2 pt-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "text-base font-medium px-4 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/20",
                      pathname === l.href ||
                        (l.href !== "/" && pathname.startsWith(l.href))
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-100/30 dark:bg-cyan-900/30"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-medium shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Consultation</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
