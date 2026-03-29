"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Layout, ShieldCheck, Zap } from "lucide-react";

const stack = [
  { 
    title: "Performance First", 
    desc: "Optimized for speed. Every millisecond counts toward your conversion.", 
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30"
  },
  { 
    title: "Scale Without Limits", 
    desc: "Building for 100 or 1,000,000 users with same reliability.", 
    icon: Layers,
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-indigo-500/30"
  },
  { 
    title: "Fortified Security", 
    desc: "Enterprise-grade protection against modern digital threats.", 
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-teal-500/30"
  },
  { 
    title: "Global Resilience", 
    desc: "Edge-first infrastructure for low-latency worldwide delivery.", 
    icon: Globe,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30"
  },
  { 
    title: "Intelligent Systems", 
    desc: "Integrating AI & automation to streamline complex workflows.", 
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30"
  },
  { 
    title: "Experience Driven", 
    desc: "Merging elite engineering with human-centered product design.", 
    icon: Layout,
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/30"
  },
];

export default function TechStackSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Engineered for Excellence</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Our Core <span className="text-gradient">Principles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't follow trends. We set the standard for modern digital engineering 
            through rigorous architecture and obsessed craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group p-8 rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300 text-left relative overflow-hidden will-change-transform`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              
              {/* Pattern Background */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-32 h-32 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
