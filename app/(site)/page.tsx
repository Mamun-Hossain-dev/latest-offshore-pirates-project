"use client";

import Image from "next/image";
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
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ServiceCard } from "@/app/_components/service-card";

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

  const testimonialsData = [
    {
      name: "Riley O'Sullivan",
      role: "VP of Global Support",
      company: "Innovate Inc.",
      testimonial:
        "Partnering with Offshore Pirates has been a game-changer. We were struggling to provide 24/7 support to our growing user base. Their team seamlessly integrated with ours, cutting response times by over 45% and boosting our customer satisfaction scores by a staggering 20% in the first quarter alone. Their dedication to quality is unmatched.",
      rating: 5,
    },
    {
      name: "Morgan Lee",
      role: "Chief Operating Officer",
      company: "RetailerX",
      testimonial:
        "Our back-office operations were a tangled mess of spreadsheets and manual processes. Offshore Pirates came in and engineered a streamlined, automated workflow that has made our SLAs finally predictable. The lift in accuracy and efficiency has been huge, allowing our team to focus on growth instead of getting bogged down in administrative tasks.",
      rating: 5,
    },
    {
      name: "Taylor Rodriguez",
      role: "Chief Financial Officer",
      company: "FinServ Solutions",
      rating: 5,
      testimonial:
        "As a financial services firm, accuracy and compliance are non-negotiable. The accounting team at Offshore Pirates has been phenomenal. Our accounts receivable days outstanding dropped by 18% because of their diligent follow-up and clean, timely reconciliations. They provide the financial clarity we need to make strategic decisions with confidence.",
    },
    {
      name: "Alex Chen",
      role: "Head of Operations",
      company: "Global Logistics Co.",
      testimonial:
        "Offshore Pirates provided exceptional data management services, significantly improving our operational efficiency and reducing manual errors. Their team is highly skilled and responsive.",
      rating: 4,
    },
    {
      name: "Samantha Green",
      role: "Marketing Director",
      company: "E-commerce Solutions",
      testimonial:
        "Their customer support team seamlessly integrated with our existing systems, providing excellent service and improving our customer satisfaction scores. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "Tech Innovators",
      testimonial:
        "We needed specialized technical support, and Offshore Pirates delivered. Their expertise helped us resolve complex issues quickly, enhancing our product's reliability.",
      rating: 5,
    },
    {
      name: "Emily White",
      role: "HR Manager",
      company: "Staffing Solutions",
      testimonial:
        "The back-office support from Offshore Pirates has been invaluable. They handle our administrative tasks with precision, allowing our internal team to focus on core HR functions.",
      rating: 4,
    },
    {
      name: "Chris Brown",
      role: "Sales Manager",
      company: "SalesForce Pro",
      testimonial:
        "Their sales development team generated high-quality leads and significantly boosted our conversion rates. A truly professional and results-driven partnership.",
      rating: 5,
    },
    {
      name: "Jessica Lee",
      role: "Product Manager",
      company: "App Development Co.",
      testimonial:
        "Offshore Pirates' QA services were thorough and efficient, catching critical bugs before launch. Their attention to detail is commendable.",
      rating: 4,
    },
    {
      name: "Michael Davis",
      role: "CEO",
      company: "Startup Hub",
      testimonial:
        "As a startup, cost-efficiency is key. Offshore Pirates provided top-notch services at a fraction of the cost, enabling us to scale rapidly without compromising quality.",
      rating: 5,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const blogData = {
    items: [
      {
        slug: "ai-customer-service",
        title: "The Future of AI in Customer Service",
        excerpt:
          "Discover how artificial intelligence is revolutionizing customer support and what it means for your business.",
        category: "Technology",
      },
      {
        slug: "offshore-outsourcing-trends",
        title: "2024 Offshore Outsourcing Trends",
        excerpt:
          "Key trends shaping the offshore outsourcing industry and how to leverage them for competitive advantage.",
        category: "Business",
      },
      {
        slug: "cost-optimization-strategies",
        title: "Cost Optimization Through Strategic Outsourcing",
        excerpt:
          "Learn proven strategies to reduce operational costs while maintaining service quality through smart outsourcing.",
        category: "Strategy",
      },
    ],
  };

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-600" />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-cyan-900/40 to-transparent" />

          <div className="absolute inset-0 opacity-30" />

          <div className="absolute inset-0">
            {/* Floating elements removed */}
          </div>

          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" viewBox="0 0 1000 500">
              <path
                d="M150,200 Q200,180 250,200 T350,220 Q400,200 450,210 T550,200 Q600,190 650,200 T750,210"
                stroke="url(#worldGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M100,250 Q150,230 200,250 T300,270 Q350,250 400,260 T500,250 Q550,240 600,250 T700,260"
                stroke="url(#worldGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <defs>
                <linearGradient
                  id="worldGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(6, 182, 212)"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="50%"
                    stopColor="rgb(59, 130, 246)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(14, 165, 233)"
                    stopOpacity="0.8"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative">
            <div className="relative z-10 p-8 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-600/25 backdrop-blur-md border border-cyan-300/40 shadow-2xl shadow-cyan-500/25">
              <Headphones className="w-16 h-16 text-cyan-200" />
            </div>

            {/* Orbiting icons removed */}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-30">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/25 backdrop-blur-md border border-cyan-300/40 text-cyan-100 text-sm mb-8 shadow-lg shadow-cyan-500/30">
              <Sparkles className="size-4" />
              Trusted by 500+ Global Brands
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              <span className="block">Fearless Voices.</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Relentless Results.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scale your operations with offshore talent that delivers on-demand
              performance across support, finance, and ops.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <Link href="/services">
                  <Sparkles className="mr-2 size-5" />
                  Explore Services
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 size-5" />
                  Get Consultation
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "Global Clients" },
                { number: "24/7", label: "Support Coverage" },
                { number: "70%", label: "Cost Reduction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-1 drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-cyan-100/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-cyan-300/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-cyan-300/80 rounded-full mt-2 shadow-lg shadow-cyan-300/60" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to scale your operations and
              drive measurable results
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {top3.map((svc, index) => (
              <div key={svc.slug}>
                <ServiceCard service={svc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 border-y">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Offshore Pirates
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine global talent with local expertise to deliver
              exceptional results
            </p>
          </div>

          <div className="group relative w-full overflow-hidden">
            <div className="flex animate-scroll group-hover:pause">
              {[...whyChooseUsItems, ...whyChooseUsItems].map((item, i) => (
                <div key={i} className="w-[350px] flex-shrink-0 px-4">
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card dark:bg-card">
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-cyan-500">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={industry.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border bg-card dark:bg-card p-6 text-center shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div
                      className={`inline-flex size-12 items-center justify-center rounded-lg bg-gradient-to-r ${industry.color} text-white mb-3 shadow-lg transition-all duration-300`}
                    >
                      <span className="font-bold text-sm">
                        {industry.name[0]}
                      </span>
                    </div>
                    <h3
                      className={`font-semibold text-lg mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${industry.color} group-hover:bg-clip-text group-hover:text-transparent`}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground px-4">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 border-y">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {Array.from({ length: testimonial.rating }, (_, i) => (
                            <Sparkles
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">
                          &ldquo;{testimonial.testimonial}&rdquo;
                        </p>
                        <div className="flex items-center mt-4">
                          <Image
                            src="/user.jpg"
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full mr-4 object-cover"
                          />
                          <div>
                            <p className="font-semibold text-base">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
            <Button
              asChild
              className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors gap-1"
            >
              <Link href="/blog">
                Read more
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.items.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <Image
                  src={`/abstract-geometric-shapes.png?key=1s6es&height=200&width=600&query=${encodeURIComponent(
                    "blog cover " + post.category
                  )}`}
                  alt={post.title}
                  width={600}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <div className="text-xs uppercase tracking-wide text-primary">
                    {post.category}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Globe2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Global Presence</h4>
                <p className="text-muted-foreground text-sm">
                  Serving clients across 50+ countries
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Operate Globally, Deliver Locally
              </h3>
              <p className="text-muted-foreground mt-2">
                Follow-the-sun coverage with multilingual teams across regions.
              </p>
              <div className="mt-6 flex gap-3">
                <Button
                  asChild
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
