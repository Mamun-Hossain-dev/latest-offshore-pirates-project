import { notFound } from "next/navigation";
import { fetchBlogBySlug, fetchBlogs } from "@/app/_lib/blogs";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowUpRight, BookOpen } from "lucide-react";
import { TableOfContents } from "@/app/_components/table-of-contents";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogBySlug(params.slug).catch(() => notFound());
  const relatedPosts = await fetchBlogs({ limit: 2 });

  const headings =
    Array.isArray(post.toc) && post.toc.length > 0
      ? post.toc.map((item: string) => ({
          id: item.toLowerCase().replace(/\s+/g, "-"),
          text: item,
        }))
      : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-indigo-950 dark:to-violet-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-cyan-900/40"></div>
        <div className="absolute inset-0">
          {post.hero?.fileName && (
            <Image
              src={`/images/${post.hero.fileName}`}
              alt={post.hero.alt || post.seo.title || "Blog post hero image"}
              fill
              className="object-cover opacity-20"
              priority
            />
          )}
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {post.seo.title ?? post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-100 text-lg">
              <div className="flex items-center gap-2">
                <User className="size-5" />
                <span className="font-medium">
                  {post.byline?.author || "Offshore Pirates Editorial"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5" />
                <span>
                  {post.byline?.date
                    ? new Date(post.byline.date).toLocaleDateString("en-US", {
                        dateStyle: "long",
                      })
                    : "Date unavailable"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="size-5" />
                <span>{post.byline?.readTime ?? 5} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.seo.description && (
                  <p className="text-lg leading-relaxed mb-6">
                    {post.seo.description}
                  </p>
                )}

                {/* Render image suggestions if available */}
                {Array.isArray(post.imageSuggestions) &&
                  post.imageSuggestions.map((img, i) => {
                    const [width, height] = img.recommendedSize
                      ? img.recommendedSize.split("x").map(Number)
                      : [1200, 800];

                    return (
                      <div key={i} className="my-12">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <Image
                            src={`/images/${post.slug}-${img.slot}.jpg`}
                            alt={img.prompt || post.seo.title}
                            width={width}
                            height={height}
                            className="w-full h-auto"
                          />
                        </div>
                        {img.prompt && (
                          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                            {img.prompt}
                          </p>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </article>

          {/* Sidebar TOC */}
          {headings.length > 0 && (
            <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50">
                <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-4">
                  Table of Contents
                </h3>
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
        </div>

        {/* Related Articles */}
        {relatedPosts?.items?.length > 0 && (
          <div className="mt-20 pt-16 border-t border-indigo-200/50 dark:border-indigo-800/50">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.items
                .filter((p) => p.slug !== post.slug)
                .map((p) => {
                  const [w, h] = p.cover?.recommendedSize
                    ? p.cover.recommendedSize.split("x").map(Number)
                    : [600, 400];

                  return (
                    <Link key={p.slug} href={`/blog/${p.slug}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                        <div className="relative overflow-hidden">
                          {p.cover?.fileName && (
                            <Image
                              src={`/images/${p.cover.fileName}`}
                              alt={p.cover.alt || p.title}
                              width={w}
                              height={h}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-start justify-between text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            <span className="line-clamp-2">{p.title}</span>
                            <ArrowUpRight className="size-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-2" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}