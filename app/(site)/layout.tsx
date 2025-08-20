import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayoutWrapper>{children}</ClientLayoutWrapper>;
}