"use client"

import Link from "next/link"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchServices, SERVICE_CATEGORIES } from "@/app/_lib/services"
import { ServiceCard } from "@/app/_components/service-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Loader2, Search, Grid3X3, List } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesPage() {
  const [category, setCategory] = useState<string>("All")
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const limit = 6

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["services", { page, limit, category, q: searchQuery }],
    queryFn: () => fetchServices({ page, limit, category }),
    keepPreviousData: true,
  })

  const items = data?.items ?? []
  const total = data?.total ?? 0
  const canLoadMore = page * limit < total

  const filteredItems = items.filter(
    (item) =>
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <Image
            src="/services-hero-bg.jpg"
            alt="Services background"
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BPO Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              From customer support to finance operations, we deliver scalable solutions that drive results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["24/7 Support", "Global Coverage", "Cost Effective", "Quality Assured"].map((feature, i) => (
                <Badge key={i} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
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

            {/* Category Tabs */}
            <Tabs
              value={category}
              onValueChange={(v) => {
                setPage(1)
                setCategory(v)
              }}
              className="flex-1"
            >
              <TabsList className="w-full overflow-x-auto">
                {["All", ...SERVICE_CATEGORIES.slice(0, 5)].map((c) => (
                  <TabsTrigger key={c} value={c} className="whitespace-nowrap">
                    {c}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="size-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
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
                  <h2 className="text-2xl font-bold">{category === "All" ? "All Services" : category}</h2>
                  <p className="text-muted-foreground">
                    {filteredItems.length} service{filteredItems.length !== 1 ? "s" : ""} found
                  </p>
                </div>
                {searchQuery && (
                  <Badge variant="outline" className="px-3 py-1">
                    Searching: "{searchQuery}"
                  </Badge>
                )}
              </div>

              {/* Services Grid/List */}
              <div className={viewMode === "grid" ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3" : "space-y-6"}>
                {filteredItems.map((svc, index) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard service={svc} viewMode={viewMode} />
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center mt-12">
                {canLoadMore ? (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setPage((p) => p + 1)}
                    disabled={isFetching}
                    className="px-8"
                  >
                    {isFetching ? (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Load More Services"
                    )}
                  </Button>
                ) : filteredItems.length > 0 ? (
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">You've seen all services</p>
                    <Button asChild>
                      <Link href="/contact">Get Custom Solution</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <Search className="size-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No services found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setCategory("All")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See What You Need?</h2>
            <p className="text-xl text-white/90 mb-8">
              We create custom solutions tailored to your specific business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Discuss Custom Solution</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
