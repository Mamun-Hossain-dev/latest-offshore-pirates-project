import { fetchServiceById, fetchServices } from "@/app/_lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ServiceCard } from "@/app/_components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Service details mapping based on the provided content
const serviceDetails = {
  "customer-support-services": {
    subsections: [
      "Inbound Customer Support (inquiries, order tracking, complaints, troubleshooting)",
      "Outbound Engagement (sales, surveys, retention calls)",
      "Technical Support (Tier 1–3 helpdesk for software, hardware, digital products)",
      "Live Chat Support (real-time issue resolution)",
      "Email Support Services (SLA-driven responses)",
      "Social Media Customer Care (Facebook, X/Twitter, Instagram)",
      "Omnichannel Integration (phone, chat, email, social)",
    ],
    features: [
      "24/7 Availability",
      "Multilingual Support",
      "Omnichannel Integration",
      "SLA Compliance",
    ],
    benefits: [
      "Boost Customer Satisfaction",
      "Increase Retention Rates",
      "Reduce Response Times",
      "Scale Globally",
    ],
  },
  "back-office-support": {
    subsections: [
      "Data Entry & Processing",
      "Order & Payment Processing",
      "CRM Management",
      "HR & Payroll Administration",
      "Compliance Support",
      "Transcription Services",
    ],
    features: [
      "Process Automation",
      "Quality Assurance",
      "Secure Data Handling",
      "Scalable Operations",
    ],
    benefits: [
      "Reduce Operational Costs",
      "Improve Efficiency",
      "Focus on Core Business",
      "Ensure Accuracy",
    ],
  },
  "accounting-finance-outsourcing": {
    subsections: [
      "Bookkeeping Services",
      "Accounts Payable (AP)",
      "Accounts Receivable (AR)",
      "Invoice Processing",
      "Payroll Processing",
      "Financial Reporting & Analysis",
      "Audit Support Services",
    ],
    features: [
      "GAAP Compliance",
      "Real-time Reporting",
      "Secure Processing",
      "Expert Analysis",
    ],
    benefits: [
      "Financial Transparency",
      "Cost Reduction",
      "Compliance Assurance",
      "Strategic Insights",
    ],
  },
  "call-center-support": {
    subsections: [
      "Inbound Call Handling",
      "Outbound Calling Campaigns",
      "IVR Solutions",
      "Cold & Warm Calling",
      "Appointment Scheduling",
      "Survey & Market Research Calls",
      "Emergency/After-Hours Support",
    ],
    features: [
      "Advanced IVR",
      "Call Recording",
      "Performance Analytics",
      "Multi-channel Support",
    ],
    benefits: [
      "Increase Sales",
      "Improve Customer Experience",
      "24/7 Availability",
      "Cost Efficiency",
    ],
  },
  "logistics-operations": {
    subsections: [
      "Order Management",
      "Inventory Control",
      "Shipment Coordination",
      "Returns & Refunds Processing",
      "Carrier Management",
      "Warehouse Documentation",
      "Procurement Support",
    ],
    features: [
      "Real-time Tracking",
      "Automated Workflows",
      "Multi-carrier Support",
      "Inventory Optimization",
    ],
    benefits: [
      "Reduce Shipping Costs",
      "Improve Delivery Times",
      "Optimize Inventory",
      "Enhance Visibility",
    ],
  },
  "healthcare-process-outsourcing": {
    subsections: [
      "Medical Billing & Coding",
      "Insurance Claims Processing",
      "Patient Scheduling & Support",
      "Medical Transcription Services",
      "Telemedicine Support",
      "Healthcare Data Entry",
    ],
    features: [
      "HIPAA Compliance",
      "Certified Coders",
      "Secure Systems",
      "Quality Assurance",
    ],
    benefits: [
      "Reduce Billing Errors",
      "Faster Reimbursements",
      "Compliance Assurance",
      "Cost Savings",
    ],
  },
  "digital-marketing-services": {
    subsections: [
      "Search Engine Optimization (SEO)",
      "Social Media Management",
      "Pay-Per-Click Advertising (PPC)",
      "Email Marketing Campaigns",
      "Content Writing & Blogging",
      "Graphic Design & Branding",
      "Website Design & Development",
    ],
    features: [
      "Data-driven Strategies",
      "Multi-platform Campaigns",
      "Performance Tracking",
      "Creative Excellence",
    ],
    benefits: [
      "Increase Online Visibility",
      "Drive Conversions",
      "Build Brand Awareness",
      "Measurable ROI",
    ],
  },
  "virtual-assistant": {
    subsections: [
      "Email & Calendar Management",
      "Task & Project Coordination",
      "Travel & Accommodation Booking",
      "Online Research",
      "CRM Updates",
      "E-commerce VA Services",
      "Personal Assistance",
    ],
    features: [
      "Dedicated Support",
      "Flexible Hours",
      "Multi-skill Expertise",
      "Secure Communication",
    ],
    benefits: [
      "Increase Productivity",
      "Focus on Core Tasks",
      "Cost-effective Solution",
      "Scalable Support",
    ],
  },
  "design-graphics": {
    subsections: [
      "Brand Identity & Logo Design",
      "Marketing & Advertising Design",
      "Web & Digital Graphics",
      "Social Media Graphics",
      "Packaging & Product Design",
      "Motion Graphics & 3D Design",
    ],
    features: [
      "Creative Excellence",
      "Brand Consistency",
      "Multi-format Delivery",
      "Revision Support",
    ],
    benefits: [
      "Enhance Brand Image",
      "Increase Engagement",
      "Professional Quality",
      "Cost-effective Design",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await fetchServiceById(params.slug).catch(() => {
    notFound();
  });

  const relatedServices = await fetchServices({ limit: 3 });
  const details = serviceDetails[params.slug as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-cyan-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
          <Image
            src={`/abstract-geometric-shapes.png?height=600&width=1920&query=${service.name} professional service background`}
            alt={service.name}
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-cyan-500/20 text-cyan-100 border-cyan-400/30 mb-6 text-sm px-4 py-2">
              Professional BPO Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose Our {service.name}?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to
              service excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Expert Team",
                desc: "Certified professionals with industry expertise",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Round-the-clock availability for your business",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Multilingual teams serving worldwide clients",
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                desc: "Industry-standard security and compliance",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="size-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Details */}
        {details && (
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* What We Offer */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Star className="size-6 text-cyan-500" />
                    What We Offer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {details.subsections.map((subsection, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {subsection}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Benefits */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Zap className="size-6 text-blue-500" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {details.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        <span className="font-medium text-gray-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative z-10 text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have streamlined their
                operations with our {service.name.toLowerCase()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Start Your Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Services */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Explore Our Other Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover how we can help streamline your entire business operation
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.items
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
