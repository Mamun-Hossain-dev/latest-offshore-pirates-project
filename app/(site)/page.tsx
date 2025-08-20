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
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
                <span
                  className="block opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                  }}
                >
                  Fearless Voices.
                </span>
                <span
                  className="block opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.5s",
                    animationFillMode: "forwards",
                  }}
                >
                  Relentless Results.
                </span>
                <span
                  className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent opacity-0 animate-fade-in-up font-extrabold"
                  style={{
                    animationDelay: "0.8s",
                    animationFillMode: "forwards",
                  }}
                >
                  Extraordinary Outsourcing
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-letter-fill"
                style={{
                  animationDelay: "1.4s",
                  animationFillMode: "forwards",
                }}
              >
                Scale your operations with offshore talent that delivers
                on-demand performance across support, finance, and operations.
              </p>

              <div
                className="flex flex-col sm:flex-row justify-center gap-6 mb-16 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "2s", animationFillMode: "forwards" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <Link href="/services">
                    Get started
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-transparent"
                >
                  <Link href="/contact">
                    <MessageSquare className="mr-2 size-5" />
                    Learn more
                  </Link>
                </Button>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "2.6s",
                  animationFillMode: "forwards",
                }}
              >
                {[
                  { number: "24/7", label: "Support Coverage" },
                  { number: "70%", label: "Cost Reduction" },
                  { number: "100%", label: "Quality Assurance" },
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to scale your operations and
              drive measurable results
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {top3.map((svc, index) => (
              <div
                key={svc.slug}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
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
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We combine global talent with local expertise to deliver
              exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="size-5 rotate-180 text-cyan-600" />
            </button>

            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="size-5 text-cyan-600" />
            </button>

            {/* Slider container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex animate-auto-scroll hover:pause">
                {[...whyChooseUsItems, ...whyChooseUsItems].map((item, i) => (
                  <div key={i} className="flex-[0_0_350px] px-4">
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card dark:bg-card hover:scale-105">
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
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/20">
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
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
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

      <section className="border-t bg-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                Operate Globally, Deliver Locally
              </h3>
              <p className="text-muted-foreground mt-2">
                Follow-the-sun coverage with multilingual teams across regions.
              </p>
              <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
                <Button
                  asChild
                  className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
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

const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes letter-fill {
  0% {
    opacity: 0;
    background-size: 0% 100%;
  }
  50% {
    opacity: 1;
    background-size: 100% 100%;
  }
  100% {
    opacity: 1;
    background-size: 100% 100%;
  }
}

/* Added auto-scrolling animation for the slider */
@keyframes auto-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-letter-fill {
  background: linear-gradient(90deg, #0891b2 0%, #3b82f6 100%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: letter-fill 2s ease-out forwards;
}

/* Added smooth auto-scroll animation with pause on hover */
.animate-auto-scroll {
  animation: auto-scroll 30s linear infinite;
}

.animate-auto-scroll:hover,
.pause {
  animation-play-state: paused;
}
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
