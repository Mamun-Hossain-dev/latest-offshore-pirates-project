"use client";

import { type ReactNode } from "react";
import { Providers } from "./ClientProver";
import { Navbar } from "@/app/_components/navbar";
import { Footer } from "@/app/_components/footer";
import { Toaster } from "sonner";

export function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Navbar />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </Providers>
  );
}
