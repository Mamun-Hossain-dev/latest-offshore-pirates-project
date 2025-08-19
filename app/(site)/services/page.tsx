"use client";

import Link from "next/link";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "@/app/_lib/services";
import { ServiceCard } from "@/app/_components/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Grid3X3, List } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const limit = 9; // Fetch all 9 services

  const { data, isLoading } = useQuery({
    queryKey: ["services", { limit, q: searchQuery }],
    queryFn: () => fetchServices({ limit }),
  });

  const items = data?.items ?? [];

  const filteredItems = items.filter(
    (item) =>
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[120%]">
              <span className="block">Comprehensive</span>

              <span className="block bg-gradient-to-r from-cyan-300 to-purple-100 bg-clip-text text-transparent">
                BPO Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              From customer support to finance operations, we deliver scalable
              solutions that drive results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "24/7 Support",
                "Global Coverage",
                "Cost Effective",
                "Quality Assured",
              ].map((feature, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 px-4 py-2"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="sticky top-[56px] z-30 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Tabs removed as categories are no longer used */}

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-white text-cyan-700 px-6 py-3 rounded-full hover:bg-cyan-50 transition-colors"
              >
                <Grid3X3 className="size-4" />
              </Button>
              <Button
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-white text-cyan-700 px-6 py-3 rounded-full hover:bg-cyan-50 transition-colors"
              >
                <List className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="size-6 mr-3 animate-spin" />
              <span className="text-lg">Loading services...</span>
            </div>
          ) : (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold">All Services</h2>
                  <p className="text-muted-foreground">
                    {filteredItems.length} service
                    {filteredItems.length !== 1 ? "s" : ""} found
                  </p>
                </div>
                {searchQuery && (
                  <Badge variant="outline" className="px-3 py-1">
                    Searching: &quot;{searchQuery}&quot;
                  </Badge>
                )}
              </div>

              {/* Services Grid/List */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    : "space-y-6"
                }
              >
                {filteredItems.map((svc, index) => (
                  <motion.div
                    key={svc.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard service={svc} viewMode={viewMode} />
                  </motion.div>
                ))}
              </div>

              {/* Load More section removed as all services are loaded at once */}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don&apos;t See What You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We create custom solutions tailored to your specific business
              requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyan-700 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <Link href="/contact">Discuss Custom Solution</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-cyan-400 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
