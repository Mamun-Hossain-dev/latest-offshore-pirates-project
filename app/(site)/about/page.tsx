import { Metadata } from "next";
import AboutPageClient from "@/app/_components/about-page-client";
import {
  CheckCircle,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Offshore Pirates | Global BPO Leader",
  description: "Learn about Offshore Pirates, a multi-international BPO powerhouse dedicated to transforming how businesses achieve operational excellence and sustainable growth.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const expertise = [
    "Customer Support & Call Center Services",
    "Back-Office Operations",
    "Finance & Accounting Outsourcing",
    "Digital Marketing",
    "Healthcare Process Outsourcing (HPO)",
    "Logistics & Operations Support",
    "Virtual Assistant Services",
  ];

  const whyChooseUs = [
    {
      icon: "Shield",
      title: "Fearless Commitment",
      description:
        "No challenge is too complex, no client too niche. We deliver customized, scalable BPO solutions for businesses of all sizes, industries, and geographies.",
    },
    {
      icon: "Zap",
      title: "Relentless Innovation",
      description:
        "By integrating cutting-edge technology, data-driven insights, and process automation, we continuously enhance performance and exceed expectations.",
    },
    {
      icon: "Target",
      title: "Unmatched Service Excellence",
      description:
        "We don't just meet KPIs — we redefine them, ensuring measurable outcomes that fuel your growth.",
    },
  ];

  const benefits = [
    "Operates efficiently",
    "Dominates search rankings",
    "Attracts qualified leads",
    "Grows organically",
  ];

  const timeline = [
    {
      year: "2018",
      text: "Founded by experienced outsourcing veterans with a mission to transform global BPO industry.",
    },
    {
      year: "2020",
      text: "Expanded finance and back-office practices, becoming a trusted leader in comprehensive BPO solutions.",
    },
    {
      year: "2023",
      text: "Global delivery hubs launched across multiple continents for true follow-the-sun support.",
    },
    {
      year: "2025",
      text: "AI-first micro-automation suite introduced with SEO-driven strategies for maximum impact.",
    },
  ];

  return <AboutPageClient expertise={expertise} whyChooseUs={whyChooseUs} benefits={benefits} timeline={timeline} />;
}