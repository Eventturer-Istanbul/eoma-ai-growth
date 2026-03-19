import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPostBySlug } from "@/content/blog";
import Footer from "@/components/Footer";

const accentBarMap: Record<string, string> = {
  teal: "bg-[hsl(var(--color-teal))]",
  coral: "bg-[hsl(var(--color-coral))]",
  lavender: "bg-[hsl(var(--color-lavender))]",
  mint: "bg-[hsl(var(--color-mint))]",
  sky: "bg-[hsl(var(--color-sky))]",
  rose: "bg-[hsl(var(--color-rose))]",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6 bg-milky">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Accent bar */}
            <div
              className={`h-1 w-16 rounded-full mb-6 ${
                accentBarMap[post.coverColor] || accentBarMap.teal
              }`}
            />

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="font-medium text-foreground">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80
              prose-ul:my-4 prose-ul:pl-6
              prose-ol:my-4 prose-ol:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
