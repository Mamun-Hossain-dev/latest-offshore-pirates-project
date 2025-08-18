"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

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
      icon: Shield,
      title: "Fearless Commitment",
      description:
        "No challenge is too complex, no client too niche. We deliver customized, scalable BPO solutions for businesses of all sizes, industries, and geographies.",
    },
    {
      icon: Zap,
      title: "Relentless Innovation",
      description:
        "By integrating cutting-edge technology, data-driven insights, and process automation, we continuously enhance performance and exceed expectations.",
    },
    {
      icon: Target,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-950 relative">
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              The Global Crew You've Been Searching For
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              We're not just another outsourcing company — we are a
              multi-international BPO powerhouse dedicated to transforming how
              businesses worldwide achieve operational excellence and
              sustainable growth.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-700 hover:bg-cyan-50"
            >
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto relative z-10">
        {/* About Section */}
        <section className="px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                About Offshore Pirates
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded by experienced outsourcing veterans, Offshore Pirates
                has become a trusted leader in the global BPO industry,
                delivering end-to-end business process outsourcing solutions
                tailored to your unique needs. We don't just handle tasks — we
                partner with you to unlock new levels of efficiency, customer
                satisfaction, and profitability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Multi-Industry Expertise
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-200 dark:border-cyan-800"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Offshore Pirates?
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Benefits Section */}
        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-200 dark:border-cyan-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <TrendingUp className="h-6 w-6 text-cyan-600" />
                  SEO-Driven Strategies for Maximum Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                  In today's digital world, visibility is everything. That's why
                  every process, communication, and marketing effort at Offshore
                  Pirates is built with SEO in mind.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <Accordion
              type="multiple"
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg border border-cyan-200 dark:border-cyan-800"
            >
              <AccordionItem value="fearless">
                <AccordionTrigger className="text-cyan-700 dark:text-cyan-300">
                  Fearless Commitment
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  We do hard things—consistently, transparently, and with grit.
                  No challenge is too complex for our dedicated team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="innovation">
                <AccordionTrigger className="text-cyan-700 dark:text-cyan-300">
                  Relentless Innovation
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  We automate, optimize, and continuously improve through
                  cutting-edge technology and data-driven insights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="excellence">
                <AccordionTrigger className="text-cyan-700 dark:text-cyan-300">
                  Service Excellence
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  We deliver measurable outcomes and memorable experiences that
                  exceed expectations and fuel growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="border-y border-cyan-200/50 dark:border-cyan-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <div className="px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="h-16 w-16 text-cyan-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Global Reach, Local Excellence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                We operate from multiple regions across continents to provide
                true follow-the-sun support, ensuring your business never
                sleeps.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="px-4 md:px-6 py-12 pb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Journey
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-600 to-blue-300 rounded-full" />
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-white dark:border-gray-900 shadow-lg" />
                    <div>
                      <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">
                        {item.year}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-6 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Join the Crew That Never Misses
                </h3>
                <p className="text-cyan-100 mb-6 text-lg">
                  When you partner with Offshore Pirates, you gain a strategic
                  offshore partner committed to your long-term success. We bring
                  together world-class talent, innovative solutions, and a
                  client-first mindset.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-cyan-700 hover:bg-cyan-50"
                >
                  Start Your Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
