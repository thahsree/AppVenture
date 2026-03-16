"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: "custom-software",
    title: "Why modern businesses need custom software",
    category: "Technology",
    date: "March 15, 2026",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    excerpt: "Off-the-shelf solutions can only take you so far. Discover how bespoke engineering gives your business an unfair advantage.",
  },
  {
    id: "scalable-saas",
    title: "Building scalable SaaS products from zero to one",
    category: "Architecture",
    date: "March 02, 2026",
    author: "Jordan Smith",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "A deep dive into the microservices setup and cloud infrastructure required to support massive simultaneous user growth.",
  },
  {
    id: "web-performance",
    title: "Web performance optimization: Core Web Vitals",
    category: "Development",
    date: "February 18, 2026",
    author: "Taylor Reed",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    excerpt: "Learn how to achieve a perfect Lighthouse score using Next.js, image optimization, and dynamic rendering strategies.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10" />
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Insights & News
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Engineering <span className="text-gradient">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Discover our latest thoughts on software architecture, design patterns, and industry trends.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-accent/50 transition-colors">
                    <div className="relative aspect-video overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-black text-xs font-bold rounded-md z-10">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-accent text-sm font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
