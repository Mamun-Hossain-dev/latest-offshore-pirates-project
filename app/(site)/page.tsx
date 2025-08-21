import { Metadata } from "next";
import { getAllBlogPosts } from "@/app/_lib/blog";
import HomePageClient from "@/app/_components/home-page-client";
import { ServiceCard } from "@/app/_components/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Layers,
  Calculator,
  Shield,
  Globe2,
  Sparkles,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Offshore Outsourcing & BPO Services | Offshore Pirates",
  description: "Scale your operations with our leading offshore outsourcing solutions. We provide expert BPO services in customer support, back-office, finance, and more.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const top3 = [
    {
      slug: "customer-support-services",
      name: "Customer Support Services",
      desc: "Deliver exceptional customer experiences 24/7 across all channels. Our expert teams ensure seamless, multilingual support that boosts satisfaction and retention.",
    },
    {
      slug: "back-office-support",
      name: "Back Office Support",
      desc: "Streamline your operations with efficient, accurate back-office solutions. We handle data entry, processing, and administrative tasks, freeing your core team for strategic initiatives.",
    },
    {
      slug: "call-center-support",
      name: "Call Center Support",
      desc: "Transform customer interactions into loyalty and sales with our high-performance call center solutions. Experience scalable, quality-driven voice support tailored to your brand.",
    },
  ];

  const whyChooseUsItems = [
    {
      title: "Omnichannel Expertise",
      desc: "We deliver a seamless and unified brand experience across every channel, from voice and chat to email and social media. Our integrated approach ensures your customers receive consistent, high-quality support at every touchpoint.",
      icon: <Headphones className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Operational Rigor",
      desc: "Our delivery is relentlessly KPI-driven and backed by stringent SLAs to guarantee measurable outcomes. We are obsessed with performance, providing the data-backed results your business needs to thrive.",
      icon: <Shield className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Process Design",
      desc: "We engineer lean, automated workflows designed for maximum efficiency and scalability. Our meticulously documented processes ensure transparent, repeatable success that grows with your business.",
      icon: <Layers className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Financial Clarity",
      desc: "Gain unparalleled insight with real-time dashboards and transparent reporting, all while lowering your total cost of ownership. We provide the financial visibility you need to make informed, strategic decisions.",
      icon: <Calculator className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Global Reach",
      desc: "With our follow-the-sun coverage and multilingual support teams, we are always on, wherever your customers are. Our global footprint ensures true 24/7 availability and localized expertise.",
      icon: <Globe2 className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Innovation First",
      desc: "We embed AI-powered micro-automations and cutting-edge solutions into our services to drive efficiency and unlock new value. Partner with us to stay ahead of the curve and turn innovation into a competitive advantage.",
      icon: <Sparkles className="size-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      desc: "We provide HIPAA-compliant support and back-office solutions, enabling healthcare providers to focus on patient care while we handle administrative burdens with precision and confidentiality.",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Finance",
      desc: "Our secure and compliant financial services teams streamline everything from accounting to risk management, helping you reduce costs and enhance accuracy in a fast-paced market.",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Retail",
      desc: "From customer support to inventory management, we help retail and e-commerce brands scale operations, manage seasonal peaks, and deliver exceptional customer experiences that build loyalty.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SaaS",
      desc: "We offer specialized technical support and customer success teams that integrate seamlessly with your brand, driving user adoption and retention for your software products.",
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Logistics",
      desc: "Our 24/7 operations support and data management services ensure your supply chain runs smoothly, providing the visibility and efficiency needed to navigate complex global logistics.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Travel",
      desc: "We deliver multilingual customer service and booking support for the travel and hospitality industry, ensuring your customers receive world-class service, wherever their journey takes them.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const latestBlogs = getAllBlogPosts().slice(0, 3);

  return <HomePageClient top3={top3} whyChooseUsItems={whyChooseUsItems} industries={industries} latestBlogs={latestBlogs} />;
}