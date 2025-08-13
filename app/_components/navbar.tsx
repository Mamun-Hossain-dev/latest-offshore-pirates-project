"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <div className="container mx-auto px-4 md:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="size-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">OP</span>
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
              pathname.startsWith(l.href) ? "text-foreground" : "text-muted-foreground",
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
          className="hidden sm:inline-flex bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          <Link href="/contact">Get Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
