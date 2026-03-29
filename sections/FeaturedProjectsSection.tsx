"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive analytics dashboard for financial institutions to track transactions in real-time.",
    link: "/projects/fintech",
    tags: ["Real-time Architecture", "Financial Data", "Scalable Systems"]
  },
  {
    title: "HealthConnect App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Telemedicine application connecting patients with healthcare providers securely.",
    link: "/projects/health-connect",
    tags: ["Mobile Engineering", "Encrypted Data", "API Integration"]
  },
  {
    title: "Apex E-Commerce",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    description: "High-conversion modern storefront built with a modern API-driven architecture.",
    link: "/projects/apex",
    tags: ["E-commerce", "Performance Art", "Scalability"]
  },
  {
    title: "AI Copywriter Pro",
    category: "AI Solution",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Generative AI writing tool to accelerate content marketing workflows.",
    link: "/projects/ai-copy",
    tags: ["Intelligent Systems", "Automation", "Workflow Flow"]
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-xs mb-4"
            >
              <span className="w-10 h-px bg-primary"></span>
              <span>Case Studies</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Featured <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              We don't just build software; we engineer digital experiences that drive growth, 
              efficiency, and global impact.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="group flex items-center space-x-3 text-white font-medium text-lg hover:text-primary transition-colors"
            >
              <span>Explore full portfolio</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group ${index % 2 !== 0 ? 'md:mt-12' : ''} will-change-transform`}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] glass-card border-white/5 shadow-2xl">
                {/* Image layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2 flex items-center">
                      <span className="w-4 h-px bg-accent mr-2"></span>
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-2 max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.description}
                  </p>

                  <Link 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-white font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Corner detail */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
