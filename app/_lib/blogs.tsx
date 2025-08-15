import blogsData from "./blogs.json";

export type BlogBlock = { type: "p" | "h2" | "img"; id?: string; text?: string; alt?: string }
export type Blog = {
  slug: string
  title: string
  summary: string // Changed from excerpt to summary
  category?: string // This might need to be derived from keywords or added to JSON
  date: string
  readTime: number // Added readTime
  cover: { // Added cover
    fileName: string;
    alt: string;
    recommendedSize: string;
  }
}

// Removed BLOG_CATEGORIES as it's not directly used with the new data structure

const ALL_BLOGS_LIST = blogsData.blogsList.list;
const ALL_BLOGS_SINGLE_PAGES = blogsData.singlePages;

export async function fetchBlogs({
  page = 1,
  limit = 6,
  q = "",
}: { page?: number; limit?: number; q?: string }) {
  let list = [...ALL_BLOGS_LIST]
  // The category filtering logic needs to be updated if categories are not directly in the blog item
  // For now, I will remove it as the provided JSON doesn't have a direct 'category' field for filtering
  // if (category !== "All") list = list.filter((b) => b.category === category)
  if (q) {
    const qq = q.toLowerCase()
    list = list.filter((b) => b.title.toLowerCase().includes(qq) || b.summary.toLowerCase().includes(qq)) // Changed excerpt to summary
  }
  const start = (page - 1) * limit
  const items = list.slice(start, start + limit)
  return { items, total: list.length }
}

export async function fetchBlogBySlug(slug: string) {
  const post = ALL_BLOGS_SINGLE_PAGES[slug]
  if (!post) throw new Error("Not found")
  return post
}