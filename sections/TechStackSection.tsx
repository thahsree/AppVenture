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
    title: "Future-Proof Architecture", 
    desc: "Building adaptable, clean-code foundations that evolve with your business.", 
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
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Our Core <span className="text-gradient">Principles</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't follow trends. We set the standard for modern digital engineering 
            through rigorous architecture and obsessed craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ 
                scale: 1.02,
                translateY: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-0.5 rounded-[2rem] overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-500 will-change-transform"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />
              
              <div className="relative h-full bg-[#0d0d0d]/90 backdrop-blur-xl p-8 rounded-[1.9rem] flex flex-col z-10 border border-white/10 group-hover:border-white/20 transition-colors duration-500 h-full">
                {/* Icon Container */}
                {/* <div className="relative mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-white/5`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  Subtle Glow behind icon
                  <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10`} />
                </div> */}

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-medium mb-8 group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Interactive Indicator */}
                <div className="mt-auto flex items-center text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-primary transition-colors duration-300">
                  <span className="mr-2">Innovation Driven</span>
                  <div className="h-px w-8 bg-gray-800 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                </div>

                {/* Decorative floating icon */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-150 transition-all duration-700 -rotate-12 pointer-events-none">
                  <item.icon className="w-40 h-40 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
