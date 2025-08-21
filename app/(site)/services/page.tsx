"use client";

import type React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "@/app/_lib/services";
import { ServiceCard } from "@/app/_components/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Search, Grid3X3, List } from "lucide-react";
import { motion } from "framer-motion";
import { useWeb3Forms } from "../../hooks/use-web3forms";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const limit = 9;

  const { data, isLoading } = useQuery({
    queryKey: ["services", { limit, q: searchQuery }],
    queryFn: () => fetchServices({ limit }),
  });

  const { submitForm, isSubmitting } = useWeb3Forms({
    accessKey: "e18e94ea-2ad7-4120-8b40-9a3f61a419a6",
  });

  const items = data?.items ?? [];

  const filteredItems = items.filter(
    (item) =>
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to object format expected by the hook
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const success = await submitForm(data);
    if (success) {
      (e.target as HTMLFormElement).reset();
    }
  };

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
            <div className="flex flex-wrap justify-center gap-4 items-center">
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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

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
            </>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Get Free Quote
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Tell us about your project and we'll provide a customized
                solution
              </p>
            </div>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  
                  <input type="hidden" name="form_name" value="quote" />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Quote Request from Offshore Pirates"
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium">
                      Service Interested In *
                    </Label>
                    <Input
                      id="service"
                      name="service"
                      required
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="e.g., Customer Support, Data Entry, Finance & Accounting"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="requirements"
                      className="text-sm font-medium"
                    >
                      Project Requirements *
                    </Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      required
                      rows={5}
                      className="border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      placeholder="Describe your project requirements, team size needed, timeline, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Quote Request...
                      </>
                    ) : (
                      "Get Free Quote"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
