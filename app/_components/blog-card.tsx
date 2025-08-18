import Link from "next/link";
import type { BlogPost } from "../_lib/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
}

export function BlogCard({
  post,
  featured = false,
  compact = false,
}: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-cyan-50 dark:from-gray-900 dark:to-cyan-950 border-2 border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600 overflow-hidden transform hover:scale-[1.02]">
          <div className="relative h-64 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="text-center text-white p-8 relative z-10">
              <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">
                {post.category}
              </Badge>
              <h3 className="text-2xl font-bold mb-4 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-cyan-100 line-clamp-2">{post.description}</p>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (compact) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className="group hover:shadow-xl transition-all duration-500 bg-gradient-to-r from-white/80 to-cyan-50/80 dark:from-gray-900/80 dark:to-cyan-950/80 backdrop-blur-sm border-2 border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 transform hover:scale-[1.01] hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <Badge
                  variant="secondary"
                  className="mb-3 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800"
                >
                  {post.category}
                </Badge>
                <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-3 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {formattedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {post.readTime} min read
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/80 to-cyan-50/80 dark:from-gray-900/80 dark:to-cyan-950/80 backdrop-blur-sm border-2 border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 h-full transform hover:scale-[1.02] hover:-translate-y-2">
        <CardHeader className="pb-4 p-8">
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="secondary"
              className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800"
            >
              {post.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <ClockIcon className="h-3 w-3" />
              {post.readTime} min
            </div>
          </div>
          <h3 className="font-bold text-2xl mb-4 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-base leading-relaxed">
            {post.description}
          </p>
        </CardHeader>
        <CardContent className="pt-0 px-8 pb-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {formattedDate}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
