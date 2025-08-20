"use client";

import { useState } from "react";
import { getAllBlogPosts, getCategories } from "../../_lib/blogs";
import { BlogCard } from "../../_components/blog-card";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const allPosts = getAllBlogPosts();
  const categories = getCategories();

  // Filter posts based on search and category
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              BPO Insights & Expertise
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover industry-leading strategies, insights, and best practices
              from the world's most innovative BPO solutions provider.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-cyan-200 dark:border-cyan-800 focus:border-cyan-500 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-cyan-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCategoryChange("All Articles")}
              className={
                selectedCategory === "All Articles"
                  ? "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600"
                  : "hover:bg-cyan-50 dark:hover:bg-cyan-950 bg-transparent"
              }
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600"
                    : "hover:bg-cyan-50 dark:hover:bg-cyan-950 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts with Pagination */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {searchTerm || selectedCategory !== "All Articles"
                ? "Filtered"
                : "Latest"}{" "}
              Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Showing {currentPosts.length} of {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All Articles" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Current Page Posts */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} compact={true} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600"
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage === page
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0"
                          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600"
                      }
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600"
              >
                Next
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert insights delivered to your inbox and stay ahead of the
            BPO industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
