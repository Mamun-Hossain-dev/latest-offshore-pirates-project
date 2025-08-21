import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

import { Navbar } from "@/app/_components/navbar";
import { Footer } from "@/app/_components/footer";
import Script from 'next/script';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Offshore Pirates',
  'url': 'https://www.offshorepirates.com',
  'logo': 'https://www.offshorepirates.com/offshor_logo.png',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayoutWrapper>
      <main className="min-h-screen">{children}</main>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </ClientLayoutWrapper>
  );
}