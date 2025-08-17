"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/app/_lib/blogs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListPage() {
  const [page, setPage] = useState(1);
  const [category] = useState<string>("All");
  const [q, setQ] = useState("");

  const limit = 6;
  const { data, isFetching } = useQuery({
    queryKey: ["blogs", { page, limit, category, q }],
    queryFn: () => fetchBlogs({ page, limit, category, q }),
    keepPreviousData: true,
  });

  const items = data?.items ?? [];
  const total = data?.total ?? 0;
  const canNext = page * limit < total;

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-cyan-900/20" />
        <div className="absolute inset-0">
          <Image
            src="/abstract-world-map.png"
            alt="Blog background"
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Insights & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Discover cutting-edge insights from our global team of experts
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <User className="size-5" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 size-5" />
                <Input
                  placeholder="Search insights and articles..."
                  value={q}
                  onChange={(e) => {
                    setPage(1);
                    setQ(e.target.value);
                  }}
                  className="pl-10 h-12 border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500 w-full"
                />
              </div>
              {/* Category filter removed as categories are not directly available in blogs.json list items */}
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {items.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/service-content-moderation.jpg"
                  alt={post.cover.alt}
                  width={600} // Using thumbnail size
                  height={600} // Using thumbnail size
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                {/* Category badge removed as categories are not directly available in blogs.json list items */}
                <CardTitle className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 leading-relaxed">
                  {post.summary}
                </p>
                <Button
                  asChild
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors w-full"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-center gap-2"
                  >
                    Read Article
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-16">
          <Button
            disabled={page === 1 || isFetching}
            onClick={() => setPage((p) => p - 1)}
            className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
          >
            Previous
          </Button>
          <div className="flex items-center px-4 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-xl font-semibold text-cyan-700 dark:text-cyan-300">
            Page {page}
          </div>
          <Button
            disabled={!canNext || isFetching}
            onClick={() => setPage((p) => p + 1)}
            className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}