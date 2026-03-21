export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  coverColor: string;
  content: string;
}

// Import all posts

// Export ordered by date (newest first)
export const blogPosts: BlogPost[] = [
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter((p) => p.category === category);
