"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allProjects = [
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "SaaS Platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive analytics dashboard for financial institutions.",
  },
  {
    id: "healthconnect",
    title: "HealthConnect App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Telemedicine application connecting patients with healthcare providers securely.",
  },
  {
    id: "apex-ecommerce",
    title: "Apex E-Commerce",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    description: "High-conversion modern storefront built with a modern API-driven architecture.",
  },
  {
    id: "taskmaster",
    title: "TaskMaster Pro",
    category: "SaaS Platforms",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    description: "Enterprise project management software designed for distributed teams.",
  },
  {
    id: "travel-companion",
    title: "Travel Companion",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    description: "AI-powered trip planner and booking application with offline capabilities.",
  },
  {
    id: "creative-portfolio",
    title: "Studio X Portfolio",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description: "Award-winning immersive 3D portfolio for a creative agency.",
  },
];

const categories = ["All", "Websites", "Mobile Apps", "SaaS Platforms"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Digital Products That <span className="text-gradient">Deliver</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Explore our diverse portfolio of scalable apps, platforms, and websites.
          </motion.p>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer h-full"
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-primary/50 transition-colors">
                      <div className="relative aspect-video overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex-grow mb-6 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center space-x-2 text-primary text-sm font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
