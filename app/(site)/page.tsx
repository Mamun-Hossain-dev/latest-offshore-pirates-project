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
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TiltCard } from "@/app/_components/tilt-card";
import { WorldMap } from "@/app/_components/world-map";
import { Testimonials } from "@/app/_components/testimonials";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/app/_lib/blogs";
import { fetchServices } from "@/app/_lib/services";
import { useMemo } from "react";

export default function HomePage() {
  const { data: blogData } = useQuery({
    queryKey: ["blogs", { page: 1, limit: 3 }],
    queryFn: () => fetchBlogs({ page: 1, limit: 3 }),
  });

  const { data: serviceData } = useQuery({
    queryKey: ["services", { page: 1, limit: 3, category: "All" }],
    queryFn: () => fetchServices({ page: 1, limit: 3, category: "All" }),
  });

  // Pre-generate consistent positions for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: [49.95, 65.43, 17.61, 89.78, 5.51, 63.79][i] || 50, // Fixed positions
      top: [65.04, 97.96, 97.31, 85.49, 25.91, 89.06][i] || 50,
    }));
  }, []);

  const top3 = serviceData?.items ?? [];

  return (
    <div>
      {/* Enhanced Hero - Full Width */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image + Gradient + Motion */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/service-bank-office.jpg"
              alt="Bank Office"
              fill
              priority
              className="object-cover object-center"
              style={{ opacity: 0.3 }}
            />
          </div>

          {/* Primary Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80" />

          {/* Secondary Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Animated gradient motion */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: 0.2 }}
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Floating Elements - Fixed positions */}
          <div className="absolute inset-0">
            {floatingElements.map((element) => (
              <motion.div
                key={element.id}
                className="absolute w-2 h-2 bg-white/20 rounded-full backdrop-blur-sm"
                style={{
                  left: `${element.left}%`,
                  top: `${element.top}%`,
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + element.id * 0.3, // Deterministic duration
                  repeat: Number.POSITIVE_INFINITY,
                  delay: element.id * 0.3, // Deterministic delay
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm mb-6"
            >
              <Sparkles className="size-4" />
              Trusted by 500+ Global Brands
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              <span className="block">Fearless Voices.</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Relentless Results.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scale your operations with offshore talent that delivers on-demand
              performance across support, finance, and ops.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-xl shadow-indigo-500/25 px-8 py-6 text-lg"
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
                variant="outline"
                className="backdrop-blur border-white/30 text-white hover:bg-white/10 bg-white/5 px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 size-5" />
                  Get Consultation
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "500+", label: "Global Clients" },
                { number: "24/7", label: "Support Coverage" },
                { number: "40%", label: "Cost Reduction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Core Services - Container */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to scale your operations and
              drive measurable results
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {top3.map((svc, index) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard asChild>
                  <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/service-${svc.id}.jpg`}
                        alt={svc.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-indigo-600 shadow-lg">
                          {svc.icon}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold">
                        {svc.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {svc.shortDesc}
                      </p>
                      <div className="flex items-center justify-between">
                        <Button
                          asChild
                          className="bg-indigo-600 hover:bg-indigo-700"
                        >
                          <Link href={`/services/${svc.id}`}>
                            View Details
                            <ArrowRight className="ml-2 size-4" />
                          </Link>
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          Learn more →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us - Full Width Background */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-background dark:to-purple-950/20 border-y">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Offshore Pirates
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine global talent with local expertise to deliver
              exceptional results
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max pr-4 pb-4">
              {[
                {
                  title: "Omnichannel Expertise",
                  desc: "Voice, chat, email, social—unified experience across all touchpoints.",
                  icon: <Headphones className="size-6" />,
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Operational Rigor",
                  desc: "SLA-driven, KPI-obsessed delivery with measurable outcomes.",
                  icon: <Shield className="size-6" />,
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "Process Design",
                  desc: "Lean, automated, documented workflows that scale efficiently.",
                  icon: <Layers className="size-6" />,
                  gradient: "from-purple-500 to-violet-500",
                },
                {
                  title: "Financial Clarity",
                  desc: "Real-time dashboards and transparent reporting with lower TCO.",
                  icon: <Calculator className="size-6" />,
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: "Global Reach",
                  desc: "Follow-the-sun coverage with multilingual support teams.",
                  icon: <Globe2 className="size-6" />,
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  title: "Innovation First",
                  desc: "AI-powered micro-automations and cutting-edge solutions.",
                  icon: <Sparkles className="size-6" />,
                  gradient: "from-pink-500 to-rose-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="w-[350px] flex-shrink-0"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Served - Container */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", color: "from-red-500 to-pink-500" },
              { name: "Finance", color: "from-green-500 to-emerald-500" },
              { name: "Retail", color: "from-blue-500 to-cyan-500" },
              { name: "SaaS", color: "from-purple-500 to-violet-500" },
              { name: "Logistics", color: "from-orange-500 to-yellow-500" },
              { name: "Travel", color: "from-indigo-500 to-purple-500" },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl border bg-white dark:bg-gray-900 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div
                    className={`inline-flex size-12 items-center justify-center rounded-lg bg-gradient-to-r ${industry.color} text-white mb-3 shadow-lg`}
                  >
                    <span className="font-bold text-sm">
                      {industry.name[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Full Width Background */}
      <section className="bg-muted/40 border-y">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
            What Clients Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Latest Blogs - Container */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
            <Button asChild variant="ghost" className="gap-1">
              <Link href="/blog">
                Read more
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(blogData?.items ?? []).map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <Image
                  src={`/abstract-geometric-shapes.png?height=200&width=600&query=${encodeURIComponent(
                    "blog cover " + post.category
                  )}`}
                  alt={post.title}
                  width={600}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <div className="text-xs uppercase tracking-wide text-indigo-600">
                    {post.category}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button asChild size="sm" className="mt-4">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map + CTA - Full Width Background */}
      <section className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <WorldMap />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Operate Globally, Deliver Locally
              </h3>
              <p className="text-muted-foreground mt-2">
                Follow-the-sun coverage with multilingual teams across regions.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline">
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
