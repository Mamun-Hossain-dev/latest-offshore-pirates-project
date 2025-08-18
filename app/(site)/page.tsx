"use client";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ServiceCard } from "@/app/_components/service-card";
import { getAllBlogPosts } from "@/app/_lib/blog";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
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

  const [latestBlogs, setLatestBlogs] = useState<any[]>([]);

  useEffect(() => {
    const blogs = getAllBlogPosts().slice(0, 3); // Get latest 3 blogs
    setLatestBlogs(blogs);
  }, []);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/40 to-blue-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/95 via-blue-950/70 to-slate-900/50" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
          </div>

          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 500">
              <path
                d="M150,200 Q200,180 250,200 T350,220 Q400,200 450,210 T550,200 Q600,190 650,200 T750,210"
                stroke="url(#worldGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M100,250 Q150,230 200,250 T300,270 Q350,250 400,260 T500,250 Q550,240 600,250 T700,260"
                stroke="url(#worldGradient)"
                strokeWidth="3"
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

        <div className="container mx-auto px-4 md:px-6 text-center relative z-30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-8 drop-shadow-2xl">
              <span className="block animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-banner-title">
                Fearless Voices.
              </span>
              <br />
              <span
                className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-transparent animate-wave-text animate-banner-subtitle"
                style={{ animationDelay: "2s" }}
              >
                Relentless Results.
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "3s" }}
            >
              Scale your operations with offshore talent that delivers on-demand
              performance across support, finance, and ops.
            </p>

            <div
              className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up"
              style={{ animationDelay: "1.5s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
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
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 size-5" />
                  Get Consultation
                </Link>
              </Button>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "2s" }}
            >
              {[
                { number: "24/7", label: "Support Coverage" },
                { number: "70%", label: "Cost Reduction" },
                { number: "100%", label: "Quality Assurance" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-300/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-300 to-blue-300 rounded-full mt-2 shadow-lg shadow-cyan-300/60 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30 dark:from-slate-900 dark:via-cyan-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to scale your operations and
              drive measurable results
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {top3.map((svc, index) => (
              <div
                key={svc.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard service={svc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 border-y">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Why Choose Offshore Pirates
            </h2>
            <p
              className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We combine global talent with local expertise to deliver
              exceptional results
            </p>
          </div>

          <div className="group relative w-full overflow-hidden">
            <div className="flex animate-fast-scroll group-hover:pause">
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50 dark:from-cyan-950/20 dark:via-slate-900 dark:to-blue-950/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Latest Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with industry trends and expert insights
              </p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Link href="/blog">
                View All Articles
                <ChevronRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestBlogs.map((post, index) => (
              <Card
                key={post.slug}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">
                          {post.category[0]}
                        </span>
                      </div>
                      <div className="text-xs uppercase tracking-wide text-cyan-600 dark:text-cyan-400 font-semibold">
                        {post.category}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300 text-lg">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="size-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
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
              <div className="mt-6 flex flex-col md:flex-row gap-3">
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
