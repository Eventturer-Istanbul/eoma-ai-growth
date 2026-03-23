import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/content/blog";

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

const BlogSection = () => {
  const latestPosts = blogPosts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Insights
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            From the EOMA Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Perspectives on AI marketing, automation strategy, and the future of
            growth.
          </p>
        </motion.div>

        {/* Post Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
                  {/* Color accent bar */}
                  <div
                    className={`h-1 w-12 rounded-full mb-5 ${accentMap[post.coverColor] || accentMap.teal}`}
                  />

                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span
                      className={`font-medium ${
                        accentTextMap[post.coverColor] || accentTextMap.teal
                      }`}
                    >
                      {post.category}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        {blogPosts.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
