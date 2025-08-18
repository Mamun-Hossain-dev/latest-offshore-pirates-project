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
      "24/7 Inbound Customer Support (inquiries, order tracking, complaints, technical troubleshooting)",
      "Proactive Outbound Engagement (sales calls, customer surveys, retention campaigns)",
      "Multi-Tier Technical Support (Tier 1–3 helpdesk for software, hardware, and digital products)",
      "Real-Time Live Chat Support with instant issue resolution and escalation protocols",
      "Professional Email Support Services with SLA-driven response times and quality assurance",
      "Social Media Customer Care across Facebook, X/Twitter, Instagram, and LinkedIn platforms",
      "Omnichannel Integration seamlessly connecting phone, chat, email, and social media interactions",
      "Quality Assurance Programs with call monitoring, coaching, and performance optimization",
    ],
    features: [
      "24/7 Global Availability",
      "Multilingual Support (15+ Languages)",
      "Advanced CRM Integration",
      "SLA Compliance & Reporting",
      "Quality Monitoring",
      "Escalation Management",
    ],
    benefits: [
      "Boost Customer Satisfaction by 45%",
      "Increase Customer Retention Rates by 35%",
      "Reduce Average Response Times by 60%",
      "Scale Support Operations Globally",
      "Lower Support Costs by 40%",
      "Improve First-Call Resolution Rates",
    ],
    detailedDescription:
      "Our customer support services are designed to create exceptional customer experiences that drive loyalty and business growth. We combine advanced technology with human expertise to deliver personalized support that reflects your brand values and exceeds customer expectations.",
  },
  "back-office-support": {
    subsections: [
      "Comprehensive Data Entry & Processing with 99.9% accuracy guarantee",
      "Order & Payment Processing with real-time tracking and automated workflows",
      "Advanced CRM Management including data cleansing and customer segmentation",
      "HR & Payroll Administration with compliance monitoring and reporting",
      "Regulatory Compliance Support across multiple industries and jurisdictions",
      "Professional Transcription Services for audio, video, and document conversion",
      "Document Management & Digital Archiving with secure cloud storage solutions",
      "Invoice Processing & Accounts Management with automated approval workflows",
    ],
    features: [
      "Process Automation & AI Integration",
      "Quality Assurance Protocols",
      "Secure Data Handling & Encryption",
      "Scalable Operations Infrastructure",
      "Real-time Reporting",
      "Compliance Monitoring",
    ],
    benefits: [
      "Reduce Operational Costs by 50%",
      "Improve Process Efficiency by 70%",
      "Focus Team on Core Business Activities",
      "Ensure 99.9% Data Accuracy",
      "Accelerate Processing Times",
      "Enhance Compliance & Security",
    ],
    detailedDescription:
      "Transform your back-office operations with our comprehensive support services that eliminate bottlenecks, reduce errors, and free your team to focus on strategic growth initiatives.",
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
      {/* Enhanced Hero Section with more detailed content */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30" />
          <Image
            src={`/abstract-geometric-shapes.png?height=600&width=1920&query=${service.name} professional service background`}
            alt={service.name}
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-15"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-36 relative z-10">
          <div className="max-w-5xl">
            <Badge className="bg-cyan-400/20 text-cyan-100 border-cyan-300/40 mb-8 text-base px-6 py-3 font-medium">
              Professional BPO Service Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-12 max-w-4xl">
              {service.desc}
            </p>

            {details?.detailedDescription && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <p className="text-lg text-white/90 leading-relaxed">
                  {details.detailedDescription}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-3 size-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/15 px-10 py-5 rounded-full text-xl font-bold bg-transparent backdrop-blur-sm"
              >
                Schedule Consultation
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
