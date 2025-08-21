import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/whatsapp-button";


export const metadata: Metadata = {
  title: "Offshore Pirates",
  description:
    "Scale your operations with offshore talent that delivers on-demand performance across support, finance, and operations",
  generator: "offshorePirates.com",
  openGraph: {
    title: "Offshore Pirates",
    description:
      "Scale your operations with offshore talent that delivers on-demand performance across support, finance, and operations",
    url: "https://offshorePirates.com",
    siteName: "Offshore Pirates",
    images: ["/og-image.png"], // put this in /public
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}