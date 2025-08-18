import { getBlogPostBySlug, getAllBlogPosts } from "../../../_lib/blogs";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, ShareIcon, BookmarkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogCard } from "../../../_components/blog-card";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-cyan-100">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-white/30">
                  <AvatarImage
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                  />
                  <AvatarFallback className="bg-white/20 text-white">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-cyan-200">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-8 p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-cyan-200 dark:border-cyan-800">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-cyan-50 dark:hover:bg-cyan-950 bg-transparent"
                >
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-cyan-50 dark:hover:bg-cyan-950 bg-transparent"
                >
                  <ShareIcon className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-cyan-200 dark:border-cyan-800">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-cyan-600 dark:prose-a:text-cyan-400"
              />
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Articles
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your business operations with our proven BPO solutions.
            Let's discuss how we can help you achieve your goals.
          </p>
          <Button className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
