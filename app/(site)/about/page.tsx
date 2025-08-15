"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WorldMap } from "@/app/_components/world-map";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-indigo-950 dark:to-violet-950 relative">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container mx-auto relative z-10">
        <section className="container px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {"The Global Crew You’ve Been Searching For"}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We build resilient teams across time zones—aligned to your KPIs,
            embedded in your culture.
          </p>
        </section>

        <section className="container px-4 md:px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Our Values</h2>
          <Accordion type="multiple" className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-md border border-indigo-200 dark:border-indigo-800">
            <AccordionItem value="fearless">
              <AccordionTrigger>Fearless Commitment</AccordionTrigger>
              <AccordionContent>
                We do hard things—consistently, transparently, and with grit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="innovation">
              <AccordionTrigger>Relentless Innovation</AccordionTrigger>
              <AccordionContent>
                We automate, optimize, and continuously improve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="excellence">
              <AccordionTrigger>Service Excellence</AccordionTrigger>
              <AccordionContent>
                We deliver measurable outcomes and memorable experiences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="border-y border-indigo-200/50 dark:border-indigo-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <div className="container px-4 md:px-6 py-12 md:py-16 grid gap-8 lg:grid-cols-2 items-center">
            <WorldMap />
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Global Reach</h3>
              <p className="text-muted-foreground mt-2">
                We operate from multiple regions to provide true follow-the-sun
                support.
              </p>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Leadership Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Avery Brooks", "Jordan Lee", "Casey Morgan"].map((name) => (
              <Card key={name} className="overflow-hidden shadow-xl border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/leadership-portrait.png"
                  alt={`${name} headshot`}
                  width={400}
                  height={240}
                  className="w-full h-56 object-cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {name}
                    <Link href="#" aria-label={`LinkedIn of ${name}`}>
                      <Linkedin className="size-5 text-indigo-600" />
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Our Journey</h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-violet-300 rounded-full" />
            {[              {
                year: "2018",
                text: "Founded with a mission to scale support for modern brands.",
              },
              {
                year: "2020",
                text: "Expanded finance and back-office practices.",
              },
              {
                year: "2023",
                text: "Global delivery hubs launched across two continents.",
              },
              {
                year: "2025",
                text: "AI-first micro-automation suite introduced.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-3 rounded-full bg-violet-600" />
                  <div>
                    <div className="font-semibold">{item.year}</div>
                    <div className="text-muted-foreground">{item.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}