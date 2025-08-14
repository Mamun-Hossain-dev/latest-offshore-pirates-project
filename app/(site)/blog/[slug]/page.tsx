import { notFound } from "next/navigation";
import { fetchBlogBySlug, fetchBlogs } from "@/app/_lib/blogs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowUpRight, BookOpen } from "lucide-react";
import { TableOfContents } from "@/app/_components/table-of-contents";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogBySlug(params.slug).catch(() => notFound());
  const relatedPosts = await fetchBlogs({ category: post.category, limit: 2 });

  const headings = post.content
    .filter((block) => block.type === "h2")
    .map((block) => ({ id: block.id!, text: block.text! }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 dark:from-indigo-950 dark:via-purple-950 dark:to-violet-950">
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/abstract-geometric-pattern.png"
            alt="Abstract background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-indigo-100 text-lg">
              <div className="flex items-center gap-3">
                <User className="size-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    dateStyle: "long",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="size-5" />
                <span>{Math.ceil(post.content.length / 3)} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-indigo-900 dark:prose-headings:text-indigo-100 prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline">
                {post.content.map((block, i) => {
                  switch (block.type) {
                    case "h2":
                      return (
                        <h2
                          key={i}
                          id={block.id}
                          className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mt-12 mb-6 first:mt-0"
                        >
                          {block.text}
                        </h2>
                      );
                    case "p":
                      return (
                        <p key={i} className="text-lg leading-relaxed mb-6">
                          {block.text}
                        </p>
                      );
                    case "img":
                      return (
                        <div key={i} className="my-12">
                          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                              src="/blog-content-illustration.png"
                              alt={block.alt || "Blog image"}
                              width={800}
                              height={450}
                              className="w-full h-auto"
                            />
                          </div>
                          {block.alt && (
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                              {block.alt}
                            </p>
                          )}
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-200/50 dark:border-indigo-800/50">
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-4">
                Table of Contents
              </h3>
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-16 border-t border-indigo-200/50 dark:border-indigo-800/50">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.items
              .filter((p) => p.slug !== post.slug)
              .map((p, index) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                    <div
                      className={`h-2 bg-gradient-to-r ${
                        index % 2 === 0
                          ? "from-indigo-500 to-purple-500"
                          : "from-purple-500 to-violet-500"
                      }`}
                    ></div>
                    <CardHeader className="p-6">
                      <Badge
                        className={`mb-3 w-fit text-xs font-semibold px-3 py-1 ${
                          index % 2 === 0
                            ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                            : "bg-gradient-to-r from-purple-500 to-violet-500"
                        } text-white`}
                      >
                        {p.category}
                      </Badge>
                      <CardTitle className="flex items-start justify-between text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <span className="line-clamp-2">{p.title}</span>
                        <ArrowUpRight className="size-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-2" />
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
