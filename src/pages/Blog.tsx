import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/content/blog";
import Footer from "@/components/Footer";

const accentMap: Record<string, string> = {
  teal: "bg-[hsl(var(--color-teal))]",
  coral: "bg-[hsl(var(--color-coral))]",
  lavender: "bg-[hsl(var(--color-lavender))]",
  mint: "bg-[hsl(var(--color-mint))]",
  sky: "bg-[hsl(var(--color-sky))]",
  rose: "bg-[hsl(var(--color-rose))]",
};

const accentTextMap: Record<string, string> = {
  teal: "text-[hsl(var(--color-teal))]",
  coral: "text-[hsl(var(--color-coral))]",
  lavender: "text-[hsl(var(--color-lavender))]",
  mint: "text-[hsl(var(--color-mint))]",
  sky: "text-[hsl(var(--color-sky))]",
  rose: "text-[hsl(var(--color-rose))]",
};

const Blog = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-milky">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Perspectives on AI marketing, automation strategy, and the future
              of growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <article className="flex flex-col md:flex-row gap-6 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5">
                    {/* Color accent */}
                    <div
                      className={`hidden md:block w-1 rounded-full self-stretch ${
                        accentMap[post.coverColor] || accentMap.teal
                      }`}
                    />

                    <div className="flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span
                          className={`font-medium ${
                            accentTextMap[post.coverColor] || accentTextMap.teal
                          }`}
                        >
                          {post.category}
                        </span>
                        <span>·</span>
                        <time>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.description}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                        Read more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">No posts yet. Stay tuned.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
