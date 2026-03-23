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
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Author */}
            <div className="mt-6 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground">
                By{" "}
                <span className="font-medium text-foreground">
                  {post.author}
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-700 prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
