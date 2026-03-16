"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive analytics dashboard for financial institutions to track transactions in real-time.",
  },
  {
    title: "HealthConnect App",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Telemedicine application connecting patients with healthcare providers securely.",
  },
  {
    title: "Apex E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    description: "High-conversion modern storefront built with Next.js and Headless CMS.",
  },
  {
    title: "AI Copywriter Pro",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Generative AI writing tool to accelerate content marketing workflows.",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-medium mb-4"
            >
              Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Featured Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Explore our recent projects and see how we leverage technology to solve complex problems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card aspect-video mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
