import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import "../globals.css";

export const metadata: Metadata = {
  title: "Offshore Pirates",
  description:
    "Scale your operations with offshore talent that delivers on-demand performance",
  generator: "offshorePirates.com",
  openGraph: {
    title: "Offshore Pirates",
    description:
      "Scale your operations with offshore talent that delivers on-demand performance",
    url: "https://offshorePirates.com",
    siteName: "Offshore Pirates",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
