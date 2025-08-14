"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, BLOG_CATEGORIES } from "@/app/_lib/blogs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListPage() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<string>("All");
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 dark:from-indigo-950 dark:via-purple-950 dark:to-violet-950">
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20" />
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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
              Insights & Expertise
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl mx-auto">
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
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 size-5" />
                <Input
                  placeholder="Search insights and articles..."
                  value={q}
                  onChange={(e) => {
                    setPage(1);
                    setQ(e.target.value);
                  }}
                  className="pl-10 h-12 border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {["All", ...BLOG_CATEGORIES].map((c) => (
                  <Badge
                    key={c}
                    variant={c === category ? "default" : "secondary"}
                    className={`cursor-pointer whitespace-nowrap px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                      c === category
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "bg-white/70 text-indigo-700 hover:bg-indigo-50 border-indigo-200"
                    }`}
                    onClick={() => {
                      setPage(1);
                      setCategory(c);
                    }}
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {items.map((post, index) => (
            <Card
              key={post.slug}
              className="group overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={`/abstract-geometric-shapes.png?height=240&width=400&query=${encodeURIComponent(
                    "modern blog " + post.category
                  )}`}
                  alt={post.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <Badge
                  className={`mb-3 w-fit text-xs font-semibold px-3 py-1 ${
                    index % 3 === 0
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                      : index % 3 === 1
                      ? "bg-gradient-to-r from-purple-500 to-violet-500"
                      : "bg-gradient-to-r from-violet-500 to-indigo-500"
                  } text-white`}
                >
                  {post.category}
                </Badge>
                <CardTitle className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
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
            variant="outline"
            disabled={page === 1 || isFetching}
            onClick={() => setPage((p) => p - 1)}
            className="px-8 py-3 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 disabled:opacity-50 font-semibold rounded-xl"
          >
            Previous
          </Button>
          <div className="flex items-center px-4 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-xl font-semibold text-indigo-700 dark:text-indigo-300">
            Page {page}
          </div>
          <Button
            variant="outline"
            disabled={!canNext || isFetching}
            onClick={() => setPage((p) => p + 1)}
            className="px-8 py-3 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 disabled:opacity-50 font-semibold rounded-xl"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
